#!/usr/bin/env bash
# Build the Vite site and publish it to S3 + CloudFront.
# Requires AWS credentials (aws configure, or AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY).
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REGION="${AWS_REGION:-ap-south-1}"
STACK_NAME="${STACK_NAME:-orbusly-web}"
SITE_NAME="${SITE_NAME:-orbusly}"
DOMAIN_NAME="${DOMAIN_NAME:-}"
CERTIFICATE_ARN="${CERTIFICATE_ARN:-}"

if ! command -v aws >/dev/null 2>&1; then
	echo "The AWS CLI is not installed. Install it from https://aws.amazon.com/cli/ and run aws configure." >&2
	exit 1
fi

if ! aws sts get-caller-identity --region "$REGION" >/dev/null 2>&1; then
	echo "No AWS credentials found. Run aws configure, or export AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, and AWS_REGION." >&2
	exit 1
fi

if [[ -n "$DOMAIN_NAME" && -z "$CERTIFICATE_ARN" ]] || [[ -z "$DOMAIN_NAME" && -n "$CERTIFICATE_ARN" ]]; then
	echo "Set both DOMAIN_NAME and CERTIFICATE_ARN, or leave both empty to use the CloudFront domain." >&2
	exit 1
fi

cd "$ROOT"
npm run build

PARAMS=("SiteName=${SITE_NAME}")
if [[ -n "$DOMAIN_NAME" ]]; then
	PARAMS+=("DomainName=${DOMAIN_NAME}" "CertificateArn=${CERTIFICATE_ARN}")
fi

aws cloudformation deploy \
	--region "$REGION" \
	--stack-name "$STACK_NAME" \
	--template-file "$ROOT/infra/site.yml" \
	--no-fail-on-empty-changeset \
	--parameter-overrides "${PARAMS[@]}"

output_value() {
	aws cloudformation describe-stacks \
		--region "$REGION" \
		--stack-name "$STACK_NAME" \
		--query "Stacks[0].Outputs[?OutputKey=='${1}'].OutputValue" \
		--output text
}

BUCKET="$(output_value BucketName)"
DIST_ID="$(output_value DistributionId)"
SITE_URL="$(output_value SiteUrl)"
PUBLISH_DIR="$ROOT/dist/apps/web"

if [[ ! -f "$PUBLISH_DIR/index.html" ]]; then
	echo "Build output is missing at $PUBLISH_DIR" >&2
	exit 1
fi

# Upload everything, then rewrite cache headers on documents. A later
# size-only sync removes objects that the build no longer emits without
# putting the long-lived cache header back on index.html.
aws s3 sync "$PUBLISH_DIR" "s3://${BUCKET}" \
	--region "$REGION" \
	--cache-control "public,max-age=31536000,immutable"

aws s3 sync "$PUBLISH_DIR" "s3://${BUCKET}" \
	--region "$REGION" \
	--cache-control "public,max-age=0,must-revalidate" \
	--exclude "*" \
	--include "*.html" \
	--include "robots.txt" \
	--include "sitemap.xml" \
	--include "llms.txt"

aws s3 sync "$PUBLISH_DIR" "s3://${BUCKET}" \
	--region "$REGION" \
	--delete \
	--size-only

aws cloudfront create-invalidation \
	--distribution-id "$DIST_ID" \
	--paths "/*" >/dev/null

echo "Waiting for CloudFront distribution ${DIST_ID} to finish deploying..."
aws cloudfront wait distribution-deployed --id "$DIST_ID"

echo "Deployed: ${SITE_URL}"

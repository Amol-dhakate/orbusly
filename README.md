# orbusly
software comapny

## Deploy to AWS

The site is a static Vite app. `scripts/deploy-aws.sh` publishes the production build to a private S3 bucket in `ap-south-1` (Mumbai) and serves it over HTTPS with CloudFront. Client-side routes such as `/contact` fall back to `index.html`.

This environment cannot create the AWS resources until credentials for your account are available.

1. Install the [AWS CLI](https://aws.amazon.com/cli/) and configure a user that can create S3 buckets and CloudFront distributions: `aws configure`.
2. From the repository root, run `npm run deploy`.
3. The script prints the site URL. The first CloudFront deployment can take several minutes before that URL responds.

To serve `orbusly.com`, request an ACM certificate in **us-east-1**, then run:

```bash
DOMAIN_NAME=orbusly.com CERTIFICATE_ARN=arn:aws:acm:us-east-1:ACCOUNT:certificate/ID npm run deploy
```

Point the domain's DNS at the CloudFront domain shown in the stack output `DistributionDomainName`.

Pushes to `main` deploy from GitHub Actions after one of these secrets is set:

- `AWS_ROLE_ARN`, from a one-time `aws cloudformation deploy --template-file infra/github-oidc.yml --stack-name orbusly-github-oidc --capabilities CAPABILITY_NAMED_IAM --region ap-south-1`
- or `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`

If the GitHub OIDC provider already exists in the account, create the role in the IAM console instead of deploying `infra/github-oidc.yml` again.

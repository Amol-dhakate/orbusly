import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft } from 'lucide-react';
import Reveal from '@/components/Reveal';
import FramedImage from '@/components/FramedImage';
import Seo from '@/components/Seo';
import { posts } from '@/data/content';
import { formatDate } from '@/lib/format';

export default function BlogPostPage() {
	const { slug } = useParams();
	const post = posts.find((p) => p.slug === slug);

	if (!post) return <Navigate to="/blog" replace />;

	return (
		<>
			<Helmet>
				<title>{`${post.title} — Orbusly Solutions`}</title>
				<meta name="description" content={post.excerpt} />
			</Helmet>
			<Seo
				title={`${post.title} — Orbusly Solutions`}
				description={post.excerpt}
				url={`https://orbusly.com/blog/${post.slug}`}
				siteName="Orbusly Solutions Private Limited"
			/>

			<article className="py-12 md:py-16">
				<div className="container max-w-3xl">
					<Reveal>
						<Link
							to="/blog"
							className="inline-flex items-center gap-1.5 text-sm font-semibold text-azure hover:underline"
						>
							<ArrowLeft className="h-4 w-4" /> All insights
						</Link>
						<p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-azure">
							{post.category}
						</p>
						<h1 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-navy md:text-4xl">
							{post.title}
						</h1>
						<p className="mt-4 text-xs text-steel">
							{formatDate(post.date)} · {post.readTime} · Orbusly Insights Team
						</p>
					</Reveal>

					<Reveal delay={0.12}>
						<FramedImage src={post.image} alt={`${post.category} article: ${post.title}`} className="mt-10 aspect-[3/2]" />
					</Reveal>

					<Reveal delay={0.18}>
						<div className="mt-10 space-y-8">
							{post.body.map((section, i) => (
								<section key={i}>
									{section.heading && (
										<h2 className="font-display text-xl font-bold tracking-tight text-navy md:text-2xl">
											{section.heading}
										</h2>
									)}
									{section.paragraphs.map((para, j) => (
										<p
											key={j}
											className="mt-4 text-base leading-relaxed text-navy/80 first:mt-0"
										>
											{para}
										</p>
									))}
								</section>
							))}
						</div>
					</Reveal>

					<div className="mt-12 border-t border-border pt-8">
						<p className="text-sm text-steel">
							Written by the Orbusly Insights Team — engineers and architects working across AI,
							mobile, data, retail, healthcare, and enterprise platforms.
						</p>
						<Link
							to="/contact"
							className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-azure hover:underline"
						>
							Discuss this topic with our team
						</Link>
					</div>
				</div>
			</article>
		</>
	);
}

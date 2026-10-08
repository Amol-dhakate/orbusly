import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import FramedImage from '@/components/FramedImage';
import Seo from '@/components/Seo';
import { posts } from '@/data/content';
import { formatDate } from '@/lib/format';

export default function BlogPage() {
	const [featured, ...rest] = posts;

	return (
		<>
			<Helmet>
				<title>Insights Blog — AI, Software & Data Engineering | Orbusly Solutions</title>
				<meta
					name="description"
					content="Engineering insights from Orbusly Solutions on AI transformation, mobile apps at scale, modern data analytics, headless commerce, healthcare compliance, and enterprise integration."
				/>
			</Helmet>
			<Seo
				title="Insights Blog — AI, Software & Data Engineering | Orbusly Solutions"
				description="Engineering insights from Orbusly Solutions on AI transformation, mobile apps at scale, modern data analytics, headless commerce, healthcare compliance, and enterprise integration."
				url="https://orbusly.com/blog"
				siteName="Orbusly Solutions Private Limited"
			/>

			<PageHero
				index="03"
				label="Insights"
				title="Notes from the engineering floor"
				description="Field-tested thinking on AI, software delivery, data platforms, and the industries we build for — written by the people who ship the work."
			/>

			<section className="py-14 md:py-16">
				<div className="container">
					<Reveal>
						<Link to={`/blog/${featured.slug}`} className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
							<FramedImage src={featured.image} alt={`Featured article: ${featured.title}`} broken className="aspect-[3/2]" />
							<div>
								<p className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">
									Featured · {featured.category}
								</p>
								<h2 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight text-navy transition-colors group-hover:text-azure md:text-3xl">
									{featured.title}
								</h2>
								<p className="mt-4 text-sm leading-relaxed text-steel md:text-base">{featured.excerpt}</p>
								<p className="mt-4 text-xs text-steel">
									{formatDate(featured.date)} · {featured.readTime}
								</p>
							</div>
						</Link>
					</Reveal>

					<div className="mt-14 grid gap-10 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
						{rest.map((p, i) => (
							<Reveal key={p.slug} delay={i * 0.06}>
								<Link to={`/blog/${p.slug}`} className="group block">
									<FramedImage src={p.image} alt={`${p.category} article: ${p.title}`} className="aspect-[3/2]" />
									<p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-azure">
										{p.category}
									</p>
									<h3 className="mt-2 font-display text-lg font-semibold leading-snug text-navy transition-colors group-hover:text-azure">
										{p.title}
									</h3>
									<p className="mt-2 line-clamp-2 text-sm leading-relaxed text-steel">{p.excerpt}</p>
									<p className="mt-3 text-xs text-steel">
										{formatDate(p.date)} · {p.readTime}
									</p>
								</Link>
							</Reveal>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { Button } from '@/components/ui/button';
import Seo from '@/components/Seo';
import { services } from '@/data/content';

export default function ServicesPage() {
	return (
		<>
			<Helmet>
				<title>Software Development Services & Business Technology Solutions | Orbusly</title>
				<meta
					name="description"
					content="Orbusly Solutions delivers AI transformation, web and mobile app development, data analytics, retail and e-commerce software, healthcare platforms, and enterprise software services from Indore, India."
				/>
			</Helmet>
			<Seo
				title="Software Development Services & Business Technology Solutions | Orbusly"
				description="Orbusly Solutions delivers AI transformation, web and mobile app development, data analytics, retail and e-commerce software, healthcare platforms, and enterprise software services from Indore, India."
				url="https://orbusly.com/services"
				siteName="Orbusly Solutions Private Limited"
			/>

			<PageHero
				index="01"
				label="Services"
				title="Software practices built around your outcome"
				description="Six specialized practices, one senior engineering standard. Every engagement is scoped to a measurable business result and delivered by the people who designed it."
			/>

			<section className="py-14 md:py-16">
				<div className="container divide-y divide-border border-t border-b border-border">
					{services.map((s, i) => (
						<Reveal key={s.slug} delay={0.04}>
							<article className="grid gap-6 py-10 md:grid-cols-12 md:gap-10">
								<div className="md:col-span-4">
									<span className="font-display text-sm font-semibold text-silver">
										{String(i + 1).padStart(2, '0')}
									</span>
									<div className="mt-2 flex items-center gap-3">
										<s.icon className="h-6 w-6 text-azure" strokeWidth={1.8} />
										<h2 className="font-display text-2xl font-bold tracking-tight text-navy">
											{s.title}
										</h2>
									</div>
									<p className="mt-2 text-sm font-medium text-azure">{s.tagline}</p>
								</div>
								<div className="md:col-span-5">
									<p className="text-sm leading-relaxed text-steel md:text-base">{s.description}</p>
								</div>
								<div className="md:col-span-3">
									<h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-steel">
										What we deliver
									</h3>
									<ul className="mt-3 space-y-2">
										{s.deliverables.map((d) => (
											<li key={d} className="flex items-start gap-2 text-sm text-navy">
												<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-azure" />
												{d}
											</li>
										))}
									</ul>
								</div>
							</article>
						</Reveal>
					))}
				</div>
			</section>

			<section className="bg-mist py-14">
				<div className="container flex flex-wrap items-center justify-between gap-6">
					<Reveal>
						<h2 className="max-w-lg font-display text-2xl font-bold tracking-tight text-navy md:text-3xl">
							Not sure which practice fits? Let&rsquo;s scope it together.
						</h2>
					</Reveal>
					<Reveal delay={0.1}>
						<Button asChild size="lg" className="bg-azure text-white hover:bg-azure/90">
							<Link to="/contact">
								Book a Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</Reveal>
				</div>
			</section>
		</>
	);
}

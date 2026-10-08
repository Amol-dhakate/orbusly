import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import FramedImage from '@/components/FramedImage';
import { Button } from '@/components/ui/button';
import Seo from '@/components/Seo';
import { caseStudies } from '@/data/content';
import { cn } from '@/lib/utils';

const publicCaseStudies = caseStudies.map((caseStudy) => ({
	...caseStudy,
	challenge: caseStudy.challenge
		.replace('Northwind', 'The retailer')
		.replace('CarePoint’s', 'The clinic network’s')
		.replace('Meridian’s', 'The logistics operator’s'),
	solution: caseStudy.solution.replace('Northwind', 'the retailer'),
	result: caseStudy.result.replace('Northwind', 'the retailer'),
}));

export default function CaseStudiesPage() {
	return (
		<>
			<Helmet>
				<title>Case Studies — Software Delivery Results | Orbusly Solutions</title>
				<meta
					name="description"
					content="Scoped 2026 software delivery case studies from Orbusly Solutions: a phased retail commerce rollout, a HIPAA-ready healthcare platform, and an enterprise data control tower with measurable results."
				/>
			</Helmet>
			<Seo
				title="Case Studies — Software Delivery Results | Orbusly Solutions"
				description="Scoped 2026 software delivery case studies from Orbusly Solutions: a phased retail commerce rollout, a HIPAA-ready healthcare platform, and an enterprise data control tower with measurable results."
				url="https://orbusly.com/case-studies"
				siteName="Orbusly Solutions Private Limited"
			/>

			<PageHero
				index="02"
				label="Case studies"
				title="Results from focused delivery"
				description="Each story reflects a clearly scoped delivery: the starting constraint, what we built, and the measurable result that followed."
			/>

			<section className="py-14 md:py-16">
				<div className="container space-y-16 md:space-y-20">
					{publicCaseStudies.map((cs, i) => (
						<article key={cs.id} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
							<Reveal className={cn(i % 2 === 1 && 'lg:order-2')}>
								<FramedImage
									src={cs.image}
									alt={`${cs.industry} case study: ${cs.title} — software delivery by Orbusly Solutions`}
									broken={i === 1}
									className="aspect-[3/2]"
								/> 
							</Reveal>
							<div className={cn(i % 2 === 1 && 'lg:order-1')}>
								<Reveal delay={0.08}>
									<p className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">
										{cs.industry}
									</p>
									<h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-navy md:text-3xl">
										{cs.title}
									</h2>
								</Reveal>
								<Reveal delay={0.14}>
									<dl className="mt-6 space-y-4">
										{[
											['Challenge', cs.challenge],
											['Solution', cs.solution],
											['Result', cs.result],
										].map(([label, text]) => (
											<div key={label}>
												<dt className="text-xs font-semibold uppercase tracking-[0.18em] text-steel">
													{label}
												</dt>
												<dd className="mt-1 text-sm leading-relaxed text-navy/80">{text}</dd>
											</div>
										))}
									</dl>
								</Reveal>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="bg-navy py-14">
				<div className="container flex flex-wrap items-center justify-between gap-6">
					<Reveal>
						<h2 className="max-w-lg font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
							Your project could be the next case study.
						</h2>
					</Reveal>
					<Reveal delay={0.1}>
						<Button asChild size="lg" className="bg-azure text-white hover:bg-azure/90">
							<Link to="/contact">
								Start the Conversation <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</Reveal>
				</div>
			</section>
		</>
	);
}

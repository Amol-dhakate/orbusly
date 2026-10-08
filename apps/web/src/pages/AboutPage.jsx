import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import FramedImage from '@/components/FramedImage';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { IMAGES, milestones, values } from '@/data/content';

const aboutStats = [
	{ value: 0, suffix: '', label: 'Products delivered' },
	{ value: 1, suffix: '', label: 'Office in Indore' },
	{ value: 2026, suffix: '', label: 'Year founded' },
];

export default function AboutPage() {
	return (
		<>
			<Helmet>
				<title>About Us — Software Engineering Company in Indore | Orbusly Solutions</title>
				<meta
					name="description"
					content="Orbusly Solutions Private Limited is a new software engineering company founded in 2026, building AI, web, mobile, data, retail, healthcare, and enterprise software from its office in Indore, India."
				/>
			</Helmet>
			<Seo
				title="About Us — Software Engineering Company in Indore | Orbusly Solutions"
				description="Orbusly Solutions Private Limited is a new software engineering company founded in 2026, building AI, web, mobile, data, retail, healthcare, and enterprise software from its office in Indore, India."
				url="https://orbusly.com/about"
				siteName="Orbusly Solutions Private Limited"
			/>

			<PageHero
				index="05"
				label="About us"
				title="A new engineering company, built in Indore"
				description="Orbusly Solutions Private Limited is a new software engineering company founded in 2026. We are building our first products and partnerships from our office in Indore, India."
			/>

			{/* Story */}
			<section className="py-14 md:py-16">
				<div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
					<div>
						<Reveal>
							<h2 className="font-display text-2xl font-bold tracking-tight text-navy md:text-3xl">
								Our story
							</h2>
						</Reveal>
						<Reveal delay={0.08}>
							<div className="mt-5 space-y-4 text-sm leading-relaxed text-steel md:text-base">
								<p>
									Orbusly began in 2026 with a small engineering team in Indore and a clear conviction:
									businesses deserve thoughtful software partners who care about outcomes, not just deliverables.
									We are at the beginning of that journey.
								</p>
								<p>
									Our focus spans AI transformation, web &amp; mobile applications, data &amp; analytics,
									retail and e-commerce software, healthcare platforms, and enterprise systems. We are
									building these capabilities from our one office in Indore, India.
								</p>
								<p>
									We are laying the foundations for how we want to work: direct collaboration, radical
									transparency, and systems designed to be maintained long after launch. From Indore,
									we are ready to build with clients wherever they are.
								</p>
							</div>
						</Reveal>
						<Reveal delay={0.16}>
							<div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-3">
								{aboutStats.map((s) => (
									<div key={s.label}>
										<p className="font-display text-2xl font-bold text-navy">
											<CountUp value={s.value} suffix={s.suffix} />
										</p>
										<p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-steel">
											{s.label}
										</p>
									</div>
								))}
							</div>
							<p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-steel">
								Corporate Identification Number (CIN): U62020MP2026PTC087291
							</p>
						</Reveal>
					</div>
					<Reveal delay={0.12}>
						<FramedImage
							src={IMAGES.team}
							alt="Orbusly Solutions engineers collaborating in the Indore office"
							broken
							className="aspect-[3/2]"
						/>
					</Reveal>
				</div>
			</section>

			{/* Principles */}
			<section className="bg-mist py-14 md:py-16">
				<div className="container">
					<Reveal>
						<h2 className="font-display text-2xl font-bold tracking-tight text-navy md:text-3xl">
							How we work
						</h2>
					</Reveal>
					<div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{values.map((v, i) => (
							<Reveal key={v.title} delay={i * 0.06}>
								<div className="border-t-2 border-azure pt-4">
									<span className="font-display text-sm font-bold text-silver">
										{String(i + 1).padStart(2, '0')}
									</span>
									<h3 className="mt-2 font-display text-base font-semibold text-navy">{v.title}</h3>
									<p className="mt-2 text-sm leading-relaxed text-steel">{v.description}</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* Milestones */}
			<section className="py-14 md:py-16">
				<div className="container">
					<Reveal>
						<h2 className="font-display text-2xl font-bold tracking-tight text-navy md:text-3xl">
							Milestones
						</h2>
					</Reveal>
					<div className="mt-8 border-t border-border">
						{milestones.map((m, i) => (
							<Reveal key={m.year} delay={i * 0.04}>
								<div className="grid gap-1 border-b border-border py-4 md:grid-cols-12 md:items-baseline md:gap-6">
									<span className="font-display text-lg font-bold text-azure md:col-span-2">{m.year}</span>
									<p className="text-sm leading-relaxed text-navy/80 md:col-span-10">{m.event}</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="bg-navy py-14">
				<div className="container flex flex-wrap items-center justify-between gap-6">
					<Reveal>
						<h2 className="max-w-lg font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
							Let&rsquo;s write the next milestone together.
						</h2>
					</Reveal>
					<Reveal delay={0.1}>
						<Button asChild size="lg" className="bg-azure text-white hover:bg-azure/90">
							<Link to="/contact">
								Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</Reveal>
				</div>
			</section>
		</>
	);
}

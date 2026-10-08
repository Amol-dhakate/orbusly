import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionMarker from '@/components/SectionMarker';
import FramedImage from '@/components/FramedImage';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { IMAGES, services, caseStudies, posts } from '@/data/content';
import { formatDate } from '@/lib/format';

export default function HomePage() {
	return (
		<>
			<Helmet>
				<title>Orbusly Solutions — AI, Software & Data Engineering Services in India</title>
				<meta
					name="description"
					content="Orbusly Solutions Private Limited is a software engineering company in Indore, India delivering AI transformation, web and mobile development, data analytics, retail, healthcare, and enterprise software to businesses globally."
				/>
				<meta
					name="keywords"
					content="Orbusly Solutions, software solutions, business technology services, web development, digital transformation, AI transformation, data analytics, enterprise software, Indore, India"
				/>
			</Helmet>
			<Seo
				title="Orbusly Solutions — AI, Software & Data Engineering Services in India"
				description="Software engineering company in Indore, India delivering AI transformation, web & mobile development, data analytics, retail, healthcare, and enterprise software to businesses globally."
				url="https://orbusly.com/"
				siteName="Orbusly Solutions Private Limited"
			/>

			{/* Hero */}
			<section className="relative overflow-hidden bg-navy-deep">
				<div className="absolute inset-0 bg-grid-navy" aria-hidden="true" />
				<div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-azure/15 blur-3xl" aria-hidden="true" />
				<div className="relative container grid min-h-[88dvh] items-center gap-12 py-16 lg:grid-cols-12 lg:py-20">
					<div className="lg:col-span-7">
						<Reveal>
							<span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-silver">
								<span className="h-1.5 w-1.5 rounded-full bg-azure" />
								AI · Software · Data · Cloud
							</span>
						</Reveal>
						<Reveal delay={0.08}>
							<h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl xl:text-6xl">
								Transforming Businesses Through{' '}
								<span className="text-azure">Intelligent Software</span>
							</h1>
						</Reveal>
						<Reveal delay={0.16}>
							<p className="mt-6 max-w-xl text-base leading-relaxed text-silver md:text-lg">
								Orbusly Solutions delivers cutting-edge AI transformation, web &amp; mobile
								applications, data analytics, and e-commerce software that powers your growth.
							</p>
						</Reveal>
						<Reveal delay={0.2}>
							<p className="mt-4 text-sm text-silver/80">
								Headquartered in Indore, India &mdash; serving businesses globally with
								engineered software for growth-minded teams.
							</p>
						</Reveal>
						<Reveal delay={0.24}>
							<div className="mt-8 flex flex-wrap items-center gap-4">
								<Button asChild size="lg" className="bg-azure text-white hover:bg-azure/90">
									<Link to="/contact">
										Start Your Project
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
								<Button
									asChild
									size="lg"
									variant="outline"
									className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
								>
									<Link to="/services">Explore Services</Link>
								</Button>
							</div>
						</Reveal>
					</div>
					<div className="lg:col-span-5">
						<Reveal delay={0.3} y={32}>
							<FramedImage
								src={IMAGES.hero}
								alt="Enterprise analytics dashboard with charts and KPIs, engineered by Orbusly Solutions for data-driven businesses"
								light
								broken
								className="aspect-[3/2]"
							/>
						</Reveal>
					</div>
				</div>
			</section>


			{/* Services */}
			<section className="py-16 md:py-20">
				<div className="container">
					<div className="flex flex-wrap items-end justify-between gap-6">
						<div>
							<Reveal>
								<SectionMarker index="01" label="What we do" />
							</Reveal>
							<Reveal delay={0.08}>
								<h2 className="mt-5 max-w-xl font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
									Six software practices, one engineering standard
								</h2>
							</Reveal>
						</div>
						<Reveal delay={0.16}>
							<Link
								to="/services"
								className="inline-flex items-center gap-1.5 text-sm font-semibold text-azure hover:underline"
							>
								All services <ArrowUpRight className="h-4 w-4" />
							</Link>
						</Reveal>
					</div>

					<div className="mt-10 border-t border-border">
						{services.map((s, i) => (
							<Reveal key={s.slug} delay={i * 0.04}>
								<Link
									to="/services"
									className="group grid items-center gap-3 border-b border-border py-5 transition-colors hover:bg-mist md:grid-cols-12 md:gap-6 md:px-4"
								>
									<span className="font-display text-sm font-semibold text-silver md:col-span-1">
										{String(i + 1).padStart(2, '0')}
									</span>
									<span className="flex items-center gap-3 md:col-span-4">
										<s.icon className="h-5 w-5 shrink-0 text-azure" strokeWidth={1.8} />
										<span className="font-display text-lg font-semibold text-navy">{s.title}</span>
									</span>
									<span className="text-sm leading-relaxed text-steel md:col-span-6">{s.tagline}</span>
									<ArrowRight className="hidden h-4 w-4 text-azure transition-transform group-hover:translate-x-1 md:col-span-1 md:block md:justify-self-end" />
								</Link>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* Case studies */}
			<section className="bg-navy py-16 md:py-20">
				<div className="container">
					<div className="flex flex-wrap items-end justify-between gap-6">
						<div>
							<Reveal>
								<SectionMarker index="02" label="Case studies" light />
							</Reveal>
							<Reveal delay={0.08}>
								<h2 className="mt-5 max-w-xl font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
									Proof in production
								</h2>
							</Reveal>
						</div>
						<Reveal delay={0.16}>
							<Link
								to="/case-studies"
								className="inline-flex items-center gap-1.5 text-sm font-semibold text-azure hover:underline"
							>
								All case studies <ArrowUpRight className="h-4 w-4" />
							</Link>
						</Reveal>
					</div>

					<div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-6">
						{caseStudies.map((cs, i) => (
							<Reveal key={cs.id} delay={i * 0.1}>
								<Link to="/case-studies" className="group block">
									<FramedImage
										src={cs.image}
										alt={`${cs.industry} case study: ${cs.title} — software delivery by Orbusly Solutions`}
										light
										broken={i === 1}
										className="aspect-[3/2]"
									/>
									<p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-azure">
										{cs.industry}
									</p>
									<h3 className="mt-2 font-display text-lg font-semibold leading-snug text-white transition-colors group-hover:text-azure">
										{cs.title}
									</h3>
									<p className="mt-2 text-sm text-silver">
										{cs.metrics[0].value} {cs.metrics[0].label.toLowerCase()} · {cs.metrics[1].value} {cs.metrics[1].label.toLowerCase()}
									</p>
								</Link>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* Client voices */}
			<section className="py-16 md:py-20">
				<div className="container">
					<Reveal>
						<SectionMarker index="03" label="Client voices" />
					</Reveal>
					<Reveal delay={0.08}>
						<div className="mt-10 border-y border-border bg-mist px-6 py-10 text-center md:px-10">
							<h2 className="font-display text-2xl font-bold tracking-tight text-navy md:text-3xl">
								Client Voices Coming Soon
							</h2>
							<p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-steel">
								We’re building meaningful partnerships and look forward to sharing their stories here.
							</p>
						</div>
					</Reveal>
				</div>
			</section>

			{/* Insights */}
			<section className="bg-mist py-16 md:py-20">
				<div className="container">
					<div className="flex flex-wrap items-end justify-between gap-6">
						<div>
							<Reveal>
								<SectionMarker index="04" label="Industry insights" />
							</Reveal>
							<Reveal delay={0.08}>
								<h2 className="mt-5 max-w-xl font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
									From the Orbusly blog
								</h2>
							</Reveal>
						</div>
						<Reveal delay={0.16}>
							<Link
								to="/blog"
								className="inline-flex items-center gap-1.5 text-sm font-semibold text-azure hover:underline"
							>
								All insights <ArrowUpRight className="h-4 w-4" />
							</Link>
						</Reveal>
					</div>

					<div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-6">
						{posts.slice(0, 3).map((p, i) => (
							<Reveal key={p.slug} delay={i * 0.1}>
								<Link to={`/blog/${p.slug}`} className="group block">
									<FramedImage
										src={p.image}
										alt={`${p.category} insight article: ${p.title}`}
										className="aspect-[3/2]"
										broken={i === 2}
									/>
									<p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-azure">
										{p.category}
									</p>
									<h3 className="mt-2 font-display text-lg font-semibold leading-snug text-navy transition-colors group-hover:text-azure">
										{p.title}
									</h3>
									<p className="mt-2 text-xs text-steel">
										{formatDate(p.date)} · {p.readTime}
									</p>
								</Link>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="relative overflow-hidden bg-navy-deep">
				<div className="absolute inset-0 bg-grid-navy" aria-hidden="true" />
				<div className="relative container grid items-center gap-8 py-16 md:grid-cols-2 md:py-20">
					<Reveal>
						<div>
							<SectionMarker index="05" label="Work with us" light />
							<h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
								Ready to build what&rsquo;s next?
							</h2>
							<p className="mt-4 max-w-md text-silver">
								Tell us about your project &mdash; or learn more about the company building
								intelligent software for clients globally.
							</p>
						</div>
					</Reveal>
					<Reveal delay={0.12}>
						<div className="flex flex-wrap gap-4 md:justify-end">
							<Button asChild size="lg" className="bg-azure text-white hover:bg-azure/90">
								<Link to="/contact">
									Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
							>
								<Link to="/about">About Orbusly</Link>
							</Button>
						</div>
					</Reveal>
				</div>
			</section>
		</>
	);
}

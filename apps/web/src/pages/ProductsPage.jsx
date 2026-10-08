import React from 'react';
import { Helmet } from 'react-helmet';
import {
	Shield,
	Users,
	CheckCircle2,
	Eye,
	Lock,
	FileText,
	ExternalLink,
	ArrowRight,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';

const IDR_URL = 'https://www.idr24x7.in';

const features = [
	{
		title: 'Secure Platform',
		description:
			'Our platform uses secure technology and best practices to keep user data safe and ensure a smooth experience.',
		icon: Shield,
		tone: 'bg-sky-50',
	},
	{
		title: 'Experienced Team',
		description:
			'A dedicated team of real estate, legal, and technology professionals supports users with verified project information.',
		icon: Users,
		tone: 'bg-violet-50',
	},
	{
		title: 'Verified Projects',
		description:
			'We focus on curated projects selected through research and clear documentation for better user understanding.',
		icon: CheckCircle2,
		tone: 'bg-blue-50',
	},
	{
		title: 'Clear Information',
		description:
			'Property details, documents, and key updates are presented clearly so users can make informed decisions.',
		icon: Eye,
		tone: 'bg-emerald-50',
	},
	{
		title: 'User Support & Compliance',
		description:
			'Robust processes and compliance practices help maintain clarity, authenticity, and user confidence at every step.',
		icon: Lock,
		tone: 'bg-amber-50',
	},
	{
		title: 'Quality Listings',
		description:
			'Carefully curated residential and commercial listings that meet strict quality and verification standards.',
		icon: FileText,
		tone: 'bg-indigo-50',
	},
];

export default function ProductsPage() {
	return (
		<>
			<Helmet>
				<title>IDR — Real Estate Discovery Product by Orbusly Solutions</title>
				<meta
					name="description"
					content="IDR by Orbusly Solutions is a secure platform to discover verified residential and commercial real estate projects with clear information and quality listings. Explore IDR at idr24x7.in."
				/>
			</Helmet>
			<Seo
				title="IDR — Real Estate Discovery Product by Orbusly Solutions"
				description="IDR by Orbusly Solutions is a secure platform to discover verified residential and commercial real estate projects with clear information and quality listings. Explore IDR at idr24x7.in."
				url="https://orbusly.com/products"
				siteName="Orbusly Solutions Private Limited"
			/>

			<PageHero
				index="06"
				label="Products"
				title="Software products we build and operate"
				description="Orbusly designs and ships product platforms for real-world industries. Start with IDR — our real estate discovery product."
			/>

			<section className="bg-[#f6f4fb] py-16 md:py-20">
				<div className="container max-w-5xl">
					<Reveal>
						<p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-navy">
							About <span className="text-azure">IDR</span>
						</p>
					</Reveal>
					<Reveal delay={0.08}>
						<h2 className="mt-3 text-center font-display text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-[2.75rem] lg:leading-tight">
							Explore <span className="text-azure">Real Estate</span> Projects Without
							<br className="hidden sm:block" /> The <span className="text-violet-600">Hassle</span>
						</h2>
					</Reveal>
					<Reveal delay={0.12}>
						<p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-steel md:text-base">
							IDR helps users discover curated residential and commercial projects with verified details,
							clear documentation, and a secure, easy-to-use experience — built by Orbusly Solutions.
						</p>
					</Reveal>

					<div className="mt-12 grid gap-5 sm:grid-cols-2">
						{features.map((f, i) => (
							<Reveal key={f.title} delay={i * 0.05}>
								<article
									className={`relative overflow-hidden rounded-2xl border border-white/80 ${f.tone} p-6 shadow-sm md:p-7`}
								>
									<div className="relative z-10 max-w-[85%]">
										<h3 className="font-display text-lg font-semibold text-navy">{f.title}</h3>
										<p className="mt-2 text-sm leading-relaxed text-steel">{f.description}</p>
									</div>
									<f.icon
										className="pointer-events-none absolute bottom-4 right-4 h-16 w-16 text-navy/10"
										strokeWidth={1.25}
										aria-hidden="true"
									/>
								</article>
							</Reveal>
						))}
					</div>

					<Reveal delay={0.2}>
						<div className="mt-12 flex flex-wrap items-center justify-center gap-4">
							<Button asChild size="lg" className="bg-azure text-white hover:bg-azure/90">
								<a href={IDR_URL} target="_blank" rel="noopener noreferrer">
									Visit IDR
									<ExternalLink className="ml-2 h-4 w-4" />
								</a>
							</Button>
							<a
								href={IDR_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-azure"
							>
								www.idr24x7.in
								<ArrowRight className="h-4 w-4" />
							</a>
						</div>
					</Reveal>
				</div>
			</section>
		</>
	);
}

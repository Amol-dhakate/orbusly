import React from 'react';
import { Helmet } from 'react-helmet';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import FramedImage from '@/components/FramedImage';
import Seo from '@/components/Seo';
import { values, IMAGES } from '@/data/content';

export default function CareersPage() {
	return (
		<>
			<Helmet>
				<title>Careers — Software Engineering at Orbusly Solutions | Indore, India</title>
				<meta
					name="description"
					content="Orbusly Solutions is a software engineering company in Indore, India building intelligent software for clients globally. Learn about our engineering culture and values."
				/>
			</Helmet>
			<Seo
				title="Careers — Software Engineering at Orbusly Solutions | Indore, India"
				description="Orbusly Solutions is a software engineering company in Indore, India building intelligent software for clients globally. Learn about our engineering culture and values."
				url="https://orbusly.com/careers"
				siteName="Orbusly Solutions Private Limited"
			/>

			<PageHero
				index="04"
				label="Careers"
				title="Build software that businesses run on"
				description="We are a growing team of engineers, designers, and data specialists building intelligent software for clients globally from Indore, India. Come do the best work of your career."
			/>

			{/* Why Orbusly */}
			<section className="py-14 md:py-16">
				<div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
					<Reveal>
						<FramedImage
							src={IMAGES.team}
							alt="The Orbusly Solutions engineering team collaborating in the Indore, India office"
							broken
							className="aspect-[3/2]"
						/>
					</Reveal>
					<div>
						<Reveal delay={0.08}>
							<h2 className="font-display text-2xl font-bold tracking-tight text-navy md:text-3xl">
								Why Orbusly
							</h2>
						</Reveal>
						<div className="mt-6 space-y-6">
							{values.map((v, i) => (
								<Reveal key={v.title} delay={0.1 + i * 0.06}>
									<div className="flex gap-4">
										<span className="font-display text-sm font-bold text-azure">
											{String(i + 1).padStart(2, '0')}
										</span>
										<div>
											<h3 className="font-display text-base font-semibold text-navy">{v.title}</h3>
											<p className="mt-1 text-sm leading-relaxed text-steel">{v.description}</p>
										</div>
									</div>
								</Reveal>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

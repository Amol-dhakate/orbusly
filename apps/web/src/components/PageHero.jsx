import React from 'react';
import SectionMarker from '@/components/SectionMarker';
import Reveal from '@/components/Reveal';

export default function PageHero({ index, label, title, description }) {
	return (
		<section className="relative bg-navy-deep overflow-hidden">
			<div className="absolute inset-0 bg-grid-navy" aria-hidden="true" />
			<div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-azure/15 blur-3xl" aria-hidden="true" />
			<div className="relative container py-16 md:py-24">
				<Reveal>
					<SectionMarker index={index} label={label} light />
				</Reveal>
				<Reveal delay={0.08}>
					<h1 className="mt-6 max-w-3xl font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
						{title}
					</h1>
				</Reveal>
				{description && (
					<Reveal delay={0.16}>
						<p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-silver">
							{description}
						</p>
					</Reveal>
				)}
			</div>
		</section>
	);
}

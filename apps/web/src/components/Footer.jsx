import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, MapPin } from 'lucide-react';
import { LOGO_URL, services } from '@/data/content';

export default function Footer() {
	return (
		<footer className="bg-navy-deep text-silver">
			<div className="container py-14 md:py-16">
				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
					<div className="lg:col-span-4">
						<div className="inline-flex items-center gap-3 rounded-md bg-white p-2 pr-4">
							<img src={LOGO_URL} alt="Orbusly Solutions Private Limited logo" className="h-9 w-auto" />
							<span className="leading-tight">
								<span className="block font-display text-sm font-bold text-navy">Orbusly Solutions</span>
								<span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-azure">
									Private Limited
								</span>
							</span>
						</div>
						<p className="mt-5 max-w-sm text-sm leading-relaxed">
							Transforming businesses through intelligent software — AI transformation, web &amp; mobile
							applications, data &amp; analytics, and enterprise platforms.
						</p>
					</div>

					<div className="lg:col-span-3">
						<h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
							Services
						</h3>
						<ul className="mt-4 space-y-2.5 text-sm">
							{services.map((s) => (
								<li key={s.slug}>
									<Link to="/services" className="transition-colors hover:text-white">
										{s.title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="lg:col-span-2">
						<h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
							Company
						</h3>
						<ul className="mt-4 space-y-2.5 text-sm">
							<li><Link to="/about" className="transition-colors hover:text-white">About Us</Link></li>
							<li><Link to="/products" className="transition-colors hover:text-white">Products</Link></li>
							<li><Link to="/case-studies" className="transition-colors hover:text-white">Case Studies</Link></li>
							<li><Link to="/blog" className="transition-colors hover:text-white">Insights</Link></li>
							<li><Link to="/careers" className="transition-colors hover:text-white">Careers</Link></li>
							<li><Link to="/contact" className="transition-colors hover:text-white">Contact</Link></li>
						</ul>
					</div>

					<div className="lg:col-span-3">
						<h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
							Contact
						</h3>
						<ul className="mt-4 space-y-3 text-sm">
							<li className="flex items-start gap-2.5">
								<Mail className="mt-0.5 h-4 w-4 shrink-0 text-azure" />
								<a href="mailto:info@orbusly.com" className="transition-colors hover:text-white">
									info@orbusly.com
								</a>
							</li>
							<li className="flex items-start gap-2.5">
								<MapPin className="mt-0.5 h-4 w-4 shrink-0 text-azure" />
								<span>
									<span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-azure">
										Headquarters
									</span>
									Business Park, AB Road,
									<br />
									Indore 452012, India
								</span>
							</li>
							<li className="flex items-start gap-2.5">
								<Globe className="mt-0.5 h-4 w-4 shrink-0 text-azure" />
								<span>
									<span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-azure">
										Presence Globally
									</span>
									3 Wyn Street,
									<br />
									Campbelltown SA 5074, Australia
								</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
					<p>© 2026 Orbusly Solutions Private Limited. All rights reserved.</p>
					<p className="text-silver/70">AI · Software · Data · Cloud</p>
				</div>
			</div>
		</footer>
	);
}

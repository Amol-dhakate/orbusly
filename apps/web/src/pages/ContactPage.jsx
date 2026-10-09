import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Globe, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { services } from '@/data/content';

const CONTACT_BLOCKS = [
	{ icon: Mail, label: 'Email', value: 'info@orbusly.com', href: 'mailto:info@orbusly.com' },
	{
		icon: MapPin,
		label: 'Headquarters',
		value: 'Business Park, AB Road, Indore – 452012, India',
	},
	{
		icon: Globe,
		label: 'Presence Globally',
		value: '3 Wyn Street, Campbelltown SA 5074, Australia',
	},
];

export default function ContactPage() {
	const [form, setForm] = useState({ name: '', email: '', company: '', service: 'general', message: '' });
	const [sent, setSent] = useState(false);

	const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

	const handleSubmit = (e) => {
		e.preventDefault();
		const subject = encodeURIComponent(`Project inquiry from ${form.name}${form.company ? ` (${form.company})` : ''}`);
		const body = encodeURIComponent(
			`Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || '—'}\nService of interest: ${form.service}\n\n${form.message}`
		);
		window.location.href = `mailto:info@orbusly.com?subject=${subject}&body=${body}`;
		setSent(true);
	};

	return (
		<>
			<Helmet>
				<title>Contact Orbusly Solutions — Start Your Software Project</title>
				<meta
					name="description"
					content="Contact Orbusly Solutions in Indore, India for AI transformation, web and mobile development, data analytics, retail, healthcare, and enterprise software. Email info@orbusly.com."
				/>
			</Helmet>
			<Seo
				title="Contact Orbusly Solutions — Start Your Software Project"
				description="Contact Orbusly Solutions in Indore, India for AI transformation, web and mobile development, data analytics, retail, healthcare, and enterprise software. Email info@orbusly.com."
				url="https://orbusly.com/contact"
				siteName="Orbusly Solutions Private Limited"
			/>

			<PageHero
				index="06"
				label="Contact"
				title="Tell us what you're building"
				description="Share a few details about your project and a senior engineer — not a sales rep — will respond within one business day."
			/>

			<section className="py-14 md:py-16">
				<div className="container grid gap-12 lg:grid-cols-5 lg:gap-16">
					<div className="lg:col-span-2">
						<Reveal>
							<h2 className="font-display text-xl font-bold tracking-tight text-navy">Reach us directly</h2>
						</Reveal>
						<div className="mt-6 space-y-6">
							{CONTACT_BLOCKS.map((b, i) => (
								<Reveal key={b.label} delay={0.06 + i * 0.05}>
									<div className="flex gap-4">
										<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-mist">
											<b.icon className="h-4.5 w-4.5 h-5 w-5 text-azure" strokeWidth={1.8} />
										</span>
										<div>
											<p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel">{b.label}</p>
											{b.href ? (
												<a href={b.href} className="mt-1 block text-sm font-medium text-navy hover:text-azure">
													{b.value}
												</a>
											) : (
												<p className="mt-1 text-sm font-medium leading-relaxed text-navy">{b.value}</p>
											)}
										</div>
									</div>
								</Reveal>
							))}
						</div>

					</div>

					<Reveal delay={0.12} className="lg:col-span-3">
						{sent ? (
							<div className="flex h-full min-h-[320px] flex-col items-center justify-center border border-border bg-mist p-10 text-center">
								<CheckCircle2 className="h-10 w-10 text-azure" />
								<h2 className="mt-4 font-display text-xl font-bold text-navy">Your message is ready</h2>
								<p className="mt-2 max-w-sm text-sm leading-relaxed text-steel">
									Your email app should have opened with the message pre-filled. If it didn&rsquo;t, write to us
									directly at{' '}
									<a href="mailto:info@orbusly.com" className="font-semibold text-azure hover:underline">
										info@orbusly.com
									</a>
									.
								</p>
								<Button variant="outline" className="mt-6" onClick={() => setSent(false)}>
									Write another message
								</Button>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-5">
								<div className="grid gap-5 sm:grid-cols-2">
									<div className="space-y-2">
										<Label htmlFor="name">Full name</Label>
										<Input id="name" required value={form.name} onChange={update('name')} placeholder="Ananya Sharma" />
									</div>
									<div className="space-y-2">
										<Label htmlFor="email">Work email</Label>
										<Input
											id="email"
											type="email"
											required
											value={form.email}
											onChange={update('email')}
											placeholder="ananya@company.com"
										/>
									</div>
								</div>
								<div className="grid gap-5 sm:grid-cols-2">
									<div className="space-y-2">
										<Label htmlFor="company">Company</Label>
										<Input id="company" value={form.company} onChange={update('company')} placeholder="Company Pvt. Ltd." />
									</div>
									<div className="space-y-2">
										<Label htmlFor="service">Service of interest</Label>
										<select
											id="service"
											value={form.service}
											onChange={update('service')}
											className="flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-sm text-navy shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
										>
											<option value="general">General inquiry</option>
											{services.map((s) => (
												<option key={s.slug} value={s.title}>
													{s.title}
												</option>
											))}
										</select>
									</div>
								</div>
								<div className="space-y-2">
									<Label htmlFor="message">Project details</Label>
									<Textarea
										id="message"
										required
										rows={6}
										value={form.message}
										onChange={update('message')}
										placeholder="What are you building, what does success look like, and when do you need it?"
									/>
								</div>
								<Button type="submit" size="lg" className="bg-azure text-white hover:bg-azure/90">
									Send Message <Send className="ml-2 h-4 w-4" />
								</Button>
								<p className="text-xs text-steel">
									Submitting opens your email app with the message pre-filled — nothing is stored on this site.
								</p>
							</form>
						)}
					</Reveal>
				</div>
			</section>
		</>
	);
}

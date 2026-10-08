import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, ArrowRight } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LOGO_URL } from '@/data/content';

const NAV_ITEMS = [
	{ to: '/services', label: 'Services' },
	{ to: '/products', label: 'Products' },
	{ to: '/case-studies', label: 'Case Studies' },
	{ to: '/blog', label: 'Insights' },
	{ to: '/about', label: 'About' },
	{ to: '/careers', label: 'Careers' },
];

export default function Header() {
	const [open, setOpen] = useState(false);
	const location = useLocation();

	React.useEffect(() => {
		setOpen(false);
	}, [location.pathname]);

	return (
		<header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
			<div className="container flex h-16 items-center justify-between gap-6">
				<Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Orbusly Solutions home">
					<img src={LOGO_URL} alt="Orbusly Solutions Private Limited logo" className="h-10 w-auto" />
					<span className="hidden sm:block leading-tight">
						<span className="block font-display text-sm font-bold tracking-tight text-navy">
							Orbusly Solutions
						</span>
						<span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-azure">
							Private Limited
						</span>
					</span>
				</Link>

				<nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
					{NAV_ITEMS.map((item) => (
						<NavLink
							key={item.to}
							to={item.to}
							className={({ isActive }) =>
								cn(
									'text-sm font-medium transition-colors hover:text-azure',
									isActive ? 'text-azure' : 'text-navy'
								)
							}
						>
							{item.label}
						</NavLink>
					))}
				</nav>

				<div className="flex items-center gap-3">
					<Button asChild className="hidden sm:inline-flex bg-azure hover:bg-azure/90 text-white">
						<Link to="/contact">
							Get Started
							<ArrowRight className="ml-1.5 h-4 w-4" />
						</Link>
					</Button>

					<Sheet open={open} onOpenChange={setOpen}>
						<SheetTrigger asChild>
							<button
								className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-navy"
								aria-label="Open menu"
							>
								<Menu className="h-5 w-5" />
							</button>
						</SheetTrigger>
						<SheetContent side="right" className="w-72 bg-white">
							<SheetTitle className="sr-only">Navigation menu</SheetTitle>
							<nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
								{NAV_ITEMS.map((item) => (
									<NavLink
										key={item.to}
										to={item.to}
										className={({ isActive }) =>
											cn(
												'rounded-md px-3 py-3 text-base font-medium transition-colors',
												isActive ? 'bg-mist text-azure' : 'text-navy hover:bg-mist'
											)
										}
									>
										{item.label}
									</NavLink>
								))}
								<Button asChild className="mt-4 bg-azure hover:bg-azure/90 text-white">
									<Link to="/contact">Get Started</Link>
								</Button>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}

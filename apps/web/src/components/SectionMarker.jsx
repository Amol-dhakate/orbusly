import React from 'react';
import { cn } from '@/lib/utils';

export default function SectionMarker({ index, label, light = false, className }) {
	return (
		<div className={cn('flex items-end gap-4', className)}>
			<span
				aria-hidden="true"
				className={cn(
					'font-display text-6xl md:text-7xl font-bold leading-[0.85] tracking-tight select-none',
					light ? 'text-outline-light' : 'text-outline-navy'
				)}
			>
				{index}
			</span>
			<div className="pb-1">
				<span className="block h-px w-10 mb-2 bg-azure" />
				<span
					className={cn(
						'text-xs font-semibold uppercase tracking-[0.22em]',
						light ? 'text-silver' : 'text-steel'
					)}
				>
					{label}
				</span>
			</div>
		</div>
	);
}

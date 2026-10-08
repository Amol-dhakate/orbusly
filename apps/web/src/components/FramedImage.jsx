import React from 'react';
import { cn } from '@/lib/utils';

export default function FramedImage({ src, alt, className, imgClassName, broken = false, light = false }) {
	return (
		<div className={cn('relative', className)}>
			<div
				aria-hidden="true"
				className={cn(
					'absolute inset-0 border pointer-events-none',
					light ? 'border-azure/60' : 'border-navy/25',
					broken ? 'translate-x-3 translate-y-3' : 'translate-x-4 translate-y-4'
				)}
			/>
			<img
				src={src}
				alt={alt}
				loading="lazy"
				className={cn(
					'relative h-full w-full object-cover',
					broken && '-translate-x-1.5 -translate-y-1.5 -rotate-1',
					imgClassName
				)}
			/>
		</div>
	);
}

'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-label="Kingdom Chronicle Wiki logo"
      title="Kingdom Chronicle Wiki"
      className={cn(
        'relative inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl',
        'bg-[#120f0c] shadow-[0_0_24px_rgba(215,167,66,0.18)]',
        className
      )}
    >
      <Image
        src="/logo.svg"
        alt=""
        fill
        sizes="40px"
        className="object-contain"
      />
    </span>
  );
}

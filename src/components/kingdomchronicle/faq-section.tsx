import type { GuideFaq } from '@/data/kingdomchronicle/types';
import { cn } from '@/lib/utils';

export function FaqSection({
  className,
  items,
  title = 'FAQ',
}: {
  className?: string;
  items: GuideFaq[];
  title?: string;
}) {
  return (
    <section
      id="faq"
      className={cn(
        'rounded-xl border border-[#4a382a] bg-[#1d1712] p-5 md:p-6',
        className
      )}
    >
      <h2 className="font-display text-2xl font-bold text-[#f6ead1]">
        {title}
      </h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-lg border border-[#4a382a] bg-[#120f0c] p-4"
          >
            <summary className="cursor-pointer font-semibold text-[#f6ead1] transition group-open:text-[#9e3e35]">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-[#c1ad8a]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

import type { GuideFaq } from '@/data/gurei/types';
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
        'rounded-xl border border-[#383b42] bg-[#15171b] p-5 md:p-6',
        className
      )}
    >
      <h2 className="font-display text-2xl font-bold text-[#f3f0e8]">
        {title}
      </h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-lg border border-[#383b42] bg-[#090a0c] p-4"
          >
            <summary className="cursor-pointer font-semibold text-[#f3f0e8] transition group-open:text-[#ff6b5e]">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-[#aaa9a4]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

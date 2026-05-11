import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BreadcrumbSchema } from "./schema";

export type Crumb = { name: string; href: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <>
      <BreadcrumbSchema items={items} />
      <nav
        aria-label="Breadcrumb"
        className="wrap pt-28 pb-2 text-[13px] text-[var(--color-muted)]"
      >
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {isLast ? (
                  <span aria-current="page" className="text-[var(--color-primary-dark)] font-medium">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-[var(--color-primary)]">
                    {item.name}
                  </Link>
                )}
                {!isLast && <ChevronRight size={13} className="text-[var(--color-muted)]" />}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

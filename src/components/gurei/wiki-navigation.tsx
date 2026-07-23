import { Badge } from '@/components/ui/badge';
import { routeLabels } from '@/data/gurei/localized';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Compass,
  Download,
  Footprints,
  Ghost,
  Menu,
  Route,
  ShieldCheck,
  Swords,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import type { ReactNode } from 'react';

interface SectionLink {
  href: string;
  label: string;
}

const wikiNavRoutes = [
  {
    title: 'Start Here',
    icon: BookOpen,
    routes: ['/', '/guides', '/guides/beginner-guide', '/review'],
  },
  {
    title: 'Boss Route',
    icon: Ghost,
    routes: [
      '/guides/boss-order',
      '/guides/all-kami-bosses',
      '/guides/kami-powers',
    ],
  },
  {
    title: 'Combat & Runs',
    icon: Swords,
    routes: [
      '/guides/combat-and-dodge',
      '/guides/lives-and-runs',
      '/guides/secrets-and-encounters',
    ],
  },
  {
    title: 'Steam & Reference',
    icon: ShieldCheck,
    routes: [
      '/guides/achievements',
      '/guides/steam-deck',
      '/system-requirements',
      '/download',
      '/disclaimer',
    ],
  },
] as const;

const routeCount = wikiNavRoutes.reduce(
  (count, group) => count + group.routes.length,
  0
);

function isCurrentPath(currentPath: string | undefined, href: string) {
  return currentPath === href;
}

function WikiLink({
  currentPath,
  href,
}: { currentPath?: string; href: string }) {
  const active = isCurrentPath(currentPath, href);

  return (
    <LocaleLink
      href={href}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'flex h-auto min-w-0 items-center justify-between gap-3 whitespace-normal rounded-lg border px-3 py-2 text-left text-sm leading-6 transition',
        active
          ? 'border-[#73e4ff] bg-[#73e4ff] font-semibold text-[#090a0c]'
          : 'border-[#383b42] bg-[#090a0c] text-[#aaa9a4] hover:border-[#73e4ff] hover:bg-[#24272d] hover:text-[#f3f0e8]'
      )}
    >
      <span className="min-w-0 break-words">{routeLabels[href] ?? href}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          active ? 'text-[#090a0c]' : 'text-[#73e4ff]'
        )}
      />
    </LocaleLink>
  );
}

function NavGroups({ currentPath }: { currentPath?: string }) {
  return wikiNavRoutes.map((group) => {
    const active = group.routes.some((route) =>
      isCurrentPath(currentPath, route)
    );

    return (
      <details
        key={group.title}
        open={active}
        className={cn(
          'group rounded-lg border p-3',
          active
            ? 'border-[#73e4ff]/60 bg-[#73e4ff]/5'
            : 'border-[#383b42] bg-[#090a0c]'
        )}
      >
        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-[#f3f0e8] [&::-webkit-details-marker]:hidden">
          <span className="flex min-w-0 items-center gap-2">
            <group.icon className="size-4 shrink-0 text-[#73e4ff]" />
            <span className="min-w-0 break-words">{group.title}</span>
            <span className="text-[#aaa9a4] text-xs">
              {group.routes.length}
            </span>
          </span>
          <ChevronDown className="size-4 shrink-0 text-[#ff6b5e] transition group-open:rotate-180" />
        </summary>
        <div className="mt-3 grid gap-2">
          {group.routes.map((route) => (
            <WikiLink key={route} currentPath={currentPath} href={route} />
          ))}
        </div>
      </details>
    );
  });
}

export function WikiRouteSidebar({
  children,
  currentPath,
  sectionLinks = [],
}: {
  children?: ReactNode;
  currentPath?: string;
  locale?: Locale;
  sectionLinks?: SectionLink[];
}) {
  return (
    <aside className="sticky top-24 hidden w-[272px] shrink-0 self-start space-y-4 lg:block">
      <div className="rounded-xl border border-[#383b42] bg-[#15171b] p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#73e4ff]">
              Wiki Navigation
            </p>
            <h2 className="mt-1 break-words font-display text-lg font-bold text-[#f3f0e8]">
              Gurei
            </h2>
          </div>
          <Compass className="size-5 shrink-0 text-[#ff6b5e]" />
        </div>
        <div className="mt-4 space-y-3">
          <NavGroups currentPath={currentPath} />
        </div>
        <p className="mt-4 border-[#383b42] border-t pt-3 text-[#858681] text-xs">
          {routeCount} focused wiki routes
        </p>
      </div>

      {sectionLinks.length ? (
        <div className="rounded-xl border border-[#383b42] bg-[#15171b] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#73e4ff]">
            On this page
          </p>
          <div className="mt-3 grid gap-2">
            {sectionLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="min-w-0 break-words rounded-lg border border-[#383b42] bg-[#090a0c] px-3 py-2 text-[#aaa9a4] text-sm leading-6 hover:border-[#73e4ff] hover:text-[#f3f0e8]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}

      {children}
    </aside>
  );
}

export function MobileWikiNav({
  currentPath,
  sectionLinks = [],
}: {
  currentPath?: string;
  locale?: Locale;
  sectionLinks?: SectionLink[];
}) {
  return (
    <details className="group mt-5 rounded-xl border border-[#383b42] bg-[#15171b] p-4 lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-[#f3f0e8] [&::-webkit-details-marker]:hidden">
        <span className="flex items-center gap-2">
          <Menu className="size-4 text-[#73e4ff]" />
          Open wiki menu
          <Badge className="bg-[#ff6b5e] text-[#090a0c]">{routeCount}</Badge>
        </span>
        <ChevronDown className="size-4 text-[#ff6b5e] transition group-open:rotate-180" />
      </summary>
      <div className="mt-4 space-y-3 border-[#383b42] border-t pt-4">
        <NavGroups currentPath={currentPath} />
        {sectionLinks.length ? (
          <details className="rounded-lg border border-[#383b42] bg-[#090a0c] p-3">
            <summary className="cursor-pointer text-sm font-semibold text-[#f3f0e8]">
              On this page
            </summary>
            <div className="mt-3 grid gap-2">
              {sectionLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="break-words rounded-lg border border-[#383b42] px-3 py-2 text-[#aaa9a4] text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </details>
        ) : null}
      </div>
    </details>
  );
}

export function QuickWikiLinks({ className }: { className?: string }) {
  const routes = [
    { href: '/guides/beginner-guide', label: 'Beginner', icon: Footprints },
    { href: '/guides/boss-order', label: 'Order', icon: Route },
    { href: '/guides/all-kami-bosses', label: 'Kami', icon: Ghost },
    { href: '/guides/combat-and-dodge', label: 'Dodge', icon: Swords },
    { href: '/download', label: 'Steam', icon: Download },
  ];

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {routes.map((route) => (
        <LocaleLink
          key={route.href}
          href={route.href}
          className="inline-flex h-auto items-center gap-1.5 rounded-lg border border-[#4b4f58] bg-[#090a0c]/85 px-2.5 py-1.5 text-[#f3f0e8] text-xs transition hover:border-[#73e4ff] hover:bg-[#24272d] sm:text-sm"
        >
          <route.icon className="size-3.5 shrink-0 text-[#73e4ff]" />
          {route.label}
        </LocaleLink>
      ))}
    </div>
  );
}

import { Badge } from '@/components/ui/badge';
import { routeLabels } from '@/data/kingdomchronicle/localized';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Compass,
  Download,
  Dumbbell,
  Flag,
  Footprints,
  Handshake,
  Landmark,
  Menu,
  Swords,
  Trophy,
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
    title: 'State & Diplomacy',
    icon: Landmark,
    routes: [
      '/guides/training-and-recruiting',
      '/guides/renown-and-mobilization',
      '/guides/diplomacy-and-alliances',
    ],
  },
  {
    title: 'War & Officers',
    icon: Swords,
    routes: [
      '/guides/war-and-reinforcements',
      '/guides/troop-types',
      '/guides/officer-skills',
      '/guides/officers-and-recruitment',
    ],
  },
  {
    title: 'Campaign & Steam',
    icon: Flag,
    routes: [
      '/guides/campaigns-and-victory',
      '/guides/achievements',
      '/guides/casual-difficulty',
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
          ? 'border-[#d7a742] bg-[#d7a742] font-semibold text-[#120f0c]'
          : 'border-[#4a382a] bg-[#120f0c] text-[#c1ad8a] hover:border-[#d7a742] hover:bg-[#2b2119] hover:text-[#f6ead1]'
      )}
    >
      <span className="min-w-0 break-words">{routeLabels[href] ?? href}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          active ? 'text-[#120f0c]' : 'text-[#d7a742]'
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
            ? 'border-[#d7a742]/60 bg-[#d7a742]/5'
            : 'border-[#4a382a] bg-[#120f0c]'
        )}
      >
        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-[#f6ead1] [&::-webkit-details-marker]:hidden">
          <span className="flex min-w-0 items-center gap-2">
            <group.icon className="size-4 shrink-0 text-[#d7a742]" />
            <span className="min-w-0 break-words">{group.title}</span>
            <span className="text-[#c1ad8a] text-xs">
              {group.routes.length}
            </span>
          </span>
          <ChevronDown className="size-4 shrink-0 text-[#9e3e35] transition group-open:rotate-180" />
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
      <div className="rounded-xl border border-[#4a382a] bg-[#1d1712] p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7a742]">
              Wiki Navigation
            </p>
            <h2 className="mt-1 break-words font-display text-lg font-bold text-[#f6ead1]">
              Kingdom Chronicle
            </h2>
          </div>
          <Compass className="size-5 shrink-0 text-[#9e3e35]" />
        </div>
        <div className="mt-4 space-y-3">
          <NavGroups currentPath={currentPath} />
        </div>
        <p className="mt-4 border-[#4a382a] border-t pt-3 text-[#9f8b6b] text-xs">
          {routeCount} focused wiki routes
        </p>
      </div>

      {sectionLinks.length ? (
        <div className="rounded-xl border border-[#4a382a] bg-[#1d1712] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7a742]">
            On this page
          </p>
          <div className="mt-3 grid gap-2">
            {sectionLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="min-w-0 break-words rounded-lg border border-[#4a382a] bg-[#120f0c] px-3 py-2 text-[#c1ad8a] text-sm leading-6 hover:border-[#d7a742] hover:text-[#f6ead1]"
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
    <details className="group mt-5 rounded-xl border border-[#4a382a] bg-[#1d1712] p-4 lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-[#f6ead1] [&::-webkit-details-marker]:hidden">
        <span className="flex items-center gap-2">
          <Menu className="size-4 text-[#d7a742]" />
          Open wiki menu
          <Badge className="bg-[#9e3e35] text-[#120f0c]">{routeCount}</Badge>
        </span>
        <ChevronDown className="size-4 text-[#9e3e35] transition group-open:rotate-180" />
      </summary>
      <div className="mt-4 space-y-3 border-[#4a382a] border-t pt-4">
        <NavGroups currentPath={currentPath} />
        {sectionLinks.length ? (
          <details className="rounded-lg border border-[#4a382a] bg-[#120f0c] p-3">
            <summary className="cursor-pointer text-sm font-semibold text-[#f6ead1]">
              On this page
            </summary>
            <div className="mt-3 grid gap-2">
              {sectionLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="break-words rounded-lg border border-[#4a382a] px-3 py-2 text-[#c1ad8a] text-sm"
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
    {
      href: '/guides/training-and-recruiting',
      label: 'Training',
      icon: Dumbbell,
    },
    {
      href: '/guides/diplomacy-and-alliances',
      label: 'Alliance',
      icon: Handshake,
    },
    {
      href: '/guides/war-and-reinforcements',
      label: 'War',
      icon: Swords,
    },
    { href: '/guides/achievements', label: '18 Unlocks', icon: Trophy },
    { href: '/download', label: 'Steam', icon: Download },
  ];

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {routes.map((route) => (
        <LocaleLink
          key={route.href}
          href={route.href}
          className="inline-flex h-auto items-center gap-1.5 rounded-lg border border-[#604832] bg-[#120f0c]/85 px-2.5 py-1.5 text-[#f6ead1] text-xs transition hover:border-[#d7a742] hover:bg-[#2b2119] sm:text-sm"
        >
          <route.icon className="size-3.5 shrink-0 text-[#d7a742]" />
          {route.label}
        </LocaleLink>
      ))}
    </div>
  );
}

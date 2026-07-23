import { FaqSection } from '@/components/kingdomchronicle/faq-section';
import {
  MobileWikiNav,
  QuickWikiLinks,
  WikiRouteSidebar,
} from '@/components/kingdomchronicle/wiki-navigation';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getHomeContent,
  getLocalizedFeaturedGuides,
  getLocalizedGameFacts,
} from '@/data/kingdomchronicle/localized';
import { siteFacts } from '@/data/kingdomchronicle/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  Dumbbell,
  ExternalLink,
  Flag,
  Footprints,
  Gamepad2,
  Handshake,
  Landmark,
  ShieldCheck,
  Swords,
  Trophy,
  Users,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

const decisionRoutes = [
  {
    title: 'I need a first-turn plan',
    text: 'Fill officer seats, select an ally and prepare one early attack.',
    href: '/guides/beginner-guide',
    icon: Footprints,
    status: 'START',
  },
  {
    title: 'My army looks stronger than it fights',
    text: 'Recruit and train in the same turn so readiness returns to 100.',
    href: '/guides/training-and-recruiting',
    icon: Dumbbell,
    status: 'TRAIN',
  },
  {
    title: 'I need the right ally',
    text: 'Build trust with the faction that leaves your expansion lane open.',
    href: '/guides/diplomacy-and-alliances',
    icon: Handshake,
    status: 'ALLY',
  },
  {
    title: 'My war timing is unclear',
    text: 'Plan the sortie, warning turn, interception and allied support.',
    href: '/guides/war-and-reinforcements',
    icon: Swords,
    status: 'WAR',
  },
  {
    title: 'I need better officer jobs',
    text: 'Match skills and stats to search, training, diplomacy or battle.',
    href: '/guides/officer-skills',
    icon: Users,
    status: 'ROSTER',
  },
  {
    title: 'I want all 18 achievements',
    text: 'Clear each campaign, difficulty and long-term roster milestone.',
    href: '/guides/achievements',
    icon: Trophy,
    status: 'STEAM',
  },
] as const;

const topicModules = [
  {
    title: 'Build a state that can move',
    text: 'Create command capacity, trained soldiers and enough renown for the next battle.',
    icon: Landmark,
    links: [
      ['/guides/beginner-guide', 'Beginner plan'],
      ['/guides/training-and-recruiting', 'Training order'],
      ['/guides/renown-and-mobilization', 'Mobilization caps'],
    ],
  },
  {
    title: 'Turn diplomacy into force',
    text: 'Choose partners by geography, then use the two-turn warning window and reinforcement rules.',
    icon: Handshake,
    links: [
      ['/guides/diplomacy-and-alliances', 'Trust & alliances'],
      ['/guides/war-and-reinforcements', 'War timing'],
      ['/guides/troop-types', 'Six troop roles'],
    ],
  },
  {
    title: 'Complete the chronicle',
    text: 'Clear every map, grow the officer record and unlock custom creation.',
    icon: Flag,
    links: [
      ['/guides/campaigns-and-victory', 'Campaign victories'],
      ['/guides/officers-and-recruitment', 'Officer collection'],
      ['/guides/achievements', '18 achievements'],
    ],
  },
] as const;

export function KingdomChronicleHomePage({ locale }: { locale?: Locale }) {
  const content = getHomeContent(locale);
  const featured = getLocalizedFeaturedGuides(locale);
  const facts = getLocalizedGameFacts(locale);
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: siteFacts.siteName,
        url: siteFacts.domain,
        description: content.intro,
        inLanguage: 'en',
      },
      {
        '@type': 'Organization',
        name: siteFacts.siteName,
        url: siteFacts.domain,
        logo: `${siteFacts.domain}/logo.svg`,
      },
      {
        '@type': 'VideoGame',
        name: siteFacts.gameName,
        url: siteFacts.officialSteamUrl,
        image: `${siteFacts.domain}${siteFacts.officialCoverImage}`,
        datePublished: '2026-07-22',
        gamePlatform: ['Windows'],
        playMode: 'SinglePlayer',
        author: { '@type': 'Organization', name: siteFacts.creator },
        publisher: { '@type': 'Organization', name: siteFacts.publisher },
      },
      {
        '@type': 'VideoObject',
        name: 'Kingdom Chronicle developer North campaign playthrough',
        description:
          'An official uncut Easy playthrough of the North area campaign through alliance unification.',
        thumbnailUrl: `${siteFacts.domain}${siteFacts.officialCoverImage}`,
        uploadDate: siteFacts.officialTrailerPublishedAt,
        embedUrl: `https://www.youtube-nocookie.com/embed/${siteFacts.officialTrailerId}`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: content.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-[#120f0c] text-[#f6ead1]">
      <JsonLd data={graph} />

      <section className="relative overflow-hidden border-[#4a382a] border-b">
        <Image
          src={siteFacts.officialHeroImage}
          alt="Kingdom Chronicle full-continent campaign map from an official Steam screenshot"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,15,12,.98)_0%,rgba(18,15,12,.88)_44%,rgba(18,15,12,.22)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,#120f0c_100%)]" />

        <Container className="relative px-4 py-8 lg:py-10">
          <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,.72fr)]">
            <div className="min-w-0">
              <Badge className="border border-[#d7a742]/40 bg-[#1d1712]/90 text-[#f2c86b]">
                {content.badge}
              </Badge>
              <h1 className="mt-4 max-w-4xl font-display text-5xl font-black leading-[.94] tracking-[-.05em] md:text-7xl">
                Kingdom Chronicle <span className="text-[#9e3e35]">Wiki</span>
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#d2d0ca] md:text-lg">
                {content.intro}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-auto bg-[#9e3e35] px-5 py-3 font-bold text-[#120f0c] shadow-[4px_4px_0_#d7a742] hover:bg-[#b64a3f]"
                >
                  <LocaleLink href="/guides/beginner-guide">
                    {content.primaryCta}
                    <ArrowRight className="size-4 shrink-0" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto border-[#6a513c] bg-[#1d1712]/85 px-5 py-3 text-[#f6ead1] hover:bg-[#2b2119]"
                >
                  <LocaleLink href="/guides/training-and-recruiting">
                    {content.secondaryCta}
                  </LocaleLink>
                </Button>
              </div>
              <QuickWikiLinks className="mt-5" />
              <p className="mt-4 max-w-3xl text-sm leading-6 text-[#c1ad8a]">
                {content.scopeNote}
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#6a513c] bg-black shadow-[0_18px_70px_rgba(158,62,53,.2)]">
              <div className="flex items-center justify-between border-[#6a513c] border-b bg-[#1d1712] px-4 py-2">
                <span className="text-xs font-bold uppercase tracking-[.18em] text-[#f2c86b]">
                  Developer playthrough
                </span>
                <span className="inline-flex items-center gap-2 text-[#c1ad8a] text-xs">
                  <span className="size-2 rounded-full bg-[#9e3e35]" />
                  白猫斎
                </span>
              </div>
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube-nocookie.com/embed/${siteFacts.officialTrailerId}?rel=0`}
                title="Kingdom Chronicle developer North campaign playthrough"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-9 lg:py-12">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_272px]">
          <main className="min-w-0 space-y-9">
            <MobileWikiNav currentPath="/" locale={locale} />

            <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {facts.map((fact, index) => (
                <div
                  key={fact.label}
                  className="rounded-lg border border-[#4a382a] bg-[#1d1712] p-4"
                >
                  <p
                    className={
                      index % 2 === 0
                        ? 'text-xs font-bold uppercase tracking-[.16em] text-[#d7a742]'
                        : 'text-xs font-bold uppercase tracking-[.16em] text-[#d96a58]'
                    }
                  >
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#d4c09b]">
                    {fact.value}
                  </p>
                </div>
              ))}
            </section>

            <section>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-[#d7a742]">
                    Start here
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Solve the decision stalling your campaign
                  </h2>
                </div>
                <LocaleLink
                  href="/guides"
                  className="inline-flex items-center gap-2 text-[#f2c86b] text-sm font-semibold"
                >
                  All {featured.length ? 'guides' : 'routes'}{' '}
                  <ArrowRight className="size-4" />
                </LocaleLink>
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {decisionRoutes.map((route) => (
                  <LocaleLink
                    key={route.href}
                    href={route.href}
                    className="group flex min-w-0 gap-4 rounded-xl border border-[#4a382a] bg-[#1d1712] p-4 transition hover:-translate-y-0.5 hover:border-[#d7a742]"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#604832] bg-[#120f0c]">
                      <route.icon className="size-5 text-[#d7a742]" />
                    </span>
                    <span className="min-w-0">
                      <span className="text-[10px] font-bold tracking-[.18em] text-[#d96a58]">
                        {route.status}
                      </span>
                      <span className="mt-0.5 block font-display text-lg font-bold group-hover:text-[#f2c86b]">
                        {route.title}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-[#c1ad8a]">
                        {route.text}
                      </span>
                    </span>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3">
                <BookOpen className="size-6 text-[#9e3e35]" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-[#d7a742]">
                    Current guides
                  </p>
                  <h2 className="font-display text-3xl font-black">
                    Statecraft, war and officer decisions
                  </h2>
                </div>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {featured.map((guide) => (
                  <article
                    key={guide.slug}
                    className="group overflow-hidden rounded-xl border border-[#4a382a] bg-[#1d1712]"
                  >
                    <div className="relative aspect-video border-[#4a382a] border-b">
                      <Image
                        src={guide.coverImageUrl}
                        alt={`${guide.title} cover`}
                        fill
                        sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-300 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#120f0c] via-transparent to-transparent" />
                    </div>
                    <div className="p-4">
                      <Badge className="bg-[#2b2119] text-[#f2c86b]">
                        {guide.category}
                      </Badge>
                      <h3 className="mt-3 font-display text-xl font-bold">
                        {guide.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#c1ad8a]">
                        {guide.summary}
                      </p>
                      <LocaleLink
                        href={guide.path}
                        className="mt-4 inline-flex items-center gap-2 text-[#f2c86b] text-sm font-semibold"
                      >
                        Open guide <ArrowRight className="size-4" />
                      </LocaleLink>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="grid gap-4 xl:grid-cols-3">
              {topicModules.map((module) => (
                <div
                  key={module.title}
                  className="rounded-xl border border-[#4a382a] bg-[#1d1712] p-5"
                >
                  <module.icon className="size-6 text-[#9e3e35]" />
                  <h2 className="mt-4 font-display text-2xl font-black">
                    {module.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#c1ad8a]">
                    {module.text}
                  </p>
                  <div className="mt-4 grid gap-2">
                    {module.links.map(([href, label]) => (
                      <LocaleLink
                        key={href}
                        href={href}
                        className="flex min-w-0 items-center justify-between gap-3 rounded-lg border border-[#4a382a] bg-[#120f0c] px-3 py-2 text-sm text-[#d4c09b] hover:border-[#d7a742] hover:text-[#f6ead1]"
                      >
                        <span className="min-w-0 break-words">{label}</span>
                        <ArrowRight className="size-4 shrink-0 text-[#d7a742]" />
                      </LocaleLink>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            <section className="grid gap-5 md:grid-cols-2">
              <div className="rounded-xl border border-[#4a382a] bg-[#1d1712] p-6">
                <ShieldCheck className="size-7 text-[#9e3e35]" />
                <h2 className="mt-4 font-display text-2xl font-black">
                  Released-build facts
                </h2>
                <div className="mt-4 grid gap-2 text-sm leading-6 text-[#c1ad8a]">
                  <p>Released July 22, 2026.</p>
                  <p>Six troop roles · about 168 officers · 18 achievements.</p>
                  <p>Steam App 4855560 · Windows · single-player.</p>
                </div>
                <LocaleLink
                  href="/review"
                  className="mt-4 inline-flex items-center gap-2 text-[#d96a58] text-sm font-semibold"
                >
                  Decide whether to play now <ArrowRight className="size-4" />
                </LocaleLink>
              </div>
              <div className="rounded-xl border border-[#4a382a] bg-[#1d1712] p-6">
                <Gamepad2 className="size-7 text-[#d7a742]" />
                <h2 className="mt-4 font-display text-2xl font-black">
                  Official records
                </h2>
                <div className="mt-4 grid gap-2">
                  {[
                    ['Steam store', siteFacts.officialSteamUrl],
                    ['Steam achievements', siteFacts.officialAchievementsUrl],
                    ['Developer web manual', siteFacts.officialManualUrl],
                    ['Atelier KUSOGE', siteFacts.officialWebsiteUrl],
                  ].map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-lg border border-[#4a382a] bg-[#120f0c] px-4 py-3 text-sm text-[#d4c09b] hover:border-[#d7a742]"
                    >
                      {label} <ExternalLink className="size-4 text-[#d7a742]" />
                    </a>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-[#4a382a] bg-[#1d1712] p-5 md:p-7">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#d7a742]">
                Player question index
              </p>
              <h2 className="mt-2 font-display text-2xl font-black">
                Every supported query maps to a real answer
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {content.keywordRoutes.slice(0, 28).map((item) => (
                  <LocaleLink
                    key={`${item.keyword}-${item.route}`}
                    href={item.route}
                    className="rounded-full border border-[#4a382a] bg-[#120f0c] px-3 py-2 text-[#c1ad8a] text-xs hover:border-[#d7a742] hover:text-[#f6ead1]"
                  >
                    {item.keyword}
                  </LocaleLink>
                ))}
              </div>
            </section>

            <FaqSection items={content.faq} title="Kingdom Chronicle FAQ" />
          </main>

          <WikiRouteSidebar currentPath="/" locale={locale} />
        </div>
      </Container>
    </div>
  );
}

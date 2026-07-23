import { FaqSection } from '@/components/gurei/faq-section';
import {
  MobileWikiNav,
  QuickWikiLinks,
  WikiRouteSidebar,
} from '@/components/gurei/wiki-navigation';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getHomeContent,
  getLocalizedFeaturedGuides,
  getLocalizedGameFacts,
} from '@/data/gurei/localized';
import { siteFacts } from '@/data/gurei/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  ExternalLink,
  Footprints,
  Gamepad2,
  Ghost,
  HeartPulse,
  Route,
  ShieldCheck,
  Sparkles,
  Swords,
  Trophy,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

const decisionRoutes = [
  {
    title: 'I need a first boss',
    text: 'Test Catfish or Snake while their move sets are still readable.',
    href: '/guides/beginner-guide',
    icon: Footprints,
    status: 'START',
  },
  {
    title: 'My order keeps collapsing',
    text: 'Move your personal wall earlier and use each reward for a job.',
    href: '/guides/boss-order',
    icon: Route,
    status: 'ORDER',
  },
  {
    title: 'I want the full Kami list',
    text: 'Track all ten confirmed names without invented reward mappings.',
    href: '/guides/all-kami-bosses',
    icon: Ghost,
    status: 'ROSTER',
  },
  {
    title: 'My dodge timing feels late',
    text: 'Read one cue, reset spacing and keep the punish recoverable.',
    href: '/guides/combat-and-dodge',
    icon: Swords,
    status: 'COMBAT',
  },
  {
    title: 'I keep losing the run',
    text: 'Give every life one research question and redirect after two repeats.',
    href: '/guides/lives-and-runs',
    icon: HeartPulse,
    status: 'LIVES',
  },
  {
    title: 'I want all 42 unlocks',
    text: 'Use the official Steam names while hidden conditions stay honest.',
    href: '/guides/achievements',
    icon: Trophy,
    status: 'STEAM',
  },
] as const;

const topicModules = [
  {
    title: 'Build a route',
    text: 'Turn the opening bosses into powers and lives that solve the next matchup.',
    icon: Route,
    links: [
      ['/guides/beginner-guide', 'Beginner route'],
      ['/guides/boss-order', 'Boss order'],
      ['/guides/kami-powers', 'Power logic'],
    ],
  },
  {
    title: 'Read the fight',
    text: 'Keep the neutral loop clean as late scaling adds new attacks.',
    icon: Swords,
    links: [
      ['/guides/combat-and-dodge', 'Combat & dodge'],
      ['/guides/lives-and-runs', 'Lives & resets'],
      ['/guides/all-kami-bosses', 'All 10 Kami'],
    ],
  },
  {
    title: 'Finish the record',
    text: 'Track achievements, castle secrets and the supported Steam build.',
    icon: Sparkles,
    links: [
      ['/guides/achievements', '42 achievements'],
      ['/guides/secrets-and-encounters', 'Secrets & encounters'],
      ['/guides/steam-deck', 'Steam Deck'],
    ],
  },
] as const;

export function GureiHomePage({ locale }: { locale?: Locale }) {
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
        datePublished: '2026-07-23',
        gamePlatform: ['Windows', 'Steam Deck'],
        playMode: 'SinglePlayer',
        author: { '@type': 'Organization', name: siteFacts.creator },
        publisher: { '@type': 'Organization', name: siteFacts.publisher },
      },
      {
        '@type': 'VideoObject',
        name: 'Gurei official announcement trailer',
        description:
          'The official Gurei announcement trailer introduces Rei, the ten Kami boss rush, dynamic difficulty, and power-stealing combat.',
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
    <div className="min-h-screen overflow-x-clip bg-[#090a0c] text-[#f3f0e8]">
      <JsonLd data={graph} />

      <section className="relative overflow-hidden border-[#383b42] border-b">
        <Image
          src={siteFacts.officialCoverImage}
          alt="Gurei key art with Rei crossing a monochrome shrine forest"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-65"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,10,12,.98)_0%,rgba(9,10,12,.88)_44%,rgba(9,10,12,.22)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,#090a0c_100%)]" />

        <Container className="relative px-4 py-8 lg:py-10">
          <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,.72fr)]">
            <div className="min-w-0">
              <Badge className="border border-[#73e4ff]/40 bg-[#15171b]/90 text-[#9becff]">
                {content.badge}
              </Badge>
              <h1 className="mt-4 max-w-4xl font-display text-5xl font-black leading-[.94] tracking-[-.05em] md:text-7xl">
                Gurei <span className="text-[#ff6b5e]">Wiki</span>
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#d2d0ca] md:text-lg">
                {content.intro}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-auto bg-[#ff6b5e] px-5 py-3 font-bold text-[#090a0c] shadow-[4px_4px_0_#73e4ff] hover:bg-[#ff8b81]"
                >
                  <LocaleLink href="/guides/beginner-guide">
                    {content.primaryCta}
                    <ArrowRight className="size-4 shrink-0" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto border-[#595d66] bg-[#15171b]/85 px-5 py-3 text-[#f3f0e8] hover:bg-[#24272d]"
                >
                  <LocaleLink href="/guides/boss-order">
                    {content.secondaryCta}
                  </LocaleLink>
                </Button>
              </div>
              <QuickWikiLinks className="mt-5" />
              <p className="mt-4 max-w-3xl text-sm leading-6 text-[#aaa9a4]">
                {content.scopeNote}
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#595d66] bg-black shadow-[0_18px_70px_rgba(255,107,94,.2)]">
              <div className="flex items-center justify-between border-[#595d66] border-b bg-[#15171b] px-4 py-2">
                <span className="text-xs font-bold uppercase tracking-[.18em] text-[#9becff]">
                  Official trailer
                </span>
                <span className="inline-flex items-center gap-2 text-[#aaa9a4] text-xs">
                  <span className="size-2 rounded-full bg-[#ff6b5e]" />
                  Astrolabe Games
                </span>
              </div>
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube-nocookie.com/embed/${siteFacts.officialTrailerId}?rel=0`}
                title="Gurei official announcement trailer"
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
                  className="rounded-lg border border-[#383b42] bg-[#15171b] p-4"
                >
                  <p
                    className={
                      index % 2 === 0
                        ? 'text-xs font-bold uppercase tracking-[.16em] text-[#73e4ff]'
                        : 'text-xs font-bold uppercase tracking-[.16em] text-[#ff7f74]'
                    }
                  >
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#c4c2bc]">
                    {fact.value}
                  </p>
                </div>
              ))}
            </section>

            <section>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-[#73e4ff]">
                    Start here
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Solve the decision ending your run
                  </h2>
                </div>
                <LocaleLink
                  href="/guides"
                  className="inline-flex items-center gap-2 text-[#9becff] text-sm font-semibold"
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
                    className="group flex min-w-0 gap-4 rounded-xl border border-[#383b42] bg-[#15171b] p-4 transition hover:-translate-y-0.5 hover:border-[#73e4ff]"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#4b4f58] bg-[#090a0c]">
                      <route.icon className="size-5 text-[#73e4ff]" />
                    </span>
                    <span className="min-w-0">
                      <span className="text-[10px] font-bold tracking-[.18em] text-[#ff7f74]">
                        {route.status}
                      </span>
                      <span className="mt-0.5 block font-display text-lg font-bold group-hover:text-[#9becff]">
                        {route.title}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-[#aaa9a4]">
                        {route.text}
                      </span>
                    </span>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3">
                <BookOpen className="size-6 text-[#ff6b5e]" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-[#73e4ff]">
                    Current guides
                  </p>
                  <h2 className="font-display text-3xl font-black">
                    Routes, powers and run pressure
                  </h2>
                </div>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {featured.map((guide) => (
                  <article
                    key={guide.slug}
                    className="group overflow-hidden rounded-xl border border-[#383b42] bg-[#15171b]"
                  >
                    <div className="relative aspect-video border-[#383b42] border-b">
                      <Image
                        src={guide.coverImageUrl}
                        alt={`${guide.title} cover`}
                        fill
                        sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-300 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090a0c] via-transparent to-transparent" />
                    </div>
                    <div className="p-4">
                      <Badge className="bg-[#24272d] text-[#9becff]">
                        {guide.category}
                      </Badge>
                      <h3 className="mt-3 font-display text-xl font-bold">
                        {guide.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#aaa9a4]">
                        {guide.summary}
                      </p>
                      <LocaleLink
                        href={guide.path}
                        className="mt-4 inline-flex items-center gap-2 text-[#9becff] text-sm font-semibold"
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
                  className="rounded-xl border border-[#383b42] bg-[#15171b] p-5"
                >
                  <module.icon className="size-6 text-[#ff6b5e]" />
                  <h2 className="mt-4 font-display text-2xl font-black">
                    {module.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#aaa9a4]">
                    {module.text}
                  </p>
                  <div className="mt-4 grid gap-2">
                    {module.links.map(([href, label]) => (
                      <LocaleLink
                        key={href}
                        href={href}
                        className="flex min-w-0 items-center justify-between gap-3 rounded-lg border border-[#383b42] bg-[#090a0c] px-3 py-2 text-sm text-[#c4c2bc] hover:border-[#73e4ff] hover:text-[#f3f0e8]"
                      >
                        <span className="min-w-0 break-words">{label}</span>
                        <ArrowRight className="size-4 shrink-0 text-[#73e4ff]" />
                      </LocaleLink>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            <section className="grid gap-5 md:grid-cols-2">
              <div className="rounded-xl border border-[#383b42] bg-[#15171b] p-6">
                <ShieldCheck className="size-7 text-[#ff6b5e]" />
                <h2 className="mt-4 font-display text-2xl font-black">
                  Released-build facts
                </h2>
                <div className="mt-4 grid gap-2 text-sm leading-6 text-[#aaa9a4]">
                  <p>Released July 23, 2026 at 00:00 GMT+8.</p>
                  <p>10 primary Kami · single-player · 42 achievements.</p>
                  <p>Steam App 2191280 · Steam Deck Verified.</p>
                </div>
                <LocaleLink
                  href="/review"
                  className="mt-4 inline-flex items-center gap-2 text-[#ff7f74] text-sm font-semibold"
                >
                  Decide whether to play now <ArrowRight className="size-4" />
                </LocaleLink>
              </div>
              <div className="rounded-xl border border-[#383b42] bg-[#15171b] p-6">
                <Gamepad2 className="size-7 text-[#73e4ff]" />
                <h2 className="mt-4 font-display text-2xl font-black">
                  Official records
                </h2>
                <div className="mt-4 grid gap-2">
                  {[
                    ['Steam store', siteFacts.officialSteamUrl],
                    ['Steam achievements', siteFacts.officialAchievementsUrl],
                    ['Astrolabe Games', siteFacts.officialWebsiteUrl],
                    ['Official Discord', siteFacts.officialDiscordUrl],
                  ].map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-lg border border-[#383b42] bg-[#090a0c] px-4 py-3 text-sm text-[#c4c2bc] hover:border-[#73e4ff]"
                    >
                      {label} <ExternalLink className="size-4 text-[#73e4ff]" />
                    </a>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-[#383b42] bg-[#15171b] p-5 md:p-7">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#73e4ff]">
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
                    className="rounded-full border border-[#383b42] bg-[#090a0c] px-3 py-2 text-[#aaa9a4] text-xs hover:border-[#73e4ff] hover:text-[#f3f0e8]"
                  >
                    {item.keyword}
                  </LocaleLink>
                ))}
              </div>
            </section>

            <FaqSection items={content.faq} title="Gurei FAQ" />
          </main>

          <WikiRouteSidebar currentPath="/" locale={locale} />
        </div>
      </Container>
    </div>
  );
}

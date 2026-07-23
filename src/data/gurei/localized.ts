import type { Locale } from 'next-intl';
import { featuredGuides, getGuide, guides } from './guides';
import { gameFacts, keywordMatrix, siteDescription } from './sources';
import type { GameFact, Guide, GuideFaq } from './types';

export interface HomeContent {
  badge: string;
  metadataTitle: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  scopeNote: string;
  routeLabels: Record<string, string>;
  keywordRoutes: Array<{
    keyword: string;
    route: string;
    label: string;
    intent: string;
  }>;
  faq: GuideFaq[];
}

export interface GuidesIndexContent {
  badge: string;
  title: string;
  intro: string;
  readGuide: string;
  faq: GuideFaq[];
}

export interface GuideArticleUi {
  videoPrefix: string;
  videoSuffix: string;
  officialTitle: string;
  officialBody: string;
  officialLinkLabel: string;
  faqTitle: string;
  categoryLabels: Record<Guide['category'], string>;
  difficultyLabels: Record<Guide['difficulty'], string>;
}

export const routeLabels: Record<string, string> = {
  '/': 'Gurei Wiki',
  '/guides': 'Guide Hub',
  '/guides/beginner-guide': 'Beginner Guide',
  '/guides/boss-order': 'Boss Order',
  '/guides/all-kami-bosses': 'All 10 Kami',
  '/guides/kami-powers': 'Kami Powers',
  '/guides/combat-and-dodge': 'Combat & Dodge',
  '/guides/lives-and-runs': 'Lives & Runs',
  '/guides/achievements': 'All 42 Achievements',
  '/guides/secrets-and-encounters': 'Secrets & Encounters',
  '/guides/steam-deck': 'Steam Deck',
  '/system-requirements': 'System Requirements',
  '/review': 'Should You Buy?',
  '/download': 'Official Download',
  '/disclaimer': 'Disclaimer',
};

export function getLocalizedGuide(slug: string, _locale?: Locale | string) {
  return getGuide(slug);
}

export function getLocalizedGuides(_locale?: Locale | string) {
  return guides;
}

export function getLocalizedFeaturedGuides(_locale?: Locale | string) {
  return featuredGuides;
}

export function getLocalizedSiteDescription(_locale?: Locale | string) {
  return siteDescription;
}

export function getLocalizedGameFacts(_locale?: Locale | string): GameFact[] {
  return gameFacts;
}

export function getHomeContent(_locale?: Locale | string): HomeContent {
  const keywordRoutes = keywordMatrix
    .filter((matrixItem) => ['keep', 'watch'].includes(matrixItem.status))
    .filter((matrixItem) => matrixItem.route !== 'none')
    .map((matrixItem) => {
      const cleanRoute = matrixItem.route.split('#')[0];
      return {
        keyword: matrixItem.keyword,
        route: matrixItem.route,
        label: routeLabels[cleanRoute] ?? cleanRoute,
        intent: matrixItem.intent,
      };
    });

  return {
    badge: 'Launch guide hub · Checked July 23, 2026',
    metadataTitle: 'Gurei Wiki - Boss Order, Kami & Combat Guides',
    title: 'Gurei Wiki',
    intro:
      'Choose a first Kami, protect every life and build a route that stays readable as the remaining bosses grow stronger.',
    primaryCta: 'Start the beginner guide',
    secondaryCta: 'Plan your boss order',
    scopeNote:
      'Current scope: Steam App 2191280 full release. Old three-boss Demo footage is labeled and never treated as complete-game data.',
    routeLabels,
    keywordRoutes,
    faq: [
      {
        question: 'What is Gurei?',
        answer:
          'Gurei is a hand-drawn single-player 2D boss rush by Lobo Sagaz studio. Rei can challenge ten Kami in any order and absorbs a new power after every victory.',
      },
      {
        question: 'Which Gurei boss should I fight first?',
        answer:
          'Catfish or Snake are the strongest evidence-backed opening tests. Move your personal hardest fight earlier on the next run.',
      },
      {
        question: 'How does dynamic difficulty work?',
        answer:
          'Every victory increases the strength and possible attack complexity of the Kami that remain.',
      },
      {
        question: 'How many bosses are in Gurei?',
        answer:
          'The primary nonlinear route has ten Kami, with additional castle encounters and secrets.',
      },
      {
        question: 'How many Gurei achievements are there?',
        answer:
          'Steam currently exposes 42 achievement names, though nearly every public unlock description is hidden.',
      },
      {
        question: 'Does Gurei work on Steam Deck?',
        answer:
          'Yes. The developers announced official Steam Deck Verified status before launch.',
      },
    ],
  };
}

export function getGuidesIndexContent(
  _locale?: Locale | string
): GuidesIndexContent {
  return {
    badge: `${guides.length} focused guide pages`,
    title: 'Gurei Guide Hub',
    intro:
      'Choose the decision blocking your run: first boss, order, Kami roster, powers, dodge timing, lives, achievements, secrets, Steam Deck or the official install.',
    readGuide: 'Open guide',
    faq: [
      {
        question: 'Which Gurei guide should I read first?',
        answer:
          'Start with the beginner guide, then use the boss-order guide to move your personal hardest matchup earlier.',
      },
      {
        question: 'Are these guides based on the Demo?',
        answer:
          'The full Steam release is the primary scope. Demo media is used only for clearly labeled movement and three-boss visual context.',
      },
      {
        question: 'Why is there no codes or tier-list page?',
        answer:
          'Gurei has no verified redeem-code or ranked-roster system, so the site does not publish template filler.',
      },
    ],
  };
}

export function getGuideArticleUi(_locale?: Locale | string): GuideArticleUi {
  return {
    videoPrefix: 'Walkthrough cross-check:',
    videoSuffix:
      'The written guide separates Demo context, community observations and official full-game facts.',
    officialTitle: 'Check the live Steam build',
    officialBody:
      'Boss patterns, power mappings and platform behavior can change. When a launch source disagrees with the current game or official update, use the live Steam build as the authority.',
    officialLinkLabel: 'Open the official Steam page',
    faqTitle: 'Gurei guide FAQ',
    categoryLabels: {
      Start: 'Start Here',
      Bosses: 'Boss Routes',
      Combat: 'Combat',
      Runs: 'Run Systems',
      Achievements: 'Achievements',
      Secrets: 'Secrets',
      Platform: 'Platform',
      Reference: 'Reference',
      Review: 'Buying Guide',
      Safety: 'Official Install',
    },
    difficultyLabels: {
      Beginner: 'Beginner',
      'System guide': 'System guide',
      Checklist: 'Checklist',
      Status: 'Current status',
    },
  };
}

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
  '/': 'Kingdom Chronicle Wiki',
  '/guides': 'Guide Hub',
  '/guides/beginner-guide': 'Beginner Guide',
  '/guides/training-and-recruiting': 'Training & Recruiting',
  '/guides/diplomacy-and-alliances': 'Diplomacy & Alliances',
  '/guides/war-and-reinforcements': 'War & Reinforcements',
  '/guides/troop-types': 'Troop Types',
  '/guides/officer-skills': 'Officer Skills',
  '/guides/renown-and-mobilization': 'Renown & Mobilization',
  '/guides/officers-and-recruitment': 'Officers & Recruitment',
  '/guides/campaigns-and-victory': 'Campaigns & Victory',
  '/guides/achievements': 'All 18 Achievements',
  '/guides/casual-difficulty': 'Casual Difficulty',
  '/system-requirements': 'System Requirements',
  '/review': 'Steam vs Free',
  '/download': 'Official Download',
  '/disclaimer': 'Disclaimer',
};

export function getLocalizedGuide(slug: string, _locale?: Locale | string) {
  return getGuide(slug);
}

export function getLocalizedGuides(_locale?: Locale | string) {
  return guides.filter((guide) => guide.path.startsWith('/guides/'));
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
    metadataTitle:
      'Kingdom Chronicle Wiki - Beginner, Training & Strategy Guides',
    title: 'Kingdom Chronicle Wiki',
    intro:
      'Plan the opening turns, keep training at real fighting strength, choose alliances by geography and resolve each two-turn war before the campaign clock wins.',
    primaryCta: 'Start the beginner guide',
    secondaryCta: 'Fix training first',
    scopeNote:
      'Current scope: released Steam App 4855560. The older free BOOTH edition is separated whenever its rules or content may differ.',
    routeLabels,
    keywordRoutes,
    faq: [
      {
        question: 'What is Kingdom Chronicle?',
        answer:
          'Kingdom Chronicle is a turn-based fantasy strategy game about domestic rule, diplomacy, intrigue and war. A full-continent run is designed to finish in roughly one to two hours.',
      },
      {
        question: 'What should I do first?',
        answer:
          'Fill empty officer seats, choose an alliance direction, recruit soldiers and train in the same turn, then prepare an early attack instead of overbuilding.',
      },
      {
        question: 'How does training work?',
        answer:
          'Training directly scales comparable force strength. A force at 80 training fights at roughly 80 percent, so raw soldier count can be misleading.',
      },
      {
        question: 'How many troop types are there?',
        answer:
          'There are six: cavalry, archers, spears, swords, mages and heavy infantry.',
      },
      {
        question: 'How many officers and achievements are there?',
        answer:
          'Steam describes about 168 officers and currently lists 18 achievements.',
      },
      {
        question: 'Does Kingdom Chronicle have Casual difficulty?',
        answer:
          'Yes. Casual was added after launch, is easier than Easy and still counts compendium entries and clear status.',
      },
    ],
  };
}

export function getGuidesIndexContent(
  _locale?: Locale | string
): GuidesIndexContent {
  return {
    badge: `${guides.filter((guide) => guide.path.startsWith('/guides/')).length} focused strategy guides`,
    title: 'Kingdom Chronicle Guide Hub',
    intro:
      'Choose the campaign decision blocking you now: opening tempo, training, diplomacy, reinforcements, troop matchups, officer jobs, renown, victory conditions, achievements or Casual mode.',
    readGuide: 'Open guide',
    faq: [
      {
        question: 'Which Kingdom Chronicle guide should I read first?',
        answer:
          'Start with the beginner guide, then read training and recruiting before your next first attack.',
      },
      {
        question: 'Are these guides for the Steam version?',
        answer:
          'Yes. Steam App 4855560 is the canonical scope; free-edition differences are labeled.',
      },
      {
        question: 'Why is there no codes or tier-list page?',
        answer:
          'The official game has no verified redeem-code system, and current demand does not support a speculative officer tier list.',
      },
    ],
  };
}

export function getGuideArticleUi(_locale?: Locale | string): GuideArticleUi {
  return {
    videoPrefix: 'Developer playthrough:',
    videoSuffix:
      'Use it as a visual cross-check; the written guide presents the decisions independently.',
    officialTitle: 'Verify against the live Steam build',
    officialBody:
      'Difficulty balance, localized labels and update-sensitive values can change. When an older free-build note or community post disagrees with Steam App 4855560, use the current Steam build and developer update as authority.',
    officialLinkLabel: 'Open the official Steam page',
    faqTitle: 'Kingdom Chronicle guide FAQ',
    categoryLabels: {
      Start: 'Start Here',
      Economy: 'Economy & Readiness',
      Diplomacy: 'Diplomacy',
      Warfare: 'Warfare',
      Officers: 'Officers',
      Campaigns: 'Campaigns',
      Achievements: 'Achievements',
      Updates: 'Current Update',
      Platform: 'PC Reference',
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

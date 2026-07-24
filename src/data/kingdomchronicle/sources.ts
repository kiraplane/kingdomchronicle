import type {
  Achievement,
  DataSource,
  GameFact,
  KeywordMatrixItem,
} from './types';

export const checkedAt = '2026-07-24';

export const siteFacts = {
  siteName: 'Kingdom Chronicle Wiki',
  domain: 'https://www.kingdomchronicle.wiki',
  canonicalHost: 'www.kingdomchronicle.wiki',
  gameName: 'Kingdom Chronicle',
  creator: 'スタジオ白猫斎 / Studio Hakubyousai',
  publishers: ['くそげ工房 / Atelier KUSOGE'],
  publisher: 'くそげ工房 / Atelier KUSOGE',
  officialSteamUrl:
    'https://store.steampowered.com/app/4855560/Kingdom_Chronicle/',
  officialCommunityUrl: 'https://steamcommunity.com/app/4855560',
  officialGuidesUrl: 'https://steamcommunity.com/app/4855560/guides/',
  officialAchievementsUrl:
    'https://steamcommunity.com/stats/4855560/achievements/',
  officialWebsiteUrl: 'https://atelier-ksg.com/',
  officialManualUrl: 'https://atelier-ksg.com/kingdom-chronicle-web-munual/',
  officialTrainingArticleUrl:
    'https://atelier-ksg.com/2026/07/23/kingdom-chronicle-training/',
  officialXUrl: 'https://x.com/hakubyousai',
  officialYouTubeUrl:
    'https://www.youtube.com/channel/UCLtdqnLtpp_FGQFaLK7GxQg',
  supportEmail: 'hello@kingdomchronicle.wiki',
  releaseDate: 'July 22, 2026',
  steamAppId: '4855560',
  officialCoverImage: '/kingdomchronicle/key-art.jpg',
  officialHeroImage: '/kingdomchronicle/screenshots/1.jpg',
  officialScreenshot: '/kingdomchronicle/screenshots/4.jpg',
  officialTrailerId: 'nqmTjf2z6Yw',
  officialTrailerPublishedAt: '2026-07-23',
} as const;

export const siteDescription =
  'Kingdom Chronicle Wiki for opening turns, training, diplomacy, six troop types, officers, campaigns, achievements and the official Steam build.';

export const gameFacts: GameFact[] = [
  {
    label: 'Campaign pace',
    value:
      'A full-continent run is designed to finish in roughly one to two hours.',
  },
  {
    label: 'Turn limits',
    value: 'Area battles last 40 turns; the full-continent campaign lasts 80.',
  },
  {
    label: 'Officer roster',
    value:
      'About 168 officers can be recruited, poached or captured into the compendium.',
  },
  {
    label: 'Troop system',
    value:
      'Cavalry, archers, spears, swords, mages and heavy infantry fill six distinct roles.',
  },
  {
    label: 'Victory routes',
    value:
      'Win by unification, an alliance victory or leading when the final turn ends.',
  },
  {
    label: 'Current build',
    value:
      'Windows · four current difficulty options including the post-launch Casual mode · 18 Steam achievements.',
  },
];

export const achievements: Achievement[] = [
  {
    name: 'March to the North',
    officialDescription: 'Started the North campaign',
    kind: 'campaign',
  },
  {
    name: 'The Setting Sun',
    officialDescription: 'Suffered a defeat',
    kind: 'campaign',
  },
  {
    name: 'Conqueror of the North',
    officialDescription: 'Won the North campaign',
    kind: 'campaign',
  },
  {
    name: 'Voyage to the Eastern Sea',
    officialDescription: 'Started the Eastern Sea campaign',
    kind: 'campaign',
  },
  {
    name: 'Era of Peace',
    officialDescription: 'Won on Easy difficulty',
    kind: 'difficulty',
  },
  {
    name: 'Into the Central Plains',
    officialDescription: 'Started the Central Plains campaign',
    kind: 'campaign',
  },
  {
    name: 'Ambition for the Realm',
    officialDescription: 'Started the grand campaign',
    kind: 'campaign',
  },
  {
    name: 'Ruler of the Central Plains',
    officialDescription: 'Won the Central Plains campaign',
    kind: 'campaign',
  },
  {
    name: 'Master of the Eastern Sea',
    officialDescription: 'Won the Eastern Sea campaign',
    kind: 'campaign',
  },
  {
    name: 'Age of Heroes',
    officialDescription: 'Won on Normal difficulty',
    kind: 'difficulty',
  },
  {
    name: 'Birth of a Kingdom',
    officialDescription: 'Won the grand campaign',
    kind: 'campaign',
  },
  {
    name: 'The Creator',
    officialDescription: 'Created a custom officer',
    kind: 'custom',
  },
  {
    name: 'Threefold Conqueror',
    officialDescription: 'Clear the Grand Campaign 3 times.',
    kind: 'completion',
  },
  {
    name: 'Lord of Chaos',
    officialDescription: 'Won on Hard difficulty',
    kind: 'difficulty',
  },
  {
    name: 'Fivefold Conqueror',
    officialDescription: 'Clear the Grand Campaign 5 times.',
    kind: 'completion',
  },
  {
    name: 'Grand Compendium',
    officialDescription: 'Completed the officer collection',
    kind: 'completion',
  },
  {
    name: 'The Complete Chronicle',
    officialDescription: 'Unlock every other achievement',
    kind: 'completion',
  },
  {
    name: 'Master of Creation',
    officialDescription: 'Register 30 custom officers.',
    kind: 'custom',
  },
];

export const sources: DataSource[] = [
  {
    type: 'official',
    label: 'Kingdom Chronicle Steam store',
    url: siteFacts.officialSteamUrl,
    checkedAt,
    confidence: 'high',
    note: 'Primary identity, feature, media, platform and requirement record for Steam App 4855560.',
  },
  {
    type: 'developer',
    label: 'Atelier KUSOGE developer site',
    url: siteFacts.officialWebsiteUrl,
    checkedAt,
    confidence: 'high',
    note: 'Developer-linked site for version history, release notes and the free-versus-Steam boundary.',
  },
  {
    type: 'developer',
    label: 'Kingdom Chronicle web manual',
    url: siteFacts.officialManualUrl,
    checkedAt,
    confidence: 'high',
    note: 'Primary rules source for turn flow, skills, renown, diplomacy, war and reinforcements.',
  },
  {
    type: 'developer',
    label: 'Opening and training strategy article',
    url: siteFacts.officialTrainingArticleUrl,
    checkedAt,
    confidence: 'high',
    note: 'Developer-authored tactical guidance for early recruitment, alliance position, training and spending.',
  },
  {
    type: 'official',
    label: 'Kingdom Chronicle Steam Community',
    url: siteFacts.officialCommunityUrl,
    checkedAt,
    confidence: 'high',
    note: 'Current post-launch updates, including the new Casual difficulty and developer playthrough.',
  },
  {
    type: 'official',
    label: 'Steam global achievements',
    url: siteFacts.officialAchievementsUrl,
    checkedAt,
    confidence: 'high',
    note: 'Public source for all 18 current achievement names and descriptions.',
  },
  {
    type: 'youtube',
    label: 'Developer North campaign playthrough',
    url: 'https://www.youtube.com/watch?v=nqmTjf2z6Yw',
    checkedAt,
    confidence: 'high',
    note: 'Official uncut Easy run to alliance unification; used as supporting media, not article text.',
  },
  {
    type: 'search',
    label: 'Current web and YouTube result set',
    url: 'https://www.google.com/search?q=%22Kingdom+Chronicle%22+guide',
    checkedAt,
    confidence: 'medium',
    note: 'No mature dedicated English wiki found; plural-title results are mostly unrelated games.',
  },
];

const item = (
  keyword: string,
  intent: string,
  route: string,
  priority: KeywordMatrixItem['priority'],
  status: KeywordMatrixItem['status'],
  evidence: string,
  notes: string
): KeywordMatrixItem => ({
  keyword,
  intent,
  route,
  priority,
  status,
  evidence,
  notes,
});

export const keywordMatrix: KeywordMatrixItem[] = [
  item(
    'kingdom chronicle',
    'Game entity',
    '/',
    'P0',
    'keep',
    'Exact released Steam entity.',
    'Homepage head term.'
  ),
  item(
    'kingdom chronicle wiki',
    'Reference hub',
    '/',
    'P0',
    'keep',
    'No mature English wiki found.',
    'Use the homepage as an information-dense hub.'
  ),
  item(
    'kingdom chronicle steam',
    'Official product',
    '/download',
    'P0',
    'keep',
    'Only exact-game Google autocomplete expansion found.',
    'Route to the official Steam build.'
  ),
  item(
    'kingdom chronicle guide',
    'Guide index',
    '/guides',
    'P0',
    'keep',
    'Official manual and developer strategy article.',
    'Category hub.'
  ),
  item(
    'kingdom chronicle beginner guide',
    'First campaign plan',
    '/guides/beginner-guide',
    'P0',
    'keep',
    'Developer early-game article and Casual update.',
    'Answer the opening-turn decision.'
  ),
  item(
    'kingdom chronicle training',
    'Training and recruitment order',
    '/guides/training-and-recruiting',
    'P0',
    'keep',
    'Dedicated developer article.',
    'Explain recruit/conscript then train.'
  ),
  item(
    'kingdom chronicle diplomacy',
    'Goodwill, trust and alliance',
    '/guides/diplomacy-and-alliances',
    'P0',
    'keep',
    'Dedicated official manual page.',
    'Merge alliance intent.'
  ),
  item(
    'kingdom chronicle reinforcements',
    'War support rules',
    '/guides/war-and-reinforcements',
    'P0',
    'keep',
    'Dedicated official manual page.',
    'Explain defensive versus offensive support.'
  ),
  item(
    'kingdom chronicle troop types',
    'Matchup reference',
    '/guides/troop-types',
    'P0',
    'keep',
    'Steam lists all six roles.',
    'Decision table, not a tier list.'
  ),
  item(
    'kingdom chronicle skills',
    'Officer skill reference',
    '/guides/officer-skills',
    'P1',
    'keep',
    'Official manual lists 42 skills.',
    'Group into seven families.'
  ),
  item(
    'kingdom chronicle renown',
    'Mobilization cap',
    '/guides/renown-and-mobilization',
    'P1',
    'keep',
    'Dedicated official manual thresholds.',
    'Explain 30–80 deployment caps.'
  ),
  item(
    'kingdom chronicle officers',
    'Recruitment and collection',
    '/guides/officers-and-recruitment',
    'P1',
    'keep',
    'Steam emphasizes 168 officers.',
    'No bulk thin officer pages.'
  ),
  item(
    'kingdom chronicle victory conditions',
    'Campaign wins',
    '/guides/campaigns-and-victory',
    'P1',
    'keep',
    'Official manual defines three win paths.',
    'Include 40/80-turn limits.'
  ),
  item(
    'kingdom chronicle achievements',
    'Completion checklist',
    '/guides/achievements',
    'P1',
    'keep',
    'Steam exposes 18 achievements.',
    'Use official descriptions.'
  ),
  item(
    'kingdom chronicle casual difficulty',
    'Launch update',
    '/guides/casual-difficulty',
    'P1',
    'keep',
    'Current Steam Community update.',
    'Mark as update-sensitive.'
  ),
  item(
    'kingdom chronicle system requirements',
    'PC compatibility',
    '/system-requirements',
    'P1',
    'keep',
    'Official Steam requirements.',
    'Windows-only at check time.'
  ),
  item(
    'kingdom chronicle free version',
    'Version comparison',
    '/review',
    'P1',
    'keep',
    'Developer explains Steam additions.',
    'Keep buying guidance factual.'
  ),
  item(
    'kingdom chronicle review',
    'Purchase decision',
    '/review',
    'P2',
    'watch',
    'Only three Steam reviews at check time.',
    'Do not claim community consensus.'
  ),
  item(
    'kingdom chronicle codes',
    'Redeem codes',
    'none',
    'P3',
    'ignore',
    'No code system in official sources.',
    'Do not create a template page.'
  ),
  item(
    'kingdom chronicle tier list',
    'Roster ranking',
    'none',
    'P3',
    'ignore',
    'No current demand or complete roster data.',
    'Troop roles are not a tier list.'
  ),
  item(
    'kingdom chronicle reroll',
    'Gacha reset',
    'none',
    'P3',
    'ignore',
    'No gacha or reroll mechanic.',
    'Unrelated intent.'
  ),
  item(
    'kingdom chronicle apk',
    'Unsafe mobile install',
    '/download',
    'P3',
    'ignore',
    'Steam lists Windows only.',
    'Warn against APKs and repacks.'
  ),
  item(
    'kingdom chronicles walkthrough',
    'Unrelated plural-title game',
    'none',
    'P3',
    'ignore',
    'Google suggestions point to another game.',
    'Exact singular identity only.'
  ),
  item(
    '王国創世記 攻略',
    'Japanese guide',
    '/guides',
    'P2',
    'localize_later',
    'Relevant Japanese title and official sources.',
    'Launch English first.'
  ),
];

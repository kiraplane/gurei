import type {
  Achievement,
  DataSource,
  GameFact,
  KeywordMatrixItem,
} from './types';

export const checkedAt = '2026-08-20';

export const siteFacts = {
  siteName: 'Gurei Wiki',
  domain: 'https://www.gurei.wiki',
  canonicalHost: 'www.gurei.wiki',
  gameName: 'Gurei',
  creator: 'Lobo Sagaz studio',
  publishers: ['Astrolabe Games'],
  publisher: 'Astrolabe Games',
  officialSteamUrl: 'https://store.steampowered.com/app/2191280/Gurei/',
  officialDemoUrl: 'https://store.steampowered.com/app/3776080/Gurei_Demo/',
  officialCommunityUrl: 'https://steamcommunity.com/app/2191280/',
  officialGuidesUrl: 'https://steamcommunity.com/app/2191280/guides/',
  officialAchievementsUrl:
    'https://steamcommunity.com/stats/2191280/achievements',
  officialWebsiteUrl: 'https://www.astrolabe-games.ca/gurei',
  officialDiscordUrl: 'https://discord.gg/GqvKQWrMve',
  officialYouTubeUrl: 'https://www.youtube.com/@gureivideogame/',
  officialXUrl: 'https://x.com/LoboSagazStudio',
  supportEmail: 'hello@gurei.wiki',
  releaseDate: 'July 23, 2026 (00:00 GMT+8)',
  steamAppId: '2191280',
  demoAppId: '3776080',
  officialCoverImage: '/gurei/key-art.png',
  officialHeroImage: '/gurei/screenshots/2.jpg',
  officialScreenshot: '/gurei/screenshots/4.jpg',
  officialTrailerId: 'QVC1dRZ2nZk',
  officialTrailerPublishedAt: '2023-07-14',
} as const;

export const siteDescription =
  'Gurei Wiki for boss order, Kami powers, combat, lives, achievements, secrets, Steam Deck support and the official PC build.';

export const gameFacts: GameFact[] = [
  {
    label: 'Core structure',
    value:
      'A run-based 2D boss rush with ten Kami that can be challenged in any order.',
  },
  {
    label: 'Dynamic difficulty',
    value:
      'Every victory strengthens the remaining bosses and can add new attacks.',
  },
  {
    label: 'Power route',
    value:
      'Defeating a Kami grants Rei a new ability that changes later fights.',
  },
  {
    label: 'Run pressure',
    value: 'Boss wins add lives; losing every life ends the current sequence.',
  },
  {
    label: 'Achievements',
    value: 'Steam currently exposes 42 achievement names.',
  },
  {
    label: 'Platform',
    value: 'Single-player on Steam with official Steam Deck Verified status.',
  },
];

const hidden = 'Steam currently hides the unlock description.';

export const achievements: Achievement[] = [
  { name: 'The Catfish', officialDescription: hidden, kind: 'kami' },
  { name: 'The Snake', officialDescription: hidden, kind: 'kami' },
  { name: 'The Monkey', officialDescription: hidden, kind: 'kami' },
  { name: 'The Raven', officialDescription: hidden, kind: 'kami' },
  { name: 'The Cat', officialDescription: hidden, kind: 'kami' },
  { name: 'The Peafowl', officialDescription: hidden, kind: 'kami' },
  { name: 'The Bull', officialDescription: hidden, kind: 'kami' },
  { name: 'The Frog', officialDescription: hidden, kind: 'kami' },
  { name: 'The Dove', officialDescription: hidden, kind: 'kami' },
  { name: 'The Beetle', officialDescription: hidden, kind: 'kami' },
  { name: 'The Girl', officialDescription: hidden, kind: 'encounter' },
  { name: 'The Lady', officialDescription: hidden, kind: 'encounter' },
  { name: 'The Runner', officialDescription: hidden, kind: 'encounter' },
  { name: 'The Fan', officialDescription: hidden, kind: 'encounter' },
  { name: 'The Pillar Man', officialDescription: hidden, kind: 'encounter' },
  { name: 'The Weasels', officialDescription: hidden, kind: 'encounter' },
  { name: 'The Insurgent', officialDescription: hidden, kind: 'encounter' },
  { name: 'The Eyes', officialDescription: hidden, kind: 'encounter' },
  { name: 'The Boy', officialDescription: hidden, kind: 'encounter' },
  { name: 'The Giant', officialDescription: hidden, kind: 'encounter' },
  { name: 'The Drunkard', officialDescription: hidden, kind: 'encounter' },
  { name: 'The Statues', officialDescription: hidden, kind: 'encounter' },
  { name: 'The Grudge', officialDescription: hidden, kind: 'encounter' },
  {
    name: 'The Wrathful Demon',
    officialDescription: hidden,
    kind: 'encounter',
  },
  { name: 'The Scarer', officialDescription: hidden, kind: 'encounter' },
  {
    name: 'The Enigmatic Ascetic',
    officialDescription: hidden,
    kind: 'encounter',
  },
  { name: 'The Raccoon Dog', officialDescription: hidden, kind: 'encounter' },
  { name: 'The Dummy', officialDescription: hidden, kind: 'encounter' },
  {
    name: 'Honor?',
    officialDescription: 'Fulfill your duty.',
    kind: 'challenge',
  },
  { name: 'The Mighty Vessel', officialDescription: hidden, kind: 'hidden' },
  {
    name: 'The Enlightened Deity',
    officialDescription: hidden,
    kind: 'hidden',
  },
  { name: 'The Merciless Reaper', officialDescription: hidden, kind: 'hidden' },
  { name: 'The Guiding Banner', officialDescription: hidden, kind: 'hidden' },
  {
    name: 'The Vengeful Entertainer',
    officialDescription: hidden,
    kind: 'hidden',
  },
  { name: 'The Rabbit', officialDescription: hidden, kind: 'hidden' },
  { name: 'The Honored Blade', officialDescription: hidden, kind: 'hidden' },
  {
    name: 'The Ingenious Pretender',
    officialDescription: hidden,
    kind: 'hidden',
  },
  { name: 'The Dog', officialDescription: hidden, kind: 'hidden' },
  { name: 'The Elusive Flame', officialDescription: hidden, kind: 'hidden' },
  { name: 'The Priestess', officialDescription: hidden, kind: 'hidden' },
  { name: 'Mastery', officialDescription: hidden, kind: 'challenge' },
  { name: 'Acceptance', officialDescription: hidden, kind: 'challenge' },
];

export const sources: DataSource[] = [
  {
    type: 'official',
    label: 'Gurei Steam store',
    url: siteFacts.officialSteamUrl,
    checkedAt,
    confidence: 'high',
    note: 'Primary identity, feature, platform, system-requirement and media record for App 2191280.',
  },
  {
    type: 'developer',
    label: 'Astrolabe Games Gurei page',
    url: siteFacts.officialWebsiteUrl,
    checkedAt,
    confidence: 'high',
    note: 'Official publisher page used for the key art, launch video and core positioning.',
  },
  {
    type: 'official',
    label: 'Gurei Steam Community',
    url: siteFacts.officialCommunityUrl,
    checkedAt,
    confidence: 'high',
    note: 'Official launch, Demo-removal and Steam Deck updates plus current player questions.',
  },
  {
    type: 'official',
    label: 'Steam global achievements',
    url: siteFacts.officialAchievementsUrl,
    checkedAt,
    confidence: 'high',
    note: 'Public source for the current 42 names and visible description state.',
  },
  {
    type: 'competitor',
    label: 'Nintendo World Report launch review',
    url: 'https://www.nintendoworldreport.com/review/76507/gurei-switch-review',
    checkedAt,
    confidence: 'medium',
    note: 'Cross-check for ten bosses, lives and Catfish/Snake/Peafowl route examples.',
  },
  {
    type: 'competitor',
    label: 'Noisy Pixel Gurei review',
    url: 'https://noisypixel.net/gurei-review-indie-boss-rush/',
    checkedAt,
    confidence: 'medium',
    note: 'Launch review used only for buying-context and run-pressure cross-checks.',
  },
  {
    type: 'competitor',
    label: 'Digital Chumps Gurei review',
    url: 'https://digitalchumps.com/gurei-review-ps5/',
    checkedAt,
    confidence: 'medium',
    note: 'Secondary evidence for the Catfish reward; not treated as official data.',
  },
  {
    type: 'youtube',
    label: 'Astrolabe Games announcement trailer',
    url: 'https://www.youtube.com/watch?v=QVC1dRZ2nZk',
    checkedAt,
    confidence: 'high',
    note: 'Official publisher upload used as homepage trust media.',
  },
  {
    type: 'youtube',
    label: 'YashimaGaming full Demo walkthrough',
    url: 'https://www.youtube.com/watch?v=3vgZHvS69fQ',
    checkedAt,
    confidence: 'medium',
    note: 'Demo-only route and control cross-check; never treated as full-game coverage.',
  },
  {
    type: 'youtube',
    label: 'CrankyTemplar updated Demo bosses',
    url: 'https://www.youtube.com/watch?v=oAlWME9_bBs',
    checkedAt,
    confidence: 'medium',
    note: 'No-damage/max-difficulty visual reference for the three Demo bosses.',
  },
  {
    type: 'youtube',
    label: 'Official overview trailer',
    url: 'https://www.youtube.com/watch?v=sMx_Mkf1GkM',
    checkedAt,
    confidence: 'medium',
    note: 'Overview-media cross-check for the nonlinear boss and power structure.',
  },
  {
    type: 'youtube',
    label: 'All 17 NPC locations and trophies',
    url: 'https://www.youtube.com/watch?v=C56a8Kk8t2s',
    checkedAt,
    confidence: 'medium',
    note: 'Current full-release route with chapters for all 17 persistent NPC encounters.',
  },
  {
    type: 'youtube',
    label: 'Caterpillar locations and true ending',
    url: 'https://www.youtube.com/watch?v=S7mfv8ixX2Y',
    checkedAt,
    confidence: 'medium',
    note: 'Current full-release evidence for the normal-ending prerequisite, five Caterpillar encounters and final no-skill run.',
  },
  {
    type: 'search',
    label: 'Current web and YouTube result set',
    url: 'https://www.google.com/search?q=gurei+guide',
    checkedAt,
    confidence: 'medium',
    note: 'No mature dedicated Gurei wiki was found at launch; guide supply remains thin.',
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
    'gurei',
    'Find the game.',
    '/',
    'P0',
    'keep',
    'Official entity results.',
    'Homepage term.'
  ),
  item(
    'gurei wiki',
    'Find structured help.',
    '/',
    'P0',
    'keep',
    'No mature exact wiki found.',
    'Homepage wiki intent.'
  ),
  item(
    'gurei guide',
    'Browse help.',
    '/guides',
    'P0',
    'keep',
    'Thin exact-guide results.',
    'Guide hub.'
  ),
  item(
    'gurei beginner guide',
    'Start a run.',
    '/guides/beginner-guide',
    'P0',
    'keep',
    'Demo walkthrough and launch reviews.',
    'First-run decisions.'
  ),
  item(
    'gurei boss order',
    'Choose the next Kami.',
    '/guides/boss-order',
    'P0',
    'keep',
    'Core dynamic-difficulty mechanic.',
    'Adaptive route page.'
  ),
  item(
    'gurei bosses',
    'See the ten Kami.',
    '/guides/all-kami-bosses',
    'P0',
    'keep',
    'Steam achievements expose ten boss names.',
    'Boss roster page.'
  ),
  item(
    'gurei kami',
    'Understand the boss roster.',
    '/guides/all-kami-bosses',
    'P0',
    'keep',
    'Official terminology.',
    'Merged with bosses.'
  ),
  item(
    'gurei abilities',
    'Understand rewards.',
    '/guides/kami-powers',
    'P0',
    'keep',
    'Official store and overview media.',
    'Power decision page.'
  ),
  item(
    'gurei combat guide',
    'Improve execution.',
    '/guides/combat-and-dodge',
    'P0',
    'keep',
    'Precise combat is the core promise.',
    'Combat fundamentals.'
  ),
  item(
    'gurei lives',
    'Understand run pressure.',
    '/guides/lives-and-runs',
    'P1',
    'keep',
    'Launch review evidence.',
    'Merged with permadeath.'
  ),
  item(
    'gurei permadeath',
    'Understand resets.',
    '/guides/lives-and-runs',
    'P1',
    'keep',
    'Steam tag and reviews.',
    'Run economy.'
  ),
  item(
    'gurei achievements',
    'Track completion.',
    '/guides/achievements',
    'P0',
    'keep',
    'Steam exposes 42 names.',
    'Honest checklist.'
  ),
  item(
    'gurei secrets',
    'Find optional encounters.',
    '/guides/secrets-and-encounters',
    'P1',
    'keep',
    'Official store promises secrets.',
    'Spoiler-light route.'
  ),
  item(
    'gurei steam deck',
    'Check handheld support.',
    '/guides/steam-deck',
    'P1',
    'keep',
    'Official Steam Deck Verified news.',
    'Platform page.'
  ),
  item(
    'gurei system requirements',
    'Check PC support.',
    '/system-requirements',
    'P0',
    'keep',
    'Official Steam table.',
    'Hardware page.'
  ),
  item(
    'gurei review',
    'Make a buy decision.',
    '/review',
    'P1',
    'keep',
    'Launch-day review SERP.',
    'Decision page.'
  ),
  item(
    'gurei download',
    'Install safely.',
    '/download',
    'P0',
    'keep',
    'Steam is the official PC channel.',
    'Safety page.'
  ),
  item(
    'gurei demo',
    'Find the old Demo.',
    '/download#demo',
    'P1',
    'keep',
    'Official launch post says it was removed.',
    'Explain current status.'
  ),
  item(
    'gurei walkthrough',
    'Follow a full run.',
    '/guides',
    'P1',
    'watch',
    'Current videos are mostly Demo.',
    'Do not fake a full route.'
  ),
  item(
    'gurei ending',
    'Find a spoiler answer.',
    'none',
    'P2',
    'watch',
    'Insufficient reliable launch evidence.',
    'Add only after verification.'
  ),
  item(
    'gurei codes',
    'Redeem rewards.',
    'none',
    'P3',
    'ignore',
    'No code system.',
    'No filler page.'
  ),
  item(
    'gurei tier list',
    'Rank a roster.',
    'none',
    'P3',
    'ignore',
    'No ranked entity system.',
    'No filler page.'
  ),
  item(
    'gurei multiplayer',
    'Find co-op.',
    'none',
    'P3',
    'ignore',
    'Official listing is single-player.',
    'Do not imply co-op.'
  ),
  item(
    'gurei trainer cheats crack',
    'Find unsafe shortcuts.',
    '/download',
    'P3',
    'ignore',
    'Unsafe intent.',
    'Official install only.'
  ),
  item(
    '愚灵 攻略',
    'Chinese guide.',
    '/guides',
    'P2',
    'localize_later',
    'Official localized name.',
    'English core first.'
  ),
  item(
    '愚霊 攻略',
    'Japanese guide.',
    '/guides',
    'P2',
    'localize_later',
    'Official localized name.',
    'English core first.'
  ),
];

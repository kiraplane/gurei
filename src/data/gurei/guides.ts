import { achievements } from './sources';
import type { Guide, GuideVideo } from './types';

const checkedAt = '2026-08-04';
const publishedAt = '2026-07-23';

const videos = {
  demoWalkthrough: {
    id: '3vgZHvS69fQ',
    title: 'Gurei FULL DEMO Gameplay Walkthrough [4K 60FPS] - No Commentary',
    channel: 'YashimaGaming',
    url: 'https://www.youtube.com/watch?v=3vgZHvS69fQ',
    thumbnailUrl: '/gurei/guides/demo-walkthrough.jpg',
    publishedAt: '2025-07-13',
    checkedAt,
  },
  demoBosses: {
    id: 'oAlWME9_bBs',
    title: 'Gurei - Updated Demo Bosses (No Damage / Max Difficulty)',
    channel: 'CrankyTemplar',
    url: 'https://www.youtube.com/watch?v=oAlWME9_bBs',
    thumbnailUrl: '/gurei/guides/demo-bosses.jpg',
    publishedAt: '2025-06-12',
    checkedAt,
  },
  overview: {
    id: 'sMx_Mkf1GkM',
    title:
      'Gurei - Official Overview Trailer | The MIX | Kinda Funny Spring Showcase 2024',
    channel: 'GameTrailers',
    url: 'https://www.youtube.com/watch?v=sMx_Mkf1GkM',
    thumbnailUrl: '/gurei/guides/overview.jpg',
    publishedAt: '2024-03-18',
    checkedAt,
  },
  review: {
    id: '5YlKp5ZxneA',
    title: 'Gurei Review - Built Around Challenge, Backed by Smart Design',
    channel: 'Noisy Pixel',
    url: 'https://www.youtube.com/watch?v=5YlKp5ZxneA',
    thumbnailUrl: '/gurei/guides/review.jpg',
    publishedAt: '2026-07-21',
    checkedAt,
  },
  npcLocations: {
    id: 'C56a8Kk8t2s',
    title: 'Gurei - All 17 NPC locations and Walkthrough + Trophies',
    channel: 'Gamer Social Club',
    url: 'https://www.youtube.com/watch?v=C56a8Kk8t2s',
    thumbnailUrl: '/gurei/guides/npc-locations.jpg',
    publishedAt: '2026-07-23',
    viewCountLabel: '45 views at July 24 check',
    checkedAt,
  },
  trueEnding: {
    id: 'S7mfv8ixX2Y',
    title: 'Gurei - Caterpillar Locations and True Ending Guide',
    channel: 'Gamer Social Club',
    url: 'https://www.youtube.com/watch?v=S7mfv8ixX2Y',
    thumbnailUrl: '/gurei/guides/true-ending.jpg',
    publishedAt: '2026-07-23',
    viewCountLabel: '19 views at July 24 check',
    checkedAt,
  },
} satisfies Record<string, GuideVideo>;

const makeGuide = (guide: Omit<Guide, 'publishedAt' | 'updatedAt'>): Guide => ({
  publishedAt,
  updatedAt: publishedAt,
  ...guide,
});

export const guides: Guide[] = [
  makeGuide({
    slug: 'beginner-guide',
    path: '/guides/beginner-guide',
    title: 'Gurei Beginner Guide: Build a Winnable First Route',
    seoTitle: 'Gurei Beginner Guide: First Boss, Lives & Run Plan',
    seoDescription:
      'Start Gurei with an evidence-backed first-boss plan, combat priorities, life management and a route that adapts after every Kami victory.',
    summary:
      'Treat your opening runs as route research. Start with a readable Kami, earn one useful power, and move your personal wall forward before scaling turns it into the last fight.',
    category: 'Start',
    difficulty: 'Beginner',
    coverImageUrl: videos.demoWalkthrough.thumbnailUrl,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Official full-game rules plus a Demo walkthrough for movement and interface context. The video is not used as a ten-boss route.',
    videoSearchQueries: [
      'Gurei beginner guide',
      'Gurei full game walkthrough',
      'Gurei Demo walkthrough',
    ],
    video: videos.demoWalkthrough,
    tags: ['First run', 'Boss route', 'Lives'],
    relatedRoutes: [
      '/guides/boss-order',
      '/guides/combat-and-dodge',
      '/guides/lives-and-runs',
      '/guides/kami-powers',
    ],
    body: [
      {
        heading: 'Your first goal is information, not a perfect clear',
        paragraphs: [
          'Gurei is a run-based boss rush, not a conventional Metroidvania campaign. Ten Kami sit around a shared castle hub, and you decide which arena to enter next. A victory gives Rei another power, but it also strengthens every remaining opponent. Their defense rises and later versions can gain additional attacks or more demanding variations. That trade means progress is not simply “more upgrades equals easier.” Every reward also changes the cost of the fights you postponed.',
          'For the first few attempts, aim to answer three questions: which boss can you read without panic, which reward solves the next problem, and which fight becomes unbearable when delayed? A failed run is valuable when it identifies one of those answers. Repeating the same order without changing a decision usually teaches less than moving a difficult matchup earlier and testing what its easier form looks like.',
        ],
      },
      {
        heading: 'Pick Catfish or Snake as the first controlled test',
        paragraphs: [
          'Catfish and Snake are the best-supported early candidates from current launch evidence. Catfish is described as very manageable at the first difficulty level and much more punishing when saved for the final group. A launch review also identifies its reward as a temporary shield, which is useful while learning unfamiliar patterns. Snake begins with a small move set when fought early but can add several attacks after multiple victories. Either choice lets you see the dynamic-difficulty system without committing to a speculative full order.',
          'Choose Catfish if a defensive buffer would help you observe the next arena. Choose Snake if you prefer to learn a compact attack loop while your basic movement is still fresh. Peafowl is another reasonable early or middle target because its weapon behavior becomes more demanding later. These are starting points, not a universal ranking: if one of them is already easy for you, move your personal wall earlier instead.',
        ],
        bullets: [
          'Catfish first: a readable opening candidate and a reported temporary shield reward.',
          'Snake first: fewer attacks at low scaling, useful for learning dodge rhythm.',
          'Peafowl early-to-mid: avoid discovering its broad late weapon set at the end of a run.',
        ],
      },
      {
        heading: 'Win neutral before trying to win quickly',
        paragraphs: [
          'Enter a new arena and spend the first safe cycle identifying the boss signal, attack path and recovery window. Rei begins with sword attacks, a dodge, jumps and a downward stomp. Use those basics to stay in control before layering in a newly earned power. The biggest beginner trap is pressing for one extra hit after the safe punish window has closed. Gurei rewards precise repetition more than frantic damage.',
          'The dodge has a deliberate rhythm, so press it for a known attack rather than as a general panic button. If movement carries you into the next hazard, reset your position instead of immediately attacking. The stomp is useful only when the arena and pattern give you a safe landing. A clean two-hit punish repeated five times is worth more than one long string that spends a life.',
        ],
      },
      {
        heading: 'Spend new powers on route problems',
        paragraphs: [
          'After a victory, stop at the hub and define what the new ability changes. A shield can buy observation time, healing can stretch a life, a stronger dash can fix spacing, and an execution-style weapon can shorten specific punish windows. Do not equip a power just because it is new. Give it a job: block the attack you keep missing, cross a dangerous gap, recover from one mistake, or turn a short opening into real damage.',
          'The defeated Kami remain present and can comment on later fights. Treat those lines as hints and flavor, not as a replacement for reading the arena. Your next target should be the boss whose main problem the new power addresses. If the reward does not solve a current wall, challenge that wall earlier on the next run rather than carrying an unfocused loadout deeper.',
        ],
      },
      {
        heading: 'Use lives as attempts, not permission to trade',
        paragraphs: [
          'Current launch coverage reports that defeating a boss adds a life for later fights. When every life is gone, the current boss sequence ends and the run restarts. That economy rewards clean early wins: a boss you can defeat reliably both grants a power and expands the number of attempts available for unfamiliar arenas.',
          'Do not turn extra lives into a damage-trading budget. Each life is more valuable as a full pattern-learning attempt. If one attack repeatedly causes the loss, spend the next life watching only for that cue. When the game warns that the next attempt is your last chance, consider switching to a different boss if another reward could solve the matchup. A route change is part of the design, not a failure to commit.',
        ],
      },
      {
        heading: 'Keep the old Demo in the right box',
        paragraphs: [
          'The public Demo covered three Kami and was removed around the full launch because three choices could not represent the much larger ten-boss order system. Demo videos remain useful for seeing the visual language, movement and how a boss can scale, but they cannot prove a complete-game best order or every current reward.',
          'When a Demo tactic conflicts with the released build, trust the live game and the official Steam update first. Record the boss, its current position in your order, the attack that ended the life and the power you wished you had. After a few runs, that short log becomes a personal route guide—and it will be more reliable than blindly copying an order built for a different play style.',
        ],
      },
    ],
    faq: [
      {
        question: 'Which boss should I fight first in Gurei?',
        answer:
          'Catfish or Snake are the strongest evidence-backed opening tests. Catfish is easier early and reportedly grants a temporary shield; Snake has a smaller early move set.',
      },
      {
        question: 'Does progress carry between Gurei runs?',
        answer:
          'Boss-order progress and powers reset when the run ends. Launch coverage notes only minor spirit interactions outside that main run progression.',
      },
      {
        question: 'Is Gurei a Metroidvania?',
        answer:
          'No. It uses a connected castle and ability rewards, but its primary structure is a nonlinear, run-based boss rush.',
      },
    ],
  }),
  makeGuide({
    slug: 'boss-order',
    path: '/guides/boss-order',
    title: 'Gurei Boss Order: The Safest Adaptive Route',
    seoTitle: 'Gurei Boss Order Guide: Who to Fight First',
    seoDescription:
      'Use a practical Gurei boss order built around Catfish, Snake, Peafowl, dynamic scaling, power needs and your personal hardest matchup.',
    summary:
      'Open with Catfish or Snake, keep Peafowl out of the final stretch, then move your least readable Kami earlier instead of following a rigid ten-name list.',
    category: 'Bosses',
    difficulty: 'System guide',
    coverImageUrl: videos.demoBosses.thumbnailUrl,
    sourceStrategy: 'youtube_explainer',
    sourceNotes:
      'The selected video compares the three Demo bosses at high scaling. Full-game ordering uses official rules and launch-review cross-checks.',
    videoSearchQueries: [
      'Gurei boss order',
      'Gurei all bosses',
      'Gurei Demo bosses max difficulty',
    ],
    video: videos.demoBosses,
    tags: ['10 Kami', 'Dynamic difficulty', 'Route'],
    relatedRoutes: [
      '/guides/all-kami-bosses',
      '/guides/kami-powers',
      '/guides/lives-and-runs',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'The short answer: begin readable, then attack your wall',
        paragraphs: [
          'A safe learning order starts with Catfish or Snake, places Peafowl in the early-to-middle portion, and then moves whichever boss you personally read worst toward the front of the next run. That is more useful than pretending one fixed sequence is optimal for everyone. Gurei deliberately changes boss defense and attack complexity based on when you enter an arena, while every victory also adds a new ability to Rei.',
          'The order problem therefore has two competing curves. Your tool set grows after each win, but the opponents left alive become more capable. If you always postpone the same uncomfortable fight, you meet its hardest version while carrying the most run pressure. A good order makes early fights reliable, uses their rewards to solve specific later problems and prevents one personal nightmare from occupying the final slot.',
        ],
      },
      {
        heading: 'Use this opening route as a test, not a command',
        paragraphs: [
          'For a first route, fight Catfish first, then compare Snake and Peafowl. Catfish is documented as easy at the lowest scaling and notably more robust late. Its reported shield reward can create observation time. Snake begins with a compact pattern but develops more attacks after several wins. Peafowl can shift from offering a weapon choice to using a much broader arsenal when delayed.',
          'That produces a practical first-three plan: Catfish → Snake or Peafowl → the other one only if its reward and pattern still fit. If Catfish immediately feels harder than Snake, reverse the first two. If Peafowl is already clean, save it as a stable middle win. The point is to establish one dependable life-generating opener and discover which of the two remaining fights scales badly for you.',
        ],
        bullets: [
          'Default test: Catfish → Snake → Peafowl.',
          'Movement-first variant: Snake → Catfish → Peafowl.',
          'If one fight is already trivial, keep it as a middle-run life refill rather than forcing it first.',
        ],
      },
      {
        heading: 'Order the remaining seven by friction',
        paragraphs: [
          'After the opening trio, rank the remaining names—Monkey, Raven, Cat, Bull, Frog, Dove and Beetle—by friction rather than by an unsupported global tier. Friction means the mechanic that consumes lives: crowded movement, a hard-to-read cue, an arena edge, aerial tracking, delayed timing or a punish window that does not match your current powers. Put the worst friction earlier on the next run and leave the cleanest pattern for later scaling.',
          'Do not infer difficulty from the animal name or achievement order. The public Steam list confirms the ten names but does not publish an official sequence. Current community discussion describes Monkey as movement-heavy and cluttered for at least one player; that is a reason to test it early if movement is also your weakness, not proof that Monkey belongs at a fixed number for everyone.',
        ],
      },
      {
        heading: 'Re-evaluate immediately after every reward',
        paragraphs: [
          'A route is a chain of tools, not a static checklist. After each victory, ask what the reward does under pressure. If it creates a shield, you can afford to learn a busier arena. If it improves mobility, revisit a boss whose tracking or gap control was the problem. If it restores health, target the matchup where a single mistake used to end an otherwise controlled attempt.',
          'Avoid choosing the next boss merely because it is physically closest in the hub. The castle is designed to let you redirect. Look at the reward you just earned, the lives remaining and the easiest version of your unsolved wall. A useful power earned too late is almost the same as not having it, while an early hard fight may be dramatically simpler before its move set expands.',
        ],
      },
      {
        heading: 'Know when to abandon an order',
        paragraphs: [
          'Change the route when the same boss consumes two lives without revealing a new answer. That does not necessarily mean the boss is impossible; it may mean you arrived with the wrong tool or at the wrong scaling level. On the next run, move it one or two positions earlier. If it remains difficult at low scaling, pick an opener whose reward directly addresses the failure.',
          'Keep a tiny run note with four fields: boss, position, power loadout and losing attack. After three attempts, you will see whether the issue is scaling, execution or reward order. The best boss order is the one that converts your early fights into dependable lives, brings the hardest personal matchup forward and leaves a confident fight for the most demanding end of the run.',
        ],
      },
      {
        heading: 'Why Demo orders cannot solve the full game',
        paragraphs: [
          'The Demo allowed only six possible sequences across three bosses. The full ten-boss structure has 3,628,800 possible orders, which is why the developers removed the Demo around launch rather than presenting it as the complete experience. A no-damage Demo video is valuable for understanding how late scaling changes a familiar fight, but it cannot rank the seven Kami that were absent.',
          'Use Demo footage to learn the method: compare the same opponent early and late, notice how the attack vocabulary grows, and decide whether its reward is worth taking sooner. Use the released game to decide the actual ten-boss route. When a patch changes a move, reward or balance value, the live build overrides every launch-day order.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best Gurei boss order?',
        answer:
          'Start by testing Catfish, Snake and Peafowl early, then order the remaining bosses by your personal hardest pattern. A rigid universal order ignores dynamic scaling and power preferences.',
      },
      {
        question: 'Why should Catfish be early?',
        answer:
          'Launch coverage describes Catfish as easy at level one and much tougher when delayed. A secondary review reports a temporary shield reward.',
      },
      {
        question: 'How many boss orders are possible?',
        answer:
          'The developers cite 3,628,800 orders for the ten-boss full game.',
      },
    ],
  }),
  makeGuide({
    slug: 'all-kami-bosses',
    path: '/guides/all-kami-bosses',
    title: 'All Gurei Kami Bosses: The Confirmed Ten',
    seoTitle: 'All Gurei Bosses: 10 Kami Names & Route Notes',
    seoDescription:
      'See all ten confirmed Gurei Kami—Catfish, Snake, Monkey, Raven, Cat, Peafowl, Bull, Frog, Dove and Beetle—with honest route notes.',
    summary:
      'Steam exposes ten Kami achievements. Use the roster as a run-planning board while keeping unverified reward mappings and hidden patterns out of the guide.',
    category: 'Bosses',
    difficulty: 'Checklist',
    coverImageUrl: '/gurei/screenshots/1.jpg',
    sourceStrategy: 'official_and_developer',
    sourceNotes:
      'Names come from the official Steam achievement page; behavior notes are limited to official media and clearly cross-checked launch coverage.',
    videoSearchQueries: ['Gurei all bosses', 'Gurei Kami bosses'],
    tags: ['Boss list', 'Kami', 'Steam'],
    relatedRoutes: [
      '/guides/boss-order',
      '/guides/kami-powers',
      '/guides/combat-and-dodge',
      '/guides/achievements',
    ],
    body: [
      {
        heading: 'The ten Kami confirmed by Steam',
        paragraphs: [
          'Gurei has ten primary Kami in its nonlinear boss structure. The public Steam achievement page lists a matching first group of ten names: The Catfish, The Snake, The Monkey, The Raven, The Cat, The Peafowl, The Bull, The Frog, The Dove and The Beetle. The list is useful for tracking which arenas you have solved, but Steam hides the unlock descriptions and does not present those names as a recommended order.',
          'Each Kami can appear at different strength depending on how many victories came before it. Defeating one grants Rei a new ability and causes the remaining fights to scale. A roster page is therefore most useful as a decision board: mark whether a fight is readable early, what type of mistake ends it, and whether its reward solves another matchup.',
        ],
        bullets: achievements
          .filter((achievement) => achievement.kind === 'kami')
          .map((achievement) => achievement.name),
      },
      {
        heading: 'Catfish, Snake and Peafowl have the clearest launch notes',
        paragraphs: [
          'Catfish is an evidence-backed opening candidate. A launch review describes the orange fight as simple at the first scaling level and far more demanding when saved for the final four. A second review reports that its reward is a temporary shield. That combination makes Catfish valuable early for players who want a defensive tool and do not want to face its larger late arsenal.',
          'Snake begins with roughly two attacks when fought early and can expand to four or five after several victories. Peafowl changes how its weapons are presented: an early version can give the player a choice, while a late version may bring the full armament. These examples show why “boss difficulty” cannot be separated from route position.',
        ],
      },
      {
        heading: 'Treat Monkey, Raven, Cat and Bull as scouting fights first',
        paragraphs: [
          'Public launch evidence is thinner for the middle of the roster. Official social material depicts Monkey using clones, and current player discussion calls the fight movement-heavy. Official promotional clips also show the Bull as an aggressive space-control threat. Those clues tell you what to observe, but they are not enough to publish exact frame data, a fixed route position or a complete reward mapping.',
          'Raven and Cat likewise need released-build verification before this wiki assigns specific powers. On the first encounter, focus on the arena, the attack cue that travels farthest and the safest neutral position. If the fight is hard to parse at low scaling, move it earlier next run. If the pattern is already comfortable, reserve it as a dependable later win.',
        ],
      },
      {
        heading: 'Frog, Dove and Beetle complete the primary roster',
        paragraphs: [
          'Frog, Dove and Beetle are the final three names in Steam’s primary Kami achievement block. Their presence is official, but public descriptions remain hidden. Avoid filling the gap with guesses from animal mythology or similarly named enemies in other games. Gurei’s value comes from distinct boss patterns, and a wrong reward or location is worse than an honest limited note on launch day.',
          'Use the in-game statue and hub routes to identify the corresponding arenas. Record the color, approach path and acquired ability after a confirmed victory. This wiki can later split individual boss guides when a current full-game video, official update or repeatable player test supports useful tactics beyond a name and screenshot.',
        ],
      },
      {
        heading: 'Build a personal Kami board',
        paragraphs: [
          'For every boss, track four states: unseen, readable, reliable and late-ready. “Readable” means you can identify the cue before taking damage. “Reliable” means you can win without spending more than one life at the current route position. “Late-ready” means the expanded move set is still manageable after several victories. That language is more actionable than a generic S-to-D tier.',
          'Add the reward only after you have verified it in the released build. Then tag its job as defense, mobility, sustain, execution or utility. A route should pair a reliable early Kami with a power that fixes the next unreadable fight. As the community documents the full mapping, the roster can become a stronger route planner without pretending launch-day gaps are solved.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many bosses are in Gurei?',
        answer:
          'The primary nonlinear route has ten Kami. Steam lists ten matching boss-name achievements.',
      },
      {
        question: 'What are all ten Gurei bosses?',
        answer:
          'Catfish, Snake, Monkey, Raven, Cat, Peafowl, Bull, Frog, Dove and Beetle.',
      },
      {
        question: 'Are the bosses fought in a fixed order?',
        answer:
          'No. You choose the order, and each victory makes the remaining fights stronger while giving Rei a new power.',
      },
    ],
  }),
  makeGuide({
    slug: 'kami-powers',
    path: '/guides/kami-powers',
    title: 'Gurei Kami Powers: Choose Rewards by Function',
    seoTitle: 'Gurei Abilities Guide: Kami Powers & Route Logic',
    seoDescription:
      'Understand Gurei powers by defense, mobility, healing and execution value, then choose the next Kami based on the fight your new tool can solve.',
    summary:
      'A new ability matters only when it has a job. Classify each reward by defense, movement, sustain or damage, then route toward the boss that exposes that weakness.',
    category: 'Combat',
    difficulty: 'System guide',
    coverImageUrl: videos.overview.thumbnailUrl,
    sourceStrategy: 'official_and_youtube',
    sourceNotes:
      'Official store language confirms stronger dash, execution weapon and healing examples. Exact full mapping remains intentionally limited.',
    videoSearchQueries: [
      'Gurei abilities',
      'Gurei powers',
      'Gurei overview trailer',
    ],
    video: videos.overview,
    tags: ['Abilities', 'Rewards', 'Build'],
    relatedRoutes: [
      '/guides/boss-order',
      '/guides/all-kami-bosses',
      '/guides/combat-and-dodge',
      '/guides/lives-and-runs',
    ],
    body: [
      {
        heading: 'Powers are route tools, not permanent progression',
        paragraphs: [
          'Every defeated Kami adds a new skill to Rei’s current run. Official examples include a stronger dash, a weapon capable of executing enemies and a healing ability. Launch coverage also reports a temporary shield reward. These powers deepen the combat kit, but they do not remove the central trade: the remaining bosses scale after each victory, and the run can still end when all lives are spent.',
          'The useful question is not “which power is strongest?” It is “which power removes the failure that blocks my next fight?” A defensive tool has enormous value while learning an unreadable pattern, but less value in a fight you already complete cleanly. Mobility can be the best damage upgrade when it creates a punish window that basic movement could not reach.',
        ],
      },
      {
        heading: 'Classify each reward before choosing the next arena',
        paragraphs: [
          'Put new abilities into one primary bucket: defense, mobility, sustain, execution or utility. Defense absorbs or deflects a mistake. Mobility changes spacing and access. Sustain recovers from damage. Execution converts a short opening into a faster phase. Utility controls an unusual mechanic or creates information. The same power can touch two buckets, but naming its main job prevents unfocused use.',
          'After returning to the hub, identify one unsolved boss whose problem matches the bucket. A shield should lead toward a pattern you need time to observe. A stronger dash should lead toward tracking, distance or arena-control pressure. Healing should lead toward a long fight where one small mistake ruins an otherwise stable attempt. An execution tool should lead toward a boss with brief but repeatable punish windows.',
        ],
        bullets: [
          'Defense: buy observation time and reduce the cost of one missed cue.',
          'Mobility: cross danger, reset spacing or reach a punish window.',
          'Sustain: extend a controlled attempt rather than excuse repeated trades.',
          'Execution: shorten exposed phases without committing to unsafe strings.',
          'Utility: solve a mechanic only after confirming what the tool actually changes.',
        ],
      },
      {
        heading: 'Do not let a new button damage your neutral game',
        paragraphs: [
          'A common route failure begins immediately after a win: the player forces the new ability into every interaction and stops respecting the basics. Test a reward in a low-pressure space or during a clearly safe opening. Learn its startup, reach, recovery and resource behavior before relying on it during a last-life attempt.',
          'Sword attacks, dodge timing, jumps and the downward stomp remain the foundation. A power should shorten a decision, not add three new guesses. If using it makes your camera, position or recovery less predictable, return to the basic punish until the right cue appears. Gurei’s combat rewards clean adaptation more than novelty.',
        ],
      },
      {
        heading: 'Build sequences around dependencies',
        paragraphs: [
          'Some powers become valuable earlier because later fights expose their specific function. If Catfish’s reported temporary shield is confirmed in your build, taking it early creates a defensive platform for scouting another boss. If a mobility reward lets you evade a crowded pattern, route it before the arena where basic dodge distance is insufficient. A healing reward belongs before a long consistency test, not after you have already cleared it.',
          'Write routes as dependencies: “earn defensive tool → scout unreadable boss,” or “earn movement tool → challenge tracking boss.” This is more robust than naming a fixed ten-boss sequence because the dependency remains useful even when balance shifts. If a patch changes the reward mapping, update the first half of the dependency and keep the decision logic.',
        ],
      },
      {
        heading: 'Separate confirmed examples from the full mapping',
        paragraphs: [
          'The official store confirms categories of powers but does not publicly list a complete boss-to-ability table. Steam achievement descriptions are also hidden. Until the released build or official material verifies each reward, a complete mapping would risk importing Demo details, preview changes or simple guesses into a current guide.',
          'Use this page as a power-selection method today. Verify the exact reward in your own run, then pair it with the next problem. As stable full-game sources appear, individual mappings can be added with a checked date. The live game remains the authority when a launch review, older video or wiki note disagrees.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do you get new abilities in Gurei?',
        answer:
          'Defeat a Kami during the current run. Rei absorbs a new power, and the remaining bosses become stronger.',
      },
      {
        question: 'What kinds of powers are in Gurei?',
        answer:
          'Official examples include a stronger dash, healing and an execution-capable weapon. Launch coverage also reports a temporary shield.',
      },
      {
        question: 'Do Gurei powers carry over after a failed run?',
        answer:
          'The main boss-route powers are part of the current run and reset when that sequence ends.',
      },
    ],
  }),
  makeGuide({
    slug: 'combat-and-dodge',
    path: '/guides/combat-and-dodge',
    title: 'Gurei Combat Guide: Dodge for the Cue, Not the Fear',
    seoTitle: 'Gurei Combat Guide: Dodge Timing, Stomp & Punishes',
    seoDescription:
      'Improve Gurei combat with cue-based dodges, safe sword punishes, controlled stomps, spacing resets and a method for learning scaled boss patterns.',
    summary:
      'Reduce each fight to one cue, one safe response and one repeatable punish. New powers expand that loop; they should never replace it.',
    category: 'Combat',
    difficulty: 'System guide',
    coverImageUrl: videos.overview.thumbnailUrl,
    sourceStrategy: 'popular_youtube',
    sourceNotes:
      'Official mechanic descriptions plus overview footage; no frame-perfect claims or invented inputs.',
    videoSearchQueries: [
      'Gurei combat guide',
      'Gurei dodge timing',
      'Gurei gameplay overview',
    ],
    video: videos.overview,
    tags: ['Dodge', 'Sword', 'Stomp'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/boss-order',
      '/guides/kami-powers',
      '/guides/lives-and-runs',
    ],
    body: [
      {
        heading: 'Turn every boss into a three-part loop',
        paragraphs: [
          'Gurei’s presentation can look fast, but the reliable combat loop is simple: read the cue, move through the threat, then take the safe punish. Sword attacks, dodges, jumps and downward stomps give Rei enough tools to learn neutral before a Kami reward is added. The difficulty comes from discipline and from later versions of a boss adding attacks to the vocabulary.',
          'Pick one attack that repeatedly hits you and ignore damage for a moment. Watch where the cue begins, where the threat travels and when the boss becomes actionable again. Once the response is stable, add one punish. This isolates the real timing. Swinging constantly hides whether the mistake came from a late dodge, bad spacing or an attack recovery that trapped you.',
        ],
      },
      {
        heading: 'Dodge a known attack, not general danger',
        paragraphs: [
          'A panic dodge spends movement before the attack is committed and can place Rei inside the next hit. Wait for the recognizable visual or motion cue, then dodge with a destination. The destination matters as much as the invulnerable moment: finish where the arena is readable and where the boss cannot immediately pin you against an edge.',
          'If a dodge feels delayed, test it from neutral without also attacking. Launch coverage notes that the rhythm can feel deliberate rather than instant. Avoid buffering a long sword string when the next cue is close. Your best defensive upgrade is often ending the punish one hit earlier so the dodge begins from a clean state.',
        ],
        bullets: [
          'Name the cue before pressing dodge.',
          'Choose the landing side before the attack reaches Rei.',
          'End offense early enough to keep the defensive input available.',
          'Reset toward open space rather than chasing the boss after every pass.',
        ],
      },
      {
        heading: 'Use short punishes until the pattern proves more',
        paragraphs: [
          'Start with the smallest sword sequence that always recovers before the next attack. Repeat it until the phase is stable. Only add damage when the boss has a longer confirmed recovery or a new power safely extends reach. The goal is not to maximize one opening; it is to preserve every future opening by keeping the current life.',
          'A boss that scales late may reduce the time between threats or add a follow-up to a previously safe moment. When a familiar punish suddenly fails, remove the last hit and re-observe. Do not assume the input was bad. Dynamic difficulty can change the fight’s move set, so your early version of the pattern is a starting hypothesis rather than a permanent script.',
        ],
      },
      {
        heading: 'Stomp only when the landing is part of the plan',
        paragraphs: [
          'The downward stomp can change vertical position and create offense, but it also commits Rei to a landing. Use it when you have seen the ground threat finish and know where the boss will be. Avoid stomping merely because you are above an enemy; an unknown follow-up can turn the landing into a guaranteed loss.',
          'Think of jump and stomp as spacing tools first. A jump can let an attack pass without surrendering the whole arena, while a stomp can return quickly when the lane is clear. If the camera, effects or clones make the landing uncertain, stay with horizontal movement until the field simplifies.',
        ],
      },
      {
        heading: 'Layer a power onto one solved moment',
        paragraphs: [
          'New Kami powers are safest when attached to a moment you already understand. Use a shield before the cue that still causes one mistake, a mobility skill to cross a specific lane, healing after the arena is stable, or an execution tool during a confirmed exposure. Testing several new uses in one life makes it impossible to know which decision helped.',
          'If the power has recovery, account for it like a sword attack. If it changes Rei’s position, choose the destination like a dodge. If it consumes or regenerates a resource, observe one full cycle before depending on it. The basic loop remains the same: cue, response, punish. The power should make one part safer or more effective.',
        ],
      },
      {
        heading: 'Review a lost life in ten seconds',
        paragraphs: [
          'After a loss, name only the first irreversible mistake. “I took damage” is too broad. Better notes are “attacked after the second cue,” “dodged toward the wall,” “stomped before the ground wave ended,” or “used healing while the boss was active.” Pick one correction for the next life and keep everything else unchanged.',
          'When two lives disappear to the same unsolved cue, consider leaving the arena and changing route. Another power or a lower scaling position on the next run may create the learning space you need. Gurei expects route adaptation; insisting on an unproductive matchup is not the same as practicing it well.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do I get better at dodging in Gurei?',
        answer:
          'Tie the dodge to one named boss cue, finish your punish early and choose where Rei should land before pressing the input.',
      },
      {
        question: 'Should I use long sword combos?',
        answer:
          'Only after the recovery window is confirmed. Short repeatable punishes preserve lives and remain safer when later scaling adds follow-ups.',
      },
      {
        question: 'What are Rei’s basic combat tools?',
        answer:
          'Official descriptions identify sword attacks, dodges, jumps and downward stomps, with more abilities earned from defeated Kami.',
      },
    ],
  }),
  makeGuide({
    slug: 'lives-and-runs',
    path: '/guides/lives-and-runs',
    title: 'Gurei Lives and Runs: Make Every Attempt Teach You',
    seoTitle: 'Gurei Lives & Permadeath Guide: Runs and Resets',
    seoDescription:
      'Understand Gurei lives, boss-win rewards, run resets and last-chance decisions so each failed attempt improves the next boss order.',
    summary:
      'Boss victories add attempts, but spending lives to force damage destroys their value. Use each life to isolate one pattern and change route when the same answer fails twice.',
    category: 'Runs',
    difficulty: 'System guide',
    coverImageUrl: '/gurei/screenshots/5.jpg',
    sourceStrategy: 'community_crosscheck',
    sourceNotes:
      'Run behavior is cross-checked from launch reviews and Steam tags; exact future patch behavior should be verified in the live build.',
    videoSearchQueries: [
      'Gurei permadeath',
      'Gurei lives guide',
      'Gurei run reset',
    ],
    tags: ['Lives', 'Permadeath', 'Reset'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/boss-order',
      '/guides/combat-and-dodge',
      '/guides/kami-powers',
    ],
    body: [
      {
        heading: 'A life is a complete learning attempt',
        paragraphs: [
          'Gurei uses limited lives inside a boss-order run. Current launch coverage reports that a successful boss fight adds another life, while losing the entire stock ends the sequence and returns you to a fresh route. Powers earned from the defeated Kami belong to that run. Minor interactions in the castle may persist, but the main combat progression does not become a permanent upgrade ladder.',
          'That makes a clean early boss doubly valuable: it grants a power and expands the number of full attempts available later. The wrong conclusion is that extra lives are disposable health bars. Trading damage to finish one fight can leave you without enough attempts to learn the next scaled pattern.',
        ],
      },
      {
        heading: 'Protect the life before protecting the route',
        paragraphs: [
          'When a fight becomes unstable, stop following the planned damage sequence. Return to neutral, restore spacing and wait for a known cue. A route is only useful while it generates information and victories. If preserving the written order requires gambling the last life, the order has stopped serving you.',
          'The game’s last-chance warning is a decision point. Ask whether the current boss is close to solved, whether a different available boss has a cleaner pattern, and whether another reward would directly address the problem. Leaving can be the correct move. The hub and nonlinear structure exist so the route can adapt.',
        ],
      },
      {
        heading: 'Give each life one research question',
        paragraphs: [
          'Use the first attempt to map the attack vocabulary. Use the next to test one response to the most dangerous cue. Use a later attempt to add damage. If you try to learn movement, a new power, a new punish and an unfamiliar late phase simultaneously, the loss does not reveal which assumption was wrong.',
          'A useful research question is specific: “Can I dodge through the second sweep and finish in open space?” or “Does the shield survive the follow-up?” Once answered, keep the result and move to the next question. This turns a limited-life system into structured practice rather than a series of emotional retries.',
        ],
        bullets: [
          'Attempt one: identify cues and safe lanes.',
          'Attempt two: solve the attack that ended attempt one.',
          'Attempt three: add one punish or one power interaction.',
          'After two identical losses: change route position or acquire a matching tool.',
        ],
      },
      {
        heading: 'Reset with a reason',
        paragraphs: [
          'A run ending is not automatically evidence that the full order was bad. Review the first boss that consumed more than one life, the position where it appeared and the power you lacked. Move that boss earlier by one or two places, or choose an opener whose reward targets the failure. Keep the rest of the route stable so the change can be evaluated.',
          'Do not restart repeatedly for a flawless opening unless you are specifically practicing consistency. A slightly imperfect early win can still teach you how a reward behaves and whether the next matchup improves. Reset when the route no longer answers a useful question, not simply because one hit was taken.',
        ],
      },
      {
        heading: 'Separate run mastery from permanent collection',
        paragraphs: [
          'The public achievement list contains many encounter and challenge names beyond the ten Kami. Those goals may encourage exploration or unusual decisions, but they should not be mistaken for permanent combat power. First build a repeatable route through the boss system. Then use later runs to investigate optional encounters and hidden conditions.',
          'This order protects both learning and enjoyment. Chasing an opaque achievement while still struggling with basic lives creates two unknowns at once. Once your early route produces a stable life reserve, the castle becomes much safer to explore for side objectives and secrets.',
        ],
      },
      {
        heading: 'Patch notes outrank launch habits',
        paragraphs: [
          'Run economy, boss rewards and balance can change after release. If the number of lives, carry-over behavior or a reward differs from this launch guide, use the current in-game explanation and official Steam update. The strategic principle still holds: each limited attempt should answer one question, and a route should protect the ability to keep learning.',
          'Maintain a simple dated route note rather than a permanent “best build.” Record the current version, opening boss, life losses and the power sequence. That makes it easy to identify whether a future patch changed the system or whether your execution simply improved.',
        ],
      },
    ],
    faq: [
      {
        question: 'What happens when you lose all lives in Gurei?',
        answer:
          'The current boss-order run ends and its main power progression resets.',
      },
      {
        question: 'How do you get more lives?',
        answer:
          'Launch coverage reports that a successful Kami fight adds a life for later attempts in that run.',
      },
      {
        question: 'Should I restart after taking damage early?',
        answer:
          'Usually no. Continue if the run can still test a power or matchup. Reset when the route no longer answers a useful question.',
      },
    ],
  }),
  makeGuide({
    slug: 'achievements',
    path: '/guides/achievements',
    title: 'Gurei Achievements: All 42 Steam Names',
    seoTitle: 'Gurei Achievement Guide: All 42 Steam Achievements',
    seoDescription:
      'Track all 42 Gurei Steam achievement names across Kami, encounters and hidden challenges without invented unlock conditions.',
    summary:
      'Steam publishes 42 names but hides nearly every description. Use this launch checklist to track confirmed names and avoid spoiler-heavy guesses.',
    category: 'Achievements',
    difficulty: 'Checklist',
    coverImageUrl: '/gurei/screenshots/6.jpg',
    sourceStrategy: 'official',
    sourceNotes:
      'The list is transcribed from the public Steam global achievement page on the checked date.',
    videoSearchQueries: ['Gurei achievements', 'Gurei trophy guide'],
    tags: ['42 achievements', 'Steam', 'Checklist'],
    relatedRoutes: [
      '/guides/all-kami-bosses',
      '/guides/secrets-and-encounters',
      '/guides/lives-and-runs',
      '/guides/boss-order',
    ],
    body: [
      {
        heading: 'What Steam currently reveals',
        paragraphs: [
          'Gurei exposes 42 achievement names on the public Steam global-stat page. Steam hides nearly every unlock description; “Honor?” is the visible exception with the short instruction “Fulfill your duty.” A responsible launch guide should not convert evocative names into confident steps without repeatable evidence.',
          'The first ten names align with the ten primary Kami. The next group reads like castle characters or side encounters. The final group appears to contain route, mastery or hidden objectives, but that grouping is an editorial navigation aid rather than an official category label.',
        ],
      },
      {
        heading: 'The ten Kami names',
        paragraphs: [
          'These achievements match the primary nonlinear boss roster. They are likely to unlock through the corresponding encounters, but the public descriptions remain hidden. Track them naturally while learning different orders rather than forcing a late scaled fight solely for the checklist.',
        ],
        bullets: achievements
          .filter((achievement) => achievement.kind === 'kami')
          .map((achievement) => achievement.name),
      },
      {
        heading: 'Castle and side-encounter names',
        paragraphs: [
          'The next eighteen names point toward the unusual characters, objectives and secrets promised by the official store description. Avoid assuming every noun is a combat boss. Some may be interactions, discoveries or conditions that depend on where you travel between Kami.',
          'A spoiler-light approach is to explore the hub after each victory, listen to the absorbed Kami, and interact with changed rooms or characters before entering the next primary arena. If an unlock does not occur, record the run state rather than repeating an unverified internet claim.',
        ],
        bullets: achievements
          .filter((achievement) => achievement.kind === 'encounter')
          .map((achievement) => achievement.name),
      },
      {
        heading: 'Challenge and hidden names',
        paragraphs: [
          'The remaining names are the least safe to explain at launch. They may refer to routes, powers, optional characters, performance or endings. Because Steam hides the conditions, publishing a step-by-step unlock claim now would risk spoiling the game and sending players through a false sequence.',
          'Use the names as a checklist and capture the exact moment one unlocks. A reliable future guide needs the run order, powers, lives, interactions and platform version. One observation is a clue; repeated observations or an official description are evidence.',
        ],
        bullets: achievements
          .filter((achievement) =>
            ['challenge', 'hidden'].includes(achievement.kind)
          )
          .map(
            (achievement) =>
              `${achievement.name} — ${achievement.officialDescription}`
          ),
      },
      {
        heading: 'A safe completion route',
        paragraphs: [
          'Complete ordinary runs and test different Kami orders before chasing hidden conditions. The boss achievements should build naturally while the route becomes stable. Next, revisit the castle between victories and investigate side characters. Save mastery-style restrictions and possible ending conditions for later, when losing a run does not also interrupt basic learning.',
          'Keep separate notes for Steam and console versions because trophy naming or patch timing can differ. This page’s canonical scope is Steam App 2191280. If a public guide uses Demo App 3776080 or a console build, verify that the condition still exists on Steam before relying on it.',
        ],
      },
      {
        heading: 'How this checklist will be updated',
        paragraphs: [
          'Descriptions will be added only when Steam reveals them, an official update states the condition, or a repeatable released-build test confirms it. The guide will distinguish verified instructions from watch items. That prevents early speculation from becoming permanent wiki folklore.',
          'Until then, enjoy the names as hints. Gurei explicitly includes obscure secrets and side objectives, so discovery is part of the game. A checklist should make progress visible without replacing that discovery with invented certainty.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many Steam achievements does Gurei have?',
        answer: 'Steam currently exposes 42 achievement names.',
      },
      {
        question: 'Why are the unlock instructions missing?',
        answer:
          'Steam hides nearly every public description. This guide does not invent conditions from achievement names.',
      },
      {
        question: 'Are the first ten achievements the Kami?',
        answer:
          'They match the ten confirmed primary boss names: Catfish through Beetle.',
      },
    ],
  }),
  makeGuide({
    slug: 'secrets-and-encounters',
    path: '/guides/secrets-and-encounters',
    title: 'Gurei Secrets and Side Encounters: A Spoiler-Light Method',
    seoTitle: 'Gurei Secrets Guide: Side Encounters Without Guesses',
    seoDescription:
      'Find Gurei secrets with a spoiler-light castle sweep, Kami dialogue checks and a 42-achievement clue list that avoids fabricated locations.',
    summary:
      'Sweep the castle after every victory, listen for changed Kami dialogue, and treat hidden achievement names as clues—not proof of a location or condition.',
    category: 'Secrets',
    difficulty: 'Checklist',
    coverImageUrl: '/gurei/screenshots/3.jpg',
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Official store descriptions and achievement names only; exact hidden conditions remain intentionally unclaimed.',
    videoSearchQueries: ['Gurei secrets', 'Gurei side encounters'],
    tags: ['Secrets', 'Castle', 'Side objectives'],
    relatedRoutes: [
      '/guides/achievements',
      '/guides/all-kami-bosses',
      '/guides/lives-and-runs',
      '/guides/boss-order',
    ],
    body: [
      {
        heading: 'Search when the castle has changed',
        paragraphs: [
          'The official game description says the surreal castle contains side objectives, obscure secrets and unusual characters from Japanese mythology. Defeated Kami travel with Rei and add commentary after victories. That makes the transition between boss fights the most logical time to search: the run state has changed, a new personality is present and another power may open a different interaction.',
          'After each victory, delay the next arena long enough to revisit the hub and adjacent rooms. Look for a changed character, object, path, sound or dialogue line. Do not sweep the entire castle after every minor action; tie the search to meaningful state changes so observations remain comparable.',
        ],
      },
      {
        heading: 'Use a four-pass castle sweep',
        paragraphs: [
          'First, check the central statue and immediate hub for visual changes. Second, revisit the approach paths to defeated and undefeated Kami. Third, speak to any non-hostile figure and listen to the absorbed Kami before entering a new arena. Fourth, test the newest ability against obvious environmental affordances without assuming the game uses traditional Metroidvania locks.',
          'Record the boss order and current powers when something changes. A secret tied to a character may actually depend on route position, a specific absorbed Kami or the number of victories. Without that context, two players can report different outcomes and both be accurate for their runs.',
        ],
        bullets: [
          'Hub: statue, flames, doors and newly present characters.',
          'Routes: side alcoves and rooms crossed on the way to arenas.',
          'Dialogue: absorbed Kami comments before and after a new victory.',
          'Power test: only at deliberate visual clues, not every wall in the game.',
        ],
      },
      {
        heading: 'Let achievement names suggest categories',
        paragraphs: [
          'Steam lists names such as The Girl, The Lady, The Runner, The Fan, The Pillar Man, The Weasels, The Eyes and The Statues. These are strong clues that the castle contains more than ten primary fights. They do not prove whether the unlock is a conversation, discovery, challenge or combat encounter.',
          'The final achievement group includes names such as The Guiding Banner, The Honored Blade, The Elusive Flame, Mastery and Acceptance. Treat those as late-run investigation prompts. Avoid forcing an interpretation from mythology or another game; Gurei’s own route state must confirm the meaning.',
        ],
      },
      {
        heading: 'Protect the run while exploring',
        paragraphs: [
          'A side objective is not worth sacrificing the only remaining life unless the run is already dedicated to discovery. Build a stable early route first so the opening bosses generate enough attempts. Then choose one exploration question per run. This keeps optional investigation from competing with basic combat learning.',
          'If an interaction appears risky, note its location and return on a run with more lives or a defensive power. The nonlinear structure gives you permission to delay. Secrets are more efficiently tested when the route around them is already reliable.',
        ],
      },
      {
        heading: 'Separate Demo discoveries from full-game secrets',
        paragraphs: [
          'The removed Demo represented only three bosses and a far smaller route space. A character, room or condition in Demo footage may have moved, changed or been cut. Use Demo media to recognize art and mechanics, but verify every secret in the released Steam build before publishing or following a location claim.',
          'The same caution applies to console reviews and pre-release footage. Gurei launched across multiple platforms, and patch timing can differ. This wiki tracks Steam App 2191280. Add a platform note when an interaction is observed elsewhere but not yet reproduced on Steam.',
        ],
      },
      {
        heading: 'When a clue becomes a guide',
        paragraphs: [
          'A useful secret guide needs a repeatable trigger: route state, required powers, location, interaction and result. Capture all five before turning an observation into instructions. If only the achievement name is known, keep it on the checklist. If one player reports a trigger, mark it as a watch item. If the condition repeats or becomes official, publish the exact path with a checked date.',
          'This standard may make the launch page less flashy, but it protects players from false routes and preserves the game’s discovery. Gurei is new; honest gaps are temporary, while copied speculation can damage a wiki for months.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Gurei have secrets?',
        answer:
          'Yes. The official description explicitly mentions side objectives and obscure secrets throughout the castle.',
      },
      {
        question: 'When should I search for side encounters?',
        answer:
          'Check the hub and nearby routes after each Kami victory, when dialogue, powers and castle state may have changed.',
      },
      {
        question: 'Are achievement names reliable secret instructions?',
        answer:
          'No. They are useful clues, but Steam hides almost every unlock condition.',
      },
    ],
  }),
  makeGuide({
    slug: 'steam-deck',
    path: '/guides/steam-deck',
    title: 'Gurei Steam Deck Guide: Verified Status and Setup',
    seoTitle: 'Gurei Steam Deck: Verified Status & Settings',
    seoDescription:
      'Gurei is officially Steam Deck Verified. Use a practical setup checklist for controls, display, battery testing and safe Steam Cloud checks.',
    summary:
      'Gurei carries the official Steam Deck Verified badge. Start with the default profile, verify cloud synchronization, then adjust only after a real boss fight exposes a problem.',
    category: 'Platform',
    difficulty: 'Status',
    coverImageUrl: '/gurei/screenshots/4.jpg',
    sourceStrategy: 'official',
    sourceNotes:
      'Official Steam news confirmed Deck Verified status on July 17, 2026.',
    videoSearchQueries: ['Gurei Steam Deck gameplay', 'Gurei handheld'],
    tags: ['Steam Deck', 'Verified', 'Controller'],
    relatedRoutes: [
      '/system-requirements',
      '/download',
      '/guides/combat-and-dodge',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'Official status: Steam Deck Verified',
        paragraphs: [
          'The developers announced that Gurei received the official Steam Deck Verified badge before launch. Verified status means Valve’s compatibility review considers the game functional on Deck without requiring a manual compatibility workaround. It does not guarantee one perfect performance target for every scene, battery level or future patch.',
          'Install through the normal Steam library and begin with the default controller layout. Avoid downloading community executables, modified launchers or third-party “performance” packages. Gurei’s official PC build is the supported path, and the store page should remain the first place to check compatibility notes.',
        ],
      },
      {
        heading: 'Test one full boss before changing settings',
        paragraphs: [
          'The castle hub is lighter than a busy scaled fight, so a menu or first room is not enough to judge the profile. Play one complete boss encounter and watch for frame pacing during effects, input response during dodge timing and text readability in dialogue. Gurei depends on precision, which makes consistent delivery more important than chasing the highest visual setting.',
          'Change one setting at a time if the build exposes options. Re-test the same fight so the comparison is meaningful. If a new patch changes performance, remove old per-game overrides temporarily and test the official default again before assuming the update is broken.',
        ],
      },
      {
        heading: 'Protect run state with Steam Cloud checks',
        paragraphs: [
          'The Steam listing includes Cloud support. Before switching between Deck and another PC, let Steam finish synchronization and confirm that the library no longer shows a pending upload. Do not launch the second device while the first is offline with unsynced progress.',
          'If Steam reports a cloud conflict, compare timestamps carefully and preserve the newer intended save. A boss-order run is short-lived, but achievements and other account progress still deserve a cautious transfer. This wiki does not recommend manually copying unknown save files from third-party sites.',
        ],
      },
      {
        heading: 'Use the default controller profile as the baseline',
        paragraphs: [
          'Verified status should provide usable controller prompts and navigation. Learn the normal dodge, sword, jump and stomp positions before remapping. A custom layout can help comfort, but changing several inputs at once makes timing problems hard to diagnose.',
          'If an input feels late, test the same action in a calm space, disable unusual community layers and return to the official profile. Gurei’s dodge has a deliberate rhythm in launch coverage; perceived delay is not automatically a hardware problem. Compare neutral input before changing dead zones or adding macros.',
        ],
      },
      {
        heading: 'Balance battery and readability',
        paragraphs: [
          'For portable play, choose a stable frame target that keeps attack cues readable. A lower but consistent target can be preferable to fluctuations during a boss effect. Keep brightness high enough to distinguish the grayscale silhouettes and colored power effects; the art style relies on contrast more than texture detail.',
          'Battery estimates vary with screen brightness, refresh target, wireless use and the current scene. Test during real play rather than quoting a universal number. If the Deck becomes hot or the fan behavior changes sharply after an update, return to defaults and check official Steam discussions before using aggressive power limits.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Gurei Steam Deck Verified?',
        answer:
          'Yes. The developer announced official Steam Deck Verified status on July 17, 2026.',
      },
      {
        question: 'Does Gurei support Steam Cloud?',
        answer: 'Yes, the current Steam listing includes Cloud support.',
      },
      {
        question: 'Do I need a custom controller layout?',
        answer:
          'Start with the official default profile. Remap only after testing a full boss fight and identifying a specific comfort issue.',
      },
    ],
  }),
  makeGuide({
    slug: 'system-requirements',
    path: '/system-requirements',
    title: 'Gurei System Requirements and PC Compatibility',
    seoTitle: 'Gurei System Requirements: Minimum & Recommended PC',
    seoDescription:
      'Check official Gurei PC requirements, Windows and DirectX notes, 1 GB storage, controller support and Steam Deck Verified status.',
    summary:
      'Gurei is a lightweight Windows game on paper, but the modern Steam client requires Windows 10 or newer even though the store’s game table still names Windows 7 SP1.',
    category: 'Reference',
    difficulty: 'Status',
    coverImageUrl: '/gurei/header.jpg',
    sourceStrategy: 'official',
    sourceNotes: 'Hardware values come from the official Steam store.',
    videoSearchQueries: ['Gurei PC requirements', 'Gurei Steam Deck'],
    tags: ['PC', 'Windows', 'DirectX'],
    relatedRoutes: [
      '/guides/steam-deck',
      '/download',
      '/review',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'Official minimum requirements',
        paragraphs: [
          'The Steam store lists Windows 7 SP1, a dual-core 2.4 GHz processor, 2 GB RAM, a graphics device with 1 GB VRAM and DirectX 10 or newer support, plus 1 GB available storage. These are game requirements, not a promise that the current Steam desktop client still runs on Windows 7.',
          'Valve ended Steam client support for versions older than Windows 10. For a normal supported installation in 2026, plan on Windows 10 or Windows 11 even though the game’s own requirement table retains the older operating-system line.',
        ],
        bullets: [
          'OS in game table: Windows 7 SP1; practical Steam client baseline: Windows 10 or newer.',
          'Processor: dual core 2.4 GHz.',
          'Memory: 2 GB RAM.',
          'Graphics: 1 GB VRAM with DirectX 10+ support.',
          'Storage: 1 GB available space.',
        ],
      },
      {
        heading: 'Official recommended requirements',
        paragraphs: [
          'The recommended table raises the processor to dual core 3.0 GHz or faster, memory to 4 GB RAM and graphics memory to 2 GB while keeping DirectX 10+ and 1 GB storage. Steam does not attach a specific resolution or frame-rate target to those values.',
          'Because Gurei depends on precise boss timing, consistency matters more than passing the store table by the smallest margin. Close heavy background software, test a full effect-heavy fight and prefer stable delivery over visual options that cause uneven pacing.',
        ],
        bullets: [
          'Processor: dual core 3.0 GHz or faster.',
          'Memory: 4 GB RAM.',
          'Graphics: 2 GB VRAM with DirectX 10+ support.',
          'Storage: 1 GB available space.',
        ],
      },
      {
        heading: 'Controller, Cloud and Deck',
        paragraphs: [
          'The current Steam record includes controller support, achievements and Steam Cloud. The developers also announced official Steam Deck Verified status. These features make the Steam build the clearest supported PC/handheld path.',
          'Use the default input profile first. If prompts or navigation behave incorrectly, verify the game files, remove unusual community controller layers and test again before changing system-wide input tools. Never download a separate controller fix executable from an untrusted mirror.',
        ],
      },
      {
        heading: 'A practical compatibility check',
        paragraphs: [
          'Confirm that Windows and the graphics driver are current, keep more free storage than the one-gigabyte minimum for updates and Steam’s temporary files, then run one full boss encounter. Watch input response, effect-heavy frame pacing and display contrast. A clean hub alone does not represent the hardest scene.',
          'If the game fails to launch, verify files in Steam, restart the client and remove custom launch options. Check the official Steam Community for a current patch notice. Do not replace game binaries or download DLL bundles from guide sites.',
        ],
      },
    ],
    faq: [
      {
        question: 'How much storage does Gurei need?',
        answer: 'The official Steam table lists 1 GB of available space.',
      },
      {
        question: 'Can Gurei run on Windows 7?',
        answer:
          'The game table lists Windows 7 SP1, but the current Steam client requires Windows 10 or newer for a supported installation.',
      },
      {
        question: 'Is Gurei verified on Steam Deck?',
        answer: 'Yes, the developer announced Deck Verified status.',
      },
    ],
  }),
  makeGuide({
    slug: 'review',
    path: '/review',
    title: 'Gurei Review Guide: Should You Buy It?',
    seoTitle: 'Gurei Review: Is the Boss Rush Worth Buying?',
    seoDescription:
      'Decide whether Gurei fits you: ten nonlinear bosses, dynamic difficulty, limited-life runs, hand-drawn combat and a compact single-player focus.',
    summary:
      'Buy for a focused, demanding boss laboratory with meaningful route choices. Wait if you want a long exploration campaign, forgiving difficulty options or a traditional upgrade grind.',
    category: 'Review',
    difficulty: 'Status',
    coverImageUrl: videos.review.thumbnailUrl,
    sourceStrategy: 'community_crosscheck',
    sourceNotes:
      'Official features are separated from launch-review opinions. Price and review counts are intentionally not frozen.',
    videoSearchQueries: ['Gurei review', 'Gurei worth it'],
    video: videos.review,
    tags: ['Buying guide', 'Boss rush', 'Single-player'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/boss-order',
      '/system-requirements',
      '/download',
    ],
    body: [
      {
        heading: 'The decision in one paragraph',
        paragraphs: [
          'Gurei is a strong fit if you enjoy learning boss patterns, changing route order and accepting that a new power also makes future fights harder. It is a compact single-player boss rush with ten primary Kami, limited-life runs and hand-drawn presentation inspired by Japanese mythology and samurai cinema. The design asks for repetition with a reason rather than a linear campaign.',
          'It is a weaker fit if you want broad exploration, permanent stat progression, multiplayer or a forgiving story-first action game. The castle connects fights and holds side interactions, but the main product is the boss system. Do not buy it expecting a conventional Metroidvania merely because Rei gains abilities.',
        ],
      },
      {
        heading: 'What makes the route system interesting',
        paragraphs: [
          'Every primary boss can be challenged in any order. A victory grants a new power and strengthens the remaining bosses. Later versions can gain more attacks or more complex weapon behavior. That creates a real decision instead of cosmetic sequence choice: take a hard boss early while it is simple, or delay it until Rei has a tool that answers the matchup.',
          'The developers cite 3,628,800 possible orders for ten bosses. Those permutations matter because players have different weaknesses. Catfish and Snake are manageable opening tests in current coverage, while an uncomfortable movement-heavy fight may belong earlier for another player. The game rewards building a personal route rather than copying one universal tier list.',
        ],
      },
      {
        heading: 'Combat rewards patience more than spectacle',
        paragraphs: [
          'Rei begins with sword attacks, dodge, jump and downward stomp, then gains more abilities from Kami. The cleanest fights develop a rhythm: read the cue, move through the threat and take a short punish. Launch reviewers consistently identify the boss design and changing patterns as the central strength.',
          'The same focus can be a drawback. If deliberate dodge rhythm, repeated attempts and harsh failure states frustrate you, the game does not hide those traits. Limited lives mean a run can end after several mistakes. The system is satisfying when each loss becomes information and exhausting when the player only wants to see the next scene.',
        ],
      },
      {
        heading: 'How much content should you expect?',
        paragraphs: [
          'The main replay value comes from ten bosses changing across route positions, not from dozens of conventional levels. Side objectives, unusual castle characters, secrets and 42 Steam achievements add reasons to investigate different states. That is meaningful depth for players who like mastery, but it is not the same as a long campaign filled with new environments.',
          'Buy for repeatable combat depth and route experimentation. If your value calculation depends mainly on hours of unique story content, watch the official trailer and a non-spoiler review before deciding. Avoid using old Demo length as a proxy for the full game; the Demo had three bosses and was removed because it could not represent the full order space.',
        ],
      },
      {
        heading: 'Platform and launch context',
        paragraphs: [
          'The Steam version is single-player, supports achievements and Cloud, and carries official Steam Deck Verified status. The game launched on July 23, 2026 at 00:00 GMT+8, which appears as July 22 in several regions. Use the live Steam page for current price, discount and review count because all three can change quickly after launch.',
          'Console reviews can still illuminate the shared design, but performance reports should stay platform-specific. This wiki’s compatibility and installation guidance is scoped to Steam App 2191280. Check official update posts if a launch issue appears on one platform but not another.',
        ],
      },
      {
        heading: 'Who should buy now',
        paragraphs: [
          'Buy now if you like Furi-style focus, Mega Man-style reward routing or difficult action that becomes readable through repetition. The most distinctive idea is that your choice makes both sides stronger: Rei gains tools, while untouched Kami evolve. Few boss rushes make order itself carry this much tactical weight.',
          'Wait if you need difficulty options, dislike resetting run progress, or want verified step-by-step solutions for every secret on day one. Gurei is new, and its knowledge base is still forming. The official Steam page, current patch notes and this site’s checked dates should guide the decision rather than copied preview claims.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Gurei worth buying?',
        answer:
          'It is a good fit for players who want a demanding, replayable boss rush with route strategy. It is less suitable for players seeking a long exploration campaign or forgiving progression.',
      },
      {
        question: 'Is Gurei a roguelike?',
        answer:
          'It has limited-life runs and reset pressure, but its defining structure is a nonlinear boss rush with powers earned from each Kami.',
      },
      {
        question: 'Does Gurei have multiplayer?',
        answer: 'No. The official Steam listing is single-player.',
      },
    ],
  }),
  makeGuide({
    slug: 'npc-locations',
    path: '/guides/npc-locations',
    title: 'Gurei NPC Locations: All 17 Persistent Encounters',
    seoTitle: 'Gurei NPC Locations: All 17 Trophy Encounters',
    seoDescription:
      'Track all 17 Gurei NPC encounters, understand the three-boss spawn cadence and avoid the quest-order mistake that can block completion.',
    summary:
      'A new NPC can appear after each three-boss milestone, but ten Kami are not enough to reveal all 17 in one run. Use the persistent world to finish the roster across multiple attempts.',
    category: 'Secrets',
    difficulty: 'Checklist',
    coverImageUrl: videos.npcLocations.thumbnailUrl,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Built from a current full-release video with chapter markers for all 17 encounter trophies. The page keeps exact room turns in the embedded video and focuses on the repeatable spawn and completion logic.',
    videoSearchQueries: [
      'Gurei NPC locations',
      'Gurei all trophies',
      'Gurei achievement guide',
    ],
    video: videos.npcLocations,
    tags: ['17 NPCs', 'Trophies', 'Persistent world'],
    relatedRoutes: [
      '/guides/achievements',
      '/guides/true-ending',
      '/guides/lives-and-runs',
      '/guides/boss-order',
    ],
    body: [
      {
        heading: 'Why the NPC list takes more than one run',
        paragraphs: [
          'Gurei has 17 named NPC encounter trophies: The Lady, The Child, The Runner, The Fan, The Eyes, The Weasels, The Grudge, The Owl, The Pillar Man, The Drunkard, The Scarer, The Statues, The Giant, The Raccoon Dog, The Rabbit, The Dummy and The Priestess. Current full-release footage shows the complete set and the corresponding encounter route.',
          'The important rule is cadence. A new NPC can appear after every three defeated Kami, and a run contains only ten Kami. That means one clear cannot reveal all 17 encounters. The NPC layer persists across attempts, so a reset is expected progress rather than a reason to restart the whole checklist.',
        ],
        bullets: [
          '3 boss wins: check the hub and side rooms for the next encounter.',
          '6 boss wins: make a second sweep before committing to the next arena.',
          '9 boss wins: complete the late-run sweep before the final Kami.',
          'New run: revisit persistent NPCs and continue any unfinished request.',
        ],
      },
      {
        heading: 'Use a name-first checklist',
        paragraphs: [
          'Do not try to memorize a long room sequence while learning boss patterns. Keep the 17 names as a checklist and use the embedded video chapter for the exact route when a specific trophy is missing. This separates exploration from combat and makes it obvious whether the problem is an undiscovered NPC or an unfinished request.',
          'After every three-boss threshold, return to the central routes and inspect rooms that previously looked empty. If no new interaction appears, verify that the milestone boss was fully completed and that the current run has returned to the hub state. Avoid rushing directly into the next arena when working on trophies.',
        ],
      },
      {
        heading: 'Complete requests before advancing dependent encounters',
        paragraphs: [
          'The current guide source warns that one NPC request can affect later completion order. When an NPC presents a clear task, finish or document it before pushing several more boss milestones. The persistent world protects general progress, but it does not make every quest state interchangeable.',
          'If a trophy fails to trigger, revisit the NPC after the next hub return rather than forcing a fresh save. Check the interaction twice, confirm any requested item or action was delivered, then move to the next milestone. Only start a clean save after ruling out persistent-state and route-order causes.',
        ],
      },
      {
        heading: 'Pair the roster with the achievement page',
        paragraphs: [
          'The names above match the encounter-focused achievement cluster, while the boss page tracks the ten Kami and the challenge page tracks run conditions. Keeping those groups separate prevents an NPC trophy from being mistaken for a boss-order requirement.',
          'Use the video for visual room recognition, this page for milestone logic and the achievement checklist for the remaining categories. That three-part workflow is faster than replaying an eight-minute route from the beginning every time one name is missing.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can all Gurei NPCs appear in one run?',
        answer:
          'No. New encounters are tied to three-boss milestones, and the ten-Kami run is too short to reveal all 17. Progress persists across attempts.',
      },
      {
        question: 'How many NPC encounter trophies are in Gurei?',
        answer:
          'Current full-release guide footage documents 17 named NPC encounter trophies.',
      },
      {
        question: 'Do NPC interactions reset when a Gurei run ends?',
        answer:
          'The world and NPC progress persist across attempts, unlike the main run power sequence.',
      },
    ],
  }),
  makeGuide({
    slug: 'true-ending',
    path: '/guides/true-ending',
    title: 'Gurei True Ending: Caterpillar Route and Final Run',
    seoTitle: 'Gurei True Ending Guide: Caterpillar Locations',
    seoDescription:
      'Unlock the Gurei true ending by clearing both normal endings, following five Caterpillar encounters and surrendering nine Kami skills before the final fights.',
    summary:
      'Finish both normal endings first, follow the Caterpillar through five encounters, then give up nine collected Kami skills before defeating the tenth Kami and final boss without them.',
    category: 'Secrets',
    difficulty: 'Checklist',
    coverImageUrl: videos.trueEnding.thumbnailUrl,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'A July 23 full-release video supplies the five-location sequence and final-run condition. The embedded chapters remain the visual authority for exact rooms.',
    videoSearchQueries: [
      'Gurei true ending',
      'Gurei Caterpillar locations',
      'Gurei endings guide',
    ],
    video: videos.trueEnding,
    tags: ['True ending', 'Caterpillar', 'Five locations'],
    relatedRoutes: [
      '/guides/endings',
      '/guides/npc-locations',
      '/guides/boss-order',
      '/guides/kami-powers',
    ],
    body: [
      {
        heading: 'Complete both normal endings first',
        paragraphs: [
          'The Caterpillar route is not a shortcut around the standard conclusions. Current full-release guide footage identifies both normal endings as the prerequisite for the true-ending quest. Finish those outcomes on the same persistent save before treating a missing Caterpillar as a location bug.',
          'Because Gurei preserves its world layer across attempts, you can use earlier runs to complete NPC tasks and endings while continuing to refine a safe boss order. Do not erase the save after a failed final attempt; the relevant world-state progress is meant to survive the run reset.',
        ],
      },
      {
        heading: 'Follow the Caterpillar through five encounters',
        paragraphs: [
          'After the normal endings, locate the injured Caterpillar and continue the quest through five appearances. The current video marks the sequence at 00:21, 00:35, 00:57, 01:30 and 01:55, with the final encounter returning to the main hall.',
          'Use those chapters for exact room recognition. At each stop, finish the interaction before leaving and confirm the character has moved on. If the next appearance is absent, verify the two normal endings and revisit the previous location rather than jumping directly to the final run.',
        ],
        bullets: [
          'Location 1: video chapter 00:21.',
          'Location 2: video chapter 00:35.',
          'Location 3: video chapter 00:57.',
          'Location 4: video chapter 01:30.',
          'Final main-hall location: video chapter 01:55.',
        ],
      },
      {
        heading: 'Prepare a nine-Kami route you can finish cleanly',
        paragraphs: [
          'Once the Caterpillar reaches the final main-hall position, begin a new run and defeat nine Kami. This is not the time to test an unfamiliar order. Use your most reliable early opener, keep the hardest personal matchup away from the final slot and preserve lives for the no-skill finish.',
          'Before entering the tenth Kami arena, return to the Caterpillar. Give the character all nine Kami skills collected during the run. The route therefore asks you to trade away the very tools that made the run stronger, so basic dodge, sword and stomp execution must be stable before the handoff.',
        ],
      },
      {
        heading: 'Defeat the tenth Kami and final boss without Kami skills',
        paragraphs: [
          'After surrendering the nine powers, complete the tenth Kami and the final boss in sequence. Do not enter the tenth arena first and plan to return later; the handoff is the defining condition described by the current guide source.',
          'Choose a final Kami whose low-tool matchup is already familiar. A fight that depended on shield, healing or mobility during earlier routes is a poor last slot. Practice its basic-kit version before committing the true-ending run, then treat every extra life as a full pattern attempt rather than a damage-trading budget.',
        ],
      },
    ],
    faq: [
      {
        question: 'What are the prerequisites for the Gurei true ending?',
        answer:
          'Complete both normal endings, finish the five Caterpillar encounters and reach the final main-hall interaction.',
      },
      {
        question: 'When do I give the Caterpillar my Kami skills?',
        answer:
          'After defeating nine Kami and before entering the tenth Kami fight.',
      },
      {
        question: 'Do I fight the last two battles without Kami powers?',
        answer:
          'Yes. The current full-release route requires surrendering the nine collected skills before the tenth Kami and final boss.',
      },
    ],
  }),
  makeGuide({
    slug: 'download',
    path: '/download',
    title: 'Gurei Download: Use the Official Steam Build',
    seoTitle: 'Gurei Download: Official Steam PC Install',
    seoDescription:
      'Download Gurei safely through Steam App 2191280, understand the removed Demo and avoid cracks, trainers, APKs and unofficial executables.',
    summary:
      'For PC, use Steam App 2191280. The old three-boss Demo was removed around launch, so any site offering a repacked Demo or full installer is not the official channel.',
    category: 'Safety',
    difficulty: 'Status',
    coverImageUrl: '/gurei/key-art.png',
    sourceStrategy: 'official',
    sourceNotes:
      'Official Steam and developer launch updates define the safe install and Demo status.',
    videoSearchQueries: ['Gurei download Steam', 'Gurei Demo'],
    tags: ['Steam', 'Official install', 'Demo'],
    relatedRoutes: [
      '/system-requirements',
      '/guides/steam-deck',
      '/review',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'Official PC download',
        paragraphs: [
          'Install Gurei from its official Steam page, App 2191280. Confirm the developer is Lobo Sagaz studio and the publisher is Astrolabe Games before purchasing or installing. The normal Steam workflow handles game files, updates, achievements, Cloud synchronization and Steam Deck compatibility.',
          'This wiki does not host an installer. It does not provide cracks, trainers, modified executables, APK files or mirrors. A guide domain is not a trustworthy replacement for the publisher’s store channel, even when the download button uses official artwork.',
        ],
        bullets: [
          'Open Steam App 2191280.',
          'Confirm the Gurei title, developer and publisher.',
          'Install through the Steam client.',
          'Let the first update and Cloud synchronization finish before playing.',
        ],
      },
      {
        heading: 'The Demo was removed around launch',
        paragraphs: [
          'Gurei previously had a separate public Demo under App 3776080. The developers explained around launch that they removed it because a three-boss sample produced only six orders and could not represent the full ten-boss system with 3,628,800 possible sequences.',
          'Old Demo videos remain useful for seeing movement and the dynamic difficulty idea, but the Demo is not the current full product. Do not download a repacked Demo from an unofficial file host. If the developer restores an official trial, it should appear through Steam or an official announcement.',
        ],
      },
      {
        heading: 'Avoid fake fixes and unsafe shortcuts',
        paragraphs: [
          'New game launches often attract pages advertising free downloads, “FPS fixes,” unlockers or missing-DLL bundles. Those files can replace the official executable, steal Steam sessions or introduce malware. Verify game files through Steam instead of downloading a replacement binary.',
          'For launch or controller trouble, restart Steam, verify files, remove custom launch options and check the official community page. Steam Deck users should return to the default compatibility and controller profiles before applying community workarounds.',
        ],
      },
      {
        heading: 'Check the system before installing',
        paragraphs: [
          'The official table lists a small one-gigabyte storage requirement, but Steam needs extra working space for downloads and patches. Use Windows 10 or newer for a supported Steam client even though the game table still names Windows 7 SP1. DirectX 10+ support and at least 1 GB VRAM appear in the minimum requirements.',
          'If the machine is close to minimum, test a real boss fight rather than only the hub. Precision combat depends on stable input and frame pacing. The system-requirements page contains the full minimum and recommended list.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where can I download Gurei on PC?',
        answer: 'Use the official Steam page for App 2191280.',
      },
      {
        question: 'Can I still download the Gurei Demo?',
        answer:
          'The developers removed the public Demo around launch. Avoid unofficial repacks and wait for an official Steam return if it happens.',
      },
      {
        question: 'Is there a Gurei APK?',
        answer:
          'No official Android build or APK is part of this Steam guide. Do not install files making that claim.',
      },
    ],
  }),
];

export const guideSlugs = new Set(guides.map((guide) => guide.slug));

export const featuredGuides = [
  'beginner-guide',
  'boss-order',
  'true-ending',
  'npc-locations',
  'all-kami-bosses',
  'combat-and-dodge',
  'achievements',
  'steam-deck',
]
  .map((slug) => guides.find((guide) => guide.slug === slug))
  .filter((guide): guide is Guide => Boolean(guide));

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

# Gurei Wiki PRD and Implementation Plan

Checked: 2026-07-23

## 1. Product Definition

- Product: Gurei Wiki
- Domain: https://www.gurei.wiki
- Platform scope: Steam App 2191280
- Developer: Lobo Sagaz studio
- Publisher: Astrolabe Games
- Official publisher page: https://www.astrolabe-games.ca/gurei
- Official Steam page: https://store.steampowered.com/app/2191280/Gurei/
- Official Steam Community: https://steamcommunity.com/app/2191280/
- Official achievements: https://steamcommunity.com/stats/2191280/achievements
- Official Demo record: Steam App 3776080; the developer removed the demo around launch, so it is historical support material rather than the current product.
- Canonical host: `www.gurei.wiki`

Gurei is a hand-drawn, single-player 2D action boss rush. Rei can challenge ten Kami in any order. Every win grants a power and increases the remaining bosses' defense and move-set complexity. Runs use limited lives; failure restarts the boss sequence.

## 2. Audience and Core Jobs

The launch audience needs to:

1. understand that Gurei is a boss rush rather than a Metroidvania;
2. choose a manageable first Kami and avoid leaving a personal wall until the end;
3. learn how dynamic difficulty, new powers and extra lives change route decisions;
4. distinguish full-game facts from the three-boss Demo;
5. find the official Steam build, system requirements and Steam Deck status;
6. track 42 public Steam achievement names without fabricated unlock instructions.

## 3. Search Demand and Keyword Matrix

The exact-game SERP is thin because the game released during this audit. Search results are led by Steam, the publisher page, reviews and YouTube. The launch should therefore cover a compact set of decision-heavy pages and expand only after GSC exposes real queries.

| Keyword | Intent | Route | Priority | Status | Evidence / note |
| --- | --- | --- | --- | --- | --- |
| gurei | Entity | `/` | P0 | keep | Official Steam and publisher entity |
| gurei wiki | Structured help | `/` | P0 | keep | No mature dedicated wiki found |
| gurei guide | Browse help | `/guides` | P0 | keep | Exact guide supply is thin |
| gurei beginner guide | Start a run | `/guides/beginner-guide` | P0 | keep | Demo walkthroughs and launch reviews |
| gurei boss order | Choose the next Kami | `/guides/boss-order` | P0 | keep | Core mechanic; reviews discuss order |
| gurei bosses | See the ten Kami | `/guides/all-kami-bosses` | P0 | keep | Steam achievement names expose ten Kami |
| gurei kami | Understand bosses/lore | `/guides/all-kami-bosses` | P0 | keep | Official terminology |
| gurei abilities | Understand rewards | `/guides/kami-powers` | P0 | keep | Official store and overview media |
| gurei combat guide | Improve execution | `/guides/combat-and-dodge` | P0 | keep | Precise combat is the core promise |
| gurei lives | Understand run failure | `/guides/lives-and-runs` | P1 | keep | Launch reviews document extra lives/reset |
| gurei permadeath | Understand run failure | `/guides/lives-and-runs` | P1 | keep | Steam tag plus review evidence |
| gurei achievements | Completion checklist | `/guides/achievements` | P0 | keep | Steam exposes 42 names |
| gurei secrets | Find optional encounters | `/guides/secrets-and-encounters` | P1 | keep | Official page promises side objectives/secrets |
| gurei steam deck | Handheld support | `/guides/steam-deck` | P1 | keep | Official Steam news says Deck Verified |
| gurei system requirements | Check PC | `/system-requirements` | P0 | keep | Official Steam table |
| gurei review | Buy decision | `/review` | P1 | keep | Strong launch-day SERP intent |
| gurei download | Official install | `/download` | P0 | keep | Safety and navigation intent |
| gurei demo | Find the old demo | `/download#demo` | P1 | keep | Official launch post says the demo was removed |
| gurei walkthrough | Full route | `/guides` | P1 | watch | Current videos are mostly Demo; do not fake full walkthrough |
| gurei ending | Spoiler answer | none | P2 | watch | Not enough reliable launch evidence |
| gurei boss names individually | Exact boss tactics | none | P2 | watch | Split only when source depth supports each page |
| gurei codes | Redeem rewards | none | P3 | ignore | No code system |
| gurei tier list | Rank entities | none | P3 | ignore | No ranked roster system |
| gurei multiplayer | Co-op intent | none | P3 | ignore | Official listing is single-player |
| gurei cheats / trainer / crack | Unsafe shortcut | `/download` | P3 | ignore | Official Steam install only |
| 愚灵 攻略 / 愚霊 攻略 | Chinese/Japanese guide | English core equivalent | P2 | localize_later | Localized Steam names; English core first |

## 4. Competitor Benchmark

### Current result set

There is no mature exact-game wiki to clone or match. The closest live competitors are:

- Steam and Steam Community for official identity, updates and achievement names;
- Astrolabe Games for official media and positioning;
- Nintendo World Report, Noisy Pixel and Digital Chumps for launch-day route/life observations;
- YouTube Demo walkthroughs, no-damage clips and overview videos for visual cross-checking.

### Pages we must match

- official entity facts and store status;
- ten Kami names;
- dynamic-difficulty explanation;
- system requirements and Steam Deck status;
- launch review intent.

### Pages we can improve

- one answer-first boss-order model instead of a fixed unsupported list;
- clear Demo/full-game boundary;
- a 42-name achievement tracker that labels hidden unlock conditions honestly;
- deliberate next-step links between beginner, order, power and life guides;
- compact wiki navigation on every page.

### UI and SEO notes

- Use the official grayscale key art with small coral and cyan accents.
- Keep the hero compact enough to expose the first navigation band.
- Use a sticky grouped desktop wiki sidebar and expandable mobile menu.
- Add explicit labels for every guide route; never display raw slugs.
- Homepage: WebSite, Organization, VideoGame and VideoObject.
- Guide hub: ItemList and BreadcrumbList.
- Guide/detail pages: Article, BreadcrumbList and accurate FAQPage.

### Page breadth

This is a thin launch game. Use 8 focused guide articles plus platform/buy pages, not 30–50 speculative pages. Expand individual Boss/ending/collectible pages only when sources and GSC demand support them.

## 5. Source and Video Plan

Primary facts:

- Steam App 2191280
- Steam Community news and public achievement list
- Astrolabe Games Gurei page

Cross-check sources:

- Nintendo World Report review for ten bosses, lives and named early-order examples
- Noisy Pixel and Digital Chumps for launch decision context
- current Steam discussion only when clearly labeled as community experience

Selected media:

| Use | Video | Strategy | Boundary |
| --- | --- | --- | --- |
| Homepage | `QVC1dRZ2nZk`, Astrolabe Games announcement trailer | official | Brand/trust media |
| Beginner | `3vgZHvS69fQ`, YashimaGaming full Demo walkthrough | user_intent_youtube | Demo route only |
| Boss order | `oAlWME9_bBs`, CrankyTemplar updated Demo bosses | youtube_explainer | Three Demo bosses, not all ten |
| Powers/combat | `sMx_Mkf1GkM`, official overview presentation | popular_youtube | Broad mechanic support |
| Review | `5YlKp5ZxneA`, Noisy Pixel launch review | community_crosscheck | Opinion, not official fact |

Articles must present advice directly. Video attribution lives in metadata/captions, not transcript-style prose.

## 6. Launch Page Set

Core hubs:

- `/`
- `/guides`

Guides:

- `/guides/beginner-guide`
- `/guides/boss-order`
- `/guides/all-kami-bosses`
- `/guides/kami-powers`
- `/guides/combat-and-dodge`
- `/guides/lives-and-runs`
- `/guides/achievements`
- `/guides/secrets-and-encounters`
- `/guides/steam-deck`

Reference/buy pages:

- `/system-requirements`
- `/review`
- `/download`

Legal:

- `/disclaimer`
- `/privacy`
- `/terms`
- `/cookie`

## 7. Content Rules

- One primary intent per guide URL.
- Normal guide articles should render at least 600 useful English words.
- Never claim a fixed best order for all players; start with Catfish or Snake as evidence-backed early candidates, then adapt.
- Public achievement descriptions stay “hidden/not publicly described” unless an official description is visible.
- Do not treat Demo-only Boss patterns as complete-game truth.
- No codes, tier list, multiplayer, cheat, crack, APK or trainer pages.
- Every article ends with contextually adjacent next steps.

## 8. Implementation

- Data: `src/data/gurei/`
- Components: `src/components/gurei/`
- Route group: `src/app/[locale]/(gurei)/`
- Assets: `public/gurei/`
- Hero: compact two-column copy/video with official key art background
- Palette: charcoal `#090a0c`, paper `#f3f0e8`, coral `#ff6b5e`, spirit cyan `#73e4ff`
- Canonical base: `https://www.gurei.wiki`
- Cloudflare Worker/GitHub project: `gurei`
- Sitemap: all supported English core and legal pages

## 9. Validation and Launch

1. Remove all inherited Gurei and Adsterra artifacts.
2. Run residual scans for old names, domains, Steam IDs, developer names, GA IDs and ad variables.
3. Run `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm next:build`, and `pnpm build`.
4. Inspect desktop/mobile homepage, guide hub, a long article, sidebar wrapping, sitemap and robots.
5. Initialize a clean Git repository after secret scanning, create/push GitHub `gurei`, deploy Cloudflare Worker `gurei`, bind apex and `www`.
6. Create/reuse GA4 for `www.gurei.wiki`.
7. Create `sc-domain:gurei.wiki`, verify with Cloudflare apex DNS TXT and submit `https://www.gurei.wiki/sitemap.xml`.
8. Register the site in Shipmanager with homepage and `/guides` as the two core links.

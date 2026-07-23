# Kingdom Chronicle Wiki PRD and Implementation Plan

Checked: 2026-07-23

## 1. Product Definition

- Product: an independent English guide hub for **Kingdom Chronicle**
- Canonical URL: `https://www.kingdomchronicle.wiki`
- Platform scope: Steam App `4855560`
- Developer: スタジオ白猫斎 / Studio Hakubyousai
- Publisher: くそげ工房 / Atelier KUSOGE
- Release date: July 22, 2026
- Official Steam page: https://store.steampowered.com/app/4855560/Kingdom_Chronicle/
- Official developer site: https://atelier-ksg.com/
- Official web manual: https://atelier-ksg.com/kingdom-chronicle-web-munual/
- Official Steam Community: https://steamcommunity.com/app/4855560
- Official achievements: https://steamcommunity.com/stats/4855560/achievements/

The site should answer the decisions that stop a first campaign: what to do in the opening turns, how training changes real strength, which alliance leaves room to expand, how the two-turn war clock works, when to send reinforcements, how renown caps deployment, and what unlocks after the grand campaign.

### Identity boundary

The project covers the released Steam build only. The developer site also distributes or references a free BOOTH edition. The free build is useful historical context, but it must not be treated as identical to the Steam version because the Steam release changes UI, officers, events, map connections, rules and Steam-only features.

Do not mix this game with Kin's Chronicle, Kingdom Chronicles, Kingdom: Classic, ARIA CHRONICLE, Cookie Run: Kingdom's Chronicle feature, or other similarly named games.

## 2. Audience and Core Jobs

Primary readers:

1. New players who need a reliable first five-turn plan.
2. Strategy players trying to understand training, troop matchups and the two-turn battle resolution.
3. Players deciding between conquest and alliance victory.
4. Completionists tracking all 18 Steam achievements and custom-officer unlocks.
5. Buyers checking the official PC build, requirements and free-versus-Steam differences.

The tone should be direct and tactical. Pages should explain the next decision, why it matters, and what state to check before committing a turn.

## 3. Search Discovery and Demand Shape

Research used:

- Google autocomplete for the head term and eight modifiers.
- Current web search for the exact English and Japanese titles.
- Steam store, Steam Community, global achievements and the Steam App Details endpoint.
- The developer's web manual and July 23 opening/training article.
- YouTube search for beginner, gameplay, officer and Japanese-guide intents.

Serper was not available in the process environment, so no Serper credits were used. Google autocomplete returned only `kingdom chronicle steam` for the exact singular game name; the plural suggestions belong to unrelated games. Current search results are dominated by official sources and do not show a mature dedicated English competitor wiki. This is a thin, one-day-old launch: publish a focused 12–15 page core and expand from GSC rather than manufacturing 40 pages.

## 4. Keyword Matrix

| Keyword | Intent | Route | Priority | Status | Evidence and decision |
|---|---|---:|---:|---|---|
| kingdom chronicle | Entity/head term | `/` | P0 | keep | Exact Steam entity and released game page |
| kingdom chronicle wiki | Wiki hub | `/` | P0 | keep | Domain/head-term match; no dedicated English wiki found |
| kingdom chronicle steam | Official product | `/download` | P0 | keep | Exact Google autocomplete suggestion and Steam result |
| kingdom chronicle guide | Guide hub | `/guides` | P0 | keep | Official manual and developer guide confirm guide need |
| kingdom chronicle beginner guide | Opening plan | `/guides/beginner-guide` | P0 | keep | Developer published early-game advice after launch |
| kingdom chronicle training | Training and recruitment order | `/guides/training-and-recruiting` | P0 | keep | Dedicated July 23 developer article; training scales strength directly |
| kingdom chronicle diplomacy | Goodwill, trust and alliances | `/guides/diplomacy-and-alliances` | P0 | keep | Dedicated official manual page |
| kingdom chronicle alliance | Alliance choice and victory | `/guides/diplomacy-and-alliances` | P0 | keep | Core mechanic on Steam and in the manual |
| kingdom chronicle reinforcements | Defense/offense support | `/guides/war-and-reinforcements` | P0 | keep | Dedicated official manual page |
| kingdom chronicle troop types | Six-type matchup | `/guides/troop-types` | P0 | keep | Steam describes all six roles |
| kingdom chronicle skills | 42 officer skills | `/guides/officer-skills` | P1 | keep | Official manual lists all 42 by seven families |
| kingdom chronicle renown | Mobilization cap | `/guides/renown-and-mobilization` | P1 | keep | Dedicated official manual page and exact thresholds |
| kingdom chronicle officers | Recruiting, poaching and capture | `/guides/officers-and-recruitment` | P1 | keep | 168 officers are central to Steam positioning |
| kingdom chronicle victory conditions | Conquest, alliance and turn-limit wins | `/guides/campaigns-and-victory` | P1 | keep | Official manual defines three win paths and losses |
| kingdom chronicle achievements | Completion checklist | `/guides/achievements` | P1 | keep | Steam exposes 18 names and descriptions |
| kingdom chronicle casual difficulty | Launch balance update | `/guides/casual-difficulty` | P1 | keep | Current Steam Community update adds Casual |
| kingdom chronicle system requirements | PC compatibility | `/system-requirements` | P1 | keep | Official Steam requirements |
| kingdom chronicle free version | Version comparison | `/review` | P1 | keep | Developer explains BOOTH-to-Steam differences |
| kingdom chronicle review | Purchase decision | `/review` | P2 | watch | Only three Steam reviews at check time; avoid pretending there is consensus |
| kingdom chronicle codes | Redeem codes | none | P3 | ignore | No code system in official product or manual |
| kingdom chronicle tier list | Ranked roster | none | P3 | ignore | No current search evidence; 168-officer database would be thin/speculative |
| kingdom chronicle reroll | Gacha reset | none | P3 | ignore | No gacha/reroll system |
| kingdom chronicle mobile / apk | Mobile install | `/download` | P3 | ignore | Windows-only Steam build; route should warn against APKs |
| kingdom chronicles walkthrough | Unrelated plural game | none | P3 | ignore | Google suggestions point to a different casual/mobile title |
| 王国創世記 攻略 | Japanese guide | English routes first | P2 | localize_later | Relevant entity, but English core has launch priority |

## 5. Competitor and Source Benchmark

### Current result set

No mature dedicated English Kingdom Chronicle wiki was found. The launch result set consists of:

1. **Steam store** — strongest English entity and product source; good for features, media, platforms and requirements.
2. **Developer web manual** — strongest system source; separate pages cover turn flow, 42 skills, renown, diplomacy, war and reinforcements.
3. **Developer strategy article** — strongest tactical source; explains the opening, training order and resource efficiency.
4. **Steam Community** — current update and early player questions; the July 23 post adds Casual difficulty and an official uncut playthrough.
5. **Steam achievements** — complete current list of 18 public achievement names and descriptions.

### Pages we must match

- A clean game-flow and victory explanation.
- Training, renown, diplomacy and war reference pages.
- A complete current achievement checklist.
- A current-difficulty/update page.
- Safe official Steam and system-requirement pages.

### Pages we can improve

- Turn the Japanese manual into decision-first English guidance without copying its prose.
- Connect each system to the next campaign decision.
- Separate official facts from strategy and version-sensitive advice.
- Provide a compact route sidebar and mobile wiki menu.
- Use exact route labels instead of raw slugs.
- Keep the full free-versus-Steam boundary visible on buying/install pages.

### UI and SEO notes

- Use the Steam art's dark burgundy, parchment and gold rather than the source template's cyan/coral palette.
- Keep the hero compact with the official developer playthrough as trust media.
- The homepage should expose Beginner, Training, Diplomacy, War and Steam routes in the first viewport.
- Use WebSite, Organization, VideoGame and VideoObject schema on the homepage.
- Use ItemList on `/guides`; Article, BreadcrumbList and FAQPage on guide pages.
- English only at launch; add localization only after GSC validates demand.

## 6. Source and Video Plan

Primary sources:

- Steam App `4855560`
- Steam Community App `4855560`
- Steam global achievements
- Atelier KUSOGE developer site and web manual
- July 23 developer training article

Supporting video:

- ID: `nqmTjf2z6Yw`
- Title: `【開発者プレイ・ノーカット】Kingdom Chronicle エリア戦「北方の覇者」（Easy）同盟統一まで`
- Channel: 白猫斎
- Strategy: `official`
- Use: homepage trust media plus the beginner and training guides

YouTube search for the English head term mostly returned unrelated `Kingdom Chronicles`, Chronicles: Medieval, Kingdom games and Bible content. These were rejected. Pages without a directly relevant video remain `manual_data`; they should use official Steam screenshots rather than attaching unrelated media.

## 7. Launch Page Set

High-intent core:

1. `/`
2. `/guides`
3. `/guides/beginner-guide`
4. `/guides/training-and-recruiting`
5. `/guides/diplomacy-and-alliances`
6. `/guides/war-and-reinforcements`
7. `/guides/troop-types`
8. `/guides/officer-skills`
9. `/guides/renown-and-mobilization`
10. `/guides/officers-and-recruitment`
11. `/guides/campaigns-and-victory`
12. `/guides/achievements`
13. `/guides/casual-difficulty`
14. `/system-requirements`
15. `/download`
16. `/review`

Legal:

- `/disclaimer`
- `/privacy`
- `/terms`
- `/cookie`

No codes, tier-list, reroll, mobile or bulk officer-database route at launch.

## 8. Content Rules

- Present advice directly; do not narrate articles as summaries of a video.
- Keep exact numeric thresholds tied to official manual sources and the July 23 check date.
- Explain the two-turn battle clock accurately.
- Treat the newly added Casual difficulty as update-sensitive.
- Do not promise an optimal officer tier list without complete current data.
- Do not duplicate the official manual; translate facts into player decisions and original structure.
- Each guide should end with prerequisite or next-step links.
- Keep all high-value routes linked from the homepage and sidebar.

## 9. Implementation

- Data: `src/data/kingdomchronicle/`
- Route group: `src/app/[locale]/(kingdomchronicle)/`
- Components: `src/components/kingdomchronicle/`
- Assets: `public/kingdomchronicle/`
- Canonical: `https://www.kingdomchronicle.wiki`
- GitHub / Cloudflare project: `kingdomchronicle`

Required migration:

1. Remove all source-template names, IDs, facts, routes and art.
2. Remove inherited analytics IDs and set the real ID only after GA4 creation.
3. Keep `keep_vars: true`.
4. Keep the project free of inherited third-party ad code and variables.
5. Replace logos, icons, manifest, Open Graph media and site metadata.
6. Verify long link labels wrap inside the 272px sidebar.

## 10. Validation and Launch

1. `pnpm install`
2. `pnpm lint`
3. `pnpm exec tsc --noEmit`
4. `pnpm next:build`
5. `pnpm build`
6. Inspect homepage, guide hub, a video guide, a manual-data guide and mobile navigation.
7. Check sitemap, robots, manifest, canonical and JSON-LD.
8. Secret scan, initialize clean Git history, create the private GitHub repository and push `main`.
9. Deploy the `kingdomchronicle` Cloudflare Worker and bind apex plus `www`.
10. Create/reuse GA4, add one global tag and update GA-GTM registries.
11. Verify `sc-domain:kingdomchronicle.wiki`, submit the full sitemap and confirm `siteOwner`.
12. Register the site in Shipmanager with homepage and `/guides` core links.

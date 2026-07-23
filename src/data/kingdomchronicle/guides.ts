import { achievements, checkedAt } from './sources';
import type { Guide, GuideVideo } from './types';

const publishedAt = '2026-07-23';

const developerPlaythrough: GuideVideo = {
  id: 'nqmTjf2z6Yw',
  title:
    '【開発者プレイ・ノーカット】Kingdom Chronicle エリア戦「北方の覇者」（Easy）同盟統一まで',
  channel: '白猫斎',
  url: 'https://www.youtube.com/watch?v=nqmTjf2z6Yw',
  thumbnailUrl: '/kingdomchronicle/guides/developer-playthrough.jpg',
  publishedAt: '2026-07-23',
  viewCountLabel: '47 views when checked',
  checkedAt,
};

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    path: '/guides/beginner-guide',
    title: 'Kingdom Chronicle Beginner Guide: Your First Winning Campaign',
    seoTitle: 'Kingdom Chronicle Beginner Guide - First Campaign Plan',
    seoDescription:
      'Start Kingdom Chronicle with the right difficulty, early officers, training order, alliance choice and first attack timing.',
    summary:
      'Fill empty officer seats, build troops and training together, choose an ally by geography and start expanding before a long domestic setup costs the initiative.',
    category: 'Start',
    difficulty: 'Beginner',
    coverImageUrl: '/kingdomchronicle/guides/developer-playthrough.jpg',
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official_and_youtube',
    sourceNotes:
      'Built from the developer web manual, July 23 early-game article, Casual update and official uncut North campaign playthrough.',
    videoSearchQueries: [
      'Kingdom Chronicle beginner guide',
      'Kingdom Chronicle gameplay',
      '王国創世記 攻略',
    ],
    video: developerPlaythrough,
    tags: ['Opening turns', 'Casual', 'First war'],
    relatedRoutes: [
      '/guides/training-and-recruiting',
      '/guides/diplomacy-and-alliances',
      '/guides/war-and-reinforcements',
      '/guides/campaigns-and-victory',
    ],
    body: [
      {
        heading: 'Start with tempo, not a perfect kingdom',
        paragraphs: [
          'Kingdom Chronicle rewards an early plan more than a long opening build-up. A campaign is short enough that every quiet turn gives nearby powers time to recruit, train and take the map space you wanted. Your first objective is not to maximize every domestic number. It is to create one force that can move while your political position is still flexible.',
          'Choose Casual if you mainly want to learn the command flow and conquest rhythm. The post-launch Casual setting is easier than Easy, still records compendium entries and still counts clear status. Choose Easy if you already understand turn-based strategy and want the balance used in the developer playthrough. Normal and Hard are better after you can read training, troop matchups and the two-turn war clock without stopping.',
        ],
        bullets: [
          'Check empty officer seats before spending on slow development.',
          'Decide which direction you want to expand before choosing an ally.',
          'Raise soldiers and training in the same turn when possible.',
          'Prepare one credible attack instead of improving every stat at once.',
        ],
      },
      {
        heading: 'Use the first turns to create more actions',
        paragraphs: [
          'An empty officer position is a lost command opportunity. Search for recruits early, but assign the job intelligently: officers with better intelligence and charisma are more suitable for finding talent, while poor searchers can train troops or handle another dependable command. The point is not to collect a perfect roster immediately. It is to stop wasting action capacity.',
          'At the same time, inspect your starting soldier count and training. Training is not a decorative readiness score; it scales the force directly. A unit at 80 training fights at roughly 80 percent of its otherwise comparable strength. If you only conscript and ignore training, the larger number on the army panel can hide a weaker real force.',
        ],
      },
      {
        heading: 'Choose an ally by the map you want',
        paragraphs: [
          'The strongest faction is not automatically the best first ally. An ally sitting directly across your intended expansion lane can block targets and eventually force an awkward break. Look at geography first: where can you advance, which rival can close that route, and which ally can reinforce without competing for the same bases?',
          'A distant ally usually leaves more room, while a nearby ally can be used deliberately if you already understand when the partnership will outlive its value. For a first campaign, avoid clever betrayal plans. Build goodwill, raise the other faction’s trust and choose a partner whose front line points away from yours.',
        ],
      },
      {
        heading: 'Launch the first war before the board hardens',
        paragraphs: [
          'Once one attack force has enough soldiers and near-full training, start moving. An attack does not resolve immediately: you issue the sortie, the war forms on the next turn, and the result arrives one turn after that. Those warning turns let the defender intercept and let allies send support. Account for that response instead of comparing only the current visible garrison.',
          'Use espionage to look for opponents whose training is below 100. A recently expanded army may look large while fighting below its listed potential. Commit when the target is genuinely vulnerable, then keep domestic development running behind the attack. Early aggression creates territory and options; midgame national power and money are what sustain the lead.',
        ],
      },
      {
        heading: 'A repeatable first-campaign checklist',
        paragraphs: [
          'Before ending each early turn, ask four questions: did an officer slot remain unused, is training close to 100, is the alliance plan still opening the map, and will an issued attack resolve before the scenario limit? That checklist catches the most expensive beginner errors without forcing one rigid faction script.',
          'If the first run still collapses, change one variable. Drop to Casual, attack one turn earlier, select a less obstructive ally or dedicate one more action to training. A short campaign is designed for iteration. Use the next attempt to test a decision, not to repeat the entire build and hope for a different outcome.',
        ],
      },
    ],
    faq: [
      {
        question:
          'Which Kingdom Chronicle difficulty should a beginner choose?',
        answer:
          'Choose Casual to learn the flow with the most forgiving balance, or Easy if you already know turn-based strategy. Casual still counts compendium and clear progress.',
      },
      {
        question: 'Should I develop my nation before attacking?',
        answer:
          'Do enough to field a trained force, but do not spend the entire opening on domestic growth. The developer recommends recruiting and marching early.',
      },
      {
        question: 'What should I do first in Kingdom Chronicle?',
        answer:
          'Fill empty officer seats, select an alliance direction, then combine soldier growth with training so the first army can move quickly.',
      },
    ],
  },
  {
    slug: 'training-and-recruiting',
    path: '/guides/training-and-recruiting',
    title: 'Training and Recruiting: Build Strength Without Losing a Turn',
    seoTitle: 'Kingdom Chronicle Training & Recruiting Guide',
    seoDescription:
      'Learn why training directly scales strength, how conscription resolves before training and when to spend for speed or efficiency.',
    summary:
      'Treat training as real combat power, pair new soldiers with same-turn training and decide whether the position rewards fast spending or efficient small commands.',
    category: 'Economy',
    difficulty: 'System guide',
    coverImageUrl: '/kingdomchronicle/guides/developer-playthrough.jpg',
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official_and_youtube',
    sourceNotes:
      'Uses the developer training article and official playthrough; English skill labels can vary, so effect descriptions are prioritized over invented names.',
    videoSearchQueries: [
      'Kingdom Chronicle training guide',
      'Kingdom Chronicle early game',
      '王国創世記 訓練度',
    ],
    video: developerPlaythrough,
    tags: ['Training', 'Conscription', 'Economy'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/officer-skills',
      '/guides/officers-and-recruitment',
      '/guides/renown-and-mobilization',
    ],
    body: [
      {
        heading: 'Read training as a multiplier on the whole army',
        paragraphs: [
          'Training is one of the easiest numbers to underestimate. The developer describes it as a direct percentage on force strength: 100 training means the unit supplies its full comparable strength, while 80 training leaves it around twenty percent weaker. A higher soldier count does not automatically repair that gap.',
          'That changes how you compare factions. Do not stop at “they have as many soldiers as I do.” Use espionage, check training and consider whether the opponent can repair it before the battle resolves. A smaller but fully trained force can be much closer to parity than the raw soldier totals suggest.',
        ],
      },
      {
        heading: 'Recruit or conscript first, then train in the same turn',
        paragraphs: [
          'Adding soldiers lowers training because fresh recruits dilute the army’s readiness. The important rule is the resolution order: when soldier recruitment and training are ordered on the same turn, recruitment resolves first and training resolves afterward. That lets you grow the army and recover the lost readiness without waiting through a weak intermediate turn.',
          'Use enough training actions to aim for 100 after the new soldiers arrive. The exact allocation depends on officer ability and skill effects, so check the predicted or resulting value rather than following a fixed number of commands. If you cannot fully restore training, at least know the real percentage before choosing an attack.',
        ],
        bullets: [
          'Queue soldier growth and training together.',
          'Resolve the turn and check the final training value.',
          'Do not judge the army by soldier count alone.',
          'Keep a training-capable officer available during expansion.',
        ],
      },
      {
        heading: 'Assign officers by reliable effects',
        paragraphs: [
          'Four skill effects are especially useful around army preparation: more soldiers from conscription, less public-loyalty loss when conscripting, better starting training for fresh soldiers and a larger training gain. The Japanese manual provides the authoritative effect list; use the English in-game label shown by your current build when matching those effects.',
          'A strong training officer stays useful beyond the opening because every replenishment cycle can create a readiness dip. A soldier-yield officer saves money when the treasury is tight. Loyalty protection matters because an army built by repeatedly damaging domestic stability can weaken later income. These jobs are complementary, not a universal ranking.',
        ],
      },
      {
        heading: 'Spend for speed only when speed changes the map',
        paragraphs: [
          'Command returns are not perfectly proportional to money. According to the developer, spending 30 does not produce three times the effect of spending 10; it is closer to about twice the effect. Small allocations are more efficient per unit of currency, while larger allocations buy tempo.',
          'Spend heavily when one turn decides whether you seize a base, complete readiness before a rival attacks or exploit a temporary training gap. Spend in smaller steps when the front is stable and treasury endurance matters. The correct question is not “which amount is always optimal?” It is “does finishing this job now change the campaign?”',
        ],
      },
      {
        heading: 'Use enemy recruitment as an attack signal',
        paragraphs: [
          'Espionage can reveal a rival with high soldiers but training below 100. That is often the trace of recent recruitment. It can be an opening, but remember the two-turn war clock: the target may train before the battle resolves. Check its money and command capacity when possible. A cash-poor faction may struggle to both add soldiers and restore readiness; a rich one can recover quickly.',
          'This is also where intrigue can support war. An effect that lowers enemy training after normal commands resolve can preserve the vulnerability into battle. Treat that as a combined operation, not a guarantee: intelligence, success chance, officer selection and the opponent’s next actions still matter.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does training directly affect strength?',
        answer:
          'Yes. The developer states that training applies directly as a percentage, so 80 training is roughly 80 percent of comparable full-trained strength.',
      },
      {
        question: 'Can I conscript and train on the same turn?',
        answer:
          'Yes. Soldier recruitment resolves before training, allowing the later training command to repair readiness in the same turn.',
      },
      {
        question: 'Should I spend 10 or 30 on a command?',
        answer:
          'Small spending is more efficient; larger spending is faster. Pay for speed when finishing the action this turn changes the map or prevents a loss.',
      },
    ],
  },
  {
    slug: 'diplomacy-and-alliances',
    path: '/guides/diplomacy-and-alliances',
    title: 'Diplomacy and Alliances: Trust, Goodwill and Exit Costs',
    seoTitle: 'Kingdom Chronicle Diplomacy & Alliance Guide',
    seoDescription:
      'Understand directional goodwill and trust, alliance limits, success setup, expansion geography and the cost of breaking a pact.',
    summary:
      'Build the other ruler’s trust before proposing an alliance, choose partners by map geometry and budget for the renown and loyalty damage of a unilateral break.',
    category: 'Diplomacy',
    difficulty: 'System guide',
    coverImageUrl: '/kingdomchronicle/screenshots/7.jpg',
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Based on the official diplomacy manual and developer opening article.',
    videoSearchQueries: [
      'Kingdom Chronicle diplomacy guide',
      'Kingdom Chronicle alliance victory',
      '王国創世記 外交 同盟',
    ],
    tags: ['Trust', 'Alliances', 'Renown'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/war-and-reinforcements',
      '/guides/renown-and-mobilization',
      '/guides/campaigns-and-victory',
    ],
    body: [
      {
        heading: 'Goodwill and trust point in different directions',
        paragraphs: [
          'Diplomacy uses two values that can disagree. Goodwill represents how your side feels toward the other faction; trust represents how the other faction feels toward you. An apparently friendly relationship can therefore remain unsuitable for an alliance if the other ruler has not built enough trust.',
          'The exact trust number is hidden until espionage reaches the manual’s level-three threshold of 60. Before that, treat diplomatic feedback and repeated goodwill actions as imperfect signals. A failed alliance proposal is usually a reason to improve the relationship and the envoy, not to spend another 30 immediately with the same setup.',
        ],
      },
      {
        heading: 'Prepare the proposal before paying for it',
        paragraphs: [
          'Goodwill actions spend money and work better with an envoy who has strong intelligence and charisma. Their largest strategic value is increasing the other side’s trust. An alliance proposal costs 30 and is less forgiving, so build the relationship first rather than treating proposals as repeated lottery tickets.',
          'Area battles allow one alliance, while the full-continent campaign allows two. Those limits make each slot part of the expansion plan. A partner is valuable because it can reinforce wars and satisfy an alliance victory, but it also occupies space you may later need.',
        ],
      },
      {
        heading: 'Select by lanes, not power ranking',
        paragraphs: [
          'Start by drawing your intended route across the map. A faction that grows into the same corridor can block your targets even if it is militarily strong. A distant ally often provides a cleaner first campaign because both sides can expand without colliding immediately.',
          'A nearby pact can still be deliberate. It can stabilize one border or control an opponent while you push elsewhere. The developer warns that fully blocking an ally’s expansion can make it more likely to break away. If you choose a close partner, leave room or plan the diplomatic transition several turns ahead.',
        ],
        bullets: [
          'Which bases must remain available for your next two attacks?',
          'Can the ally reinforce the wars that matter?',
          'Will both factions compete for the same final corridor?',
          'Would an alliance victory remain possible if this partner grows?',
        ],
      },
      {
        heading: 'Breaking a pact spends more than a command',
        paragraphs: [
          'A unilateral break lowers renown and can reduce officer loyalty, with the severity changing by difficulty. Renown controls how many soldiers you can mobilize at once, so a careless diplomatic exit can weaken the next war even when the army itself is large.',
          'The freed slot can be used for another alliance during the same turn. That enables planned realignment, but it works best when the new faction’s trust has already been developed. Start the next relationship before the old one becomes unusable; otherwise the campaign can spend several turns without reinforcement access.',
        ],
      },
      {
        heading: 'War closes the diplomatic door',
        paragraphs: [
          'You cannot form an alliance with a faction while an unresolved war exists between you, and you cannot propose an alliance and sortie against the same target in one turn. The two-turn battle system therefore creates a clear commitment point. Decide whether the faction belongs inside your political solution or on the next conquest path before issuing the command.',
          'For an alliance victory, all remaining other factions must be allied with you and your faction must be the largest. A large network alone is not enough. Preserve the power lead while building trust, and avoid gifting an ally so much safe expansion that it becomes the larger surviving state.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the difference between goodwill and trust?',
        answer:
          'Goodwill is your side’s feeling toward the other faction. Trust is the other faction’s feeling toward you and is the more important value for an alliance.',
      },
      {
        question: 'How much does an alliance proposal cost?',
        answer: 'The official manual lists a cost of 30.',
      },
      {
        question: 'How many alliances can I have?',
        answer: 'One in an area battle and two in the full-continent campaign.',
      },
    ],
  },
  {
    slug: 'war-and-reinforcements',
    path: '/guides/war-and-reinforcements',
    title: 'War and Reinforcements: Win the Two-Turn Decision',
    seoTitle: 'Kingdom Chronicle War & Reinforcements Guide',
    seoDescription:
      'Plan sorties, interceptions, allied defense and offensive reinforcement requests around Kingdom Chronicle’s two-turn war clock.',
    summary:
      'An attack announces itself before it resolves. Use the warning turn to intercept, call an ally or punish a defender whose training and deployment plan cannot recover in time.',
    category: 'Warfare',
    difficulty: 'System guide',
    coverImageUrl: '/kingdomchronicle/screenshots/8.jpg',
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Uses the official war and reinforcement manual plus the current Casual update tips.',
    videoSearchQueries: [
      'Kingdom Chronicle war guide',
      'Kingdom Chronicle reinforcements',
      '王国創世記 戦争 援軍',
    ],
    tags: ['Sortie', 'Intercept', 'Allies'],
    relatedRoutes: [
      '/guides/troop-types',
      '/guides/diplomacy-and-alliances',
      '/guides/renown-and-mobilization',
      '/guides/training-and-recruiting',
    ],
    body: [
      {
        heading: 'Treat every attack as a three-state sequence',
        paragraphs: [
          'A Kingdom Chronicle war does not resolve on the sortie turn. First you issue the attack. On the following turn the war exists and the defender can intercept or arrange support. On the next turn the result is decided and the winner takes the base. Thinking in those three states prevents most timing mistakes.',
          'The delay also means you cannot launch an attack on the final scenario turn because there is no time to resolve it. Work backward from turn 40 in an area battle and turn 80 in the full-continent campaign. A late push must begin early enough to finish, especially if the result determines the largest faction.',
        ],
      },
      {
        heading: 'Attack the force the defender can field later',
        paragraphs: [
          'The current garrison is only the starting point. During the warning turn, the defender may assign an officer, train, reinforce or receive allied support. Compare your attack against that likely response. An untrained target is attractive only if it cannot recover before resolution.',
          'Your own deployment is limited by both soldiers owned and the renown mobilization cap. Sending the maximum is not always correct: soldiers left behind still protect the base. Commit enough to create a reliable advantage without exposing a second front to an opportunistic rival.',
        ],
      },
      {
        heading: 'Intercept any base you intend to keep',
        paragraphs: [
          'If a base is attacked and you do not intercept, it is lost. Assign a suitable officer and force during the warning turn. Heavy infantry and defensive skill effects are particularly valuable here because their role is built around holding rather than initiating an assault.',
          'Your ruler deserves special caution. A ruler captured after losing a sortie or interception causes game over. Use the ruler when the strategic value justifies the risk and the matchup is controlled, not simply because the ruler has the highest visible stat.',
        ],
      },
      {
        heading: 'Know which reinforcement needs a request',
        paragraphs: [
          'Allies can provide two kinds of support. Defensive reinforcement helps an ally whose base is under attack and can be sent on your own judgment. Offensive reinforcement joins an ally’s sortie and requires that ally to request help. A request can be made once per turn, giving the partner the following turn to respond.',
          'Sending support raises renown and goodwill. Ignoring a request lowers both, and choosing one of two simultaneous allied requests can damage the relationship with the faction left unsupported. Reinforcement decisions are therefore military and diplomatic at the same time.',
        ],
        bullets: [
          'Defensive support: no request required.',
          'Offensive support: the attacking ally must request it.',
          'Successful support: improves renown and goodwill.',
          'Ignored request: damages the relationship and mobilization future.',
        ],
      },
      {
        heading: 'Win big when capture matters',
        paragraphs: [
          'A large-margin victory can capture enemy officers; a narrow result is unlikely to do so. Capture can convert military success into roster growth, but it should not tempt you to overcommit an unsafe force. First secure the base and protect the ruler, then consider whether extra soldiers improve the capture chance enough to matter.',
          'After a result, recalculate immediately. The army may need training, the new base may open a different corridor, and the defeated faction may still have allies. The two-turn clock never stops being important: the best follow-up is the one that starts before rivals fully reorganize but after your real strength is restored.',
        ],
      },
    ],
    faq: [
      {
        question: 'How long does a war take?',
        answer:
          'Two turns after the sortie command: the war forms on the next turn and resolves on the turn after that.',
      },
      {
        question: 'Do defensive reinforcements need a request?',
        answer:
          'No. An ally can send defensive support when your base is attacked. Offensive support requires your request.',
      },
      {
        question: 'What happens if my ruler is captured?',
        answer:
          'Losing the ruler to capture causes game over, so use the ruler cautiously in sorties and interceptions.',
      },
    ],
  },
  {
    slug: 'troop-types',
    path: '/guides/troop-types',
    title: 'Troop Types Guide: Matchups, Roles and Safe Deployment',
    seoTitle: 'Kingdom Chronicle Troop Types & Matchups Guide',
    seoDescription:
      'Use cavalry, archers, spears, swords, mages and heavy infantry by role, training and battle context—not a fake tier list.',
    summary:
      'The six troop types solve different battles: three form a matchup triangle, swords trade specialization for stability, mages swing with intelligence and heavy troops defend.',
    category: 'Warfare',
    difficulty: 'System guide',
    coverImageUrl: '/kingdomchronicle/screenshots/5.jpg',
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    sourceNotes:
      'Role definitions come from the current English Steam store and official manual.',
    videoSearchQueries: [
      'Kingdom Chronicle troop types',
      'Kingdom Chronicle cavalry archers spears',
      '王国創世記 兵科',
    ],
    tags: ['Six troops', 'Matchups', 'Defense'],
    relatedRoutes: [
      '/guides/war-and-reinforcements',
      '/guides/training-and-recruiting',
      '/guides/officer-skills',
      '/guides/officers-and-recruitment',
    ],
    body: [
      {
        heading: 'Begin with the three-way matchup',
        paragraphs: [
          'Cavalry beats archers, archers beat spears, and spears beat cavalry. This triangle is the first matchup filter when both sides are otherwise comparable. It is not a promise that a tiny, untrained advantage will beat a larger prepared force.',
          'Read troop type together with soldiers, training, officer ability and special skills. A counter is most valuable when the surrounding numbers are close. When they are not, use the matchup to reduce a disadvantage or increase a victory margin rather than expecting it to erase the rest of the system.',
        ],
        bullets: [
          'Cavalry → favorable into archers.',
          'Archers → favorable into spears.',
          'Spears → favorable into cavalry.',
        ],
      },
      {
        heading: 'Use swords when information is incomplete',
        paragraphs: [
          'Swords sit outside the triangle. They are not the best answer to one specific opponent, but they remain stable across matchups. That makes a sword officer useful when espionage is poor, when a rival can change the likely defender or when the same force may need to cover more than one front.',
          'Stability has an opportunity cost. If you know the exact opponent and can field the counter without weakening another battle, specialization is usually more efficient. Choose swords because uncertainty is real, not because an all-rounder is automatically strongest.',
        ],
      },
      {
        heading: 'Treat mages as an intelligence-driven swing',
        paragraphs: [
          'Magic has wider variance than the physical types and is influenced strongly by intelligence. A successful result can be devastating; an unfavorable roll or poorly matched officer can make the same army feel unreliable. Build the decision around whether the campaign can tolerate that swing.',
          'Use a mage when the upside changes the battle and a miss does not destroy the campaign, or when the officer’s intelligence and skill effects justify the risk. Avoid using volatile magic as the only defense of a must-hold base unless the alternative is worse.',
        ],
      },
      {
        heading: 'Put heavy infantry where defense creates value',
        paragraphs: [
          'Heavy infantry are defensive specialists. Their best context is interception, where holding the line matters more than forcing an attack. Sending them forward simply because their visible defense looks impressive can waste the role that differentiates them.',
          'This distinction also helps roster assignment. Keep at least one credible defensive officer available near exposed bases instead of committing every strong officer to simultaneous sorties. The warning turn is useful only if someone capable remains to respond.',
        ],
      },
      {
        heading: 'Reinforcements do not follow the same matchup rule',
        paragraphs: [
          'The official manual notes that reinforcement troops are outside the normal troop-type compatibility calculation. Do not delay useful allied support because its displayed type appears to lose the triangle. The support’s strategic value comes from additional strength and the political benefits of answering the call.',
          'A practical battle check is: real trained strength first, troop matchup second, officer and skill context third, then reinforcement availability and ruler risk. That order prevents a colorful counter icon from overshadowing the larger campaign decision.',
        ],
      },
    ],
    faq: [
      {
        question: 'What beats cavalry?',
        answer: 'Spears are favorable into cavalry.',
      },
      {
        question: 'Are swords the best troop type?',
        answer:
          'No. Swords are stable all-rounders. Specialized types are stronger when you know and can exploit the matchup.',
      },
      {
        question: 'Are heavy infantry good for attacking?',
        answer:
          'Their defining strength is defense, so they are usually more valuable when intercepting an attack.',
      },
    ],
  },
  {
    slug: 'officer-skills',
    path: '/guides/officer-skills',
    title: 'Officer Skills Guide: Choose Effects for the Job',
    seoTitle: 'Kingdom Chronicle Officer Skills Guide - All 7 Families',
    seoDescription:
      'Understand Kingdom Chronicle’s 42 officer skills across ability, war, domestic, talent, diplomacy, intrigue and espionage roles.',
    summary:
      'The official manual groups 42 skills into seven families. Build assignments around the command being issued instead of treating one dramatic combat skill as universally best.',
    category: 'Officers',
    difficulty: 'System guide',
    coverImageUrl: '/kingdomchronicle/screenshots/6.jpg',
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'The Japanese developer manual is the authoritative complete list; this page describes functions and defers exact English labels to the live build.',
    videoSearchQueries: [
      'Kingdom Chronicle officer skills',
      'Kingdom Chronicle best skills',
      '王国創世記 特技',
    ],
    tags: ['42 skills', 'Assignments', 'Officers'],
    relatedRoutes: [
      '/guides/officers-and-recruitment',
      '/guides/training-and-recruiting',
      '/guides/troop-types',
      '/guides/diplomacy-and-alliances',
    ],
    body: [
      {
        heading: 'Seven families, one skill per officer',
        paragraphs: [
          'Each officer carries one special skill. The official manual groups the 42 effects into ability, war, domestic, talent, diplomacy, intrigue and espionage families. That structure is more useful than a single tier list because campaigns ask officers to do different jobs.',
          'The live English build is the authority for localized names. This guide focuses on what effects do so it does not invent translations from the Japanese manual. Open the officer detail in game to match the current name, ability, troop type and description before issuing an important command.',
        ],
      },
      {
        heading: 'Ability and war effects define reliable specialists',
        paragraphs: [
          'Ability-family skills improve martial, intelligence, charisma or all three; another prevents poaching, while a stability-oriented effect produces less spectacular but dependable results. These are always relevant but become strongest when the boosted stat is used repeatedly.',
          'War-family effects include bonuses for the cavalry, archer, spear, sword and magic roles, better capture odds, interception strength, reinforcement renown, unfavorable-matchup resilience, safer retreat and multi-faction battles. Choose the effect that matches the mission. A capture specialist belongs in a battle you already expect to win; a defensive specialist belongs on the threatened base.',
        ],
      },
      {
        heading: 'Domestic effects determine campaign tempo',
        paragraphs: [
          'Domestic skills improve development, relief, soldier recruitment, loyalty protection, recruit training quality or direct training gains. Their value is easiest to see in the opening, where one better action can move the first war forward a turn.',
          'Do not retire these officers when expansion begins. Conquered territory still needs money, loyalty, soldiers and readiness. A campaign that sends every domestic specialist into combat often wins the first base and then loses tempo rebuilding the army.',
        ],
      },
      {
        heading: 'Talent and diplomacy effects create options',
        paragraphs: [
          'Talent-family skills improve the quality or quantity of officer discovery, including effects aimed at finding stronger or previously unseen candidates. Use them when empty seats limit command output or when the compendium is an explicit campaign goal.',
          'Diplomacy-family skills improve goodwill results and diplomatic success. They matter because a failed alliance proposal costs time and money, while the correct partner can contribute reinforcements for the rest of the campaign. Assign the envoy before spending, not after a failed attempt.',
        ],
      },
      {
        heading: 'Intrigue and espionage prepare the battle',
        paragraphs: [
          'Intrigue skills raise scheme success or specialize in resource damage, loyalty disruption, alliance damage, national-power damage, training disruption and officer poaching. Their value depends on timing. Lowering training is most useful when the affected army cannot repair the loss before a battle; breaking diplomacy matters when it changes reinforcement access.',
          'Espionage-family skills protect the agent after failure, improve information gain, slow intelligence decay or occasionally add information without a direct command. Better information supports every other family because it reveals trust, training and the opponent’s likely response.',
        ],
        bullets: [
          'Opening: training, recruitment yield, talent search and diplomacy.',
          'Active front: troop-role, interception, capture and intrigue.',
          'Uncertain map: espionage and reliable all-round ability effects.',
          'Completion run: talent discovery, capture and custom-officer goals.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many officer skills are there?',
        answer: 'The official web manual currently lists 42 skills.',
      },
      {
        question: 'What are the seven skill families?',
        answer:
          'Ability, war/combat, domestic affairs, talent, diplomacy, intrigue and espionage/stealth.',
      },
      {
        question: 'What is the best officer skill?',
        answer:
          'There is no universal best effect. Training and recruitment accelerate the opening, while troop, defense, diplomacy and intrigue effects solve different later jobs.',
      },
    ],
  },
  {
    slug: 'renown-and-mobilization',
    path: '/guides/renown-and-mobilization',
    title: 'Renown and Mobilization: How Many Soldiers Can You Field?',
    seoTitle: 'Kingdom Chronicle Renown & Mobilization Guide',
    seoDescription:
      'See every renown deployment threshold, how the cap combines with soldiers owned and why alliances can raise or damage mobilization.',
    summary:
      'Renown caps how many soldiers can enter one battle. Protect it through reliable alliances and plan every sortie around the lower of the cap and your actual army.',
    category: 'Economy',
    difficulty: 'System guide',
    coverImageUrl: '/kingdomchronicle/screenshots/10.jpg',
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Numeric thresholds are taken from the official renown and mobilization manual page checked July 23.',
    videoSearchQueries: [
      'Kingdom Chronicle renown',
      'Kingdom Chronicle mobilization',
      '王国創世記 名声 動員',
    ],
    tags: ['Renown', 'Deployment cap', 'Allies'],
    relatedRoutes: [
      '/guides/war-and-reinforcements',
      '/guides/diplomacy-and-alliances',
      '/guides/training-and-recruiting',
      '/guides/campaigns-and-victory',
    ],
    body: [
      {
        heading: 'Renown is a battle-size limit',
        paragraphs: [
          'Renown represents the ruler’s reputation and charisma, but its most concrete effect is the number of soldiers that can be mobilized in one sortie or interception. A faction can own hundreds of soldiers and still be unable to place more than the current cap into one battle.',
          'The cap is deterministic. The same renown always produces the same maximum, with no random roll. That makes it possible to plan ahead: identify the next threshold, estimate whether one diplomatic choice will cross it and avoid actions that drop the army into a lower band before a major war.',
        ],
        bullets: [
          'Renown 0–39: mobilize up to 30.',
          'Renown 40–49: mobilize up to 40.',
          'Renown 50–59: mobilize up to 50.',
          'Renown 60–69: mobilize up to 60.',
          'Renown 70–79: mobilize up to 70.',
          'Renown 80–100: mobilize up to 80.',
        ],
      },
      {
        heading: 'The real deployment uses the lower number',
        paragraphs: [
          'Actual deployment is the lower of the renown cap and soldiers currently owned. At renown 70 with only 50 soldiers, the battle limit is 50. At renown 40 with 200 soldiers, it is 40. Extra soldiers still defend the home base; they are not erased because they could not deploy.',
          'Deployment is selected in ten-soldier steps from 10 through 80. Do not automatically send the largest available force. Keep enough protection behind when a rival can attack a different base during the two-turn resolution window.',
        ],
      },
      {
        heading: 'Allied support uses goodwill instead',
        paragraphs: [
          'When sending troops as reinforcement to an ally, the equivalent support limit is based on goodwill toward that ally rather than your renown. Better relationships let you contribute more. This turns routine goodwill into military capacity even after an alliance already exists.',
          'The distinction matters when two partners ask for help. Your own large renown does not guarantee maximum support if one relationship has been neglected. Maintain the alliance you expect to use, not only the one that was easiest to sign.',
        ],
      },
      {
        heading: 'Reliable support builds the reputation loop',
        paragraphs: [
          'Sending reinforcements raises renown and goodwill, especially with an effect that improves the reputation gained from helping. Ignoring requests, breaking an alliance unilaterally or being exposed scheming against a partner can lower renown. Those actions do not only change diplomacy; they can shrink the next battle.',
          'This creates a useful loop: build a trustworthy alliance, answer a meaningful defensive or offensive request, cross the next mobilization threshold and use the larger field force to secure your own expansion. The loop fails when support strips your home defense or drags you into a war that does not serve the map plan.',
        ],
      },
      {
        heading: 'Plan around thresholds, not the maximum',
        paragraphs: [
          'Going from 59 to 60 renown matters immediately because the cap rises from 50 to 60. Going from 60 to 65 does not change the cap yet. Use that knowledge when choosing between an action that earns reputation now and a domestic action that creates more soldiers or money.',
          'Late in a campaign, review renown before breaking a pact or refusing support. A ten-soldier drop in the force that can enter the decisive battle may cost more than the diplomatic freedom gained. If a break is necessary, rebuild the reputation or choose a battle that remains safe under the lower band.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the maximum mobilization?',
        answer: 'The official manual lists 80 soldiers at renown 80–100.',
      },
      {
        question: 'Can low renown prevent all deployment?',
        answer:
          'No. The minimum cap is 30, though actual deployment cannot exceed soldiers owned.',
      },
      {
        question: 'What determines allied reinforcement size?',
        answer:
          'Goodwill toward the ally uses the same threshold structure instead of renown.',
      },
    ],
  },
  {
    slug: 'officers-and-recruitment',
    path: '/guides/officers-and-recruitment',
    title: 'Officers and Recruitment: Search, Poach, Capture and Collect',
    seoTitle: 'Kingdom Chronicle Officers & Recruitment Guide',
    seoDescription:
      'Grow a useful officer roster through searching, poaching and capture while protecting command capacity, loyalty and your ruler.',
    summary:
      'Fill empty seats early, recruit for the job rather than raw stats, use espionage before poaching and turn decisive victories into safe capture opportunities.',
    category: 'Officers',
    difficulty: 'System guide',
    coverImageUrl: '/kingdomchronicle/screenshots/3.jpg',
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official_and_developer',
    sourceNotes:
      'Uses the Steam roster description, web manual and developer opening strategy.',
    videoSearchQueries: [
      'Kingdom Chronicle officers guide',
      'Kingdom Chronicle recruitment',
      '王国創世記 武将 登用',
    ],
    tags: ['168 officers', 'Search', 'Capture'],
    relatedRoutes: [
      '/guides/officer-skills',
      '/guides/training-and-recruiting',
      '/guides/war-and-reinforcements',
      '/guides/achievements',
    ],
    body: [
      {
        heading: 'Officer count is command capacity',
        paragraphs: [
          'Every empty officer position reduces the number of useful commands your faction can issue. That is why the developer’s opening plan begins by filling vacancies. A merely competent officer who trains, searches or handles diplomacy now can be more valuable than waiting several turns for an ideal recruit.',
          'Inspect the roster before ending the first turn and after taking territory. Expansion changes the number and location of jobs: one officer may need to hold a threatened base, another must restore training, and a third may continue diplomacy. A roster that looked sufficient during peace can become overloaded as soon as two wars exist.',
        ],
      },
      {
        heading: 'Search with the officer suited to finding talent',
        paragraphs: [
          'Officer discovery benefits from intelligence and charisma. Do not assign a weak searcher simply because that officer is idle; an unsuccessful search still consumes an action that could have trained soldiers or developed the state. Use the best available talent specialist when a vacancy matters.',
          'Skills can improve discovered quality, prioritize stronger candidates, find more than one person or reveal new talent. These effects are especially useful during compendium runs, but in a first campaign the immediate priority is a balanced working roster: domestic, diplomatic, information, attack and defense roles.',
        ],
      },
      {
        heading: 'Poaching is an information operation',
        paragraphs: [
          'Poaching tries to pull an officer from another faction and belongs to the intrigue side of the system. Better intelligence helps you understand the target, while relevant skill effects improve success or reduce the cost of failure. Attempt it when the specific officer solves a real shortage or when removing that officer weakens an important rival.',
          'Scheming against an ally is politically dangerous when exposed. The loss of goodwill, trust or renown can reduce reinforcement access and mobilization. Do not trade a functional alliance for one attractive stat line unless the campaign plan already accounts for the diplomatic damage.',
        ],
      },
      {
        heading: 'Capture follows decisive war, not wishful thinking',
        paragraphs: [
          'A wide victory can capture an enemy officer; a close battle rarely does. Capture-focused effects increase the chance, but the battle still needs to be safe. Overcommitting the ruler or emptying a home defense for a speculative capture is a bad exchange.',
          'Captured officers can become recruitment opportunities, turning expansion into roster growth. Keep a place and a job in mind before chasing them. If command capacity is already full, decide whether the new officer genuinely improves a critical role or only adds compendium progress.',
        ],
      },
      {
        heading: 'Build toward the compendium without weakening the run',
        paragraphs: [
          'Officers who serve under you are recorded in the compendium. The roster is around 168, and Steam includes an achievement for completing the collection. That is a long-term objective across repeated short campaigns, not a reason to distort every early turn.',
          'First clear the campaigns and unlock custom officer registration. Then use targeted runs: choose factions and routes that expose missing officers, bring talent and capture specialists, and play at a difficulty where the plan remains consistent. Collection is faster when the campaign still wins.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many officers are in Kingdom Chronicle?',
        answer: 'Steam describes a roster of around 168 officers.',
      },
      {
        question: 'How do I recruit more officers?',
        answer:
          'Use search/recruitment, poaching from rivals and capture after decisive victories.',
      },
      {
        question: 'When can an enemy officer be captured?',
        answer:
          'The official manual says capture can happen after a large-margin victory and is unlikely after a close result.',
      },
    ],
  },
  {
    slug: 'campaigns-and-victory',
    path: '/guides/campaigns-and-victory',
    title: 'Campaigns and Victory Conditions: Conquest, Alliance or Time',
    seoTitle: 'Kingdom Chronicle Campaigns & Victory Conditions',
    seoDescription:
      'Plan area and grand campaigns around 40/80-turn limits, three victory paths, ruler safety and the custom-officer unlock.',
    summary:
      'Win by taking every base, forming an alliance victory as the largest faction or leading at the turn limit—then clear the grand campaign to unlock officer creation.',
    category: 'Campaigns',
    difficulty: 'Checklist',
    coverImageUrl: '/kingdomchronicle/screenshots/12.jpg',
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official_and_developer',
    sourceNotes:
      'Campaign flow and outcomes come from the official web manual, Steam page and achievements.',
    videoSearchQueries: [
      'Kingdom Chronicle campaign guide',
      'Kingdom Chronicle victory conditions',
      '王国創世記 全国版',
    ],
    tags: ['40/80 turns', 'Victory', 'Grand campaign'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/diplomacy-and-alliances',
      '/guides/achievements',
      '/review',
    ],
    body: [
      {
        heading: 'Use area battles to learn one map problem',
        paragraphs: [
          'Area battles focus on a smaller region and run for 40 turns, equivalent to ten in-game years at four turns per year. The North, Eastern Sea and Central Plains campaigns each have a start achievement and a victory achievement, making them natural steps before the full-continent map.',
          'Treat each area battle as a focused lesson. Use one to practice early aggression, another to test alliance geometry and the third to improve training and reinforcement timing. The shorter map makes mistakes visible without turning the campaign into a long recovery exercise.',
        ],
      },
      {
        heading: 'The grand campaign doubles the clock and the politics',
        paragraphs: [
          'The full-continent campaign lasts 80 turns, or twenty in-game years, and allows two alliances instead of one. More space creates more opportunities for safe expansion, but it also makes blocked corridors, alliance switching and late reinforcement commitments more important.',
          'Clearing the grand campaign unlocks officer registration. That is the main post-clear system: you can create an officer by setting stats, troop type, skill and personality, then bring the result into later runs. The first grand campaign therefore opens both completion goals and new roster experiments.',
        ],
      },
      {
        heading: 'Three ways to win',
        paragraphs: [
          'Unification is direct: control every base. An alliance victory is political: every surviving other faction must be allied with you, and your faction must be the largest. A turn-limit victory occurs when the final turn arrives and you are the largest faction.',
          'These conditions reward different endgames. Conquest needs enough time for every remaining war to resolve. Alliance victory needs trust, available alliance slots and power leadership. A turn-limit plan needs disciplined defense and a clear base-count lead rather than one last attack that cannot finish.',
        ],
        bullets: [
          'Unification: capture all bases.',
          'Alliance victory: ally every surviving faction and remain largest.',
          'Turn-limit victory: be the largest faction when time expires.',
        ],
      },
      {
        heading: 'Work backward from the final turn',
        paragraphs: [
          'Because a sortie needs two turns to resolve, the final turn cannot accept a new attack. Count the last necessary wars and begin them early enough to finish. A campaign that reaches turn 39 or 79 with a perfect army but an unresolved target has already missed the timing.',
          'Seasonal income arrives in spring and autumn, and each year contains four turns. Use those predictable income points when budgeting a late push. If the political win is already available, do not create a new war merely to make the ending look cleaner.',
        ],
      },
      {
        heading: 'Avoid the three loss conditions',
        paragraphs: [
          'You lose if every base is taken, if the ruler is captured or if the final turn arrives while another faction is larger. The ruler condition makes a desperate defense especially dangerous: assigning the strongest officer is not worth it when one bad result ends the entire campaign.',
          'Before each end turn, check base exposure, ruler assignment and standings. If a rival can overtake you, choose the action that changes the count in time. If no attack can resolve, reinforce the lead through defense and diplomacy instead of issuing a command with no possible result.',
        ],
      },
    ],
    faq: [
      {
        question: 'How long are Kingdom Chronicle campaigns?',
        answer:
          'Area battles last 40 turns; the full-continent campaign lasts 80.',
      },
      {
        question: 'How do I get an alliance victory?',
        answer:
          'All surviving other factions must be your allies, and your faction must be the largest.',
      },
      {
        question: 'How do I unlock custom officers?',
        answer: 'Clear the full-continent grand campaign.',
      },
    ],
  },
  {
    slug: 'achievements',
    path: '/guides/achievements',
    title: 'All 18 Kingdom Chronicle Achievements and Clear Order',
    seoTitle: 'Kingdom Chronicle Achievements - All 18 Unlocks',
    seoDescription:
      'Track all 18 Steam achievements across area campaigns, difficulty clears, grand-campaign repeats, the compendium and custom officers.',
    summary:
      'Start each area campaign, clear them, finish the grand campaign across difficulty goals, then use repeat runs for the officer compendium and custom-officer milestones.',
    category: 'Achievements',
    difficulty: 'Checklist',
    coverImageUrl: '/kingdomchronicle/screenshots/14.jpg',
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    sourceNotes:
      'Names and descriptions are copied only as short factual labels from Steam global achievements; completion percentages are intentionally omitted as volatile.',
    videoSearchQueries: [
      'Kingdom Chronicle achievements',
      'Kingdom Chronicle Grand Compendium',
      '王国創世記 実績',
    ],
    tags: ['18 achievements', 'Compendium', 'Custom officers'],
    relatedRoutes: [
      '/guides/campaigns-and-victory',
      '/guides/officers-and-recruitment',
      '/guides/casual-difficulty',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'Clear the area campaigns before grinding',
        paragraphs: [
          'The cleanest achievement route begins by opening and winning the three area campaigns. Starting North, Eastern Sea and Central Plains supplies three achievements; winning those maps supplies three more. A defeat also has its own unlock, so an early failed attempt is not wasted completion progress.',
          'Use these maps to learn different systems rather than forcing every achievement immediately. A stable clear route, reliable training and sensible alliance choice will make the repeat and difficulty goals much faster later.',
        ],
        bullets: achievements
          .filter((achievement) => achievement.kind === 'campaign')
          .map(
            (achievement) =>
              `${achievement.name} — ${achievement.officialDescription}`
          ),
      },
      {
        heading: 'Stack difficulty goals with meaningful clears',
        paragraphs: [
          'Easy, Normal and Hard wins each have an achievement. The post-launch Casual mode is excellent for learning and still counts clear status and compendium progress, but Steam’s current achievement list specifically names Easy, Normal and Hard for the three difficulty milestones.',
          'Clear on Easy while building the first repeatable route, then move to Normal once training and troop decisions feel automatic. Save Hard for a roster and opening you understand. Increasing difficulty before the campaign plan is stable usually creates more restarts than useful practice.',
        ],
        bullets: achievements
          .filter((achievement) => achievement.kind === 'difficulty')
          .map(
            (achievement) =>
              `${achievement.name} — ${achievement.officialDescription}`
          ),
      },
      {
        heading: 'Use grand-campaign repeats for collection',
        paragraphs: [
          'Starting and winning the grand campaign creates its own milestones, and completing it three and five times advances the repeat-clear achievements. Do not run five identical routes unless they also improve the compendium. Change factions and capture targets so each victory records officers you still need.',
          'The complete officer compendium is the long collection goal. Search quality, capture opportunities and faction choice matter more than raw speed. Track what the current run can add before selecting the starting position.',
        ],
        bullets: achievements
          .filter((achievement) => achievement.kind === 'completion')
          .map(
            (achievement) =>
              `${achievement.name} — ${achievement.officialDescription}`
          ),
      },
      {
        heading: 'Finish the custom-officer milestones',
        paragraphs: [
          'Officer registration unlocks after the grand campaign. Creating the first custom officer grants The Creator, while registering 30 grants Master of Creation. These are menu and post-clear goals rather than battle conditions, so handle them after the unlock instead of searching for an in-campaign event.',
          'A custom officer can set stats, troop type, skill and personality for later runs. Use the first few creations as practical roster experiments. The remaining registrations can be completed after you know which combinations you actually want to play.',
        ],
        bullets: achievements
          .filter((achievement) => achievement.kind === 'custom')
          .map(
            (achievement) =>
              `${achievement.name} — ${achievement.officialDescription}`
          ),
      },
      {
        heading: 'Leave the meta-achievement for last',
        paragraphs: [
          'The Complete Chronicle requires every other achievement. If it does not unlock, compare the Steam list against campaign starts, three area wins, difficulty clears, repeat grand-campaign clears, the officer compendium and both custom-officer milestones.',
          'Achievement descriptions and completion rates can change after updates. This checklist was verified against Steam on July 23, 2026. Use the live Steam global-achievement page if a future patch adds, renames or revises an unlock.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many Kingdom Chronicle achievements are there?',
        answer: 'Steam currently lists 18 achievements.',
      },
      {
        question: 'Does Casual count for progress?',
        answer:
          'The developer says Casual counts clear status and compendium progress, but the named difficulty achievements are for Easy, Normal and Hard.',
      },
      {
        question: 'How do I unlock The Complete Chronicle?',
        answer: 'Unlock every other Steam achievement.',
      },
    ],
  },
  {
    slug: 'casual-difficulty',
    path: '/guides/casual-difficulty',
    title: 'Casual Difficulty: What the Post-Launch Mode Changes',
    seoTitle: 'Kingdom Chronicle Casual Difficulty Explained',
    seoDescription:
      'See who should choose Casual, what progress still counts and which early-game habits matter after Kingdom Chronicle’s July 23 update.',
    summary:
      'Casual is easier than Easy, starts only with a new game and still counts compendium and clear progress. It changes the margin for error, not the core campaign decisions.',
    category: 'Updates',
    difficulty: 'Status',
    coverImageUrl: '/kingdomchronicle/screenshots/2.jpg',
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    sourceNotes:
      'Based on the July 23 Steam Community update; this page is deliberately date-sensitive.',
    videoSearchQueries: [
      'Kingdom Chronicle Casual difficulty',
      'Kingdom Chronicle easy gameplay',
      '王国創世記 カジュアル',
    ],
    video: developerPlaythrough,
    tags: ['July 23 update', 'Difficulty', 'New game'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/training-and-recruiting',
      '/guides/campaigns-and-victory',
      '/guides/achievements',
    ],
    body: [
      {
        heading: 'Casual sits below Easy',
        paragraphs: [
          'The developer added Casual after hearing that the early game was difficult. It is the easiest current option and is intended for players who want to learn the flow of conquest with more room for inefficient commands or a slower response.',
          'Easy and every higher setting remain unchanged. The update does not quietly reduce an existing campaign’s difficulty; Casual appears when starting a new game. If a current save is struggling, finish the experiment or restart deliberately rather than expecting the rules to switch underneath it.',
        ],
      },
      {
        heading: 'Progress still counts',
        paragraphs: [
          'Casual records officer compendium entries and counts clear status. That makes it a legitimate route for learning factions, seeing officers and completing a first campaign rather than a disposable tutorial mode.',
          'The current Steam achievement descriptions still name Easy, Normal and Hard for their difficulty-specific wins. Use Casual for systems and collection, then plan separate clears for the named difficulty achievements.',
        ],
      },
      {
        heading: 'The best early habits stay the same',
        paragraphs: [
          'A larger safety margin does not change the efficient opening. Fill officer vacancies, choose an ally by expansion lanes, recruit soldiers and train in the same turn, then move before rivals occupy the map. These habits transfer directly when you step up to Easy.',
          'The developer’s update repeats one central lesson: offense is the best defense in the opening. A fully developed starting state that never claims territory can still fall behind. Use Casual to practice the timing of the first credible attack.',
        ],
      },
      {
        heading: 'Allies remain the only external support',
        paragraphs: [
          'The update emphasizes that your other positions do not act as a separate reinforcement network for each other; alliance support is the important outside help. Allied factions can reinforce even across the continent, so diplomacy remains valuable on the easiest mode.',
          'The midgame can still become a back-and-forth contest. Keep attacking, grow national power and accept that temporary reversals are part of the map. Casual lowers the punishment but does not turn conquest into a passive idle sequence.',
        ],
      },
      {
        heading: 'Move up when decisions become predictable',
        paragraphs: [
          'Switch to Easy when you can explain why each early officer has a job, why training is at its current value, which faction should become an ally and what response an attack will face one turn later. Those are more useful readiness tests than simply winning once.',
          'Keep Casual available for roster collection or a relaxed experiment. Difficulty is a tool for the goal of the run. Use the named Easy, Normal and Hard clears when chasing achievements, and use the most enjoyable setting for everything else.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Casual easier than Easy?',
        answer:
          'Yes. The developer describes Casual as significantly easier than the existing Easy mode.',
      },
      {
        question: 'Does Casual count the officer compendium?',
        answer: 'Yes, compendium registration and clear status count.',
      },
      {
        question: 'Can I switch an existing game to Casual?',
        answer: 'The update says Casual is available when starting a new game.',
      },
    ],
  },
  {
    slug: 'system-requirements',
    path: '/system-requirements',
    title: 'Kingdom Chronicle System Requirements and PC Checklist',
    seoTitle: 'Kingdom Chronicle System Requirements - PC Specs',
    seoDescription:
      'Check the official Windows 10/11, RAM, DirectX 11, storage and 1920×1080 recommendations for Kingdom Chronicle on Steam.',
    summary:
      'The official build is Windows-only, requires a 64-bit OS and DirectX 11, needs 2 GB of storage and recommends 8 GB RAM on Windows 11.',
    category: 'Platform',
    difficulty: 'Checklist',
    coverImageUrl: '/kingdomchronicle/screenshots/4.jpg',
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    sourceNotes:
      'Specifications come from the Steam App Details record checked July 23.',
    videoSearchQueries: ['Kingdom Chronicle PC', 'Kingdom Chronicle Steam'],
    tags: ['Windows', 'DirectX 11', '2 GB storage'],
    relatedRoutes: [
      '/download',
      '/review',
      '/guides/beginner-guide',
      '/guides/casual-difficulty',
    ],
    body: [
      {
        heading: 'Official minimum specification',
        paragraphs: [
          'Kingdom Chronicle requires a 64-bit processor and operating system. Steam lists Windows 10 64-bit, an Intel Core i3 or equivalent processor, 4 GB RAM and a DirectX 11 compatible graphics device such as Intel HD Graphics 4000 or better.',
          'The game needs DirectX 11, a compatible sound device and 2 GB of available storage. A 1920×1080 display is recommended even at the minimum tier, so check display scaling if the interface feels cramped on a smaller panel.',
        ],
        bullets: [
          'OS: Windows 10 64-bit.',
          'CPU: Intel Core i3 or equivalent.',
          'Memory: 4 GB RAM.',
          'Graphics: DirectX 11 compatible, Intel HD 4000 or better.',
          'Storage: 2 GB available.',
        ],
      },
      {
        heading: 'Official recommended specification',
        paragraphs: [
          'The recommended tier moves to Windows 11 64-bit, an Intel Core i5 or equivalent processor and 8 GB RAM. Steam still lists DirectX 11 compatible graphics, 2 GB storage and a DirectX-compatible sound device.',
          'This is a modest specification by current desktop standards, but integrated graphics and older drivers can still cause presentation issues. Update through the hardware manufacturer and test the normal Steam build before changing compatibility settings.',
        ],
        bullets: [
          'OS: Windows 11 64-bit.',
          'CPU: Intel Core i5 or equivalent.',
          'Memory: 8 GB RAM.',
          'Graphics: DirectX 11 compatible.',
          'Display: 1920×1080 recommended.',
        ],
      },
      {
        heading: 'Platform features',
        paragraphs: [
          'Steam lists single-player play, achievements, Steam Cloud, Family Sharing, adjustable difficulty, save-anytime support, custom volume controls and play without timed input. The store currently lists Windows, not macOS or Linux.',
          'Steam Deck compatibility is not presented as a current official store category in the checked App Details record. Avoid assuming Verified status from another game or template. If you test through Proton, treat the result as community experience rather than official Windows support.',
        ],
      },
      {
        heading: 'Troubleshoot the supported build first',
        paragraphs: [
          'Verify files through Steam, restart after driver changes and make sure the game is using a DirectX 11 capable adapter. On laptops with two GPUs, Windows graphics settings may need the executable assigned to the more capable adapter.',
          'Cloud saves and Family Sharing depend on the Steam client. A copied executable or unofficial repack can break those services and introduces unnecessary risk. Reproduce any problem on the supported Steam installation before reporting it to the developer.',
        ],
      },
    ],
    faq: [
      {
        question: 'How much storage does Kingdom Chronicle need?',
        answer: 'Steam lists 2 GB of available storage.',
      },
      {
        question: 'Does Kingdom Chronicle support macOS?',
        answer: 'The current Steam record lists Windows only.',
      },
      {
        question: 'What is the minimum RAM?',
        answer: 'The official minimum is 4 GB RAM; 8 GB is recommended.',
      },
    ],
  },
  {
    slug: 'review',
    path: '/review',
    title: 'Is Kingdom Chronicle Worth It? Steam vs Free Version',
    seoTitle: 'Kingdom Chronicle Review Guide - Steam vs Free',
    seoDescription:
      'Decide whether Kingdom Chronicle fits you by comparing its short strategy runs, six troop roles, Steam additions and free-version boundary.',
    summary:
      'Buy it for compact, replayable turn-based campaigns and officer-driven statecraft—not for real-time battles, multiplayer or a giant traditional 4X sandbox.',
    category: 'Review',
    difficulty: 'Status',
    coverImageUrl: '/kingdomchronicle/key-art.jpg',
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official_and_developer',
    sourceNotes:
      'A fact-led buying guide; only three Steam user reviews existed at check time, so no review consensus is claimed.',
    videoSearchQueries: [
      'Kingdom Chronicle review',
      'Kingdom Chronicle gameplay',
      '王国創世記 Steam',
    ],
    video: developerPlaythrough,
    tags: ['$5.99', '1–2 hour runs', 'Steam vs free'],
    relatedRoutes: [
      '/download',
      '/system-requirements',
      '/guides/beginner-guide',
      '/guides/campaigns-and-victory',
    ],
    body: [
      {
        heading: 'The clearest fit is short-form grand strategy',
        paragraphs: [
          'Kingdom Chronicle compresses domestic affairs, diplomacy, intrigue and war into campaigns designed to finish in about one or two hours. It is a good fit if you enjoy reading a political map, assigning officers and testing a new route without committing to a fifty-hour save.',
          'It is not a real-time tactics game. Battles resolve from soldiers, training, officer ability, troop role, skills and support decisions. The interesting action happens before resolution: who goes, when the war starts, which ally helps and whether the target can recover.',
        ],
      },
      {
        heading: 'Depth comes from interaction, not menu volume',
        paragraphs: [
          'The state has national power, money, soldiers, training, public loyalty, espionage, renown and bases. Diplomacy distinguishes your goodwill from the other faction’s trust. War operates on a two-turn clock, and six troop roles create matchups without requiring manual battlefield control.',
          'That design is intentionally approachable. Players seeking a huge technology tree, city placement or detailed tactical movement may find it too compact. Players who like repeated political puzzles can get more from the same small rule set because factions, officers, alliances and campaign routes change.',
        ],
      },
      {
        heading: 'What the Steam version adds',
        paragraphs: [
          'The developer says the Steam edition builds on a free BOOTH version rather than becoming a completely different game. It revises UI and help, adds officers, events and map connections, adjusts rules and includes Steam services such as achievements and Cloud.',
          'The Steam roster rises from the free edition’s 144 officers to about 168, including Steam-specific additions. Heavy infantry and effects aimed at reinforcement play are part of the expanded balance. The game also offers a mode that preserves behavior closer to the free version for players who prefer it.',
        ],
      },
      {
        heading: 'Know the current limitations',
        paragraphs: [
          'The checked Steam build is Windows-only, single-player and newly released. There is no verified codes, gacha, multiplayer or mobile system. Search results are still thin, and only three Steam reviews existed when this page was prepared, so it is too early to claim a broad player consensus.',
          'Steam also includes a generative-AI disclosure: some character and UI artwork was produced with AI assistance and edited by the developer, while background music used ACE-Step. No generation runs during gameplay. That disclosure may matter to your purchase decision.',
        ],
      },
      {
        heading: 'The practical decision',
        paragraphs: [
          'Choose the Steam version if you want the current English-capable release, expanded content, achievements, Cloud and automatic updates. Try or examine the developer’s free distribution only through the official site and remember that mechanics and content can differ.',
          'The official price was $5.99 when checked. For that price, the value depends on whether repeated compact campaigns appeal to you. Watch the uncut developer run, read the beginner plan and decide whether the decision loop—not the amount of content promised by a giant wiki—is what you want.',
        ],
      },
    ],
    faq: [
      {
        question: 'How long is one Kingdom Chronicle run?',
        answer:
          'Steam describes a full-continent campaign as roughly one to two hours.',
      },
      {
        question: 'Is there a free version?',
        answer:
          'The developer site references a free BOOTH edition, but it differs from the Steam version in content and rules.',
      },
      {
        question: 'Does Kingdom Chronicle have multiplayer?',
        answer: 'The current Steam page lists single-player only.',
      },
    ],
  },
  {
    slug: 'download',
    path: '/download',
    title: 'Kingdom Chronicle Download: Use the Official Steam Build',
    seoTitle: 'Kingdom Chronicle Download - Official Steam App 4855560',
    seoDescription:
      'Install Kingdom Chronicle safely from Steam App 4855560, verify the developer and avoid APKs, cracks, trainers and misleading plural-title downloads.',
    summary:
      'The current supported PC release is Steam App 4855560. Verify the developer and publisher, then let Steam manage updates, Cloud files and achievements.',
    category: 'Safety',
    difficulty: 'Checklist',
    coverImageUrl: '/kingdomchronicle/key-art.jpg',
    publishedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    sourceNotes: 'Uses the exact Steam identity and developer-linked website.',
    videoSearchQueries: [
      'Kingdom Chronicle Steam',
      'Kingdom Chronicle download',
    ],
    tags: ['Steam App 4855560', 'Windows', 'Safe install'],
    relatedRoutes: [
      '/system-requirements',
      '/review',
      '/guides/beginner-guide',
      '/disclaimer',
    ],
    body: [
      {
        heading: 'Verify the exact Steam identity',
        paragraphs: [
          'The official release is Steam App 4855560, titled Kingdom Chronicle. The developer is スタジオ白猫斎 / Studio Hakubyousai and the publisher is くそげ工房 / Atelier KUSOGE. Check all three fields before purchasing or installing because similarly named games dominate autocomplete results.',
          'The official Steam page links back to atelier-ksg.com and to the developer’s X account. Those links create a clear identity chain. A page offering “Kingdom Chronicles,” an APK, a modified installer or another App ID is not the supported product covered by this wiki.',
        ],
        bullets: [
          'App ID: 4855560.',
          'Platform: Windows through Steam.',
          'Developer: Studio Hakubyousai.',
          'Publisher: Atelier KUSOGE.',
        ],
      },
      {
        heading: 'Install through the Steam client',
        paragraphs: [
          'Open the official store page, purchase or add the game to the account, then use Steam’s Install button. Steam manages the current build, updates, achievements, Cloud support and Family Sharing. The install requires about 2 GB of available storage according to the store.',
          'After installation, launch once online so Steam can initialize the account and Cloud state. If files become damaged, use Steam’s installed-files verification instead of downloading replacement executables from a third party.',
        ],
      },
      {
        heading: 'Keep the free edition separate',
        paragraphs: [
          'The developer site also references a free BOOTH edition. Use only the link provided by the developer if you investigate that version. Do not assume a mirror is legitimate, and do not mix free-build instructions with the current Steam rules.',
          'The Steam edition has additional officers, revised UI and help, more events, map changes and rule adjustments. A save, strategy note or screenshot from the free build may not describe the current Steam campaign exactly.',
        ],
      },
      {
        heading: 'Avoid APKs, cracks and trainers',
        paragraphs: [
          'There is no official Android or iOS release in the checked Steam record. An APK using the game name is unrelated or unsafe. Cracks and repacks remove the identity chain, can bundle malware and can break Cloud or achievement behavior.',
          'Trainers and modified clients are also outside the supported experience. Kingdom Chronicle already includes adjustable difficulty and a new Casual mode. Use those official options when you want a lower-pressure campaign.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the official Kingdom Chronicle App ID?',
        answer: '4855560.',
      },
      {
        question: 'Is there an official Kingdom Chronicle APK?',
        answer: 'No. The checked official release is Windows through Steam.',
      },
      {
        question: 'Where is the developer website?',
        answer: 'Steam links to https://atelier-ksg.com/.',
      },
    ],
  },
];

export const guideSlugs = new Set(guides.map((guide) => guide.slug));

export const featuredGuides = [
  'beginner-guide',
  'training-and-recruiting',
  'diplomacy-and-alliances',
  'war-and-reinforcements',
  'troop-types',
  'achievements',
]
  .map((slug) => guides.find((guide) => guide.slug === slug))
  .filter((guide): guide is Guide => Boolean(guide));

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

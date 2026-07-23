'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';

export function useFooterLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Start',
      items: [
        {
          title: 'Beginner Guide',
          href: Routes.BeginnerGuide,
          external: false,
        },
        { title: 'Guide Hub', href: Routes.Guides, external: false },
        {
          title: 'Training & Recruiting',
          href: Routes.TrainingRecruiting,
          external: false,
        },
      ],
    },
    {
      title: 'Statecraft',
      items: [
        {
          title: 'Diplomacy & Alliances',
          href: Routes.DiplomacyAlliances,
          external: false,
        },
        {
          title: 'Renown & Mobilization',
          href: Routes.RenownMobilization,
          external: false,
        },
        {
          title: 'Officer Skills',
          href: Routes.OfficerSkills,
          external: false,
        },
      ],
    },
    {
      title: 'Campaign',
      items: [
        {
          title: 'War & Reinforcements',
          href: Routes.WarReinforcements,
          external: false,
        },
        {
          title: 'Troop Types',
          href: Routes.TroopTypes,
          external: false,
        },
        {
          title: 'Campaigns & Victory',
          href: Routes.CampaignsVictory,
          external: false,
        },
        {
          title: 'Achievements',
          href: Routes.Achievements,
          external: false,
        },
      ],
    },
    {
      title: 'Steam',
      items: [
        {
          title: 'Casual Difficulty',
          href: Routes.CasualDifficulty,
          external: false,
        },
        {
          title: 'System Requirements',
          href: Routes.SystemRequirements,
          external: false,
        },
        { title: 'Official Download', href: Routes.Download, external: false },
        { title: 'Steam vs Free', href: Routes.Review, external: false },
      ],
    },
    {
      title: 'Legal',
      items: [
        { title: 'Disclaimer', href: Routes.Disclaimer, external: false },
        { title: 'Privacy', href: Routes.PrivacyPolicy, external: false },
        { title: 'Terms', href: Routes.TermsOfService, external: false },
        { title: 'Cookies', href: Routes.CookiePolicy, external: false },
      ],
    },
  ];
}

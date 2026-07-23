'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  Download,
  Dumbbell,
  Flag,
  Handshake,
  ShieldCheck,
  Swords,
  Trophy,
  Users,
} from 'lucide-react';

export function useNavbarLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Guides',
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
      items: [
        {
          title: 'Guide hub',
          description: 'All current statecraft and campaign guides.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Beginner guide',
          description: 'Build one trained army and take the initiative.',
          href: Routes.BeginnerGuide,
          external: false,
          icon: <Flag className="size-4" />,
        },
        {
          title: 'Training & recruiting',
          description: 'Grow soldiers without carrying weak readiness.',
          href: Routes.TrainingRecruiting,
          external: false,
          icon: <Dumbbell className="size-4" />,
        },
      ],
    },
    {
      title: 'Strategy',
      href: Routes.DiplomacyAlliances,
      external: false,
      icon: <Handshake className="size-4" />,
      items: [
        {
          title: 'Diplomacy & alliances',
          description: 'Build trust and keep expansion lanes open.',
          href: Routes.DiplomacyAlliances,
          external: false,
          icon: <Handshake className="size-4" />,
        },
        {
          title: 'War & reinforcements',
          description: 'Use the two-turn warning and allied support.',
          href: Routes.WarReinforcements,
          external: false,
          icon: <Swords className="size-4" />,
        },
        {
          title: 'Troop types',
          description: 'Compare all six roles and matchup limits.',
          href: Routes.TroopTypes,
          external: false,
          icon: <ShieldCheck className="size-4" />,
        },
      ],
    },
    {
      title: 'Officers',
      href: Routes.OfficerSkills,
      external: false,
      icon: <Users className="size-4" />,
      items: [
        {
          title: 'Officer skills',
          description: 'Use the 42 effects by job, not one tier list.',
          href: Routes.OfficerSkills,
          external: false,
          icon: <Users className="size-4" />,
        },
        {
          title: 'Recruitment',
          description: 'Search, poach, capture and fill command seats.',
          href: Routes.OfficersRecruitment,
          external: false,
          icon: <Users className="size-4" />,
        },
        {
          title: 'All 18 achievements',
          description: 'Campaign, difficulty and collection milestones.',
          href: Routes.Achievements,
          external: false,
          icon: <Trophy className="size-4" />,
        },
      ],
    },
    {
      title: 'Steam',
      href: Routes.Download,
      external: false,
      icon: <Download className="size-4" />,
      items: [
        {
          title: 'Official download',
          description: 'Use the supported Steam App 4855560.',
          href: Routes.Download,
          external: false,
          icon: <Download className="size-4" />,
        },
        {
          title: 'System requirements',
          description: 'Windows, RAM, DirectX and storage checklist.',
          href: Routes.SystemRequirements,
          external: false,
          icon: <ShieldCheck className="size-4" />,
        },
        {
          title: 'Steam vs free',
          description: 'See what the released Steam edition changes.',
          href: Routes.Review,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
      ],
    },
  ];
}

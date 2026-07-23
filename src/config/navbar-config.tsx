'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  Download,
  Footprints,
  Ghost,
  HeartPulse,
  Route,
  ShieldCheck,
  Sparkles,
  Swords,
  Trophy,
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
          description: 'All current boss, combat and run guides.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Beginner guide',
          description: 'Choose a first Kami and build a learnable route.',
          href: Routes.BeginnerGuide,
          external: false,
          icon: <Footprints className="size-4" />,
        },
        {
          title: 'Boss order',
          description: 'Move your personal wall earlier as scaling rises.',
          href: Routes.BossOrder,
          external: false,
          icon: <Route className="size-4" />,
        },
      ],
    },
    {
      title: 'Combat',
      href: Routes.CombatDodge,
      external: false,
      icon: <Swords className="size-4" />,
      items: [
        {
          title: 'All 10 Kami',
          description: 'The confirmed primary boss roster.',
          href: Routes.AllKami,
          external: false,
          icon: <Ghost className="size-4" />,
        },
        {
          title: 'Powers & abilities',
          description: 'Choose rewards by defense, movement and sustain.',
          href: Routes.KamiPowers,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
        {
          title: 'Lives & runs',
          description: 'Use limited attempts as structured practice.',
          href: Routes.LivesRuns,
          external: false,
          icon: <HeartPulse className="size-4" />,
        },
      ],
    },
    {
      title: 'Steam',
      href: Routes.Achievements,
      external: false,
      icon: <ShieldCheck className="size-4" />,
      items: [
        {
          title: 'All 42 achievements',
          description: 'Official names without invented hidden conditions.',
          href: Routes.Achievements,
          external: false,
          icon: <Trophy className="size-4" />,
        },
        {
          title: 'Steam Deck',
          description: 'Verified status, input and Cloud checklist.',
          href: Routes.SteamDeck,
          external: false,
          icon: <ShieldCheck className="size-4" />,
        },
        {
          title: 'Official download',
          description: 'Use Steam App 2191280 and avoid unsafe mirrors.',
          href: Routes.Download,
          external: false,
          icon: <Download className="size-4" />,
        },
      ],
    },
  ];
}

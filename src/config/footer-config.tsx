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
        { title: 'Boss Order', href: Routes.BossOrder, external: false },
      ],
    },
    {
      title: 'Kami',
      items: [
        { title: 'All 10 Kami', href: Routes.AllKami, external: false },
        {
          title: 'Powers & Abilities',
          href: Routes.KamiPowers,
          external: false,
        },
        { title: 'Combat & Dodge', href: Routes.CombatDodge, external: false },
      ],
    },
    {
      title: 'Runs',
      items: [
        { title: 'Lives & Resets', href: Routes.LivesRuns, external: false },
        { title: 'Secrets', href: Routes.Secrets, external: false },
        { title: 'Achievements', href: Routes.Achievements, external: false },
      ],
    },
    {
      title: 'Steam',
      items: [
        { title: 'Steam Deck', href: Routes.SteamDeck, external: false },
        {
          title: 'System Requirements',
          href: Routes.SystemRequirements,
          external: false,
        },
        { title: 'Official Download', href: Routes.Download, external: false },
        { title: 'Review', href: Routes.Review, external: false },
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

import { Analytics } from '@/analytics/analytics';
import GoogleAnalytics from '@/analytics/google-analytics';
import {
  fontBricolageGrotesque,
  fontNotoSans,
  fontNotoSansMono,
  fontNotoSerif,
} from '@/assets/fonts';
import AffonsoScript from '@/components/affiliate/affonso';
import PromotekitScript from '@/components/affiliate/promotekit';
import { getMessagesForLocale } from '@/i18n/messages';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { type Locale, NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import type { ComponentProps, ReactNode } from 'react';
import { Toaster } from 'sonner';
import { Providers } from './providers';

import '@/styles/globals.css';

type MessageMap = Record<string, unknown>;
type ClientMessages = ComponentProps<typeof NextIntlClientProvider>['messages'];

const CLIENT_MESSAGE_NAMESPACES = [
  'Metadata',
  'Common',
  'PricingPage',
  'PricePlans',
  'CreditPackages',
  'NotFoundPage',
  'ErrorPage',
  'Newsletter',
  'AuthPage',
  'PremiumContent',
  'Dashboard',
  'Mail',
] as const;

const MARKETING_NAVBAR_KEYS = [
  'home',
  'guides',
  'platforms',
  'database',
  'tools',
  'romance',
  'farming',
  'magic',
  'nokturna',
  'download',
  'discord',
] as const;

const MARKETING_FOOTER_KEYS = [
  'tagline',
  'start',
  'guides',
  'database',
  'tools',
  'official',
  'legal',
] as const;
const MARKETING_FOOTER_GUIDE_ITEM_KEYS = [
  'all',
  'beginner',
  'romance',
  'gifts',
  'farming',
  'magic',
  'nokturna',
  'walkthrough',
] as const;
const MARKETING_FOOTER_DATABASE_ITEM_KEYS = [
  'all',
  'characters',
  'families',
  'locations',
  'items',
] as const;
const MARKETING_FOOTER_TOOLS_ITEM_KEYS = [
  'all',
  'platformPicker',
  'romanceTracker',
  'itemTracker',
  'farmingCalculator',
] as const;
const MARKETING_FOOTER_START_ITEM_KEYS = [
  'beginner',
  'release',
  'demo',
  'platforms',
] as const;
const MARKETING_FOOTER_OFFICIAL_ITEM_KEYS = [
  'discord',
  'download',
  'cheats',
  'disclaimer',
] as const;

function pickKeys<T extends MessageMap, K extends readonly string[]>(
  source: T | undefined,
  keys: K
) {
  return Object.fromEntries(
    keys
      .filter((key) => source && key in source)
      .map((key) => [key, source?.[key]])
  );
}

function pickMarketingFooter(footer: MessageMap | undefined) {
  const selectedFooter = pickKeys(footer, MARKETING_FOOTER_KEYS) as MessageMap;
  const start = selectedFooter.start as MessageMap | undefined;
  const startItems = start?.items as MessageMap | undefined;
  const guides = selectedFooter.guides as MessageMap | undefined;
  const guideItems = guides?.items as MessageMap | undefined;
  const database = selectedFooter.database as MessageMap | undefined;
  const databaseItems = database?.items as MessageMap | undefined;
  const tools = selectedFooter.tools as MessageMap | undefined;
  const toolItems = tools?.items as MessageMap | undefined;
  const official = selectedFooter.official as MessageMap | undefined;
  const officialItems = official?.items as MessageMap | undefined;

  if (start && startItems) {
    selectedFooter.start = {
      ...start,
      items: pickKeys(startItems, MARKETING_FOOTER_START_ITEM_KEYS),
    };
  }

  if (guides && guideItems) {
    selectedFooter.guides = {
      ...guides,
      items: pickKeys(guideItems, MARKETING_FOOTER_GUIDE_ITEM_KEYS),
    };
  }

  if (database && databaseItems) {
    selectedFooter.database = {
      ...database,
      items: pickKeys(databaseItems, MARKETING_FOOTER_DATABASE_ITEM_KEYS),
    };
  }

  if (tools && toolItems) {
    selectedFooter.tools = {
      ...tools,
      items: pickKeys(toolItems, MARKETING_FOOTER_TOOLS_ITEM_KEYS),
    };
  }

  if (official && officialItems) {
    selectedFooter.official = {
      ...official,
      items: pickKeys(officialItems, MARKETING_FOOTER_OFFICIAL_ITEM_KEYS),
    };
  }

  return selectedFooter;
}

function pickClientMessages(messages: MessageMap) {
  const marketing = messages.Marketing as MessageMap | undefined;
  const navbar = marketing?.navbar as MessageMap | undefined;
  const footer = marketing?.footer as MessageMap | undefined;

  return {
    ...pickKeys(messages, CLIENT_MESSAGE_NAMESPACES),
    Marketing: {
      navbar: pickKeys(navbar, MARKETING_NAVBAR_KEYS),
      footer: pickMarketingFooter(footer),
      avatar: marketing?.avatar,
    },
  };
}

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
}

/**
 * 1. Locale Layout
 * https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing#layout
 *
 * 2. NextIntlClientProvider
 * https://next-intl.dev/docs/usage/configuration#nextintlclientprovider
 */
export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessagesForLocale(locale);
  const clientMessages = pickClientMessages(messages as MessageMap);

  return (
    <html suppressHydrationWarning lang={locale}>
      <head>
        <GoogleAnalytics />
        <AffonsoScript />
        <PromotekitScript />
      </head>
      <body
        suppressHydrationWarning
        className={cn(
          'size-full antialiased',
          fontNotoSans.className,
          fontNotoSerif.variable,
          fontNotoSansMono.variable,
          fontBricolageGrotesque.variable
        )}
      >
        <NuqsAdapter>
          <NextIntlClientProvider messages={clientMessages as ClientMessages}>
            <Providers>
              {children}

              <Toaster richColors position="top-right" offset={64} />
              <Analytics />
            </Providers>
          </NextIntlClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}

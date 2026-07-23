import Container from '@/components/layout/container';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Terms of Service | Gurei Wiki',
    description: 'Terms for using Gurei Wiki, an independent game guide site.',
    locale,
    pathname: '/terms',
  });
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#090a0c] py-12 text-[#f3f0e8]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Terms of Service</h1>
        <p className="leading-8 text-[#aaa9a4]">
          This site provides independent Gurei guides, source notes and
          official-link guidance. It is not affiliated with, endorsed by,
          sponsored by or operated by Lobo Sagaz studio, Astrolabe Games, Valve,
          Steam or YouTube.
        </p>
        <p className="leading-8 text-[#aaa9a4]">
          Boss behavior, achievements, run systems and platform support can
          change after game updates. Treat guide pages as community-oriented
          guidance and verify important details in your current build.
        </p>
        <p className="leading-8 text-[#aaa9a4]">
          Do not use this site to distribute unauthorized game files, unsafe
          downloads, modified clients, paid files, trainers, or automation
          scripts.
        </p>
        <p className="leading-8 text-[#aaa9a4]">
          Questions about these terms can be sent to hello@gurei.wiki.
        </p>
      </Container>
    </div>
  );
}

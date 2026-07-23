import Container from '@/components/layout/container';
import { siteFacts } from '@/data/gurei/sources';
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
    title: 'Disclaimer | Gurei Wiki',
    description: 'Disclaimer for Gurei Wiki, an independent game guide site.',
    locale,
    pathname: '/disclaimer',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#090a0c] py-12 text-[#f3f0e8]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Disclaimer</h1>
        <p className="leading-8 text-[#aaa9a4]">
          Gurei Wiki is an independent guide site. It is not affiliated with,
          endorsed by, sponsored by, or operated by Lobo Sagaz studio, Astrolabe
          Games, Valve, Steam, YouTube or another official distribution
          platform.
        </p>
        <p className="leading-8 text-[#aaa9a4]">
          Gurei, its artwork, music, game files and official materials belong to
          their respective rights holders. This site does not redistribute paid
          files, modified clients, APK mirrors, cracks, injectors or unsafe
          downloads.
        </p>
        <p className="leading-8 text-[#aaa9a4]">
          Guides distinguish the current full Steam release, official facts,
          demo-era notes and community reports. For live purchase and patch
          status, use the{' '}
          <a
            href={siteFacts.officialSteamUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#73e4ff] underline underline-offset-4"
          >
            official Gurei Steam page
          </a>
          .
        </p>
      </Container>
    </div>
  );
}

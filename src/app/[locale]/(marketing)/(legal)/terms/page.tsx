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
    title: 'Terms of Service | Kingdom Chronicle Wiki',
    description:
      'Terms for using Kingdom Chronicle Wiki, an independent game guide site.',
    locale,
    pathname: '/terms',
  });
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#120f0c] py-12 text-[#f6ead1]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Terms of Service</h1>
        <p className="leading-8 text-[#c1ad8a]">
          This site provides independent Kingdom Chronicle guides, source notes
          and official-link guidance. It is not affiliated with, endorsed by,
          sponsored by or operated by Studio Hakubyousai, Atelier KUSOGE, Valve,
          Steam or YouTube.
        </p>
        <p className="leading-8 text-[#c1ad8a]">
          Officer data, campaign rules, achievements and platform support can
          change after game updates. Treat guide pages as community-oriented
          guidance and verify important details in your current build.
        </p>
        <p className="leading-8 text-[#c1ad8a]">
          Do not use this site to distribute unauthorized game files, unsafe
          downloads, modified clients, paid files, trainers, or automation
          scripts.
        </p>
        <p className="leading-8 text-[#c1ad8a]">
          Questions about these terms can be sent to
          hello@kingdomchronicle.wiki.
        </p>
      </Container>
    </div>
  );
}

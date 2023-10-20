import './globals.css';
import type { Metadata, ResolvingMetadata } from 'next';
import { Nunito, Nunito_Sans } from 'next/font/google';
import clsx from 'clsx';
import { createClient, repositoryName } from '@/prismicio';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PrismicPreview } from '@prismicio/next';

export const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

export const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle('settings');

  return {
    title: settings.data.site_title || 'Flowrise fallback',
    description: settings.data.meta_description || 'flowrise is a relaxing app',
    openGraph: {
      images: [settings.data.image.url || ''],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" className={clsx(nunito.variable, nunitoSans.variable)}>
        <body suppressHydrationWarning>
          {/* @ts-expect-error Async Server Component */}
          <Header />
          {children}
        </body>
        {/* @ts-expect-error Async Server Component */}
        <Footer />
        <div className="fixed bg-gradoent-to-tr from-emerald-50 to-cyan-50 z-[-1] inset-0 opacity-50" />
        <PrismicPreview repositoryName={repositoryName} />
      </html>
    </>
  );
}

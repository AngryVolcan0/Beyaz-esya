import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Profesyonel Beyaz Eşya Servisi | 7/24 Hizmet',
  description: 'Uzman teknisyenlerimizle tüm beyaz eşya markalarında profesyonel, hızlı ve garantili tamir hizmeti sunuyoruz. Aynı gün servis imkanı!',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
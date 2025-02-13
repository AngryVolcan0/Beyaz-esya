import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Profesyonel Beyaz Eşya Servisi | 7/24 Hizmet',
  description: 'Uzman teknisyenlerimizle tüm beyaz eşya markalarında profesyonel, hızlı ve garantili tamir hizmeti sunuyoruz. Aynı gün servis imkanı!',
  viewport: 'width=device-width, initial-scale=1, minimum-scale=1',
  formatDetection: {
    telephone: 'yes'
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Beyaz Eşya Servisi'
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'mobile-web-app-capable': 'yes'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TGK28865');`
        }} />
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TGK28865"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }} />
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
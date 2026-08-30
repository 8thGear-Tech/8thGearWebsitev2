import type { Metadata } from "next";
import Script from "next/script";
import { poppins, rubik, openSans } from "@/lib/fonts";
import { SurveyBanner } from "@/components/SurveyBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "8thGear Hub",
  description:
    "8thGear Partners is a venture studio and hub developing a thriving ecosystem for entrepreneurs across growth advisory, co-working, talent placement, and venture building.",
  keywords: [
    "co-working space near me",
    "Growth Advisory",
    "Tech Solutions",
    "Talent Placement",
    "Coworking",
    "Coworking space in Lagos",
    "Coworking space in Magodo",
    "Venture Studio",
    "Project Delivery",
    "Ecosystem Events",
    "Startups",
    "Tech Talents",
  ],
  icons: {
    icon: "/eightgear.ico",
    apple: "/faviconn.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${rubik.variable} ${openSans.variable}`}
    >
      <body className="flex min-h-screen flex-col font-body text-primary antialiased">
        <SurveyBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-RP5ENCRZG5"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RP5ENCRZG5');
          `}
        </Script>

        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1567113067959295');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height={1}
            width={1}
            className="hidden"
            src="https://www.facebook.com/tr?id=1567113067959295&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <Script id="zoho-salesiq" strategy="afterInteractive">
          {`
            var $zoho = $zoho || {};
            $zoho.salesiq = $zoho.salesiq || {
              widgetcode: "siq1b3272855854f8ddfbb223934da7f6dfd9afc68c50e41276d9a4caac3effb1b8",
              values: {},
              ready: function () {},
            };
            var d = document;
            var s = d.createElement("script");
            s.type = "text/javascript";
            s.id = "zsiqscript";
            s.defer = true;
            s.src = "https://salesiq.zohopublic.com/widget";
            var t = d.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(s, t);
          `}
        </Script>
      </body>
    </html>
  );
}

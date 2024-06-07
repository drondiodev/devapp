import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { APP_NAME, APP_DESCRIPTION } from "@/constants/index";
import "@/styles/globals.css";
import Banner from "@/components/banner";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";

export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: `${APP_DESCRIPTION}`,
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`antialiased scroll-smooth ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body
        className={`bg-zinc-100 text-zinc-900 min-h-screen flex flex-col overflow-x-hidden ${GeistSans.variable} ${GeistMono.variable}`}
      >
        <Container>
          <Banner />
          <Header />
          <main role="main" className="flex-grow">
            {children}
          </main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}

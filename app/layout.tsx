import Head from "next/head";
import "./globals.styles.scss";

export const metadata = {
  title: "Muffin Dilemma",
  description: "To eat or not to eat?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <body>{children}</body>
    </html>
  );
}

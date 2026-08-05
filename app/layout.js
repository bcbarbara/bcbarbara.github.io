import "./globals.scss";

const url = "https://bcbarbara.github.io";
const title = "Bárbara Barros Carlos";
const description = "Minimal portfolio.";

export const metadata = {
  metadataBase: new URL(url),
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link
          rel="preload"
          href="/X-Regular.woff2"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/X-Medium.woff2"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restos Africains à Paris | Guide des meilleures tables africaines",
  description:
    "Découvrez les 10 meilleurs restaurants africains à Paris : sénégalais, ivoiriens, éthiopiens, marocains et plus encore. Le guide culinaire incontournable de la diaspora africaine à Paris.",
  keywords: "restaurant africain Paris, cuisine africaine, sénégalais Paris, thiéboudienne, yassa, ndolé, injera",
  openGraph: {
    title: "Restos Africains à Paris",
    description: "Guide des meilleures tables africaines de la capitale",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WELCOME TO ZION — Archive 001: Roots",
  description: "Une archive vivante de l'identité, de la mémoire et de la beauté noire.",
  icons: {
    icon: "/brand-icon",
    shortcut: "/brand-icon",
    apple: "/brand-icon",
  },
  openGraph: {
    title: "WELCOME TO ZION",
    description: "Nous n'arrivons pas pour suivre une époque. Nous arrivons pour laisser une trace.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}

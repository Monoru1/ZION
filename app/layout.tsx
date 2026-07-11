import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZION — Archive 001: Roots",
  description: "Une archive vivante de l'identité, de la mémoire et de la beauté noire.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}

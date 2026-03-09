import { DM_Sans, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import SocialBar from "@/components/ui/SocialBar";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "Esthelys | Médecine Esthétique Paris",
  description:
    "Clinique de médecine esthétique à Paris. Injections, skinboosters, peelings, mésothérapie.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-dark text-light">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <SocialBar />
        </SmoothScroll>
      </body>
    </html>
  );
}

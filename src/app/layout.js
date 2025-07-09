import { Agbalumo, Delius, Geist, Geist_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const bodyFont = Inter({
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Agbalumo({
  variable: "--font-display",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "moomoo",
  description: "The OG 4Chan Bull",
};

// const displayFont = localFont({
//   src: "../fonts/tt.ttf",
//   variable: "--font-display",
//   fallback: ["system-ui", "Helvetica Neue", "Helvetica", "Arial"],
//   display: "swap",
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

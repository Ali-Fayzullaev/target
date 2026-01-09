import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  title: "Таргетированная реклама с гарантией результата | Raycon",
  description: "Ваша реклама не окупается? Вы не платите. Настройка прибыльной рекламы в Instagram и Facebook. Работа с воронкой целиком. Окупаемость от 300% в первый месяц.",
  keywords: "таргет, таргетированная реклама, instagram реклама, facebook реклама, казахстан, астана, алматы, ROI, performance-маркетинг",
  authors: [{ name: "Raycon" }],
  creator: "Raycon",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://raycon.kz",
    title: "Таргетированная реклама с гарантией результата",
    description: "Ваша реклама не окупается? Вы не платите. Окупаемость от 300% в первый месяц.",
    siteName: "Raycon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Таргетированная реклама с гарантией результата",
    description: "Ваша реклама не окупается? Вы не платите. Окупаемость от 300% в первый месяц.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

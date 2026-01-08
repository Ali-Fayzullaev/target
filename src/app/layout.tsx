import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Таргетированная реклама в Казахстане | Raycon",
  description: "Настройка таргетированной рекламы в Instagram и Facebook с гарантией результата. Работаю с бизнесом в Астане и Алматы. Окупаемость или деньги назад.",
  keywords: "таргет, таргетированная реклама, instagram реклама, facebook реклама, казахстан, астана, алматы",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}

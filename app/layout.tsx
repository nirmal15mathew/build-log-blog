import type { Metadata } from "next";
import { AppHeader} from "@/app/components/AppHeader"
import { AppFooter } from "@/app/components/AppFooter"
// import localFont from "next/font/local";
import "./globals.css";
import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// `${geistSans.variable} ${geistMono.variable} antialiased` -> add as classname

export const metadata: Metadata = {
  title: "Build logs",
  description: "a blog page by Nirmal Thomas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${inter.className}`}
      >
        <AppHeader/>
        <div>
          {children}
        </div>
        <AppFooter></AppFooter>
      </body>
    </html>
  );
}

import type React from "react"
import type { Metadata } from "next"
import { Bricolage_Grotesque } from "next/font/google"
import "./globals.css"
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"
import { ThemeProvider } from "next-themes"
import NextTopLoader from "nextjs-toploader"
import SessionProviderComp from "@/components/nextauth/SessionProvider"
import ClientLayout from "@/components/ClientLayout"

const font = Bricolage_Grotesque({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Real eState - Premium Property Solutions",
  description: "Discover luxury properties and premium locations with Real eState",
}

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode
  session: any
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-white dark:bg-black antialiased`}>
        <NextTopLoader color="#07be8a" />
        <SessionProviderComp session={session}>
          <ThemeProvider attribute="class" enableSystem={true} defaultTheme="light">
            <ClientLayout>
              <Header />
              {children}
              <Footer />
            </ClientLayout>
          </ThemeProvider>
        </SessionProviderComp>
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Bricolage_Grotesque } from "next/font/google"
import "./globals.css"

const font = Bricolage_Grotesque({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Real eState - Premium Property Solutions",
  description: "Discover luxury properties and premium locations with Real eState",
}

export default function RootLayout({
  children,
  }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-white dark:bg-black antialiased`}>{children}</body>
    </html>
  )
}

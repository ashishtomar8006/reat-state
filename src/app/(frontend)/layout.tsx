import type React from "react"
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"
import { ThemeProvider } from "next-themes"
import NextTopLoader from "nextjs-toploader"
import SessionProviderComp from "@/components/nextauth/SessionProvider"

const layout = ({
  children,
  session,
}: Readonly<{
  children: React.ReactNode
  session: any
}>) => {
  return (
    <>
      <NextTopLoader color="#07be8a" />
        <SessionProviderComp session={session}>
          <ThemeProvider attribute="class" enableSystem={true} defaultTheme="light">
          <div className="bg-white dark:bg-black antialiased">
              <Header />
              {children}
              <Footer />
              </div>
          </ThemeProvider>
        </SessionProviderComp>
     
    </>
  );
};

export default layout;

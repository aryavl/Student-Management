import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/landingpage/Footer";
import Pricing from "@/components/landingpage/Pricing";
import Testimonials from "@/components/landingpage/Testimonials";
import HeroSection from "@/components/landingpage/HeroSection";
import Provider from "@/context/Provider";
import ReduxProvider from "@/redux/ReduxProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Schuler",
  description: "Student management",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
          <Provider>
            <ReduxProvider>
              <div>
                <Navbar />
                {children}
              </div>
            </ReduxProvider>
          </Provider>
   
      </body>
    </html>
  );
}

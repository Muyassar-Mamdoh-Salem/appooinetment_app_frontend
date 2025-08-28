import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_compnents/Header";
const Outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  
  subsets: ["latin"],
});


/*************  ✨ Windsurf Command ⭐  *************/
/**
 * The root layout of the app, which renders the header and the main content.
 * It also sets up the font and anti-aliasing.
 *
 * @param {{ children: React.ReactNode }} props The props of the component.
 * @returns {React.ReactElement} The root layout element.
 */
/*******  3a295c7d-0a04-476a-8b67-da32684b54d7  *******/
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className=" md:px-20">
                 <Header />
 
        </div>
        {children}
      </body>
    </html>
  );
}

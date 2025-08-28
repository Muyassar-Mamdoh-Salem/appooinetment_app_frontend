import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_compnents/Header";
const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Outfit.className} antialiased`}
      >
        <div className=" md:px-20">
                 <Header />
 
        </div>
        {children}
      </body>
    </html>
  );
}

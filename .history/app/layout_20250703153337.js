import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_compnents/Header";
const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <div className=" md:px-20">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}

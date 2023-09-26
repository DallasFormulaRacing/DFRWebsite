import "./globals.css";
import { Inter, Open_Sans } from "next/font/google";
import Navbar from "@/app/(shared-components)/Navbar";
import Footer from "@/app/(shared-components)/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dallas Formula Racing",
  description: "Website for Dallas Formula Racing FSAE team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={openSans.className} lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

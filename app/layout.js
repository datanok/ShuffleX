import "./globals.css";
import { Inter, IBM_Plex_Sans, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const dm = DM_Sans({ weight: "400", subsets: ["latin"] });
export const metadata = {
  title: "ShuffleX",
  description: "dududududududududdudu",
};

export default function RootLayout({ children }) {
  return (
    <html className={dm.className}>
      <body className="flex flex-col min-h-screen">
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}

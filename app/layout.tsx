import type { Metadata } from "next";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'; // Import the Footer component
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pragati Chaudhary",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/pragati.png" /> {/* Link to favicon */}
      </head>
      <body className={inter.className}>
        <NavBar /> {/* NavBar at the top */}
        <main>{children}</main> {/* Main content */}
        <Footer /> {/* Include the Footer component here */}
      </body>
    </html>
  );
}

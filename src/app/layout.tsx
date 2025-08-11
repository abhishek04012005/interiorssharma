// import { Geist, Geist_Mono } from "next/font/google";
import { headers } from 'next/headers';
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import AdminNavbar from "@/admin/AdminNavbar/AdminNavbar";
import { Metadata } from "next";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Sharma Interiors",
  description: "Interior design services",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();
  const pathname = (await headersList).get("x-pathname") || "/";

  const isAdminRoute = pathname.startsWith('/admin');
  const isAdminLogin = pathname === '/admin/login';
  const shouldShowAdminNav = isAdminRoute && !isAdminLogin;

  return (
    <html lang="en">
      <body>
        {shouldShowAdminNav ? <AdminNavbar /> : <Navbar />}
        <main className={shouldShowAdminNav ? 'admin-route' : ''}>
          {children}
        </main>
        {!shouldShowAdminNav && <Footer />}
      </body>
    </html>
  );
}
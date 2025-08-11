'use client';
import { usePathname } from 'next/navigation';
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import AdminNavbar from "@/admin/AdminNavbar/AdminNavbar";
import { useEffect, useState } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status on mount and route changes
    const checkAuth = () => {
      const adminAuth = localStorage.getItem('adminAuth');
      setIsAuthenticated(!!adminAuth);
    };

    checkAuth();
  }, [pathname]);

  const isAdminRoute = pathname?.startsWith('/admin');
  const isAdminLogin = pathname === '/admin/login';
  const shouldShowAdminNav = isAdminRoute && !isAdminLogin && isAuthenticated;

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
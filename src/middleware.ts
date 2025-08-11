import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Clone the request headers
  const requestHeaders = new Headers(request.headers);
  
  // Add pathname to headers for SSR
  requestHeaders.set('x-pathname', request.nextUrl.pathname);

  // Check authentication for admin routes
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin/login');
  const isAdminLogin = request.nextUrl.pathname === '/admin/login';

  // Protect admin routes
  if (isAdminRoute && !isAdminLogin) {
    const adminAuth = request.cookies.get('adminAuth');
    
    // Redirect to login if not authenticated
    if (!adminAuth?.value) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Continue with modified headers
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// Configure middleware matching paths
export const config = {
  matcher: [
    // Match all paths except static files
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    // Match all admin routes
    '/admin/:path*'
  ],
};
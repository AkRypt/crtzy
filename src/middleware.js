import { updateSession } from "./app/utils/supabase/middleware"

export async function middleware(request) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}

// import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
// import { NextResponse } from "next/server";
// import constants from "./src/app/constants";

// export async function middleware(req) {
//     const res = NextResponse.next();
//     const supabase = createMiddlewareClient({req, res});

//     const {data: {session}} = await supabase.auth.getSession();

//     const loggedInURLs = ['/login', '/sign-up']
//     if (session && loggedInURLs.includes(req.nextUrl.pathname)) {
//         return NextResponse.redirect(new URL('/dashboard', req.url));
//     }

//     //// TODO Specify what sites a guest is not supposed to enter
//     if (!session && ['/dashboard'].includes(req.nextUrl.pathname)) {
//         return NextResponse.redirect(new URL('/login', req.url));
//     }


//     return res;
// }

// export const config = {
//     matcher: ['/login', '/sign-up', '/dashboard']
// }
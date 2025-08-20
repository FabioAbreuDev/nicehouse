import { NextRequest, NextResponse } from "next/server";

import { auth0 } from "@/lib/auth0"; // Adjust path if your auth0 client is elsewhere

export async function middleware(request: NextRequest) {
    const response = await auth0.middleware(request);

    //  If the user is authenticated, redirect them to /painel
    if (request.nextUrl.pathname.startsWith("/auth/callback")) {
        const user = await auth0.getSession(request);
        console.log(user)
        if (user) {
            return NextResponse.redirect(new URL("/painel", request.url));
        }
    }
    return response;
}

export const config = {
    matcher: [
        "/painel",
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"
    ]
};
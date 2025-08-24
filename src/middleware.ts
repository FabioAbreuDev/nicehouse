import { NextResponse } from "next/server";
import { auth0 } from "./lib/auth0";

export async function middleware(request: any) {
  const authRes = await auth0.middleware(request);
  const session = await auth0.getSession();

  // authentication routes — let the middleware handle it

  // authentication routes — let the middleware handle it
  if (request.nextUrl.pathname.startsWith("/auth")) {
    console.log(authRes);
    return authRes;
  }

  // public routes — no need to check for session
  if (
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/painel"
  ) {
    return authRes;
  }

  if (request.nextUrl.pathname.startsWith("/api")) {
    const { origin } = new URL(request.url);

    // user does not have a session — redirect to login
    if (!session) {
      return NextResponse.redirect(`${origin}/auth/login`);
    }
  }

  return authRes;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - api (API routes)
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|api).*)",
  ],
};

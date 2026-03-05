// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const hasSession = request.cookies
//     .getAll()
//     .some(cookie => cookie.name.startsWith("a_session_"));

//   if (!hasSession) {
//     return NextResponse.redirect(new URL("/Login", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/Login", "/SignUp"]
// };
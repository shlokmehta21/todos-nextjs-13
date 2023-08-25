import { NextResponse } from "next/server";

export const middleware = async (req: Request) => {
  return NextResponse.redirect(new URL("/", req.url));
};

export default middleware;

export const config = {
  matcher: ["/home"],
};

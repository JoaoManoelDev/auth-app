import { NextRequest, NextResponse } from "next/server";

import { getSession } from "@/services/session";

const middleware = async (request: NextRequest) => {
  const session = await getSession();

  if (!session || !session.user)
    return NextResponse.redirect(new URL("/signin", request.url));

  return NextResponse.next();
};

export default middleware;

export const config = {
  matcher: ["/profile", "/dashboard"],
};

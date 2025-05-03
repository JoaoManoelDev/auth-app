import { redirect } from "next/navigation";
import { cookies as cookiesHeaders } from "next/headers";
import { jwtVerify } from "jose";

import { env } from "@/env";
import { Session } from "./session.types";

const secretKey = env.SESSION_SECRET_KEY;
const encodedKey = new TextEncoder().encode(secretKey);

export const getSession = async () => {
  const cookie = await cookiesHeaders();
  const session = cookie.get("session")?.value;

  try {
    if (!session) return null;

    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });

    return payload as Session;
  } catch (error) {
    console.error("Failed to verify the session", error);
    redirect("/");
  }
};

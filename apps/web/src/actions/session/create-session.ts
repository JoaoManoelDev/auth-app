"use server";

import { cookies as cookiesHeaders } from "next/headers";
import { SignJWT } from "jose";

import { Session } from "./session.types";
import { env } from "@/env";

const secretKey = env.SESSION_SECRET_KEY;
const encodedKey = new TextEncoder().encode(secretKey);

export const createSession = async (payload: Session) => {
  const sevenDaysInMilliseconds = 7 * 24 * 60 * 60 * 1000;
  const expiredAt = new Date(Date.now() + sevenDaysInMilliseconds);

  const session = await new SignJWT(payload)
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);

  const cookies = await cookiesHeaders();

  cookies.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiredAt,
    sameSite: "lax",
    path: "/",
  });
};

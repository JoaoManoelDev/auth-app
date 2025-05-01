"use server";

import { jwtVerify, SignJWT } from "jose";
import { cookies as cookiesHeaders } from "next/headers";
import { redirect } from "next/navigation";

export type Session = {
  user: {
    id: string;
    name: string;
  };
  accessToken: string;
  refreshToken: string;
};

const secretKey = "Eg3A1AfPNi75hFVirBB8P8OYSFoi9pr4uxUztHkq5Bw=";
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

export const deleteSession = async () => {
  const cookies = await cookiesHeaders();

  cookies.delete("session");

  redirect("/signin");
};

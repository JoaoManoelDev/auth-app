"use server";

import { cookies as cookiesHeaders } from "next/headers";
import { jwtVerify } from "jose";

import { Session } from "./session.types";
import { deleteSession } from "./delete-session";
import { createSession } from "./create-session";
import { env } from "@/env";

interface UpdateSessionProps {
  accessToken: string;
  refreshToken: string;
}

const secretKey = env.SESSION_SECRET_KEY;
const encodedKey = new TextEncoder().encode(secretKey);

export const updateSession = async ({
  accessToken,
  refreshToken,
}: UpdateSessionProps) => {
  try {
    const cookie = await cookiesHeaders();
    const session = cookie.get("session")?.value;

    if (!session) {
      return await deleteSession();
    }

    const { payload } = await jwtVerify<Session>(session, encodedKey, {
      algorithms: ["HS256"],
    });

    if (!payload) {
      return await deleteSession();
    }

    const newPayload: Session = {
      user: {
        ...payload.user,
      },
      accessToken,
      refreshToken,
    };

    await createSession(newPayload);
  } catch (error) {
    deleteSession();
  }
};

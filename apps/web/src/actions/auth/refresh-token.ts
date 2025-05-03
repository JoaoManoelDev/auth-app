"use server";

import { updateSession } from "@/actions/session/update-session";
import { env } from "@/env";

interface RefreshTokenRequest {
  oldRefreshToken: string;
}

interface RefreshTokenResponse {
  isError: boolean;
  data: {
    status: number;
    message?: string;
    accessToken: string;
  };
}

interface JsonResponseData {
  accessToken: string;
  refreshToken: string;
}

export const refreshToken = async ({
  oldRefreshToken,
}: RefreshTokenRequest): Promise<RefreshTokenResponse> => {
  const response = await fetch(`${env.SERVER_API}/refresh-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "refresh-token": oldRefreshToken,
    }),
  });

  if (response.status === 201) {
    const tokens: JsonResponseData = await response.json();

    await updateSession({
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    });

    return {
      isError: false,
      data: {
        status: 201,
        accessToken: tokens.accessToken,
      },
    };
  }

  return {
    isError: true,
    data: await response.json(),
  };
};

"use server";

import { createSession } from "@/services/session";

interface SigninRequest {
  email: string;
  password: string;
}

interface SigninResponse {
  isError: boolean;
  data?: {
    status: number;
    message?: string;
    name?: string;
  };
}

export const signin = async (
  signinData: SigninRequest
): Promise<SigninResponse> => {
  const response = await fetch("http://localhost:3333/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signinData),
  });

  if (response.status === 201) {
    const data: { id: string; name: string } = await response.json();

    await createSession({
      user: {
        id: data.id,
        name: data.name,
      },
    });

    return {
      isError: false,
      data: {
        name: data.name,
        status: 200,
      },
    };
  }

  return {
    isError: true,
    data: await response.json(),
  };
};

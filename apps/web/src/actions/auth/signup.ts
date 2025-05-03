"use server";

import { redirect } from "next/navigation";

import { env } from "@/env";

// export type SignupFormState =
//   | {
//       errors?: {
//         name?: string[];
//         email?: string[];
//         password?: string[];
//       };
//       message?: string;
//     }
//   | undefined;

interface SignupRequest {
  name: string;
  email: string;
  password: string;
}

interface SignupResponse {
  isError: boolean;
  dataError: {
    status: number;
    message: string;
    erros?: {
      field: string;
      message: string[];
    }[];
  };
}

export const signup = async (
  signupData: SignupRequest
): Promise<SignupResponse> => {
  const response = await fetch(`${env.SERVER_API}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signupData),
  });

  if (response.ok) {
    return redirect("/signin");
  }

  return {
    isError: true,
    dataError: await response.json(),
  };
};

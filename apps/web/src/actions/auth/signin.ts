"use server";

interface SigninRequest {
  email: string;
  password: string;
}

interface SigninResponse {
  isError: boolean;
  dataError: {
    status: number;
    message?: string;
    name?: string;
  } | null;
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
    return {
      isError: false,
      dataError: await response.json(),
    };
  }

  return {
    isError: true,
    dataError: null,
  };
};

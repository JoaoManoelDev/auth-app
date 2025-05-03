"use server";

import { getSession } from "@/actions/session/get-session";

interface GetProfileResponseSuccess {
  isError: false;
  data: {
    sub: string;
  };
}

interface GetProfileResponseError {
  isError: true;
  data?: {
    status?: number;
    message?: string;
    name?: string;
  };
}

export const getProfile = async (): Promise<
  GetProfileResponseSuccess | GetProfileResponseError
> => {
  const session = await getSession();

  const response = await fetch(`http://localhost:3333/metrics`, {
    headers: {
      authorization: `Bearer ${session?.accessToken}`,
    },
  });

  if (response.status === 200) {
    const data = await response.json();

    return {
      isError: false,
      data,
    };
  }

  return {
    isError: true,
    data: await response.json(),
  };
};

"use server";

import { redirect } from "next/navigation";
import { cookies as cookiesHeaders } from "next/headers";

export const deleteSession = async () => {
  const cookies = await cookiesHeaders();

  cookies.delete("session");

  redirect("/signin");
};

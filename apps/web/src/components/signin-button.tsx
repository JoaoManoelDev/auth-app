import Link from "next/link";

import { getSession } from "@/services/session";
import { SignoutButton } from "./signout-button";

export const SigninButton = async () => {
  const session = await getSession();

  if (!session || !session.user) {
    return (
      <div className="flex items-center gap-4">
        <Link href="/signin">Entrar</Link>
        <Link href="/signup">Cadastre-se</Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <span>{session.user.name}</span>
      <SignoutButton />
    </div>
  );
};

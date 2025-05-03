import Link from "next/link";
import { redirect } from "next/navigation";

import { SignupForm } from "@/components/auth/signup-form";
import { getSession } from "@/actions/session/get-session";

const SignupPage = async () => {
  const session = await getSession();

  if (session && session.user) return redirect("/");

  return (
    <div className="rounded-lg shadow-lg gap-8 w-sm flex flex-col justify-center items-center p-5">
      <h1 className="text-center text-2xl font-bold">Cadastre-se</h1>

      <div className="w-full">
        <SignupForm />
      </div>

      <div className="flex justify-between text-sm gap-1">
        <p>Já possuí uma conta?</p>

        <Link className="underline" href="/signin">
          Entrar
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;

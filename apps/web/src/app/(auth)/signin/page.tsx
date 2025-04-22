import Link from "next/link";

import { SigninForm } from "@/components/auth/signin-form";

const SigninPage = () => {
  return (
    <div className="rounded-lg shadow-lg gap-8 w-sm flex flex-col justify-center items-center p-5">
      <h1 className="text-center text-2xl font-bold">Cadastre-se</h1>

      <div className="w-full">
        <SigninForm />
      </div>

      <div className="flex justify-between text-sm gap-1">
        <p>Ainda não possuí uma conta?</p>

        <Link className="underline" href="/signin">
          Cadastre-se
        </Link>
      </div>
    </div>
  );
};

export default SigninPage;

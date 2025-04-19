import Link from "next/link";

import { Button } from "@auth/ui/button";

const SignupPage = () => {
  return (
    <div className="p-8 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center">
      <h1 className="text-center text-2xl font-bold mb-4">Sign In Page</h1>

      <Button>Test</Button>

      <div className="flex justify-between text-sm">
        <p>Já possuí uma conta?</p>

        <Link className="underline" href="/signin">
          Ja possui uma conta?
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;

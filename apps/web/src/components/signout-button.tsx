"use client";

import { deleteSession } from "@/services/session";
import { Button } from "@auth/ui/components/button";

export const SignoutButton = () => {
  return (
    <Button
      onClick={() => deleteSession()}
      variant="ghost"
      className="text-red-500 hover:text-red-500 cursor-pointer "
    >
      Sair
    </Button>
  );
};

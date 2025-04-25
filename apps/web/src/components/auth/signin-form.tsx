"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";

import { Label } from "@auth/ui/components/label";
import { Input } from "@auth/ui/components/input";
import { Button } from "@auth/ui/components/button";
import { SpinerToButton } from "@auth/ui/components/spinner-to-button";
import { signin } from "@/actions/auth/signin";

const signinSchema = z.object({
  email: z.string().email("Email inválido."),
  password: z.string().min(1, "Campo obrigatório."),
});

type SigninSchema = z.infer<typeof signinSchema>;

export const SigninForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  const handleSubmitSignin = async (values: SigninSchema) => {
    const response = await signin({
      email: values.email,
      password: values.password,
    });

    if (!response.isError) {
      return toast.success(`Bem-vindo ${response?.data?.name}`);
    }

    return toast.error(
      response.data?.message ?? "Erro inesperado, tente novamente mais tarde."
    );
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitSignin)}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <Label>Email</Label>
          <Input id="email" {...register("email")} />
          {errors?.email && (
            <p className="text-red-500 mb-1 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Label>Senha</Label>
          <Input id="password" {...register("password")} />
          {errors?.password && (
            <p className="text-red-500 mb-1 text-sm">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <SpinerToButton /> : "Cadastrar"}
        </Button>
      </div>
    </form>
  );
};

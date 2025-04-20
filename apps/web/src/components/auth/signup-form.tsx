"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { Label } from "@auth/ui/components/label";
import { Input } from "@auth/ui/components/input";
import { signup } from "@/actions/auth/signup";
import { Button } from "@auth/ui/components/button";
import { SpinerToButton } from "@auth/ui/components/spinner-to-button";

const signupSchema = z.object({
  name: z.string().min(1, "Campo obrigatório."),
  email: z.string().email("Email inválido."),
  password: z.string().min(1, "Campo obrigatório."),
});

type SignupSchema = z.infer<typeof signupSchema>;

export const SignupForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  const handleSubmitSignup = async (values: SignupSchema) => {
    const response = await signup({
      name: values.name,
      email: values.email,
      password: values.password,
    });

    if (response.isError) {
      return toast.error(response.dataError.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitSignup)}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <Label>Nome</Label>
          <Input id="name" {...register("name")} />
          {errors?.name && (
            <p className="text-red-500 mb-1 text-sm">{errors.name.message}</p>
          )}
        </div>

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

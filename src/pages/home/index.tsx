import { FaGoogle } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  FormContainer,
  FormContent,
  FormError,
  HomeContainer,
  SocialsLogin,
} from './styles'
import { signIn } from 'next-auth/react'

const formLoginSchema = z.object({
  email: z.string().email({ message: '* Digite um e-mail válido.' }),
  password: z
    .string()
    .min(3, { message: '* A senha deve ter no mínimo 3 caracteres.' }),
})

type FormLoginData = z.infer<typeof formLoginSchema>

async function handleSignIn() {
  await signIn('google')
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginData>({
    resolver: zodResolver(formLoginSchema),
  })

  async function handleLoginForm(data: FormLoginData) {
    console.log(data)
  }

  return (
    <HomeContainer>
      <FormContainer>
        <h1>Entre com seu login</h1>

        <FormContent onSubmit={handleSubmit(handleLoginForm)}>
          <input type="email" placeholder="E-mail" {...register('email')} />
          {errors.email && <FormError>{errors.email.message}</FormError>}

          <input
            type="password"
            placeholder="Senha"
            {...register('password')}
          />
          {errors.password && <FormError>{errors.password.message}</FormError>}

          <button type="submit">Entrar</button>
        </FormContent>

        <p>Ainda não possui uma conta? clique aqui.</p>

        <SocialsLogin>
          <button onClick={handleSignIn}>
            <FaGoogle size={20} />
          </button>
        </SocialsLogin>
      </FormContainer>
    </HomeContainer>
  )
}

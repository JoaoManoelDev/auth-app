import { GithubLogo } from 'phosphor-react'
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

const formLoginSchema = z.object({
  email: z.string().email({ message: '* Digite um e-mail válido' }),
  password: z
    .string()
    .min(3, { message: '* A senha deve ter no mínimo 3 caracteres.' }),
})

type FormLoginData = z.infer<typeof formLoginSchema>

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginData>({
    resolver: zodResolver(formLoginSchema),
  })

  async function handleFormLogin(data: FormLoginData) {
    console.log(data)
  }

  return (
    <HomeContainer>
      <FormContainer>
        <h1>Entre com seu login</h1>

        <FormContent onSubmit={handleSubmit(handleFormLogin)}>
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
          <button>
            <GithubLogo size={20} />
            GitHub
          </button>
        </SocialsLogin>
      </FormContainer>
    </HomeContainer>
  )
}

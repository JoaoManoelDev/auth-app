import { GithubLogo } from 'phosphor-react'
import {
  FormContainer,
  FormContent,
  HomeContainer,
  SocialsLogin,
} from './styles'

export default function Home() {
  return (
    <HomeContainer>
      <FormContainer>
        <h1>Entre com seu login</h1>

        <FormContent>
          <input type="email" placeholder="Email" />

          <input type="text" placeholder="Senha" />

          <button>Entrar</button>
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

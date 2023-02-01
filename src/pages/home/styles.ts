import { styled } from '../../styles'

export const HomeContainer = styled('div', {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
})

export const FormContainer = styled('div', {
  background: '$gray800',
  width: '26rem',
  minHeight: '24rem',
  padding: '2.5rem 2rem',

  h1: {
    textAlign: 'center',
    fontSize: '$xl',
  },

  p: {
    textAlign: 'center',
    marginTop: '0.8rem',
    fontSize: '0.8rem',
  },
})

export const FormContent = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '2rem',

  input: {
    padding: '1rem',
    borderRadius: '6px',
    border: 0,
    background: '$gray900',
    color: '$white',
    outline: 0,
    marginTop: '0.7rem',

    '&::placeholder': {
      color: '$gray500',
    },
  },

  button: {
    padding: '0.6rem',
    marginTop: '0.6rem',
    borderRadius: '6px',
    border: 0,
    fontWeight: 'bold',
    fontSize: '1rem',
    background: '$green500',
    color: '$white',

    '&:hover': {
      transition: '0.2s',
      background: '$green300',
    },
  },
})

export const SocialsLogin = styled('div', {
  marginTop: '1.2rem',
  display: 'flex',
  gap: '0.25rem',
  alignItems: 'center',
  justifyContent: 'center',

  span: {
    fontSize: '1rem',
  },

  button: {
    padding: '0.4rem',
    marginTop: '0.4rem',
    borderRadius: '6px',
    border: 0,
    fontSize: '1rem',
    background: '$gray800',
    color: '$white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.25rem',

    '&:hover': {
      transition: '0.2s',
      background: '$gray700',
    },
  },
})

export const FormError = styled('span', {
  color: '#F75A68',
  fontSize: '0.8rem',
  marginTop: '0.25rem',
})

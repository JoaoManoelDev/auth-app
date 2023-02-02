import NextAuth from 'next-auth'

declare module 'next-auth' {
  export interface User {
    id: string
    name: string
    email: string
    avatar_url: string
  }

  export interface Session {
    user: User
  }
}

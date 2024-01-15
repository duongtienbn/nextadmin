import GithubProvider from "next-auth/providers/github"
import FacebookProvider from "next-auth/providers/facebook"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import argon2 from 'argon2'
import prisma from "../prisma/client";
import { SessionStrategy } from "next-auth";
export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "johndoe@email.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req): Promise<any> {
        try {
          if (!credentials) {
            return null;
          }
          const user = await prisma.user.findUnique({ where: { email: credentials.email } })
          if (!user ||  (user.role_id !==1 && user.role_id !==4)) {
            return null
          }
          if (user.role_id === 1) {
            const hasVerified = await argon2.verify(user.password, credentials.password)
            if (hasVerified) {
              return {
                id: user.id,
                 role_id: user.role_id
              }
            } else {
              return null
            }
          } else {
            
            if (user.password === credentials.password) {
              return {
                id: user.id,
                 role_id: user.role_id
              }
            } else {
              return null
            }
          }
        } catch (e) {
          return null;
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_APP_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_APP_CLIENT_SECRET as string,
    }),
    // FacebookProvider({
    //   clientId: "929736988500263",
    //   clientSecret: "40018d5dcf21944c98899d29b19baec9",
    // }),
    // GoogleProvider({
    //   clientId: "929736988500263",
    //   clientSecret: "40018d5dcf21944c98899d29b19baec9",
    // }),
  ],
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 15 ,
    encryption: true,
  },
  session: { strategy: "jwt" as SessionStrategy, maxAge:60*60*24 },
  callbacks: {
    async jwt({ token, user }:{token:any, user:any}) {
      if (user) {
        token.user = user
      }
      return token
    },
    async signIn({account, user}:{account:any, user:any}){
      if(account?.type==='oauth'){
        if(!user.email){
          return false
        }
        const dbUser = await prisma?.user.findUnique({where:{email:user.email}})
        if(dbUser){
          return true
        }else{
          return false
        }
      }
      return true
    },
    async session({ session, token }:{session:any, token:any}) {
      session.user = token;
      return session
    },
  },
}
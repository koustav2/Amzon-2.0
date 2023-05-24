import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";

// import { FirebaseAdapter } from "@next-auth/firebase-adapter"



export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        })
    ],
    // // adapter: FirebaseAdapter(db)
    // adapter: TypeORMLegacyAdapter({
    //     synchronize: false
    //   }),
    secret: '79d48d770d3650473763608f168f4253',
    // A database is optional, but required to persist accounts in a database
    // database: process.env.DATABASE_URL,

}

export default NextAuth(authOptions)
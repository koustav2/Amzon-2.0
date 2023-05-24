import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
// import { FirebaseAdapter } from "@next-auth/firebase-adapter"


export const authOptions = {


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
      


        // ...add more providers here
    ],
    // // adapter: FirebaseAdapter(db)
    // adapter: TypeORMLegacyAdapter({
    //     synchronize: false
    //   }),

}

export default NextAuth(authOptions)
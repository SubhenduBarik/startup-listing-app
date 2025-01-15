import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github";

export const {auth,signOut, signIn, handlers} = NextAuth({
    providers:[GitHub({
        clientId: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    })]
})
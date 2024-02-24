import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const { email, password } = credentials;

                try {
                    connect();
                    const existingUser = await User.findOne({ email });

                    if (!existingUser) {
                        return null;
                    }

                    // check encrypted valid password
                    const validPassword = await bcryptjs.compare(password, existingUser.password)
                    if (!validPassword) {
                        return null;
                    }
                    return existingUser;

                } catch (error) {
                    console.log("Error from nextAuth:", error)
                }
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/sign-in"
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
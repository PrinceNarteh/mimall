import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { loginDto } from "@/utils/validations";
import { prisma } from "@/db";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = NextAuth({
  providers: [
    Credentials({
      id: "credentials",
      credentials: {
        email: { type: "text" },
        password: { type: "password" },
      },

      async authorize(credentials) {
        const result = loginDto.safeParse(credentials);

        if (!result.success) {
          throw new Error("Please provide all info.");
        }
        const { email, password } = result.data;

        const user = await prisma.account.findUnique({ where: { email } });

        if (user && (await bcrypt.compare(password, user.password))) {
          return user;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user.id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user._id = token?._id as string;
        session.user.firstName = token?.firstName as string;
        session.user.lastName = token?.lastName as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
});

export default NextAuth(authOptions);

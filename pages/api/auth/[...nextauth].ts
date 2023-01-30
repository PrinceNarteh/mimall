import { prisma } from "@/db";
import { loginDto } from "@/utils/validations";
import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import { Account } from "@prisma/client";

export const authOptions: NextAuthOptions = {
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

        if (!user) return null;

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return null;

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.id = account.id;
        token.firstName = account.firstName;
        token.lastName = account.lastName;
        token.role = account.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.id = token.id as string;
        session.user.firstName = token?.firstName as string;
        session.user.lastName = token?.lastName as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOptions);

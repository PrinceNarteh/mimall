import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    id: string;
    user?: {
      firstName?: string | null | undefined;
      lastName?: string | null | undefined;
      role: "admin" | "user" | "shop_owner" | null | undefined;
    };
  }

  interface Account {
    id?: string;
    firstName?: string | null | undefined;
    lastName?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
    role: "admin" | "user" | "shop_owner" | null | undefined;
  }
}

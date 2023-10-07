import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT_SECRET } from "../../../config/config";

import {
  verifyToken,
  getAuthenticatedUser,
} from "../../../services/auth.service";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req) {
        try {
          const res = await verifyToken({
            password: credentials?.password ?? "",
          });

          if (res?.data) {
            return res.data;
          } else {
            return null;
          }
        } catch (e) {
          const errorMessage = "auth error";
          throw new Error(errorMessage);
        }
      },
    }),
  ],

  secret: JWT_SECRET,

  session: {
    strategy: "jwt",

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 60 * 60, // 1 hour
  },

  jwt: {
    secret: JWT_SECRET,
  },

  callbacks: {
    async session({ session, user, token }) {
      const response = await getAuthenticatedUser(String(token?.accessToken));
      if (token && response?.data) {
        session.accessToken = token.accessToken as string;
        session.user = response?.data;
      }
      return session;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.accessToken = user?.token;
        token.user = user?.user;
      }
      return token;
    },
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {
    async linkAccount({ user, account }) {
      // console.log()
    },
  },

  // Enable debug messages in the console if you are having problems
  debug: true,
});

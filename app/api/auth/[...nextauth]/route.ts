import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT_SECRET } from "../../../../config/config";

import {
  getAuthenticatedUser,
  twoFactorAuthAuthenticate,
} from "../../../../services/auth.service";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        id: { label: "id", type: "username" },
        totp_code: { label: "totp_code", type: "password" },
      },
      async authorize(credentials: any, req) {
        try {
          const res = await twoFactorAuthAuthenticate({
            id: credentials?.id ?? "",
            totp_code: credentials?.totp_code ?? "",
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
    maxAge: 1000 * 60, // 1000
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
        token.accessToken = (user as any).tokens.access;
        token.refreshToken = (user as any).tokens.refresh;
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
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

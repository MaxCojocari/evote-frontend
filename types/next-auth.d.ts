import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    accessToken: string;
  }

  interface User {
    token: string;
    user: Object;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    bar: number;
  }
}

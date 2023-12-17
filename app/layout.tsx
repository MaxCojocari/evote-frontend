import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "./context/client-provider";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SwiftVote",
  description: "This is SwiftVote app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <Provider session={session}>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}

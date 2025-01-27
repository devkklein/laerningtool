import CredentialsProvider from "next-auth/providers/credentials";
import { NuxtAuthHandler } from "#auth";

import { PrismaClient } from '@prisma/client';
import { get } from "http";

const prisma = new PrismaClient();

export default NuxtAuthHandler({
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider.default({
      name: "credentials",
      async authorize(credentials: any) {
        try {
          const user = await prisma.user.findFirst({
            where: {
              username: credentials.username,
            },
          });

          if (user && credentials.password === user.password) {
            console.log(user);
            return user;
          } else {
            // Passwords do not match
            console.error("Warning: Malicious login attempt registered, bad credentials provided");
            return null;
          }
        } catch (e) {
          console.error(e);
          return null;
        }
      },
    }),
  ],
});

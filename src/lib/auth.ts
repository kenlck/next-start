import { compareSync } from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email@email.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Here you would typically fetch user data from your database
        // For demonstration, we return a static user object
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error("Email and password are required");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!user) {
          // throw new Error("Invalid email or password");
          return null;
        }

        // Here you would verify the password, e.g., using bcrypt
        const isValidPassword = compareSync(credentials.password as string, user.password);

        if (!isValidPassword) {
          // throw new Error("Invalid email or password");
          return null;
        }

        return {
          id: user.id,

          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      // Persist user data to the token right after signin
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }

      // Handle session updates (profile changes, etc.)
      // if (trigger === "update" && session) {
      //   console.log("JWT callback - session update triggered:", session);

      //   // Update individual fields if provided
      //   if (session.selectedCompany !== undefined) {
      //     if (session.selectedCompany !== undefined) {
      //       token.selectedCompany = session.selectedCompany;
      //     }
      //     if (session.companies !== undefined) {
      //       token.companies = session.companies;
      //     }
      //   }

      //   if (session.user?.name !== undefined) {
      //     token.name = session.user.name;
      //     console.log(
      //       "JWT callback - updated token name to:",
      //       session.user.name
      //     );
      //   }

      //   // If user ID is provided, fetch fresh data from database
      //   if (session.user?.id || token.id) {
      //     try {
      //       const userId = session.user?.id || token.id;
      //       const freshUser = await prisma.user.findUnique({
      //         where: { id: parseInt(userId as string) },
      //         select: {
      //           id: true,
      //           name: true,
      //           email: true,
      //         },
      //       });

      //       if (freshUser) {
      //         token.name = freshUser.name;
      //         token.email = freshUser.email;
      //         console.log(
      //           "JWT callback - refreshed user data from DB:",
      //           freshUser
      //         );
      //       }
      //     } catch (error) {
      //       console.error(
      //         "JWT callback - failed to fetch fresh user data:",
      //         error
      //       );
      //     }
      //   }
      // }

      return token;
    },
    async session({ session, token }) {
      // Send properties to the client
      if (token && token.id && token.email) {
        session.user.id = token.id as string;
        session.user.email = token.email;
        session.user.name = token.name || null;
      }
      return session;
    },
  },
});

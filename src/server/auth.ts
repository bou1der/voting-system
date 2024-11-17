import { DrizzleAdapter } from "@auth/drizzle-adapter";
import {
  type DefaultSession,
  type NextAuthOptions,
  getServerSession,
} from "next-auth";
import type { Adapter } from "next-auth/adapters";
import EmailProvider from "next-auth/providers/email";

import { eq } from "drizzle-orm";
import { env } from "~/env";
import { db } from "~/server/db";
import {
  accounts,
  sessions,
  users,
  verificationTokens,
} from "~/server/db/schema";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: NonNullable<Awaited<ReturnType<typeof GetDBUser>>> &
      DefaultSession["user"];
  }
}

const GetDBUser = async (id: string) => {
  return await db.query.users.findFirst({
    where: eq(users.id, id),
    columns: {
      id: true,
      email: true,
      role: true,
    },
  });
};

export const authOptions: NextAuthOptions = {
  callbacks: {
    redirect({ baseUrl }) {
      return baseUrl;
    },
    session: async ({ session, user }) => {
      const dbUser = await GetDBUser(user.id);

      if (user.email === env.MAIN_ADMIN_EMAIL && dbUser?.role !== "ADMIN") {
        await db
          .update(users)
          .set({
            role: "ADMIN",
          })
          .where(eq(users.id, user.id));
      }

      return {
        ...session,
        user: dbUser,
      };
    },
  },
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }) as Adapter,
  providers: [
    EmailProvider({
      server: {
        host: env.EMAIL_HOST,
        port: env.EMAIL_PORT,
        auth: {
          user: env.EMAIL_USER,
          pass: env.EMAIL_PASSWORD,
        },
      },
      from: env.EMAIL_USER,
      maxAge: 10 * 60,
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);

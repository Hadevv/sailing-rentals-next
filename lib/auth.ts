import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from './db';
import GithubProvider from 'next-auth/providers/github';

export const { auth, handlers } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    secret: process.env.SECRET,
    session: {
        jwt: true,
    },
    callbacks: {
        async session(session, user) {
        session.id = user.id;
        return Promise.resolve(session);
        },
    },
    });
    
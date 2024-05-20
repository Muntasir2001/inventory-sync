import NextAuth, { type DefaultSession } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

import { authConfig } from './auth.config';
import { getUserByEmail } from './prisma/functions/users';
import { matchPassword } from './auth.utils';

declare module 'next-auth' {
	/**
	 * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		user: {
			id: string;
			/**
			 * By default, TypeScript merges new interface properties and overwrites existing ones.
			 * In this case, the default session user properties will be overwritten,
			 * with the new ones defined above. To keep the default session user properties,
			 * you need to add them back into the newly declared interface.
			 */
		} & DefaultSession['user'];
	}
}

export const BASE_PATH = '/api/auth';

export const { handlers, auth, signIn, signOut } = NextAuth({
	...authConfig,
	providers: [
		Credentials({
			name: 'Credentials',
			// used when using authjs auth form
			// credentials: {
			// 	username: {
			// 		label: 'Email',
			// 		type: 'email',
			// 		placeholder: 'jsmith',
			// 	},
			// 	password: { label: 'Password', type: 'password' },
			// },
			// @ts-expect-error i dont have time
			async authorize(credentials) {
				const parsedCredentials = z
					.object({
						email: z.string().email(),
						password: z.string().min(6),
					})
					.safeParse(credentials);

				if (parsedCredentials.success) {
					const { email, password } = parsedCredentials.data;
					const user = await getUserByEmail({ email });
					if (!user) return null;

					if (matchPassword(password, user.password)) {
						return user;
					}
				}

				console.log('Invalid credentials');
				return null;
			},
		}),
	],
	basePath: BASE_PATH,
	secret: process.env.AUTH_SECRET,
});

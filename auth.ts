import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
// import bcrypt from 'bcrypt';

import { authConfig } from './auth.config';
import { getUser } from './prisma/functions/users';

export const BASE_PATH = '/api/auth';

export const { handlers, auth, signIn, signOut } = NextAuth({
	...authConfig,
	providers: [
		Credentials({
			name: 'Credentials',
			// used when using authjs auth form
			credentials: {
				username: {
					label: 'Email',
					type: 'email',
					placeholder: 'jsmith',
				},
				password: { label: 'Password', type: 'password' },
			},
			// @ts-ignore
			async authorize(credentials) {
				const parsedCredentials = z
					.object({
						email: z.string().email(),
						password: z.string().min(6),
					})
					.safeParse(credentials);

				if (parsedCredentials.success) {
					const { email, password } = parsedCredentials.data;
					const user = await getUser({ email });
					if (!user) return null;

					const bcrypt = require('bcrypt');
					const passwordsMatch = await bcrypt.compare(
						password,
						user.password,
					);

					if (passwordsMatch) return user;
				}

				console.log('Invalid credentials');
				return null;
			},
		}),
	],
	basePath: BASE_PATH,
	secret: process.env.AUTH_SECRET,
});

import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		Credentials({
			credentials: {
				email: { label: 'email' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize({ request }: any) {
				const response = await fetch(request);
				if (!response.ok) return null;
				return (await response.json()) ?? null;
			},
		}),
	],
});

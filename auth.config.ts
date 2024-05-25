import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
	pages: {
		signIn: '/auth',
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user;
			const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

			if (isOnDashboard) {
				if (isLoggedIn) return true;
				return false; // Redirect unauthenticated users to login page
			} else if (isLoggedIn) {
				return Response.redirect(new URL('/dashboard', nextUrl));
			}
			return true;
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		session({ session, token }) {
			// `session.user.id` is now a valid property, and will be type-checked
			// in places like `useSession().data.user` or `auth().user`

			return {
				...session,
				user: {
					...session.user,
					id: token.sub,
				},
			};
		},
	},
	providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;

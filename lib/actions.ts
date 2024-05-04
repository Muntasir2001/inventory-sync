'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function authenticate(
	prevState: string | undefined,
	email: string,
	password: string,
) {
	try {
		await signIn('credentials', { email, password });
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return {
						type: 'error',
						error: 'Invalid credentials.',
					};
				default:
					return {
						type: 'error',
						error: 'Something went wrong!',
					};
			}
		}
		throw error;
	}
}

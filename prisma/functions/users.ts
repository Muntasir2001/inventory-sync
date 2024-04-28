import { prisma } from '../prisma';

interface GetUser {
	email: string;
}

export const getUser = async ({ email }: GetUser) => {
	try {
		const user = await prisma.users.findFirst({ where: { email: email } });

		if (user) {
			return user;
		} else {
			return false;
		}
	} catch (err) {
		throw new Error('Failed to fetch user.');
	}
};

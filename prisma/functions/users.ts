'use server';

import { Prisma } from '@prisma/client';

import { hashPassword } from '@/auth.utils';
import { prisma } from '../prisma';

interface GetUserByEmail {
	email: string;
}

interface CreateUser {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

export const getUserByEmail = async ({ email }: GetUserByEmail) => {
	try {
		const user = await prisma.users.findFirst({ where: { email } });

		if (user) {
			return user;
		}
		return false;
	} catch (err) {
		throw new Error('Failed to fetch user.');
	}
};

export const getUserInfoByEmail = async ({ email }: GetUserByEmail) => {
	try {
		const user = await prisma.users.findFirst({ where: { email } });

		if (user) {
			return user;
		}
		return false;
	} catch (err) {
		throw new Error('Failed to fetch user.');
	}
};

export const getFilteredUserInfoByEmail = async ({ email }: GetUserByEmail) => {
	try {
		const user = await prisma.users.findFirst({
			where: { email },
			select: { id: true, email: true, firstName: true, lastName: true },
		});

		if (user) {
			return user;
		}
		return false;
	} catch (err) {
		throw new Error('Failed to fetch user.');
	}
};

export const createUser = async ({
	firstName,
	lastName,
	email,
	password,
}: CreateUser) => {
	const hashedPassword = hashPassword(password);

	await prisma.users
		.create({
			data: {
				firstName,
				lastName,
				email,
				password: hashedPassword,
			},
		})
		.then((u) => {
			return u;
		})
		.catch((e) => {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				// The .code property can be accessed in a type-safe manner
				if (e.code === 'P2002') {
					throw new Error(
						'A user with this email address already exists!',
					);
				} else {
					throw new Error('Something went wrong');
				}
			}
		});
};

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

import { createUser } from '@/prisma/functions/users';

const prisma = new PrismaClient();
const AUTH_TOKEN = process.env.AUTH_TOKEN as string;

interface Auth0User {
	user_id: string;
	email: string;
	firstName: string;
	lastName: string;
	// Add any other fields you need
}

export async function POST(request: Request) {
	const headers = request.headers;
	const body = await request.json();

	if (headers.get('Authorization') !== `Bearer ${AUTH_TOKEN}`) {
		return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
	}

	try {
		const user: Auth0User = body.user;

		console.log(user);

		// await createUser({
		// 	firstName: user.firstName,
		// 	lastName: user.lastName,
		// 	email: user.email,
		// 	auth0Id: user.user_id,
		// });

		return NextResponse.json({ message: 'User added successfully' });
	} catch (error) {
		console.error('Error adding user to DB:', error);
		return NextResponse.json(
			{ message: 'Internal Server Error' },
			{ status: 500 },
		);
	} finally {
		await prisma.$disconnect();
	}
}

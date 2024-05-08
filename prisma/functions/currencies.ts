'use server';

import { prisma } from '../prisma';

interface GetCurrency {
	id: number;
}

export const GetCurrency = async () => {};

export const GetAllCurrencies = async () => {
	const data = await prisma.currencies.findMany();

	return data;
};

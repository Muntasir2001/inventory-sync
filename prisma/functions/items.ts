'use server';

import { Prisma } from '@prisma/client';
import type { Items } from '@prisma/client';

import { prisma } from '../prisma';
import AddItem from '@/app/dashboard/add-item/page';

interface GetItemById {
	id: number;
}

interface AddItem {
	item: Items;
}

export const getAllItems = async () => {
	let items: Array<Items> = [];

	await prisma.items
		.findMany()
		.then((d) => {
			items = d;
		})
		.catch((e) => {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				throw new Error('Something went wrong');
			}
		});

	return items;
};

export const addItem = async ({ item }: AddItem) => {
	await prisma.items
		.create({ data: item })
		.then((d) => {
			return d;
		})
		.catch((e) => {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				throw new Error('Something went wrong');
			}
		});
};

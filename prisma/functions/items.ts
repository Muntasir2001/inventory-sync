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

interface DeleteItem {
	id: number;
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
	let res: Items | undefined;

	await prisma.items
		.create({ data: item })
		.then((d) => {
			res = d;
		})
		.catch((e) => {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				throw new Error('Something went wrong');
			}
		});

	return res;
};

export const deleteItem = async ({ id }: DeleteItem) => {
	let res: Items | undefined;

	await prisma.items
		.delete({ where: { id } })
		.then((d) => {
			res = d;
		})
		.catch((e) => {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				throw new Error('Something went wrong');
			}
		});

	return res;
};

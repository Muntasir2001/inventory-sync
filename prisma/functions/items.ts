'use server';

import type { Items } from '@prisma/client';

import { prisma } from '../prisma';

interface AddItem {
	item: {
		code: string;
		name: string;
		description?: string;
		quantity: number;
		price: number;
		currencyId: number;
		userId: number;
	};
}

interface DeleteItem {
	id: number;
}

interface EditItem {
	item: Items;
}

interface DecrementItemQuantityByQuantity {
	id: number;
	quantitySold: number;
}

interface GetAllItems {
	userId: number;
}

export const getAllItems = async ({ userId }: GetAllItems) => {
	let items: Array<Items> = [];

	await prisma.items
		.findMany({ where: { userId } })
		.then((d) => {
			items = d;
		})
		.catch((e) => {
			console.log('getAllItemsError', e);

			throw new Error('Something went wrong');
		});

	return items;
};

export const getAllItemsInStock = async ({ userId }: GetAllItems) => {
	let items: Array<Items> = [];

	await prisma.items
		.findMany({
			where: {
				userId,
				quantity: {
					gt: 0,
				},
			},
		})
		.then((d) => {
			items = d;
		})
		.catch((e) => {
			console.log('getAllItemsError', e);

			throw new Error('Something went wrong');
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
			console.log('addItemError', e);

			throw new Error('Something went wrong');
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
			console.log('deleteItemError', e);

			throw new Error('Something went wrong');
		});

	return res;
};

export const editItem = async ({ item }: EditItem) => {
	let res: Items | undefined;

	await prisma.items
		.update({
			where: {
				id: item.id,
			},
			data: item,
		})
		.then((d) => {
			res = d;
		})
		.catch((e) => {
			console.log('editItemError', e);

			throw new Error('Something went wrong');
		});

	return res;
};

export const decrementItemQuantityByQuantity = async ({
	id,
	quantitySold,
}: DecrementItemQuantityByQuantity) => {
	let res: Items | undefined;

	await prisma.items
		.update({
			where: {
				id,
			},
			data: {
				quantity: {
					decrement: quantitySold,
				},
			},
		})
		.then((d) => {
			res = d;
		})
		.catch((e) => {
			console.log('editItemError', e);

			throw new Error('Something went wrong');
		});

	return res;
};

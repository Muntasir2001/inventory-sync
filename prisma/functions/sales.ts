'use server';

import type { Sales } from '@prisma/client';

import { prisma } from '../prisma';

interface AddSale {
	sale: {
		title: string;
		quantity: number;
		price: number;
		currencyId: number;
		itemId: number;
		userId: number;
		saleDate: Date;
	};
}

interface DeleteSale {
	id: number;
}

interface EditSale {
	sale: Sales;
}

interface GetAllSales {
	userId: number;
}

export const getAllSales = async ({ userId }: GetAllSales) => {
	let sales: Array<Sales> = [];

	await prisma.sales
		.findMany({ where: { userId } })
		.then((d) => {
			sales = d;
		})
		.catch((e) => {
			console.log('getAllSalesError', e);

			throw new Error('Something went wrong');
		});

	return sales;
};

export const addSale = async ({ sale }: AddSale) => {
	let res: Sales | undefined;

	await prisma.sales
		.create({ data: sale })
		.then((d) => {
			res = d;
		})
		.catch((e) => {
			console.log('addSaleError', e);

			throw new Error('Something went wrong');
		});

	return res;
};

export const deleteSale = async ({ id }: DeleteSale) => {
	let res: Sales | undefined;

	await prisma.sales
		.delete({ where: { id } })
		.then((d) => {
			res = d;
		})
		.catch((e) => {
			console.log('deleteSaleError', e);

			throw new Error('Something went wrong');
		});

	return res;
};

export const editSale = async ({ sale }: EditSale) => {
	let res: Sales | undefined;

	await prisma.sales
		.update({
			where: {
				id: sale.id,
			},
			data: sale,
		})
		.then((d) => {
			res = d;
		})
		.catch((e) => {
			console.log('editSaleError', e);

			throw new Error('Something went wrong');
		});

	return res;
};

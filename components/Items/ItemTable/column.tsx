'use client';

import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Item = {
	id: number;
	code: string;
	name: string;
	colour?: string;
	quantity: number;
	price: string;
	status: 'in stock' | 'out of stock';
};

export const columns = [
	{
		accessorKey: 'code',
		header: 'Code',
	},
	{
		accessorKey: 'name',
		header: 'Name',
	},
	{
		accessorKey: 'price',
		header: 'Price',
	},
	{
		accessorKey: 'quantity',
		header: 'Quantity',
	},
] as ColumnDef<Item, unknown>[];

// *** TEMP ***
export const Stocks: Item[] = [
	{
		id: 1,
		code: 'XS12',
		name: 'Abaya Black',
		quantity: 10,
		price: '£25',
		status: 'in stock',
	},
	{
		id: 2,
		code: 'XS22',
		name: 'Abaya Black',
		quantity: 10,
		price: '£25',
		status: 'in stock',
	},

	{
		id: 3,
		code: 'XS22',
		name: 'Abaya Black',
		quantity: 10,
		price: '£25',
		status: 'in stock',
	},
];

import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
	getAllSales as prismaGetAllSales,
	addSale as prismaAddSale,
	deleteSale as prismaDeleteSale,
	editSale as prismaEditSale,
} from '@/prisma/functions/sales';
import type { Sales } from '@prisma/client';

interface SaleState {
	data?: Array<Sales>;
}

const initialState: SaleState = {
	data: [],
};

const salesSlice = createSlice({
	name: 'sales',
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});

export const getAllSales = createAsyncThunk(
	'sales/getAllSales',
	async (userId: number) => {
		let sales: Array<Sales> = [];

		await prismaGetAllSales({ userId })
			.then((d) => {
				sales = d;
			})
			.catch((e) => {
				throw e;
			});

		return sales;
	},
);

export const addSale = createAsyncThunk(
	'sales/addSale',
	async (sale: {
		title: string;
		quantity: number;
		price: number;
		currencyId: number;
		itemId: number;
		userId: number;
	}) => {
		let res: Sales | undefined;

		await prismaAddSale({ sale })
			.then((d) => {
				res = d;
			})
			.catch((e) => {
				throw e;
			});

		return res;
	},
);

export const deleteSale = createAsyncThunk(
	'sales/deleteSale',
	async (itemId: number) => {
		let res: Sales | undefined;

		await prismaDeleteSale({ id: itemId })
			.then((d) => {
				res = d;
			})
			.catch((e) => {
				throw e;
			});

		return res;
	},
);

export const editSale = createAsyncThunk(
	'sales/editSale',
	async (sale: Sales) => {
		let res: Sales | undefined;

		await prismaEditSale({ sale })
			.then((d) => {
				res = d;
			})
			.catch((e) => {
				throw e;
			});

		return res;
	},
);

// export const {} = salesSlice.actions;
export default salesSlice.reducer;

import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
	getAllSales as prismaGetAllSales,
	addSale as prismaAddSale,
	deleteSale as prismaDeleteSale,
	editSale as prismaEditSale,
} from '@/prisma/functions/sales';
import type { Sales } from '@prisma/client';
import { decrementItemQuantityByQuantity } from '../items/itemsSlice';
import { SaleType } from '@/types/sale';

interface SaleState {
	data: Array<SaleType>;
}

const initialState: SaleState = {
	data: [],
};

const salesSlice = createSlice({
	name: 'sales',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(addSale.fulfilled, (state, action) => {
			if (action.payload) state.data?.push(action.payload);
		});

		builder.addCase(
			getAllSales.fulfilled,
			(state, action: PayloadAction<Array<SaleType>>) => {
				state.data = action.payload;
			},
		);

		builder.addCase(
			deleteSale.fulfilled,
			(state, action: PayloadAction<SaleType | undefined>) => {
				state.data = state.data?.filter((d) => d.id !== action.payload?.id);
			},
		);

		builder.addCase(editSale.fulfilled, (state, action) => {
			if (action.payload) {
				const index = state.data.findIndex(
					(d) => d.id === action.payload?.id,
				);

				state.data[index] = action.payload;
			}
		});
	},
});

export const getAllSales = createAsyncThunk(
	'sales/getAllSales',
	async (userId: number) => {
		let sales: Array<SaleType> = [];

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
	async (
		sale: {
			title: string;
			quantity: number;
			price: number;
			currencyId: number;
			itemId: number;
			userId: number;
			saleDateTimeString: string;
		},
		{ dispatch },
	) => {
		let res: SaleType | undefined;

		await prismaAddSale({ sale })
			.then((d) => {
				res = d;
			})
			.catch((e) => {
				throw e;
			});

		dispatch(
			decrementItemQuantityByQuantity({
				id: sale.itemId,
				quantitySold: sale.quantity,
			}),
		);

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

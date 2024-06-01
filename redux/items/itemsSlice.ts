import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
	getAllItems as prismGetAllItems,
	addItem as prismaAddItem,
	deleteItem as prismaDeleteItem,
	editItem as prismaEditItem,
} from '@/prisma/functions/items';
import type { Items } from '@prisma/client';

interface ItemState {
	data: Array<Items>;
}

const initialState: ItemState = {
	data: [],
};

const itemsSlice = createSlice({
	name: 'items',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(addItem.fulfilled, (state, action) => {
			if (action.payload) state.data?.push(action.payload);
		});

		builder.addCase(editItem.fulfilled, (state, action) => {
			if (action.payload) {
				const index = state.data.findIndex(
					(d) => d.id === action.payload?.id,
				);

				state.data[index] = action.payload;
			}
		});

		builder.addCase(
			getAllItems.fulfilled,
			(state, action: PayloadAction<Array<Items>>) => {
				state.data = action.payload;
			},
		);

		builder.addCase(
			deleteItem.fulfilled,
			(state, action: PayloadAction<Items | undefined>) => {
				state.data = state.data?.filter((d) => d.id !== action.payload?.id);
			},
		);
	},
});

export const getAllItems = createAsyncThunk(
	'items/getAllItems',
	async (userId: number) => {
		let items: Array<Items> = [];

		await prismGetAllItems({ userId })
			.then((d) => {
				items = d;
			})
			.catch((e) => {
				throw e;
			});

		return items;
	},
);

export const addItem = createAsyncThunk(
	'items/addItem',
	async (item: {
		code: string;
		name: string;
		description?: string;
		quantity: number;
		price: number;
		currencyId: number;
		userId: number;
	}) => {
		let res: Items | undefined;

		await prismaAddItem({ item })
			.then((d) => {
				res = d;
			})
			.catch((e) => {
				throw e;
			});

		return res;
	},
);

export const deleteItem = createAsyncThunk(
	'items/deleteItem',
	async (itemId: number) => {
		let res: Items | undefined;

		await prismaDeleteItem({ id: itemId })
			.then((d) => {
				res = d;
			})
			.catch((e) => {
				throw e;
			});

		return res;
	},
);

export const editItem = createAsyncThunk(
	'items/editItem',
	async (item: Items) => {
		let res: Items | undefined;

		await prismaEditItem({ item })
			.then((d) => {
				res = d;
			})
			.catch((e) => {
				throw e;
			});

		return res;
	},
);

// export const {} = itemsSlice.actions;

export default itemsSlice.reducer;

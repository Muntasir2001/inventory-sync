import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Items } from '@prisma/client';

import {
	getAllItems as prismGetAllItems,
	addItem as prismaAddItem,
	deleteItem as prismaDeleteItem,
	editItem as prismaEditItem,
} from '@/prisma/functions/items';

interface ItemState {
	data?: Array<Items>;
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
	async (arg, { rejectWithValue }) => {
		let items: Array<Items> = [];

		await prismGetAllItems()
			.then((d) => {
				items = d;
			})
			.catch((e) => {
				rejectWithValue(e);
			});

		return items;
	},
);

export const addItem = createAsyncThunk(
	'items/addItem',
	async (item: Items, { rejectWithValue }) => {
		let res: Items | undefined;

		await prismaAddItem({ item })
			.then((d) => {
				res = d;
			})
			.catch((e) => {
				rejectWithValue(e);
			});

		return res;
	},
);

export const deleteItem = createAsyncThunk(
	'items/deleteItem',
	async (id: number, { rejectWithValue }) => {
		let res: Items | undefined;

		await prismaDeleteItem({ id })
			.then((d) => {
				res = d;
			})
			.catch((e) => {
				rejectWithValue(e);
			});

		return res;
	},
);

export const editItem = createAsyncThunk(
	'items/addItem',
	async (item: Items, { rejectWithValue }) => {
		let res: Items | undefined;

		await prismaEditItem({ item })
			.then((d) => {
				res = d;
			})
			.catch((e) => {
				rejectWithValue(e);
			});

		return res;
	},
);

export const {} = itemsSlice.actions;

export default itemsSlice.reducer;

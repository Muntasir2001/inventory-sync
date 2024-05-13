import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Items } from '@prisma/client';

import {
	getAllItems as prismGetAllItems,
	addItem as prismaAddItem,
} from '@/prisma/functions/items';

interface ItemState {
	data?: Array<Items>;
}

const initialState: ItemState = {
	// data: getAllItems(),
};

const itemsSlice = createSlice({
	name: 'items',
	initialState,
	reducers: {
		editItem: (state, action) => {},
		deleteItem: (state, action) => {},
	},
	extraReducers: (builder) => {
		builder.addCase(addItem.fulfilled, (state, action) => {
			// state.data = [action.payload]
		});
		builder.addCase(
			getAllItems.fulfilled,
			(state, action: PayloadAction<Array<Items>>) => {
				state.data = action.payload;
			},
		);
	},
});

export const addItem = createAsyncThunk(
	'items/addItem',
	async (item: Items) => {
		//addItem prisma function

		const res = await prismaAddItem({ item });

		console.log(res);
	},
);

export const getAllItems = createAsyncThunk('items/getAllItems', async () => {
	const items = await prismGetAllItems();

	return items;
});

export const { editItem, deleteItem } = itemsSlice.actions;

export default itemsSlice.reducer;

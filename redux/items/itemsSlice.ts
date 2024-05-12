import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { Items } from '@prisma/client';

interface ItemState {
	data?: Array<Items>;
}

const initialState: ItemState = {
	data: [],
};

const itemsSlice = createSlice({
	name: 'items',
	initialState,
	reducers: {
		addItem: (state, action) => {},
		editItem: (state, action) => {},
		deleteItem: (state, action) => {},
	},
});

export const { addItem, editItem, deleteItem } = itemsSlice.actions;

export default itemsSlice.reducer;

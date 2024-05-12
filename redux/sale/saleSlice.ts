import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { Sales } from '@prisma/client';

interface ItemState {
	data?: Array<Sales>;
}

const initialState: ItemState = {
	data: [],
};

const salesSlice = createSlice({
	name: 'sales',
	initialState,
	reducers: {
		addSale: (state, action) => {},
		editSale: (state, action) => {},
		deleteSale: (state, action) => {},
	},
});

export const { addSale, editSale, deleteSale } = salesSlice.actions;

export default salesSlice.reducer;

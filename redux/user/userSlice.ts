import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { Sales } from '@prisma/client';

// interface ItemState {
// 	data?: Array<Sales>;
// }

// set to any temporarily
const initialState: any = {
	data: [],
};

const usersSlice = createSlice({
	name: 'sales',
	initialState,
	reducers: {
		setUser: (state, action) => {},
	},
});

export const { setUser } = usersSlice.actions;

export default usersSlice.reducer;

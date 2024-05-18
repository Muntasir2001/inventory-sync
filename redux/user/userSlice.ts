import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { Users } from '@prisma/client';

interface ItemState {
	data?: {
		id: number;
		createdAt: Date;
		firstName: string;
		lastName: string;
		email: string;
	};
}

const initialState: ItemState = {};

const usersSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<Users>) => {
			state.data = action.payload;
		},
	},
});

export const { setUser } = usersSlice.actions;

export default usersSlice.reducer;

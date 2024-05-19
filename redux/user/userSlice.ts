import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { Users } from '@prisma/client';

interface UserState {
	data?: {
		id: number;
		firstName: string;
		lastName: string;
		email: string;
	};
}

const initialState: UserState = {};

const usersSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (
			state,
			action: PayloadAction<{
				id: number;
				firstName: string;
				lastName: string;
				email: string;
			}>,
		) => {
			console.log('setting user', action.payload);

			state.data = action.payload;
		},
	},
});

export const { setUser } = usersSlice.actions;

export default usersSlice.reducer;

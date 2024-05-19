import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserState {
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
			state.data = action.payload;

			console.log(action.payload);
		},
	},
});

export const { setUser } = usersSlice.actions;

export default usersSlice.reducer;

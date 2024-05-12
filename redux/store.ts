import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from './items/itemsSlice';
import saleSlice from './sale/saleSlice';
import userSlice from './user/userSlice';

export const store = configureStore({
	reducer: {
		items: itemsSlice,
		sales: saleSlice,
		user: userSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

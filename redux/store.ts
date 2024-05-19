import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

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

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/ Typesafe useDispatch. */;
export const useAppDispatch: () => AppDispatch = useDispatch;

/ Typesafe useSelector. */;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

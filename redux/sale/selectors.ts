import { RootState } from '../store';

export const selectSales = (state: RootState) => state.sales.data;

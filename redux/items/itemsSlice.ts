import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { Items } from '@prisma/client';

interface ItemState {
	data?: Array<Items>;
}

const initialState: ItemState = {
	data: [],
};

'use client';

import {
	createContext,
	useContext,
	useMemo,
	useReducer,
	FC,
	Dispatch,
} from 'react';

import { InitialState, Reducer, InitialStateType, Actions } from './Reducer';

const DataContext = createContext<{
	state: InitialStateType;
	dispatch: Dispatch<Actions>;
}>({ state: InitialState, dispatch: () => undefined });

interface props {
	children: any;
}

export const DataWrapper = ({ children }: props) => {
	const [state, dispatch] = useReducer(Reducer, InitialState);

	const contextValue = useMemo(() => {
		return { state, dispatch };
	}, [state, dispatch]);

	return (
		<DataContext.Provider value={contextValue}>
			{children}
		</DataContext.Provider>
	);
};

export const useDataContext = () => {
	return useContext(DataContext);
};

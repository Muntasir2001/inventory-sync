import items from '@/data/items';

/* 
	** Required action types **
	- item
		- add
		- edit
		- delete
	- sale
		- add
		- edit
		- delete
	- auth (user info)
		- add
		- edit
		- delete
*/

export enum ActionType {
	AddItem,
	EditItem,
	DeleteItem,
	AddSale,
	EditSale,
	DeleteSale,
	SetUser,
}

export interface AddItem {
	type: ActionType.AddItem;
	payload: {};
}

export interface EditItem {
	type: ActionType.EditItem;
	payload: {};
}

export interface DeleteItem {
	type: ActionType.DeleteItem;
	payload: {};
}

export interface AddSale {
	type: ActionType.AddSale;
	payload: {};
}

export interface EditSale {
	type: ActionType.EditSale;
	payload: {};
}

export interface DeleteSale {
	type: ActionType.DeleteSale;
	payload: {};
}

export interface SetUser {
	type: ActionType.SetUser;
	payload: {};
}

export type Actions =
	| AddItem
	| EditItem
	| DeleteItem
	| AddSale
	| EditSale
	| DeleteSale
	| SetUser;

export interface InitialStateType {
	items: Array<{}>;
	sales: Array<{}>;
	user: {};
}

export const InitialState: InitialStateType = {
	items: items,
	sales: [],
	user: {},
};

export const Reducer = (
	state: InitialStateType = InitialState,
	action: Actions,
): InitialStateType => {
	// state = InitialState

	switch (action.type) {
		case ActionType.AddItem: {
			return {
				...state,
				items: [...state.items, action.payload],
			};
		}
		case ActionType.EditItem: {
			// call a function
		}
		case ActionType.DeleteItem: {
			// call a function
		}
		case ActionType.AddSale: {
			return {
				...state,
				items: [...state.sales, action.payload],
			};
		}
		case ActionType.EditSale: {
			// call a function
		}
		case ActionType.DeleteSale: {
			// call a function
		}
		default:
			return state;
	}
};

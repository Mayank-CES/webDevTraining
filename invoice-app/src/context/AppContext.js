import React, { createContext, useReducer } from 'react';
// import { v4 as uuidv4 } from 'uuid';

const VIEWS = {
    ADD_CUSTOMER: 'add-customer',
    VIEW_CUSTOMER: 'view-customer',
    ADD_ITEM: 'add-item',
    VIEW_ITEM: 'view-item',
}

export const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_CUSTOMER':
			return {
				...state,
				customers: [...state.customers, action.payload],
				// view: 1,
			};
		case 'ADD_ITEM':
			return {
				...state,
				items: [...state.items, action.payload],
			};
		case 'CHANGE_VIEW':
			return {
				...state,
				currentMenu: action.payload.menu,
				currentView: action.payload.view,
			};
		default:
			return state;
	}
};


const initialState = {
	customers: [],
	items: [],
	invoices: [],
	currentMenu: 'customer',
	currentView: 'view-customer'
};

export const AppContext = createContext();


export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	
	function changeMenu(val){
		console.log({val});
		switch (val) {
			case 'customers' : 
				return changeView(val,VIEWS.VIEW_CUSTOMER);
			case 'items' :
				return changeView(val,VIEWS.VIEW_ITEM);
			default : 
				return console.log('Menu fallback to defaults case');
		}
	}

	function changeView(Menu, View){
		dispatch({
			type: 'CHANGE_VIEW',
			payload: {menu: Menu,view: View},
		  });
	}


	return (
		<AppContext.Provider
			value={{
				customers: state.customers,
				items: state.items,
				invoices: state.invoices,
				currentMenu: state.currentMenu,
				currentView: state.currentView,
				dispatch,
				changeMenu,
				changeView,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

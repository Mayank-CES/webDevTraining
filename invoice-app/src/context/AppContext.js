import React, { createContext, useReducer, useState, useEffect} from 'react';
// import { v4 as uuidv4 } from 'uuid';
import {VIEWS,initialState} from '../utils/Constant'
import { getCustomersAPI, getItemsAPI} from '../components/Api';

// const VIEWS = {
//     ADD_CUSTOMER: 'add-customer',
//     VIEW_CUSTOMER: 'view-customer',
//     ADD_ITEM: 'add-item',
//     VIEW_ITEM: 'view-item',
//     ADD_INVOICE: 'add-customer',
//     VIEW_INVOICE: 'view-customer',
// }

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
		case 'SET_ITEM':
			return {
				...state,
				items: [...action.payload],

			};
		case 'POST_ITEM':
			return {
				...state,
				items: [...state.items, action.payload],
			};
		case 'SET_CUSTOMER':
			return {
				...state,
				customers: [...action.payload],

			};
		case 'POST_CUSTOMER':
			return {
				...state,
				customers: [...state.customers, action.payload],
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


// const initialState = {
// 	customers: [],
// 	items: [],
// 	invoices: [],
// 	currentMenu: 'customer',
// 	currentView: 'view-customer'
// };

export const AppContext = createContext();


export const AppProvider = (props) => {

	const [itemResponse, setItemResponse] = useState({});
    var [loading, setLoading] = useState(false);

	useEffect(() => {
        (async () => {
            const data = await getCustomersAPI();
            var mappedData = []
            // console.log(data)
			data.map((val) => (
				mappedData = [
					...mappedData,
					{	id: val.id,
						name: val.name,
						phone: val.phone,
						email: val.email,
						createdOn: new Date(val.createdAt).toUTCString().slice(5,16),
					}
				]
			));
            dispatch({
                type: 'SET_CUSTOMER',
                payload: mappedData,
            });
            console.log(...data)
            // data.map((val)=>(
            //     console.log( val.name)
            // ));
            console.log(...mappedData)
        })();
        return () => { };
    }, []);

	useEffect(() => {
        (async () => {
            const data = await getItemsAPI();
            var mappedData = []
            console.log(data)
			data.map((val) => (
				mappedData = [
					...mappedData,
					{	id: val.id,
						name: val.name,
						description: val.description,
						price: val.price,
						addedOn: new Date(val.created_at).toUTCString().slice(5,16)
					}
				]
			));
            dispatch({
                type: 'SET_ITEM',
                payload: mappedData,
            });
            console.log(...data)
            // data.map((val)=>(
            //     console.log( val.name)
            // ));
            console.log(...mappedData)
            // console.log(items);
        })();
        return () => { };
    }, []);


	// initialState.items=[initialState.items, itemResponse];
	const [state, dispatch] = useReducer(AppReducer, initialState);
	
	function changeMenu(val){
		console.log({val});
		switch (val) {
			case 'customers' : 
				return changeView(val,VIEWS.VIEW_CUSTOMER);
			case 'items' :
				return changeView(val,VIEWS.VIEW_ITEM);
			case 'invoices' :
				return changeView(val,VIEWS.VIEW_INVOICE);
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
				// currentView: state.currentView,
				// itemResponse:state.itemResponse,

				dispatch,
				changeMenu,
				// changeView,
				setItemResponse,
				setLoading,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

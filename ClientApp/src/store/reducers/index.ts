import { Reducer } from "redux";

import { IState } from './../../interfaces';

import { IAddItemAction } from './../actions/addItem';
import { IDeleteItemAction } from './../actions/deleteItem';
import { IFetchDataAction } from './../actions/fetchData';

import { actionTypes } from "../actions";

const initialState = {
    items: []
}

export type ActionTypes = IAddItemAction | IDeleteItemAction | IFetchDataAction;

export const rootReducer: Reducer<IState, ActionTypes> = (state = initialState, action) => {
    const { items } = state;

    switch (action.type) {
        /**
         * Добавление элемента
         */
        case actionTypes.ADD_ITEM:
            return {
                ...state,
                items: [
                    ...items,
                    action.payload
                ]
            };

        /**
         * Удаление элемента
         */    
        case actionTypes.DELETE_ITEM:
            return {
                ...state,
                items: [
                    ...items.slice(0, action.payload),
                    ...items.slice(action.payload + 1, items.length)
                ]
            }

        case actionTypes.FETCH_DATA:
            return {
                ...state, 
                items: action.payload
            }   
        default:
            return state;
    }
}
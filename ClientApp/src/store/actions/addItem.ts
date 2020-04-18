import { ActionCreator } from "redux";

import { actionTypes } from '.'

export interface IAddItemAction {
    type: actionTypes.ADD_ITEM
    payload: string;
}

export const addItem: ActionCreator<IAddItemAction> = (text: string) => {
    return {
        type: actionTypes.ADD_ITEM,
        payload: text
    }
}
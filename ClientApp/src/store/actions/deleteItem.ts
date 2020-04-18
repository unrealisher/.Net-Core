import { ActionCreator } from "redux";
import { actionTypes } from ".";

export interface IDeleteItemAction {
    type: actionTypes.DELETE_ITEM;
    payload: number;
}

export const deleteItem: ActionCreator<IDeleteItemAction> = (index: number) => {
    return {
        type: actionTypes.DELETE_ITEM,
        payload: index
    }
}
import { ActionCreator } from "redux";
import { actionTypes } from ".";

export interface IDeleteItemAction {
    type: actionTypes.DELETE_ITEM;
    payload: number;
}

export const deleteItem: ActionCreator<IDeleteItemAction> = (index: number) => {
    fetch('/Items/DeleteItem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(index)
    });

    return {
        type: actionTypes.DELETE_ITEM,
        payload: index
    }
}
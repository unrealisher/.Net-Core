import { ActionCreator } from "redux";

import { actionTypes } from '.'

export interface IAddItemAction {
    type: actionTypes.ADD_ITEM
    payload: string;
}

export const addItem: ActionCreator<IAddItemAction> = (text: string) => {
    fetch('/Items/AddItem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(text)
    });

    return {
        type: actionTypes.ADD_ITEM,
        payload: text
    }
}
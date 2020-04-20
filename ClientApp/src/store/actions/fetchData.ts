import { ActionCreator } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

import { actionTypes } from '.'

import { IState } from './../../interfaces/index';


export interface IFetchDataAction {
    type: actionTypes.FETCH_DATA;
    payload: string[];
}

const fetchDataAction: ActionCreator<IFetchDataAction> = (items: string[]) => {
    return {
        type: actionTypes.FETCH_DATA,
        payload: items
    }
}


type FetchDataThunkActionType = ThunkAction<void, IState, null, IFetchDataAction>
type FetchDataThunkDispatchType = ThunkDispatch<IState, null, IFetchDataAction>

export const fetchData = (path: string = '/Items/All'): FetchDataThunkActionType  => {
    return async (dispatch: FetchDataThunkDispatchType) => {
        const response = await fetch(path);
        const data = await response.json();
        dispatch(fetchDataAction(data))
    }
}
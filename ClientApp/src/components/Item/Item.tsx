import React, { FC } from 'react';

import './Item.css'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { deleteItem } from '../../store/actions/deleteItem';

interface IDispatchToProps {
    onDeleteItem: Function;
}

export interface IItemProps extends IDispatchToProps {
    index: number;
    text?: string;
}

const Item: FC<IItemProps> = props => {
    const {
        index,
        text,
        onDeleteItem
    } = props;

    return (
        <li className='Item'>
            {text}
            <button className='Deleter' onClick={() => {
                onDeleteItem(index)
            }}></button>
        </li>
    )
};

const mapDispatchToProps = (dispatch: Dispatch): IDispatchToProps => {
    return {
        onDeleteItem: (index: number) => {
            dispatch(deleteItem(index));
        }
    };
}

export default connect(null, mapDispatchToProps)(Item);
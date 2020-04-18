import React, { FC } from 'react';

export interface IListProps {
}

const List: FC<IListProps> = props => {
    return (
        <ul className='List'>
            {props.children}
        </ul>
    )
};

export default List;
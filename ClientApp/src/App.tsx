import React, { FC, useRef, useEffect } from 'react';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';

import { addItem } from './store/actions/addItem';

import List from './components/List/List';
import Item from './components/Item/Item';
import Input from './components/Input/Input';
import Button from './components/Button/Button'

import { IState } from './interfaces';
import { fetchData } from './store/actions/fetchData';
import { ThunkDispatch } from 'redux-thunk';



interface IStateToProps {
    items?: string[]
}

interface IDispatchToProps {
    onAddItem: Function;
    onFetchData: Function;
}

interface IAppProps extends IStateToProps, IDispatchToProps {}

const App: FC<IAppProps> = props => {
    const { items, onAddItem, onFetchData } = props;

    useEffect(() => {
        onFetchData()
    }, [])


    const inputRef = useRef<HTMLInputElement>(null)

    const onButtonClick = () => {
        if (inputRef.current && inputRef.current.value) {
            onAddItem(inputRef.current.value);
            inputRef.current.value = '';
        }
    }

    return (
        <div className='App'>
            {
                items && 
                <List>
                    {
                        items.map((text, index) => {
                            return (
                                <Item index={index} text={text} key={index}></Item>
                            )
                        })
                    }
                </List>
            }
            <div className='Wrapper'>
                <Input inputRef={inputRef} placeholder='дело'></Input>
                <Button text='добавить' onClick={onButtonClick}></Button>
            </div>
        </div>
    );
};

const mapStateToProps = (state: IState): IStateToProps => {
    return {
        items: state.items
    };
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, null, AnyAction>): IDispatchToProps => {
    return {
        onAddItem: (text: string) => {
            dispatch(addItem(text));
        },
        onFetchData: (path?: string) => {
            dispatch(fetchData(path))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
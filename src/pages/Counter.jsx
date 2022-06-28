import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCounterValue} from "../store/reducers/selectors/getCounterValue/getCounterValue";
import {decrement, increment} from "../store/reducers/counterReducer";

const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector(getCounterValue)

    const onIncrement = () => {
        dispatch(increment())
    }

    const onDecrement = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <h1 data-testid="counter-value">{value}</h1>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <button data-testid="counter-increment" onClick={onIncrement}>Increment</button>
                <button data-testid="counter-decrement" onClick={onDecrement}>Decrement</button>
            </div>

        </div>
    );
};

export default Counter;
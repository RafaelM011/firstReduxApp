import React from "react";

import { useSelector, useDispatch} from 'react-redux';
import { increase, decrease, selectCount } from "../features/counterSlice";

export default function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return(
        <>
            <button onClick={ () => dispatch(decrease())}> DECREASE </button>
            <h1> {count} </h1>
            <button onClick={() => dispatch(increase())}> INCREASE </button>     
        </>
    )
}
import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ( { value }) => {

    console.log('render');
    
    const [counter, setCounter] = useState(value);
    
    const handleAdd = () => {
        // console.log('+1',value);
        // setCounter( counter + 1);
        setCounter((c) => c + 1)
    }

    const reduceCounter = () => setCounter( counter - 1);
    

    const resetCounter = () => {
        setCounter((c) => value);
    }

    return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button type="button" onClick={ handleAdd }>+1</button>
        <button type="button" onClick={ reduceCounter }>-1</button>
        <button type="button" onClick={ resetCounter }>Reset</button>

    </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
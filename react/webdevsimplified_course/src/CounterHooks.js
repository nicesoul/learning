import React, {useState} from 'react';

export default function CounterHooks({initialCount}){
    // hard way with object below
 /*   const [state, setState] = useState({count: initialCount})
    return (
        <div>
        <button onClick={() => setState(prevState => {return {count: prevState.count - 1}})}>-</button>
        <span>{state.count}</span>
        <button onClick={() => setState({count: state.count + 1})}>+</button>
 */
        const [count, setCount] = useState(initialCount); 
        return (
            <div>  
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <span>{count}</span>        
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>        
        </div>
    )
}
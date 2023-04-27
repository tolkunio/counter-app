import React, {useEffect, useState} from 'react';
import './App.css';
import {SuperButton} from './components/SuperButton/SuperButton';

function App() {
    const maxCounterValue = 5;
    const minCounterValue = 0;
    const [counter, setCounter] = useState(minCounterValue);
    useEffect(()=>{
        localStorage.setItem('counterValue',JSON.stringify(counter));
    },[counter]);

    useEffect(()=>{
        let counterValue = localStorage.getItem('counterValue');
        if(counterValue){
            let value = JSON.parse(counterValue);
            setCounter(value);
        }
    },[])
    const increaseCounterHandler = () => {
        setCounter((prev)=>prev+1);
    }
    const resetCounterHandler = () => {
        setCounter(minCounterValue);
    }
    const resultSpanClass = `${counter === maxCounterValue ? 'redSpan' : 'span'}`;
    return (
        <div className="App">
            <div className="counter">
            <span className={resultSpanClass}>
                {counter}
            </span>
                <div>
                    <SuperButton
                                 disabled={counter >= maxCounterValue}
                                 onClick={increaseCounterHandler}>
                    inc
                    </SuperButton>
                    <SuperButton disabled={counter === minCounterValue}
                                 onClick={resetCounterHandler}>
                        reset
                    </SuperButton>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default App;
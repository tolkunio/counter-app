import React, {useState} from 'react';
import './App.css';
import {SuperButton} from './components/SuperButton/SuperButton';

function App() {
    const maxCounterValue = 5;
    const minCounterValue = 0;
    const [counter, setCounter] = useState(minCounterValue);
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
                0
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
            </div>
        </div>
    );
}

export default App;
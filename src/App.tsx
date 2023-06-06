import React, {useEffect, useState} from 'react';
import './App.css';
import {SuperButton} from './components/SuperButton/SuperButton';
import Counter from './components/Counter/Counter';
import CounterSettings from './components/CounterSettings/CounterSettings';

export type CounterRulesType = {
    startValue: number,
    maxValue: number
};

let startRules: CounterRulesType = {
    startValue: 0,
    maxValue: 5,
}

function App() {
    let [counter, setCounter] = useState<number>(startRules.startValue);
    let [err, setError] = useState<boolean>(false);


    //get from localStorage
    useEffect(() => {
        let counterValue = localStorage.getItem('counterValue');
        if (counterValue) {
            let value = JSON.parse(counterValue);
            setCounter(value);
        }
    }, [])

    //set to localStorage
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counter))
    }, [counter]);

    const incrementCounter = () => {
        setCounter((prev) => prev + 1);
    }
    const resetCounter = () => {
        setCounter(startRules.startValue);
    }
    const setErrorHandler = (err: boolean) => {
        setError(err);
    }
    return (
        <div className="App">
            <div className="appWrapper">
                <Counter counterRules={startRules}
                         counterValue={counter}
                         error={err}
                         incrementCallback={incrementCounter}
                         resetCallback={resetCounter}/>
                <CounterSettings counterRules={startRules}
                                 error={err}
                                 setErrorCallback={() => {
                                 }}
                                 setRulesCallback={() => {
                                 }}/>
            </div>

        </div>
    );
}

export default App;
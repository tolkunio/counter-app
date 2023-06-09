import React from 'react';
import {SuperButton} from '../SuperButton/SuperButton';
import {CounterRulesType} from '../../App';
import s from './Counter.module.css';

type CounterPropsType = {
    counterRules:CounterRulesType,
    counterValue: number,
    error:boolean,
    incrementCallback:()=>void,
    resetCallback:(start?: number)=>void
}

const Counter = (props:CounterPropsType) => {
    let counter = props.counterValue;
    let maxCounterValue = props.counterRules.maxValue;
    let minCounterValue = props.counterRules.startValue;
    const resultSpanClass = `${counter === maxCounterValue ? s.redSpan : s.span}`;
    return (
        <div className={s.counter}>
             <span className={resultSpanClass}>
                {counter}
            </span>
            <div>
                <SuperButton
                    disabled={counter >= maxCounterValue}
                    onClick={props.incrementCallback}>
                    inc
                </SuperButton>
                <SuperButton disabled={counter === minCounterValue}
                             onClick={()=>props.resetCallback()}>
                    reset
                </SuperButton>
            </div>
        </div>
    );
};

export default Counter;
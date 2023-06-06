import React, {useState} from 'react';
import {CounterRulesType} from '../../App';
import s from './CounterSettings.module.css';
import counter from '../Counter/Counter';
import {SuperButton} from '../SuperButton/SuperButton';
type CounterSettingsPropsType={
    counterRules:CounterRulesType,
    error:boolean,
    setErrorCallback:()=>void,
    setRulesCallback:()=>void
}
const CounterSettings = (props:CounterSettingsPropsType) => {
    let[maxValue,setMaxValue]=useState<number>(props.counterRules.maxValue);
    let[minValue,setMinValue]=useState<number>(props.counterRules.startValue);
    return (
        <div className={s.counterSettings}>
            <div className={s.maxValueWrapper}>
                <span> maxValue </span>
                <input
                    value={maxValue}
                    type='number'
                    onClick={()=>{}}
                    onChange={()=>{}}
                />
            </div>
            <div className={s.minValueWrapper}>
                <span> minValue </span>
                <input
                    value={minValue}
                    type='number'
                    onClick={()=>{}}
                    onChange={()=>{}}
                />
            </div>
            <div className={s.buttonWrapper}>
                <SuperButton disabled={true} onClick={()=>{}}>set</SuperButton>
            </div>
        </div>
    );
};

export default CounterSettings;
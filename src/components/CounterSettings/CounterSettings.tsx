import React, {ChangeEvent, useEffect, useState} from 'react';
import {CounterRulesType} from '../../App';
import s from './CounterSettings.module.css';
import counter from '../Counter/Counter';
import {SuperButton} from '../SuperButton/SuperButton';

type CounterSettingsPropsType = {
    counterRules: CounterRulesType,
    error: boolean,
    setErrorCallback: (err:boolean) => void,
    setRulesCallback: (startValue:number,maxValue:number) => void
}
const CounterSettings = (props: CounterSettingsPropsType) => {
    let rules = props.counterRules;
    let [maxValue, setMaxValue] = useState<number>(rules.maxValue);
    let [startValue, setStartValue] = useState<number>(rules.startValue);

    useEffect(() => {
        setMaxValue(rules.maxValue);
        setStartValue(rules.startValue);
    },[rules]);


    useEffect(()=>{
        errorSet();
    },[startValue,maxValue]);
    const errorSet=()=>{
        if(startValue<=0 || maxValue<=startValue){
            props.setErrorCallback(true);
        }
        else{
            props.setErrorCallback(false);
        }
    }
    const onChangeInputMaxHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setMaxValue(Number(e.currentTarget.value));
    }
    const onChangeInputStartHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setStartValue(Number(e.currentTarget.value));
    }
    const setSettingsHandler =()=>{
        props.setRulesCallback(startValue,maxValue);
    }
    const isDisabled= startValue<props.counterRules.startValue || maxValue>=props.counterRules.maxValue;
    let styleInput = props.error?s.inputError:'';
    return (
        <div className={s.counterSettings}>
            <div className={s.maxValueWrapper}>
                <span> max value </span>
                <input
                    className={styleInput}
                    value={maxValue}
                    type="number"
                    onChange={onChangeInputMaxHandler}
                />
            </div>
            <div className={s.minValueWrapper}>
                <span> start value </span>
                <input
                    className={s.inputError}
                    value={startValue}
                    type="number"
                    onChange={onChangeInputStartHandler}
                />
            </div>
            <div className={s.buttonWrapper}>
                <SuperButton
                    disabled={isDisabled}
                    onClick={setSettingsHandler}>
                    set
                </SuperButton>
            </div>
        </div>
    );
};

export default CounterSettings;
import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

const HW12 = () => {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme) // useSelector

    const Dispatch = useDispatch()// useDispatch
    const changeTheme = (theme: string) => Dispatch(changeThemeC(theme))// onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperSelect options={themes} onChangeOption={changeTheme}/>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;

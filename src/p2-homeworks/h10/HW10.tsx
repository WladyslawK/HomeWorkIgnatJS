import React from 'react'
import {useDispatch, useSelector } from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {AppStoreType} from "./bll/store";
import {initStateType, loadingActiveAC, loadingDoneAC} from "./bll/loadingReducer";

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)
    const Dispatch = useDispatch()

    const setLoading = () => {
        Dispatch(loadingActiveAC())
        console.log('loading...')
        setTimeout(()=> {
            Dispatch(loadingDoneAC())
        }, 3000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10

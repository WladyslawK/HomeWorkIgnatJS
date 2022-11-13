import React, {ChangeEvent, useState} from 'react';
import {RequestsAPI} from "./api/RequestsAPI";

export const HW13 = () => {

    const [response, setResponse] = useState<any>("")
    const [checked, setChecked] = useState<boolean>(false)

    const onClickGetRequestHandler = () => {
        RequestsAPI.getRequest()
            .then(res => {
                console.log(res)
                setResponse(res)
            })
            .catch((error) => {
                console.error(error.code)
                setResponse(error.message)
            })
    }

    const onchangeRequestHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const success = e.currentTarget.checked
        RequestsAPI.postMethod(success)
            .then(res => {
                console.log(res)
                setResponse(res.data.info)
            })
            .catch(error => {
                console.log("POST REQUEST: ", error)
                setResponse(error.message)
            })
        setChecked(success)
        //RequestsAPI.postMethod(e.currentTarget.checked)
    }

    return (
        <div>
            <h3 style={{color: "white"}}>HW 13</h3>
            <button onClick={onClickGetRequestHandler}>Get Request</button>
            <input onChange={onchangeRequestHandler} type="checkbox" checked={checked}/>
            <div style={{color: "white"}}>
                <span>Response: {response}</span>
            </div>
        </div>
    );
};
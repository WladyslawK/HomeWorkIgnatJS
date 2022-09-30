import React from 'react'
import {Navigate, Route, Routes } from 'react-router-dom';
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import {Junior} from "./pages/Junior";


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: "/junior",
    JUNIOR_PLUS: "/junior-plus"

    // add paths
}

function Pages() {
    return (
        <div>
            {/*Routes will choose the first match*/}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>

                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages

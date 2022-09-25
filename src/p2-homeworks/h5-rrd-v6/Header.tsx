import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import style from "./Header.module.css"


function Header() {

    const [collapsed, setCollapsed] = useState<boolean>(false)


    return (
        <div>
            <div
                className={collapsed ? style.sidebarActive + " " + style.sidebar : style.sidebarDefault + " " + style.sidebar}>

                <button className={style.closebtn}
                        onClick={() => setCollapsed(!collapsed)}>×
                </button>
                <NavLink to={"/pre-junior"}>PreJunior</NavLink>
                <NavLink to={"/junior"}>Junior</NavLink>
                <NavLink to={"/junior-plus"}>JuniorPlus</NavLink>


            </div>

            <div className={collapsed ? style.mainActive + " " + style.main : style.mainDefault + " " + style.main}>
                <button className={collapsed ? style.btnCollapsed + " " + style.openbtn : style.btnDefault + " " + style.openbtn} onClick={() => setCollapsed(!collapsed)}>☰</button>

            </div>
        </div>
    )
}

export default Header

import React from 'react'
import Affair from './Affair'
import s from "./Affairs.module.css"
import {AffairType, ALL_PRIORITY, FilterType, HIGH_PRIORITY, LOW_PRIORITY, MIDDLE_PRIORITY} from "./HW2";

type AffairsPropsType = {
    data: AffairType[]
    deleteAffairCallback: (id: number) => void
    setFilter: (filter: FilterType) => void
}

export const Affairs: React.FC<AffairsPropsType> = ({data, deleteAffairCallback, setFilter}) => {

    const buttonNames= [HIGH_PRIORITY, MIDDLE_PRIORITY, LOW_PRIORITY, ALL_PRIORITY]
    const setFilterHandler = (filter: FilterType) => {setFilter(filter)}

    return (
        <div>
            {data.map((affair: AffairType) => <Affair key={affair._id} affair={affair} deleteAffairCallback={deleteAffairCallback}/>)}

            {buttonNames.map(button=> <button className={s.sortButton} onClick={()=> setFilterHandler(button)}>{button}</button>)}
        </div>
    )
}

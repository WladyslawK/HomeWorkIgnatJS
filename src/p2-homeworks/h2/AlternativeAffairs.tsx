import React, {ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent} from 'react'
import {AffairType, FilterType} from "./HW2";
import Affair from "./Affair";
import {findAllByDisplayValue} from "@testing-library/react";

type AlternativeAffairsType = {
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffair: (id: number) => void
}

export const AlternativeAffairs: React.FC<AlternativeAffairsType> = ({data, setFilter, deleteAffair}) => {

    // trying to catch the value lays in strange object __reactFiber....
    const deleteAffairHandler = (e: MouseEvent<HTMLButtonElement>) => {
        alert(e.currentTarget.value)
    }

    return (
        <div>
            <div>
                {data.map(task => <Affair affair={task} deleteAffairCallback={deleteAffair}/>)}
            </div>
            <div>
                {/*Try to give the value of the button through the event*/}
                <button  onClick={deleteAffairHandler} value={'high'}>All</button>

            </div>
        </div>
    )
}



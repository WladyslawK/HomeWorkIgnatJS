import React, {useState} from 'react'
import {Affairs} from './Affairs'
import {AlternativeAffairs} from "./AlternativeAffairs";

//types
type PriorityType = "high" | "middle" | "low"
export type FilterType = PriorityType | "all"
export type AffairType = {
    _id: number
    name: string
    priority: PriorityType
}

//constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

export const HIGH_PRIORITY: FilterType = "high"
export const MIDDLE_PRIORITY: FilterType = "middle"
export const LOW_PRIORITY: FilterType = "low"
export const ALL_PRIORITY: FilterType = "all"

//types are imported from file types.tsx

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    /*switch (filter){
        case HIGH_PRIORITY:
            return affairs.filter(a => a.priority === HIGH_PRIORITY)
        case MIDDLE_PRIORITY:
            return affairs.filter(a => a.priority === MIDDLE_PRIORITY)
        case LOW_PRIORITY:
            return affairs.filter(a => a.priority === LOW_PRIORITY)
        default: return affairs
    }*/
    if(filter===ALL_PRIORITY) {
        return affairs
    } else{
        return affairs.filter(affair => affair.priority === filter)
    }

}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => affairs.filter(a => a._id !== _id)

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>("all")

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))
    const changeSetFilterCallback = (newFilter: FilterType) => setFilter(newFilter)

    return (
        <div>
            <hr/>
            homeworks 2

            <Affairs
                data={filteredAffairs}
                setFilter={changeSetFilterCallback}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
           {/* <div>other version</div>
            <AlternativeAffairs data={filteredAffairs} setFilter={changeSetFilterCallback} deleteAffair={deleteAffairCallback}/>*/}
            <hr/>
        </div>
    )
}

export default HW2

import React from 'react'
import s from "./Affair.module.css"
import {AffairType} from "./HW2";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

export const Affair: React.FC<AffairPropsType> = ({affair,deleteAffairCallback}) => {
    const deleteCallback = (id: number) => {deleteAffairCallback(id)}

    return (
        <div>
            <span className={s.affairContainer}>
                {affair.name}
            </span>

            <button className={s.deleteButton} onClick={() => deleteCallback(affair._id)}>X</button>
        </div>
    )
}

export default Affair

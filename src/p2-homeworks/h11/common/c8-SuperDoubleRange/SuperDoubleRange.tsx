import React from 'react'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    onChangeRange1: (value: number) => void
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange1,
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {

    return (
        <>
            <input
                type={'range'}
                value={value && value[0]}
                onChange={(e) => onChangeRange1(Number(e.currentTarget.value))}
            />

            <input style={{position: "absolute", left: "18px"}}
                type={'range'}
                value={"100"}
                onChange={(e) => onChangeRange1(Number(e.currentTarget.value))}
            />
        </>
    )
}

export default SuperDoubleRange

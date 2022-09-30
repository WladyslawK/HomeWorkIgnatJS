import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        if(onChange) onChange(e)
        else if(onChangeOption) onChangeOption(e.currentTarget.value)
    }
    console.log(value)
    // map options with key comment inside jsx can break everything in GitHub pages
    const mappedOptions: any[] = options ? options.map((option, index) => (


        <label key={name + '-' + index}>
            <input
                type={'radio'}
                // name, checked, value, onChange
                name={name}
                value={option}
                checked={option === value ? true : false}
                onChange={onChangeCallback}
            />
            {option}
        </label>
    )) : []



    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio

import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperCheckbox.module.css'

// type of props os simple input
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = Omit<DefaultInputPropsType, "type"> & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        //type, // take type so it will be not changeable
        onChange, onChangeChecked,
        className, spanClassName,
        children, // text will come into this prop, no need in typification as it already done in React в React.FC

        ...restProps// all other props will go inside restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if(onChange) onChange(e)
        if(onChangeChecked) onChangeChecked(e.currentTarget.checked)
        // сделайте так чтоб работал onChange и onChangeChecked
    }

    const finalInputClassName = `${s.checkbox} ${className ? className : ''}`

    return (
        <label>
            <input
                type={'checkbox'}
                onChange={onChangeCallback}
                className={finalInputClassName}

                {...restProps} // give the input all other props (checked inside)
            />
            {children && <span className={s.spanClassName}>{children}</span>}
        </label> // due to  label click will be given to input
    )
}

export default SuperCheckbox

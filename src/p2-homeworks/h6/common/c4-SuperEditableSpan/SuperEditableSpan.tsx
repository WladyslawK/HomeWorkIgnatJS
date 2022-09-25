import React, {DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState} from 'react'
import SuperInputText from '../../../h4/common/c1-SuperInputText/SuperInputText'
import style from "./SuperEditableSpan.module.css"

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string

    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
    {
        autoFocus, // игнорировать изменение этого пропса
        onBlur,
        onEnter,
        spanProps,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const {children, onDoubleClick, className, ...restSpanProps} = spanProps || {}

    const onEnterCallback = () => {
        setEditMode(false) // выключить editMode при нажатии Enter

        onEnter && onEnter()
    }
    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        setEditMode(false) // выключить editMode при нажатии за пределами инпута

        onBlur && onBlur(e)
    }
    const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setEditMode(true) // включить editMode при двойном клике

        onDoubleClick && onDoubleClick(e)
    }




    return (
        <div className={style.container}>
            {editMode
                ? (<>
                        <img className={style.editImg} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAY1BMVEX///8AAADX19eSkpLDw8Pl5eXe3t49PT0NDQ1ycnJmZmYUFBTw8PDr6+vb29uPj4/Q0NAoKCifn59tbW2CgoIcHBxgYGDJyck2NjYhISGlpaVWVlb5+fkwMDC6urpJSUmvr69msf5QAAAD70lEQVRoge2b63aqMBBGAYv3GxWUq/L+T3kETZgJiWAzE1k9/f4VrHsFNsMEoudx5jI7p8uoiK9bVkw/ZZ75IsvYKX1/82GSL3foy8ZXkrtCH1XyPd+fQzuCf2nRvn/4HNoBHKGL03np7rBfACo63jeEhSs41Cx7VpS1GzhEJ7KYOYHDc52COnriFw6iFzu4Z8UNR+gQ72M+7NDwaqfuZYVDzSrNPfMM9hPfWFANP+s+AUdOektVCmmh+wwQLiNsJno1fF1qPgUuNTrZNbcPLbw77Bvd7p/k0kff4bpPdsIRnXF9q6A/5/LGMiNBo+v6ewA+FztXFGilkA7BxcBv1OimkEK4RjjBrojRj0L6Er5dPPdoy89bQYVU1HAEV/7hKnbElOhNV6rM53wvt9eWaNSbwSp5M8Dn3ea9HdrYKsA2BcIBekGIhq3CyscRwgWgXbYra8ZRq2gBD8D8UFtwRwdqFpkPeIeC6LTX1vwUvYGarXvgJgU81/5yboM2Gg7RsEuCk5NlaPzeERll+Axd5yxok+FNZ6KDR1ZXNpp9mAx/3J/78CiwQY8yXLQGKjwjQxsN71pBDKczvBpGe94Bol0Y3mUPtm/cGC4Ca7id4fCADxj+RINCSmd4ZjrgcNR7gKYzPBmjGU8NH2U4Qv9qw5Fmv81wpNl/Y3g6EcNN5xoanliNeiKGV1M3HIw6sRq17nl4G37DjW2hadQTMTxzbDiZZhMxfEQzzGW4cbrHr9nUDQ/A9g8aXrmb7qlo14bDfyC7c33QcGMzbBr1Jw0ne6DxZ/gozegMn+J0z3hdOzacrBmeiOHGBxqoN2OZ7r1t+PLP8LcTmND8hsMHrsYHGuhpIZnhaA3Gu9M9O8PvibQM/unePSFcYyZfkvIb3gQvlXjCxxieWKO93O/DR825LF+oNlHfp8XmUdO1Cs/4amami4vU8CZljw3DZngb7dKYQbS9Zk1kVbu9RtM9susiT+48VtGchrdJn1+Ybj0Fzmp4E6la84YcvbRHXQrZAw0YeQNtR2moKfSGt5FV7bH+AR52WdsZDMewnfJ3B6d7oIFTiisrEWuPenAWzZpsxbd2q5sUOBtaUe0RVM7nwHC76V4vUrUr2NhfH0OuGcKg7+1VOA50KVee4O0aOKXhbXbipzd4AeF2v1DRtJo16atWhnV8zlQyA9qrkWphfUA/jOhCbHgbqdr1Oiu0VBbN2mj6BVfoXTQMZjC8jWEtMQ6DZk3qIe5mEdccB9wz1C+RKq6PjL+2Sw3YW5zzHOgupeZiLu5YqlXxrxIganI75cHWBbeJXJqcLNb5MXSFbdMuLovW+YVJ5Vc5r+qL1TrVn+cf06g7kkvGh1AAAAAASUVORK5CYII=" alt="pencil"></img>
                        <SuperInputText
                            autoFocus // пропсу с булевым значением не обязательно указывать true
                            onBlur={onBlurCallback}
                            onEnter={onEnterCallback}

                            {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                        />
                    </>
                ) : (<>
                        <img className={style.editImg} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAY1BMVEX///8AAADX19eSkpLDw8Pl5eXe3t49PT0NDQ1ycnJmZmYUFBTw8PDr6+vb29uPj4/Q0NAoKCifn59tbW2CgoIcHBxgYGDJyck2NjYhISGlpaVWVlb5+fkwMDC6urpJSUmvr69msf5QAAAD70lEQVRoge2b63aqMBBGAYv3GxWUq/L+T3kETZgJiWAzE1k9/f4VrHsFNsMEoudx5jI7p8uoiK9bVkw/ZZ75IsvYKX1/82GSL3foy8ZXkrtCH1XyPd+fQzuCf2nRvn/4HNoBHKGL03np7rBfACo63jeEhSs41Cx7VpS1GzhEJ7KYOYHDc52COnriFw6iFzu4Z8UNR+gQ72M+7NDwaqfuZYVDzSrNPfMM9hPfWFANP+s+AUdOektVCmmh+wwQLiNsJno1fF1qPgUuNTrZNbcPLbw77Bvd7p/k0kff4bpPdsIRnXF9q6A/5/LGMiNBo+v6ewA+FztXFGilkA7BxcBv1OimkEK4RjjBrojRj0L6Er5dPPdoy89bQYVU1HAEV/7hKnbElOhNV6rM53wvt9eWaNSbwSp5M8Dn3ea9HdrYKsA2BcIBekGIhq3CyscRwgWgXbYra8ZRq2gBD8D8UFtwRwdqFpkPeIeC6LTX1vwUvYGarXvgJgU81/5yboM2Gg7RsEuCk5NlaPzeERll+Axd5yxok+FNZ6KDR1ZXNpp9mAx/3J/78CiwQY8yXLQGKjwjQxsN71pBDKczvBpGe94Bol0Y3mUPtm/cGC4Ca7id4fCADxj+RINCSmd4ZjrgcNR7gKYzPBmjGU8NH2U4Qv9qw5Fmv81wpNl/Y3g6EcNN5xoanliNeiKGV1M3HIw6sRq17nl4G37DjW2hadQTMTxzbDiZZhMxfEQzzGW4cbrHr9nUDQ/A9g8aXrmb7qlo14bDfyC7c33QcGMzbBr1Jw0ne6DxZ/gozegMn+J0z3hdOzacrBmeiOHGBxqoN2OZ7r1t+PLP8LcTmND8hsMHrsYHGuhpIZnhaA3Gu9M9O8PvibQM/unePSFcYyZfkvIb3gQvlXjCxxieWKO93O/DR825LF+oNlHfp8XmUdO1Cs/4amami4vU8CZljw3DZngb7dKYQbS9Zk1kVbu9RtM9susiT+48VtGchrdJn1+Ybj0Fzmp4E6la84YcvbRHXQrZAw0YeQNtR2moKfSGt5FV7bH+AR52WdsZDMewnfJ3B6d7oIFTiisrEWuPenAWzZpsxbd2q5sUOBtaUe0RVM7nwHC76V4vUrUr2NhfH0OuGcKg7+1VOA50KVee4O0aOKXhbXbipzd4AeF2v1DRtJo16atWhnV8zlQyA9qrkWphfUA/jOhCbHgbqdr1Oiu0VBbN2mj6BVfoXTQMZjC8jWEtMQ6DZk3qIe5mEdccB9wz1C+RKq6PjL+2Sw3YW5zzHOgupeZiLu5YqlXxrxIganI75cHWBbeJXJqcLNb5MXSFbdMuLovW+YVJ5Vc5r+qL1TrVn+cf06g7kkvGh1AAAAAASUVORK5CYII=" alt="pencil"></img>
                    <span
                        onDoubleClick={onDoubleClickCallBack}
                        className={style.spanView}

                        {...restSpanProps}
                    >
                        {/*если нет захардкодженного текста для спана, то значение инпута*/}
                        {children || restProps.value}
                    </span>
                    </>
                )
            }
        </div>
    )
}

export default SuperEditableSpan

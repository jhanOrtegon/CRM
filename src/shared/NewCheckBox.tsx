import { InputHTMLAttributes } from "react"

interface INewCheckBox extends InputHTMLAttributes<HTMLInputElement>  {
    variant?: 'small' | 'large'
}

export const NewCheckBox = ({ variant='small',  onChange, defaultChecked }:INewCheckBox) => {
    return (
        <input 
            className={`checkbox checkbox-accent rounded-sm ${variant === 'small' ? 'checkbox-xs' : ''}`} 
            defaultChecked={defaultChecked}
            type="checkbox" 
            onChange={onChange}
        />
    )
}
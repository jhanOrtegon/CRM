interface TButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    startIcon?:JSX.Element,
    endIcon?:JSX.Element,
    variant?: 'primary' | 'accent' | 'transparent'
}

export const Button = (props: TButton, ) => {
    const variant = (props?.variant || 'accent') 

    return (
        <div>
            <button
                {...props}
                style={{minHeight:'2.5rem', height:'2.5rem'}}
                type='button'
                className={`btn ${variant === 'accent' ? 'bg-accent' : variant === 'transparent' ? 'bg-white text-accent border-accent hover:bg-white' : 'bg-primary'} ${variant !== 'transparent' ? 'text-white' : ''}  hover:opacity-80 w-full ${props?.className ? props?.className : ''}`}
            >
                {props.startIcon ? props.startIcon : ''}

                {props.children}

                {props.endIcon ? props.endIcon : ''}
            </button>
        </div>

    )
}
import { useScreenSize } from "@/hooks"
import { breakPoints } from "@/utils"

//icons
import { IconSquareRoundedPlus, IconSquareRoundedX } from '@tabler/icons-react';

interface TButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'accent' | 'transparent' | 'full-transparent' | 'hover-gray'
    startIcon?: JSX.Element,
    endIcon?: JSX.Element,
    opacity?: boolean
    onClickAdd?: () => void
    onClickDelete?: () => void
}

export const Button = (props: TButton,) => {
    const variant = (props?.variant || 'accent')
    const { width } = useScreenSize()
    const opacity = props.opacity === false ? props.opacity : true
    return (
        <div className="flex items-center">
            <button
                {...props}
                style={width >= breakPoints.lg ? { minHeight: '2.5rem', height: '2.5rem' } : { minHeight: '2.5rem', height: '2.5rem' }}
                type='button'
                className={`btn ${opacity ? 'hover:opacity-80' : ''} ${variant === 'accent'
                    ? 'bg-accent'
                    : variant === 'transparent'
                        ? 'bg-white text-accent border-accent hover:bg-white'
                        : variant === 'full-transparent'
                            ? 'bg-transparent border-none text-daisy-space-40 hover:-bg--daisy-blue-jeans-20 hover:bg-opacity-100 justify-between 2xl:p-3'
                            : variant === 'hover-gray' ? 'bg-transparent border-none text-daisy-space-80 hover:bg-daisy-space-20 font-medium'
                            : 'bg-primary'} 
                    ${!variant.includes('transparent') ? 'text-white' : ''}   w-full ${props?.className ? props?.className : ''}`}
            >
                <div className="flex gap-x-2 items-center">

                    {props.startIcon ? <div className={variant==='hover-gray' ? 'text-daisy-space-80' : ''}>{props.startIcon}</div> : ''}

                    <div className={variant==='hover-gray' ? 'text-daisy-space-80' : ''}>{props.children}</div>

                    {props.endIcon ? <div className={variant==='hover-gray' ? 'text-daisy-space-80' : ''}>{props.endIcon}</div> : ''}

                </div>

                {
                    props.onClickAdd || props.onClickDelete ? (
                        <div className="flex gap-x-2">
                            {props.onClickAdd ? <IconSquareRoundedPlus onClick={props.onClickAdd} className="-text--daisy-blue-jeans-100" /> : ''}
                            {props.onClickDelete ? <IconSquareRoundedX onClick={props.onClickDelete} className="-text--daisy-blue-jeans-100" /> : ''}
                        </div>
                    ) : ''
                }



            </button>
        </div>

    )
}
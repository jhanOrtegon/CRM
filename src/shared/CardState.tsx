type TCardState = {
    type: 'success' | 'info' | 'error' | 'gray' | 'warning'
    text: string,
    variant?: 'full'
}

export const CardState = ({ type='success', text }: TCardState) => (
    // <div className={`-bg--daisy-state${variant === 'full' ? '-full' : ''}-${type} ${variant === 'full' ? 'text-white' : `-text--daisy-state-full-${type}`} p-1 m-0 w-full rounded-xl`}>
    <div className={`${type === 'success' ? '-bg--daisy-state-success -text--daisy-state-full-success' : '-bg--daisy-state-error -text--daisy-state-full-error'} p-2 font-bold m-0 w-full rounded-xl`}>
        {text}
    </div>
)




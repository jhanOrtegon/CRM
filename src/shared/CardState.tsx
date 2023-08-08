type TCardState = {
    type: 'success' | 'info' | 'error' | 'gray' | 'warning'
    text: string,
    variant?: 'full'
}

export const CardState = ({ type, text, variant }: TCardState) => (
    <div className={`-bg--daisy-state${variant === 'full' ? '-full' : ''}-${type} ${variant === 'full' ? 'text-white' : `-text--daisy-state-full-${type}`} p-1 m-0 w-full rounded-xl`}>
        {text}
    </div>
)



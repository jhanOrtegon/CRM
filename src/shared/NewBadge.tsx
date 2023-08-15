type TNewBadge = {
    color?: 'success' | 'gray' | 'info' | 'custom'
    value: string,
    className?: string,
    size?: 'sm' | 'md'
}

export const NewBadge = ({ color = 'success', value, className, size = 'sm' }: TNewBadge) => {

    const customColor =
        color === 'success' ? 'bg-daisy-green-leaf-20 text-daisy-green-leaf-80'
            : color === 'info'
                ? '-bg--daisy-blue-jeans-20 -text--daisy-blue-jeans-80'
                : color === 'gray' ? 'bg-daisy-space-10 text-daisy-space-100' : ''

    const customStyles = `badge border-0 ${size === 'md' ? 'p-4 text-sm' : 'px-3 text-xs '} ${customColor}`

    return (
        <div className={`${className ? className : ''} ${customStyles}`}>
            {value}
        </div>
    )
}
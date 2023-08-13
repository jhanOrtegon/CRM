type TNewBadge = {
    color?: 'success' | 'gray' | 'info',
    value: string,
    className?: string,
    size?: 'sm' | 'md'
}

export const NewBadge = ({ color = 'success', value, className, size = 'sm' }: TNewBadge) => {

    const customColor = color === 'success' ? 'bg-daisy-green-leaf-20 text-daisy-green-leaf-80' : color === 'info' ? '-bg--daisy-blue-jeans-20 -text--daisy-blue-jeans-80' : ''
    const customStyles = `badge border-0 ${size === 'md' ? 'p-4 text-sm' : 'px-4 text-xs '} ${customColor}`

    return (
        <div className={`${className ? className : ''} ${customStyles}`}>
            {value}
        </div>
    )
}
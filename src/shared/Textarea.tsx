type TTextarea = {
    placeholder?: string,
    value?:string,
    height?:string
}

export const Textarea = ({ value, placeholder = 'Escribir...', height='h-36' }: TTextarea) => {
    return (
        <textarea
            className={`textarea w-full textarea-bordered bg-white border-gray-400 hover:border-black focus:outline-none focus:border-daisy-space-100 text-daisy-space-100 ${height}`}
            placeholder={placeholder}
            value={value}
        />
    )
}
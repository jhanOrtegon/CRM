type TTextarea = {
    placeholder?: string,
    value?:string
}

export const Textarea = ({ value, placeholder = 'Escribir...' }: TTextarea) => {
    return (
        <textarea
            className="textarea textarea-bordered bg-white border-gray-400 hover:border-black focus:outline-none focus:border-daisy-space-100 text-daisy-space-100  h-36"
            placeholder={placeholder}
            value={value}
        />
    )
}
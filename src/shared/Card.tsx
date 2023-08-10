
export const Card = ({children, className, cardClass}:{children?:React.ReactNode, className?:string, cardClass?:string}) => {
    return (
        <div className={`card bg-base-100 card-box-shadow ${cardClass}`}>
            <div className={`card-body ${className}`}>
                {children}
            </div>
        </div>
    )
}
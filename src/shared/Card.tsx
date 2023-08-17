
export const Card = ({ children, className, cardClass, id }: { children?: React.ReactNode, className?: string, cardClass?: string, id?: string }) => {
    return (
        <div id={id} className={`card bg-base-100 card-box-shadow ${cardClass}`}>
            <div className={`card-body ${className}`}>
                {children}
            </div>
        </div>
    )
}
export const Title = ({text, className}:{text:string, className?:string}) => {
  return (
    <div className={`text-4xl text-daisy-space-100 font-bold mb-5 ${className}`}>{text}</div>
  )
}
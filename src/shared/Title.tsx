export const Title = ({text, className, mb='mb-5'}:{text:string, className?:string, mb?: string | number}) => {
  return (
    <div className={`${className} text-4xl text-daisy-space-100 font-bold ${mb}`}>{text}</div>
  )
}
type TText = {
  value:string, 
  className?:string, 
  mb?: string,
  color?: 'space' | 'blue-jean'
}

export const Text = ({value, className, mb='mb-1', color='space'}:TText) => {
    return (
      <div 
        className={`text-base 2xl:text-xl font-semibold ${mb} ${color === 'space' ? 'text-daisy-space-100' : '-text--daisy-blue-jeans-100'} ${className}`}
      >
          {value}
        </div>
    )
  }
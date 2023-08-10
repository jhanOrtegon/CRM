export const Text = ({value, className, mb='mb-1'}:{value:string, className?:string, mb?: string}) => {
    return (
      <div className={`${className} text-base 2xl:text-xl text-daisy-space-100 font-semibold ${mb}`}>{value}</div>
    )
  }
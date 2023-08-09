type THeaderLayout = {
  children: React.ReactNode
}

export const HeaderLayout = ({ children }: THeaderLayout) => {
  return (
    <div className="mt-3 mb-4">{children}</div>
  )
}
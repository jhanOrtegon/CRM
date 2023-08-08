type THeaderLayout = {
  children: React.ReactNode
}

export const HeaderLayout = ({ children }: THeaderLayout) => {
  return (
    <div className="mb-5">{children}</div>
  )
}
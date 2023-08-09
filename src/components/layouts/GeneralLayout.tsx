import { Navbar, Title } from "@/shared"

type TGeneralLayout = {
  children: React.ReactNode
  title?: string,
  anchor?: 'medium' | 'small' | 'large',
}

export const GeneralLayout = ({ children, title, anchor = 'large', }: TGeneralLayout) => {
  return (
    <div>
      <Navbar />

      <div className="py-7 px-28">

        {title ? <Title text={title} /> : ''}

        <div className={`mt-7 ${anchor === 'large' ? 'w-full' : anchor === 'medium' ? 'w-8/12' : 'w-4/12'}`}>
          {children}
        </div>
      </div>
    </div>
  )
}
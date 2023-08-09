import { Navbar, Title } from "@/shared"

type TGeneralLayout = {
  children: React.ReactNode
  title?: string,
  anchor?: 'medium' | 'small' | 'large',
}

export const GeneralLayout = ({ children, title, anchor = 'large'}: TGeneralLayout) => {
  return (
    <div>
      <Navbar />

      <div className="sm:py-5 2xl:pt-12 2xl:pb-5 px-28">

        {title ? <Title text={title} className="mb-4" mb={'mb-2'} /> : ''}

        <div className={`mt-2 ${anchor === 'large' ? 'w-full' : anchor === 'medium' ? 'w-8/12' : 'w-5/12'}`}>
          {children}
        </div>
      </div>
    </div>
  )
}
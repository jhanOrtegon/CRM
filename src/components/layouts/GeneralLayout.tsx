import { Navbar, Title } from "@/shared"
import { IconArrowLeft  } from '@tabler/icons-react';
import { useNavigate } from "react-router-dom";

type TGeneralLayout = {
  children: React.ReactNode
  title?: string,
  anchor?: 'medium' | 'small' | 'large',
  goBack?:boolean | (()=> void)
}

export const GeneralLayout = ({ children, title, anchor = 'large', goBack}: TGeneralLayout) => {
  
  const navigate = useNavigate()

  return (
    <div>
      <Navbar />

      <div className="sm:py-5 2xl:pt-12 2xl:pb-5 px-28">

        <div className="flex gap-4 mb-4 items-center">
        {goBack 
          ? ( 
              <button 
                className="btn btn-ghost hover:bg-transparent p-0 m-0"
                onClick={() => typeof goBack === 'boolean' ? navigate(-1) : goBack()}
              >
                <IconArrowLeft
                  strokeWidth={3}
                  size={40}
                  className="-text--daisy-blue-jeans-100 hover:text-daisy-space-100 transition-all" 
                />
              </button>
            ) 
            : ''
          }

          {title ? <Title text={title} mb={0} /> : ''}

        </div>

        <div className={`mt-2 ${anchor === 'large' ? 'w-full' : anchor === 'medium' ? 'w-8/12' : 'w-5/12'}`}>
          {children}
        </div>
      </div>
    </div>
  )
}
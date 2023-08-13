import { Navbar, Title } from "@/shared"
import { IconArrowLeft } from '@tabler/icons-react';
import { useNavigate } from "react-router-dom";

type TGeneralLayout = {
  children: React.ReactNode
  title?: string,
  component?: React.ReactNode,
  anchor?: 'medium' | 'small' | 'large',
  goBack?: boolean | (() => void),
  outPaddingBottom?: boolean
}

export const GeneralLayout = ({ children, title, anchor = 'large', goBack, component, outPaddingBottom }: TGeneralLayout) => {

  const navigate = useNavigate()

  return (
    <div>
      <Navbar />

      <div className={`sm:pt-5 ${!outPaddingBottom ? 'sm:pb-5' : ''} 2xl:pt-12 ${!outPaddingBottom ? '2xl:pb-5' : ''} px-28 animate__animated animate__fadeIn`}>

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

          {component}

        </div>

        <div className={`mt-2 ${anchor === 'large' ? 'w-full' : anchor === 'medium' ? 'w-8/12' : 'w-5/12'}`}>
          {children}
        </div>
      </div>
    </div>
  )
}
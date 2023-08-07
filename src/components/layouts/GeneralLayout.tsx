import { Navbar, Title } from "@/shared"
import { ReactElement } from "react";

type TGeneralLayout = {
    children: ReactElement | string,
    title?: string
}

export const GeneralLayout = ({children, title}:TGeneralLayout) => {
  return (
    <div>
        <Navbar />

        <div className="py-10 px-28">
          
          {title ? <Title text="Dashboard" /> : ''}

          {children}
        </div>
    </div>
  )
}
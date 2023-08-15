import { IconCategory2 } from "@tabler/icons-react"
import { nanoid } from "nanoid"

type TNewDropdown = {
    component?: React.ReactNode,
    tabIndex: number,
    listItems: {
        icon?: React.ReactNode,
        text: string,
        onClick?: ()=>void,
    }[],
}

export const NewDropdown = ({ component, tabIndex, listItems }: TNewDropdown) => {

    return (
        <div className="dropdown">
            <label tabIndex={tabIndex}>
                {component ? component : <IconCategory2 height={18} width={18} className="text-gray-500 cursor-pointer hover:scale-105" />}
            </label>

            <ul tabIndex={tabIndex} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 ">

                {
                    listItems?.map(item => (
                        <li key={nanoid()}>
                            <a 
                                className="hover:text-gray-600"
                                onClick={item?.onClick ?? item?.onClick}
                            >
                                {item.text}
                            </a>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}
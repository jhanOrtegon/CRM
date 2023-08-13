//hooks
import { useScreenSize } from '@/hooks';
import { useState, useEffect, useRef } from 'react';


type TSidebarLayout = {
    children: React.ReactNode,
    component: React.ReactNode,
}

export const SidebarLayout = ({ component, children }: TSidebarLayout) => {

    const { height, width } = useScreenSize()

    const [heightScroll, setHeightScroll] = useState<number>()

    const ref = useRef(null)

    useEffect(() => {
        setHeightScroll(ref.current.clientHeight)
    }, [])

    return (
        <div
            className='grid grid-cols-new-sidebar gap-x-7'
            style={{ height: `calc(${height}px - ${width >= 1540 ? '176px' : '148px'})` }}
        >

            <div className={`card bg-base-100 shadow-lg rounded-none py-2 px-6 ${(heightScroll >= 500 && heightScroll <= 650) ? 'overflow-y-auto' : '-border-r--daisy-blue-jeans-100 border-r-4'}`}>
                {component}
            </div>

            <div ref={ref}>{children}</div>

        </div>
    )
}
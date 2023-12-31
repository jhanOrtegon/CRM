import { ReactNode } from 'react';
import { nanoid } from "nanoid"

type TComponents = {
    tabActive: string,
    component: ReactNode
}[]

type TMultiTabs = {
    active?: string,
    listNames: string[],
    className?: string,
    childrenHeader?: React.ReactNode,
    components: TComponents,
    color?: 'space' | 'blue' | 'dark-blue'
    size?: 'xs' | 'sm' | 'md' | 'lg',
    variant?: 'bordered' | 'transparent' | 'lifted' | 'boxed',
    onClick?: (e: string) => void
}

export const MultiTabs = ({
    listNames,
    active,
    className,
    color = 'blue',
    size = 'md',
    variant = 'lifted',
    onClick,
    components,
    childrenHeader
}: TMultiTabs) => {

    const customSize = size === 'xs' ? 'tab-xs' : size === 'lg' ? 'tab-lg' : ''
    const customVariant = variant === 'transparent' ? '' : variant === 'bordered' ? 'tab-bordered' : variant === 'lifted' ? 'tab-lifted' : ''
    const customActive = color === 'blue'
        ? 'tab-active -text--daisy-blue-jeans-100 -bg--daisy-blue-jeans-20 -border--daisy-blue-jeans-60'
        : color === 'dark-blue'
            ? 'tab-active text-white -bg--daisy-blue-jeans-100'
            : 'tab-active text-daisy-space-100 bg-daisy-space-20 border-daisy-space-60'


    const customInactive = color === 'blue'
        ? 'hover:-text--daisy-blue-jeans-100 hover:-border--daisy-blue-jeans-60 border text-daisy-space-100'
        : 'hover: text-daisy-space-100 hover:border-daisy-space-60 border'


    return (
        <div>
            <div className={`tabs mb-5 items-center ${variant === 'boxed' ? 'tabs-boxed bg-transparent gap-5' : ''} ${className ? className : ''}`}>
                {
                    listNames?.map((tab, index) => (
                        <div key={nanoid()} className={`flex-auto ${color === 'space' ? '' : ''}`}>
                            <a style={variant === 'boxed' ? { border: 'none' } : { borderBottom: '1px solid #9FD6FD' }}
                                className={`tab w-full transition-all ${customSize} ${customVariant} ${tab === active ? customActive : `${customInactive} ${listNames?.length <= index ? 'border-r-0' : ''}`}`}
                                onClick={() => onClick(tab)}
                            >
                                {tab}
                            </a>
                        </div>
                    ))
                }

                {childrenHeader ?? childrenHeader}
            </div>

            <div>
                {components?.map((tab) => tab?.tabActive === active ? tab.component : '')}
            </div>

        </div>
    )

}







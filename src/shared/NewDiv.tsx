import { ReactNode } from 'react';

type TNewDiv = {
    anchor?: 'medium' | 'small' | 'large',
    children: ReactNode,
    style?: React.CSSProperties
}

export const NewDiv = ({anchor='medium', children, style}:TNewDiv) => {
  return (
    <div style={style} className={`${anchor === 'large' ? 'w-4/4' : anchor === 'medium' ? 'w-4/4' : 'w-4/4'}`}>
        {children}
    </div>
  )
}
import { ReactNode } from 'react';

type TNewDiv = {
    anchor?: 'medium' | 'small' | 'large',
    children: ReactNode,
    style?: React.CSSProperties
}

export const NewDiv = ({anchor='medium', children, style}:TNewDiv) => {
  return (
    <div style={style} className={`${anchor === 'large' ? 'vw-70' : anchor === 'medium' ? 'vw-40' : 'vw-30'}`}>
        {children}
    </div>
  )
}
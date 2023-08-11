import { Box } from "@mui/material"

type TCardState = {
    type: 'success' | 'info' | 'error' | 'gray' | 'warning'
    text: string,
    title?: string,
    variant?: 'full',
    mb?: 0 | 1 | 2 | 3
}

export const CardState = ({ type = 'success', text, title, mb }: TCardState) => {

    return (
        <Box
            className={`${title ? 'grid grid-cols-new-1-2' : ''} ${type === 'success' ? '-bg--daisy-state-success -text--daisy-state-full-success' : '-bg--daisy-state-error -text--daisy-state-full-error'} m-0 w-full rounded-xl`}
            p={title ? 1 : 0}
            mb={mb}
        >

            {title ? <div className="font-bold">{title}</div> : ''}

            <div className={title ? 'text-daisy-space-40 text-sm' : ''}>{text}</div>

        </Box>
    )

}
    // <div className={`-bg--daisy-state${variant === 'full' ? '-full' : ''}-${type} ${variant === 'full' ? 'text-white' : `-text--daisy-state-full-${type}`} p-1 m-0 w-full rounded-xl`}>



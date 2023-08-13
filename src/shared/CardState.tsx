import { Box } from "@mui/material"

type TCardState = {
    type: 'success' | 'info' | 'error' | 'gray' | 'warning'
    text: string,
    title?: string,
    variant?: 'full',
    mb?: 0 | 1 | 2 | 3 | 4 | 5
}

export const CardState = ({ type = 'success', text, title, mb, variant }: TCardState) => {

    let dynamicClass = ''
    // if (type === 'success') dynamicClass = '-bg--daisy-state-success -text--daisy-state-full-success'
    if (type === 'success') dynamicClass = 'p-2 bg-daisy-green-leaf-20 text-daisy-green-leaf-80'
    if (type === 'success' && variant == 'full') dynamicClass = '-bg--daisy-state-full-success text-white'

    if (type === 'error') dynamicClass = '-bg--daisy-state-error -text--daisy-state-full-error'
    if (type === 'error' && variant == 'full') dynamicClass = '-bg--daisy-state-full-error text-white'

    if (type === 'info') dynamicClass = '-bg--daisy-state-info -text--daisy-state-full-info'
    if (type === 'info' && variant == 'full') dynamicClass = '-bg--daisy-state-full-info text-white'

    if (type === 'gray') dynamicClass = '-bg--daisy-state-gray -text--daisy-state-full-gray'
    if (type === 'gray' && variant == 'full') dynamicClass = '-bg--daisy-state-full-gray'

    if (type === 'warning') dynamicClass = '-bg--daisy-state-warning -text--daisy-state-full-warning'
    if (type === 'warning' && variant == 'full') dynamicClass = '-bg--daisy-state-full-warning text-white'

    return (
        <Box
            className={`${title ? 'grid grid-cols-new-1-2' : ''} ${dynamicClass} m-0 w-full rounded-xl`}
            p={title ? 1 : 0}
            mb={mb}
        >

            {title ? <div className="font-bold">{title}</div> : ''}

            <div style={{padding:'2px'}} className={`${variant == 'full' && type !== 'gray' ? 'text-white' : 'text-daisy-space-40'} text-sm`}>{text}</div>

        </Box>
    )

}



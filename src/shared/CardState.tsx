import { useScreenSize } from "@/hooks"
import { breakPoints } from "@/utils"
import { Box } from "@mui/material"

type TCardState = {
    type: 'success' | 'info' | 'error' | 'gray' | 'warning'
    text: string,
    variant?: 'full'
}

export const CardState = ({ type = 'success', text }: TCardState) => {
    const { width } = useScreenSize()

    return (
        <Box sx={width >= breakPoints.lg ? { padding: '3px' } : {}} className={`${type === 'success' ? '-bg--daisy-state-success -text--daisy-state-full-success' : '-bg--daisy-state-error -text--daisy-state-full-error'} m-0 w-full rounded-xl`}>
            {text}
        </Box>
    )

}
    // <div className={`-bg--daisy-state${variant === 'full' ? '-full' : ''}-${type} ${variant === 'full' ? 'text-white' : `-text--daisy-state-full-${type}`} p-1 m-0 w-full rounded-xl`}>



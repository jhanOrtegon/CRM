import { useScreenSize } from "@/hooks"
import { breakPoints } from "@/utils"
import { TextField, TextFieldProps } from "@mui/material"
import { nanoid } from "nanoid"

export const NewInput = (props: TextFieldProps) => {

    const { width } = useScreenSize()

    return (
        <TextField
            {...props}
            fullWidth
            id={nanoid()}  
            size={width >= breakPoints.lg ? 'medium' : 'small'}
        />
    )
}
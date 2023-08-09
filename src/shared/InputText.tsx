import { useScreenSize } from "@/hooks"
import { breakPoints } from "@/utils"
import { TextField, TextFieldProps } from "@mui/material"
import { nanoid } from "nanoid"

export const InputText = (props: TextFieldProps) => {

    const { width } = useScreenSize()

    return (
        <TextField
            fullWidth
            sx={{ mb: 4 }}
            id={nanoid()}
            size={width >= breakPoints.lg ? 'medium' : 'small'}
            {...props}
        />
    )
}
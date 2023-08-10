import { Box } from "@mui/material"
import { Button } from '@/shared';

interface TFooterButton {
    onClickCancel?: () => void,
    onClickSave?: () => void,
}

export const FooterButton = ({onClickSave, onClickCancel}:TFooterButton) => {
    return (
        <Box className="grid grid-cols-new-1x2 gap-4 items-center justify-end mt-9 2xl:mt-20 w-1/4 ml-auto">
            <Button className='btn' onClick={onClickCancel} variant='transparent'>Cancelar</Button>
            <Button onClick={onClickSave} >Guardar</Button>
        </Box>
    )
}
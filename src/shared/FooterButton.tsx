import { Box } from "@mui/material"
import { Button } from '@/shared';

interface TFooterButton {
    onClickCancel?: () => void,
    onClickSave?: () => void,
    nameSave?: 'Guardar' | 'Siguiente' | 'Continuar' | string,
    nameCancel?: 'Cancelar' | 'Regresar' | string,
    btnColor?: 'Primary' | 'Secondary'
}

export const FooterButton = ({
    onClickSave,
    onClickCancel,
    nameSave = 'Guardar',
    nameCancel = 'Cancelar',
    btnColor = 'Secondary',
}: TFooterButton) => {
    return (
        <Box className="grid grid-cols-new-1x2 gap-4 items-center justify-end mt-9 2xl:mt-20 w-1/4 ml-auto">
            <Button className='btn' type='submit' onClick={onClickCancel} variant={btnColor === 'Primary' ? 'transparent-primary' : 'transparent'}>{nameCancel}</Button>
            <Button onClick={onClickSave} variant={btnColor === 'Primary' ? 'primary' : 'accent'}>{nameSave}</Button>
        </Box>
    )
}
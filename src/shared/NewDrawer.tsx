import { Box, Drawer, DrawerProps } from "@mui/material"
import { Button, NewDiv } from "."
import { IconX } from '@tabler/icons-react';

interface TNewDrawer extends DrawerProps {
    anchorDrawer?: 'medium' | 'small' | 'large',
    onClickCancel?: () => void,
    onClickSave?: () => void,
    isAction?: boolean,
    nameAction?: string,
    title?: string,
    footerHide?: boolean,
    btnColor?: 'Primary' | 'Secondary',
    nameSave?: 'Guardar' | 'Siguiente' | 'Continuar' | string,
    nameCancel?: 'Cancelar' | 'Regresar' | string,
}

export const NewDrawer = ({
    anchorDrawer = 'medium',
    anchor = 'right',
    open,
    onClose,
    children,
    onClickCancel,
    onClickSave,
    isAction = false,
    nameAction = 'Crear',
    footerHide = false,
    title,
    btnColor = 'Secondary',
    nameSave = 'Guardar',
    nameCancel = 'Cancelar',
}: TNewDrawer) => {
    return (
        <Drawer
            anchor={anchor}
            open={open}
            onClose={onClose}
        >
            <NewDiv
                anchor={anchorDrawer}
                style={{
                    height: '100%',
                    padding: '70px 50px 50px 50px',
                    display: 'flex',
                    flexDirection: 'column',
                    width: anchorDrawer === 'medium' ? '400px' : anchorDrawer === 'large' ? '600px' : '300px'
                }}
            >
                <Box sx={{ position: 'absolute', top: 15, left: 30 }}>
                    <IconX className="text-gray-400 hover:text-daisy-space-80 cursor-pointer" onClick={onClickCancel} />
                </Box>

                {isAction ? (
                    <div className="mb-8">
                        <div className="font-bold text-daisy-space-100 text-3xl">{nameAction}</div>
                        <div className="font-bold text-daisy-space-100 text-base">{title}</div>
                    </div>
                ) : ''}

                <div>
                    {children}
                </div>

                {
                    !footerHide ? (
                        <Box className="grid grid-cols-new-1x2 gap-4 items-center justify-center mt-auto">
                            <Button className='btn' type='submit' onClick={onClickCancel} variant={btnColor === 'Primary' ? 'transparent-primary' : 'transparent'}>{nameCancel}</Button>
                            <Button onClick={onClickSave} variant={btnColor === 'Primary' ? 'primary' : 'accent'}>{nameSave}</Button>
                        </Box>
                    ) : ''
                }
            </NewDiv>
        </Drawer>
    )
}
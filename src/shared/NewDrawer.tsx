import { Box, Drawer, DrawerProps } from "@mui/material"
import { Button, NewDiv } from "."
import { IconX } from '@tabler/icons-react';

interface TNewDrawer extends DrawerProps {
    anchorDrawer?: 'medium' | 'small' | 'large',
    onClickCancel?: () => void,
    onClickSave?: () => void,
    isAction?: boolean,
    nameAction?: 'Crear',
    title?:string
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
    title
}: TNewDrawer) => {
    return (
        <Drawer
            anchor={anchor}
            open={open}
            onClose={onClose}
        >
            <NewDiv
                anchor={anchorDrawer}
                style={{ height: '100vh', padding: '100px 50px 50px 50px', display: 'flex', flexDirection: 'column' }}
            >
                <Box sx={{ position: 'absolute', top: 15, left: 30 }}>
                    <IconX className="text-gray-400 hover:text-daisy-space-80 cursor-pointer" onClick={onClickCancel} />
                </Box>

                {isAction ? (
                    <div className="mb-10">
                        <div className="font-bold text-daisy-space-100 text-3xl">{nameAction}</div>
                        <div className="font-bold text-daisy-space-100 text-base">{title}</div>
                    </div>
                ) : ''}

                {children}

                <Box className="grid grid-cols-new-1x2 gap-4 items-center justify-center mt-auto">
                    <Button className='btn' onClick={onClickCancel} variant='transparent'>Cancelar</Button>
                    <Button onClick={onClickSave} >Guardar</Button>
                </Box>
            </NewDiv>
        </Drawer>
    )
}
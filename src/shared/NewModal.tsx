import { ReactNode } from 'react';
import { Button } from './Button';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

type TModal = {
    open: boolean,
    title?: 'Crear' | string,
    titleOutMargin?: boolean
    titlePosition?: 'Center'
    titleBorder?: boolean
    size?: 'small' | 'medium' | 'large',
    titleSize?: 'small' | 'medium' | 'large',
    nameSave?: 'Guardar' | 'Siguiente' | 'Continuar' | string,
    nameCancel?: 'Cancelar' | 'Regresar' | string,
    btnColor?: 'Primary' | 'Secondary'
    children: ReactNode,
    onClickCancel?: () => void,
    onClickSave?: () => void,
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export const NewModal = ({
    onClickCancel,
    onClickSave,
    open,
    children,
    nameSave = 'Guardar',
    nameCancel = 'Cancelar',
    size = 'medium',
    title = 'Crear',
    titleSize = 'medium',
    btnColor = 'Secondary',
    titlePosition,
    titleBorder,
    titleOutMargin = false

}: TModal) => {

    return (
        <div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={onClickCancel}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 300,
                    },
                }}
            >
                <Fade in={open}>
                    <Box
                        sx={style}
                        className={`${size === 'large' ? 'w-10/12' : size === 'medium' ? 'w-6/12' : 'w-4/12'} max-w-5xl focus-visible:outline-none rounded-2xl text-daisy-space-100`}
                    >
                        {title && <div className={`font-bold ${titleSize === 'medium' ? 'text-2xl' : titleSize == 'small' ? 'text-xl' : ''} ${!titleOutMargin ? 'pb-4' : '' }  ${titlePosition ? 'text-center' : ''} ${titleBorder ? 'border-b border-gray-400' : ''}`}>{title}</div>}

                        <div>
                            {children}
                        </div>

                        <div className="flex gap-4 items-center justify-end mt-14">
                            <Button className='btn' type='submit' onClick={onClickCancel} variant={btnColor === 'Primary' ? 'transparent-primary' : 'transparent'}>{nameCancel}</Button>
                            <Button onClick={onClickSave} variant={btnColor === 'Primary' ? 'primary' : 'accent'}>{nameSave}</Button>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
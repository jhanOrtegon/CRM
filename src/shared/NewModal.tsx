import { ReactNode } from 'react';
import { Button } from './Button';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

type TModal = {
    onClickCancel?: () => void,
    onClickSave?: () => void,
    children: ReactNode,
    open: boolean,
    size?: 'small' | 'medium' | 'large'
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

export const NewModal = ({ onClickCancel, onClickSave, open, children, size = 'medium' }: TModal) => {

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
                        className={`${size === 'large' ? 'w-10/12' : size === 'medium' ? 'w-6/12' : 'w-4/12'} max-w-5xl focus-visible:outline-none rounded-2xl text-daisy-space-100`}>

                        <div>
                            {children}
                        </div>

                        <div className="flex gap-4 items-center justify-end mt-14">
                            <Button className='btn' type='submit' onClick={onClickCancel} variant='transparent'>Cancelar</Button>
                            <Button onClick={onClickSave} >Guardar</Button>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
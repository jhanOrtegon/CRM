//shared
import { NewInput, NewModal, SelectSingle, Textarea, NewCheckBox } from '@/shared';

//components
import { fireSuccessAlert } from '@/components';


type TCreateSalesProcessesPage = {
    showModal: boolean,
    onClosed: () => void
}

export const CreateTaskPage = ({ showModal, onClosed }: TCreateSalesProcessesPage) => {

    return (
        <NewModal
            btnColor="Primary"
            titleSize="small"
            title="Crear tarea"
            open={showModal}
            onClickCancel={onClosed}
            onClickSave={() => {
                onClosed()
                fireSuccessAlert({ message: '' })
            }}
        >
            <div className="grid gap-y-4 mb-4">
                <NewInput
                    required
                    label="Nombre la tarea"
                    color="secondary"
                />

                <SelectSingle inputLabel="Tipo" value={''} color="secondary" />
            </div>

            <div className="grid mb-4 gap-x-4 grid-cols-new-1x2">
                <SelectSingle inputLabel="Responsable" value={''} color="secondary" />
                <SelectSingle inputLabel="Tipo de plazo" value={''} color="secondary" />
            </div>

            <div className="grid mb-4 gap-x-4 grid-cols-new-1x2">
                <NewInput required label="Fecha de vencimiento" />
                <SelectSingle inputLabel="Contacto relacionado" value={''} color="secondary" />
            </div>

            <div className='mb-2'>
                <Textarea placeholder="Descripción"/>
            </div>

            <div className='flex gap-x-3 items-center ml-1'>
                <NewCheckBox defaultChecked/> 
                <div className='text-sm font-normal text-gray-900 '>
                    Esto es una tarea automática
                </div>
            </div>

        </NewModal>
    )
}
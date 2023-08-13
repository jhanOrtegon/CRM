import { useState } from 'react';

//layouts
import { GeneralLayout, HeaderLayout } from "@/components/layouts"

//shared
import { Button, NewInput, Search, SelectSingle, } from "@/shared"

//components
import { CreateOpportunitiesPage } from ".";
import {
    DetailCardOpportunities,
    ReadBoardOpportunitiesPage,
    ReadGrillaOpportunitiesPage
} from '../components';
import { fireSuccessAlert } from '@/components';



export const ReadOpportunitiesPage = () => {

    // state modal create opportunity
    const [showModalCreate, setShowModalCreate] = useState(false)
    const onOpenModalCreate = () => setShowModalCreate(true)
    const onCloseModalCreate = () => setShowModalCreate(false)

    // state modal card detail
    const [showBoard, setShowBoard] = useState(false)
    const [showModalDetail, setShowModalDetail] = useState(false)
    const onOpenModalDetail = () => setShowModalDetail(true)
    const onCloseModalDetail = () => setShowModalDetail(false)



    return (
        <GeneralLayout title="Oportunidades">

            <HeaderLayout>
                <div className="grid gap-5 grid-cols-new-1-1-1-2-1-1 items-center">
                    <SelectSingle inputLabel="Procesos" value={''} />
                    <SelectSingle inputLabel="Estados" value={''} />
                    <NewInput label="Fecha" />
                    <Search />
                    <div className="flex gap-2 items-center justify-center">
                        <input
                            type="checkbox"
                            className="toggle toggle-info"
                            onChange={(e) => setShowBoard(e.target.checked)}
                        />
                        <div className='text-daisy-space-60 text-sm font-semibold'>
                            Ver tablero
                        </div>
                    </div>
                    <Button color="primary" onClick={onOpenModalCreate}>
                        Crear oportunidad
                    </Button>
                </div>
            </HeaderLayout>

            {
                showBoard
                    ? <ReadBoardOpportunitiesPage onOpenModalDetail={onOpenModalDetail} />
                    : <ReadGrillaOpportunitiesPage />
            }

            <CreateOpportunitiesPage
                onClosed={() => onCloseModalCreate()}
                showModal={showModalCreate}
            />

            <DetailCardOpportunities
                onClosed={() => onCloseModalDetail()}
                showModal={showModalDetail}
                onSave={() => {
                    onCloseModalDetail()
                    fireSuccessAlert({ message: '' })
                }}
            />

        </GeneralLayout>
    )
}
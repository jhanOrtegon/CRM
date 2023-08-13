//shared
import { NewModal } from "@/shared"

//components
import { fireSuccessAlert } from '@/components';

//utils
import { useState } from 'react';
import { CreateOpportunityStageOne, CreateOpportunityStageThree, CreateOpportunityStageTwo } from "../components";

type TCreateSalesProcessesPage = {
    showModal: boolean,
    onClosed: () => void
}


type TStage = 'stageOne' | 'stageTwo' | 'stageThree'

export const CreateOpportunitiesPage = ({ showModal, onClosed }: TCreateSalesProcessesPage) => {

    const [currentStage, setCurrentStage] = useState<TStage>('stageOne')

    return (
        <NewModal
            titleOutMargin={currentStage !== 'stageOne'}
            btnColor='Primary'
            titleSize="small"
            nameSave={currentStage === 'stageThree' ? 'Crear oportunidad' : 'Siguiente'}
            nameCancel={currentStage === 'stageOne' ? 'Cancelar' : 'Regresar'}
            title={currentStage === 'stageOne' ? 'Paso 1: Creando oportunidad' : currentStage === 'stageTwo' ? 'Paso 2: Selección de servicios' : 'Paso 3: Ajuste de costos'}
            open={showModal}
            onClickCancel={() => {
                currentStage === 'stageOne' ? onClosed() : ''
                currentStage === 'stageThree' ? setCurrentStage('stageTwo') : setCurrentStage('stageOne')
            }}
            onClickSave={() => {
                if (currentStage === 'stageOne') {
                    setCurrentStage('stageTwo')
                }

                if (currentStage === 'stageTwo') {
                    setCurrentStage('stageThree')
                }

                if (currentStage === 'stageThree') {
                    fireSuccessAlert({ message: '' }).finally(() => setCurrentStage('stageOne'))
                    onClosed()
                }
            }}
        >
            {currentStage === 'stageOne' ? <CreateOpportunityStageOne /> : ''}
            {currentStage === 'stageTwo' ? <CreateOpportunityStageTwo /> : ''}
            {currentStage === 'stageThree' ? <CreateOpportunityStageThree /> : ''}

        </NewModal>

    )

}
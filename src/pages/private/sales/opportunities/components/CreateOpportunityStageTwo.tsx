import { IconSpeakerphone } from '@tabler/icons-react';

import { NewCheckBox, NewInput } from "@/shared"

export const CreateOpportunityStageTwo = () => {
    return (
        <>

            <div className="flex gap-x-3 items-center mb-4">
                <div>
                    <IconSpeakerphone height={20} width={20} className='text-gray-400' />
                </div>

                <div className="text-xs text-daisy-space-60 font-semibold">
                    Ofertas de descuento en exámenes visuales
                </div>
            </div>

            <NewInput
                label="Buscar..."
                color="secondary"
            />

            <div className='mt-4'>
                <div className="text-xs text-daisy-space-60 mb-2 font-medium">
                    MARKETING
                </div>

                <div className='flex gap-x-4 items-center mb-2'>
                    <NewCheckBox />
                    <div className='text-sm text-daisy-space-60 font-normal'>
                        Estrategias de marketing digital
                    </div>
                </div>

                <div className='flex gap-x-4 items-center mb-2'>
                    <NewCheckBox />
                    <div className='text-sm text-daisy-space-60 font-normal'>
                        Gestión de redes sociales
                    </div>
                </div>

                <div className='flex gap-x-4 items-center mb-2'>
                    <NewCheckBox />
                    <div className='text-sm text-daisy-space-60 font-normal'>
                        Diseño y desarrollo de sitios Web
                    </div>
                </div>

                <div className='flex gap-x-4 items-center mb-2'>
                    <NewCheckBox />
                    <div className='text-sm text-daisy-space-60 font-normal'>
                        Investigación de mercado
                    </div>
                </div>

                <div className='flex gap-x-4 items-center mb-2'>
                    <NewCheckBox />
                    <div className='text-sm text-daisy-space-60 font-normal'>
                        Campañas publicitarias
                    </div>
                </div>
            </div>


            <div className='mt-6'>
                <div className="text-xs text-daisy-space-60 mb-2 font-medium">
                    SALUD VISUAL
                </div>

                <div className='flex gap-x-4 items-center mb-2'>
                    <NewCheckBox />
                    <div className='text-sm text-daisy-space-60 font-normal'>
                        Exámenes de la vista y diagnostico
                    </div>
                </div>

                <div className='flex gap-x-4 items-center mb-2'>
                    <NewCheckBox />
                    <div className='text-sm text-daisy-space-60 font-normal'>
                        Prescripción y adaptación de lentes de contacto
                    </div>
                </div>

                <div className='flex gap-x-4 items-center mb-2'>
                    <NewCheckBox />
                    <div className='text-sm text-daisy-space-60 font-normal'>
                        Terapia visual y rehabilitación
                    </div>
                </div>

            </div>
        </>
    )
}
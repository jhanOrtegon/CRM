import { useState } from 'react';

//layouts
import { GeneralLayout, HeaderLayout } from "@/components/layouts"

//shared
import { Button, CardState, NewInput, Search, SelectSingle, SimpleTable } from "@/shared"

//components
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { CreateOpportunitiesPage } from ".";

//utils
import { nanoid } from "nanoid";

// icons
import { IconAlertCircle } from '@tabler/icons-react';

function createData(
    nameOpportunity: string,
    contact: string,
    valueProcess: string,
    responsible: string,
    probability: string,
    closed: string,
    stageClosed: boolean,
    state: boolean,
) {
    return { nameOpportunity, contact, valueProcess, responsible, probability, closed, stageClosed, state };
}

export const ReadOpportunitiesPage = () => {

    const [showModal, setShowModal] = useState(false)
    const onOpenModal = () => setShowModal(true)
    const onCloseModal = () => setShowModal(false)

    const rows = [
        createData(
            'Nuevo cliente potencial en la industria de la tecnologia',
            'Andrea Contreras Gaviria',
            '$41.000.005', 'Andrea Contreras Gaviria',
            '55%',
            '25-JUL-2023',
            false,
            true
        ),
        createData(
            'Nuevo cliente potencial en la industria de la tecnologia',
            'Andrea Contreras Gaviria',
            '$41.000.005', 'Andrea Contreras Gaviria',
            '55%',
            '25-JUL-2023',
            false,
            false
        ),
        createData(
            'Nuevo cliente potencial en la industria de la tecnologia',
            'Andrea Contreras Gaviria',
            '$41.000.005', 'Andrea Contreras Gaviria',
            '55%',
            '25-JUL-2023',
            false,
            false
        ),
        createData(
            'Nuevo cliente potencial en la industria de la tecnologia',
            'Andrea Contreras Gaviria',
            '$41.000.005', 'Andrea Contreras Gaviria',
            '55%',
            '25-JUL-2023',
            false,
            true
        ),
        createData(
            'Nuevo cliente potencial en la industria de la tecnologia',
            'Andrea Contreras Gaviria',
            '$41.000.005', 'Andrea Contreras Gaviria',
            '55%',
            '25-JUL-2023',
            false,
            true
        ),

    ];

    return (
        <GeneralLayout title="Oportunidades">

            <HeaderLayout>
                <div className="grid gap-5 grid-cols-new-1-1-1-2-1-1 items-center">
                    <SelectSingle inputLabel="Estado" value={''} />
                    <SelectSingle inputLabel="Estado" value={''} />
                    <NewInput label="Fecha" />
                    <Search />
                    <div className="flex gap-2 items-center justify-center">
                        <input type="checkbox" className="toggle toggle-info" />
                        <div className='text-daisy-space-60 text-sm font-semibold'>
                            Ver tablero
                        </div>
                    </div>
                    <Button color="primary" onClick={onOpenModal}>
                        Crear oportunidad
                    </Button>
                </div>
            </HeaderLayout>

            <SimpleTable
                TableHeadRow={(
                    <TableRow className="bg-daisy-space-100 text-white">
                        <TableCell className="text-white" align="left">Nombre de la oportunidad</TableCell>
                        <TableCell className="text-white" align="right">Valor</TableCell>
                        <TableCell className="text-white" align="center">Responsable</TableCell>
                        <TableCell className="text-white" align="center">Probabilidad</TableCell>
                        <TableCell className="text-white" align="center">Cierre</TableCell>
                        <TableCell className="text-white" align="center">Estado</TableCell>
                    </TableRow>
                )}

                TableBodyRow={(
                    rows.map((row) => (
                        <TableRow
                            key={nanoid()}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            className="hover:bg-daisy-space-10"
                        >
                            <TableCell className="text-daisy-space-40" align="left">
                                <div className="text-daisy-space-80 font-semibold">{row.nameOpportunity}</div>
                                <div className="font-medium text-sm text-daisy-space-60">contacto: {row.contact}</div>
                            </TableCell>

                            <TableCell className="text-daisy-space-80" align="right">{row.valueProcess}</TableCell>

                            <TableCell className="text-daisy-space-80" align="center">{row.probability}</TableCell>

                            <TableCell className="text-daisy-space-80" align="center">{row.responsible}</TableCell>

                            <TableCell className="text-daisy-space-80" align="center">
                                <div className='flex gap-x-3 items-center justify-center'>
                                    <div>{row.closed}</div>
                                    <div className="tooltip" data-tip="Proximo a vencer">
                                        <IconAlertCircle width={20} height={20} className='-text--daisy-red-100' />
                                    </div>
                                </div>
                            </TableCell>

                            <TableCell className="text-daisy-space-40" align="center" width={130}>
                                <CardState text={row.state ? 'Ganada' : 'Perdida'} type={row.state ? 'success' : 'error'} />
                            </TableCell>

                        </TableRow>
                    ))
                )}
            />

            <CreateOpportunitiesPage
                onClosed={() => onCloseModal()}
                showModal={showModal}
            />

        </GeneralLayout>
    )
}
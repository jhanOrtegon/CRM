import { useState } from 'react';

//layouts
import { GeneralLayout, HeaderLayout } from "@/components/layouts"

//shared
import { Button, CardState, Search, SelectSingle, SimpleTable } from "@/shared"

//components
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { CreateSalesProcessesPage } from ".";

//utils
import { nanoid } from "nanoid";

// icons
import { IconEditCircle, IconEye } from '@tabler/icons-react';

function createData(
    nameProcess: string,
    stages: number,
    contact: string,
    state: boolean,
) {
    return { nameProcess, stages, contact, state };
}

export const ReadSalesProcessesPage = () => {

    const [showModal, setShowModal] = useState(false)
    const onOpenModal = () => setShowModal(true)
    const onCloseModal = () => setShowModal(false)

    const rows = [
        createData('Promoción dia de las madres', 10, 'Andrea Contreras Gaviria', true),
        createData('Promoción dia de las madres', 10, 'Andrea Contreras Gaviria', true),
        createData('Promoción dia de las madres', 10, 'Andrea Contreras Gaviria', true),

        createData('Promoción dia de las madres', 4, 'Andrea Contreras Gaviria', false),
        createData('Promoción dia de las madres', 4, 'Andrea Contreras Gaviria', false),
        createData('Promoción dia de las madres', 4, 'Andrea Contreras Gaviria', false),
    ];

    return (
        <GeneralLayout title="Procesos de ventas">

            <HeaderLayout>
                <div className="grid gap-5 grid-cols-new-1-3-1-1 items-center">
                    <SelectSingle inputLabel="Estado" value={''} />
                    <Search />
                    <div className="flex gap-2 items-center justify-center">
                        <input type="checkbox" className="toggle toggle-info" />
                        <div className='text-daisy-space-60 text-sm font-semibold'>
                            Ver tablero
                        </div>
                    </div>
                    <Button variant='accent' onClick={onOpenModal}>
                        Crear proceso
                    </Button>
                </div>
            </HeaderLayout>

            <SimpleTable
                TableHeadRow={(
                    <TableRow className="bg-daisy-space-100 text-white">
                        <TableCell className="text-white" align="left">Nombre del proceso</TableCell>
                        <TableCell className="text-white" align="center">Etapas</TableCell>
                        <TableCell className="text-white" align="center">Estado</TableCell>
                        <TableCell className="text-white" align="center"></TableCell>
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
                                <div className="text-daisy-space-80 font-semibold">{row.nameProcess}</div>
                                <div className="font-medium text-sm text-daisy-space-60">contacto: {row.contact}</div>
                            </TableCell>
                            <TableCell className="text-daisy-space-40" align="center">{row.stages}</TableCell>
                            <TableCell className="text-daisy-space-40" align="center" width={130}>
                                <CardState text={row.state ? 'Habilitado' : 'Inhabilitado'} type={row.state ? 'success' : 'error'} />
                            </TableCell>
                            <TableCell className="text-daisy-space-40" align="center" width={120}>
                                <div className="flex gap-x-2 justify-center items-center">
                                    <IconEditCircle className="-text--daisy-blue-jeans-100 cursor-pointer" width={20} />
                                    <IconEye className="-text--daisy-blue-jeans-100 cursor-pointer" width={22} height={22} />
                                </div>
                            </TableCell>

                        </TableRow>
                    ))
                )}
            />

            <CreateSalesProcessesPage
                onClosed={() => onCloseModal()}
                showModal={showModal}
            />

        </GeneralLayout>
    )
}
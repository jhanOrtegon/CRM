//utils
import { nanoid } from "nanoid";

// icons
import { IconAlertCircle } from '@tabler/icons-react';

//components
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

//shared
import { CardState, SimpleTable } from "@/shared";


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

export const ReadGrillaOpportunitiesPage = () => {
    return (
        <div className="animate__animated animate__fadeIn">
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
                                    <div className="tooltip" data-tip="Próximo a vencer">
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
        </div>
    )
}
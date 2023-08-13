//shared
import { NewCheckBox, SimpleTable } from "@/shared"

//components
import { TableCell, TableRow } from "@mui/material"

//icons
import { IconSpeakerphone, IconSquareRoundedPlusFilled, IconTrash } from "@tabler/icons-react"

//utils
import { nanoid } from "nanoid";


function createData(
    service: string,
    newCost: string,
) {
    return { service, newCost };
}

const rows = [
    createData('Estrategias de Marketing Digital', 'Default'),
    createData('Gestión de redes sociales', '$851.000'),
    createData('Diseño y Desarrollo de Sitios Web', '$851.000')
];


export const CreateOpportunityStageThree = () => {
    return (
        <>
            <div className="flex gap-x-3 items-center mb-7">
                <div>
                    <IconSpeakerphone height={20} width={20} className='text-gray-400' />
                </div>

                <div className="text-xs text-daisy-space-60 font-semibold">
                    Ofertas de descuento en exámenes visuales
                </div>
            </div>

            <div className="text-xs text-daisy-space-60 font-medium">
                SERVICIOS SELECCIONADOS
            </div>

            <div className="mt-2">
                <SimpleTable
                    TableHeadRow={(
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold' }} className="text-daisy-space-100" align="left">Servicio</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }} className="text-daisy-space-100" align="center">Nuevo costo</TableCell>
                            <TableCell align="center"></TableCell>

                        </TableRow>
                    )}

                    TableBodyRow={(
                        rows.map((row) => (
                            <TableRow
                                key={nanoid()}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                className="hover:bg-daisy-space-10"
                            >
                                <TableCell style={{ fontWeight: 600 }} className="text-daisy-space-60" align="left">{row.service}</TableCell>
                                <TableCell className="text-daisy-space-100" align="center">{row.newCost}</TableCell>
                                <TableCell className="text-daisy-space-40" align="center" width={50}>
                                    <IconTrash height={18} width={18} className="cursor-pointer" />
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                />



                <div className="flex gap-3 items-center justify-between text-sm mt-3 text-daisy-space-80 ">

                    <div className="cursor-pointer flex gap-x-3 items-center ml-1 text-xs">
                        <NewCheckBox defaultChecked/>
                        <div>Ajustar costo según valor asignado de la oportunidad(actualizar)</div>
                    </div>

                    <div className="flex gap-x-3 cursor-pointer items-center">
                        <div>Agregar fila</div>
                        <IconSquareRoundedPlusFilled height={18} width={18} />
                    </div>
                </div>
            </div>

        </>
    )
}
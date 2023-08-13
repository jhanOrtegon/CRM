//shared
import { NewCheckBox, NewInput, NewModal, SelectSingle, SimpleTable } from "@/shared"

//components
import { TableCell, TableRow } from "@mui/material"

//icons
import { IconSquareRoundedPlusFilled, IconTrash } from "@tabler/icons-react"

//utils
import { nanoid } from "nanoid";
import { NewBadge } from '../../../../../shared/NewBadge';


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


export const DetailCardOpportunities = ({onClosed,onSave,showModal }) => {
    return (
        <NewModal
            btnColor="Primary"
            open={showModal}
            size="large"
            subTitleTop='Nombre de la oportunidad'
            title="Nuevo Cliente Potencial en la industria de la tecnología"
            titleOutMargin
            onClickCancel={onClosed}
            onClickSave={onSave}

        >

            <div className="flex gap-10 items-center text-xs mb-4 mt-1">

                <div className="flex gap-2 items-center">
                    <div className="font-medium">Posibilidad:</div>
                    <div>100%</div>
                </div>

                <div className="flex gap-2 items-center">
                    <div className="font-medium">Contacto:</div>
                    <div>Andrea Contreras</div>
                </div>

            </div>

            <div className="grid gap-3 grid-cols-new-1x4 mb-3">
                <NewInput label="Fecha de cierre" color="secondary" />
                <SelectSingle inputLabel="Valor oportunidad" value={''} color="secondary" />
                <SelectSingle inputLabel="Responsable" value={''} color="secondary" />
                <SelectSingle inputLabel="Proceso de ventas" value={''} color="secondary" />
            </div>

            <div className="grid gap-3 grid-cols-new-1x4">
                <SelectSingle inputLabel="Seleccionar etapa" value={''} color="secondary" />
            </div>

            <div className="mt-4">
                <SimpleTable
                    TableHeadRow={(
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold' }} className="text-daisy-space-100" align="left">Servicio</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }} className="text-daisy-space-100" align="right">Nuevo costo</TableCell>
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
                                <TableCell className="text-daisy-space-80" align="left">{row.service}</TableCell>
                                <TableCell className="text-daisy-space-80" align="right">{row.newCost}</TableCell>
                                <TableCell className="text-daisy-space-40" align="center" width={50}>
                                    <IconTrash height={18} width={18} className="cursor-pointer" />
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                />

                <div className="flex gap-3 items-center justify-between text-sm mt-3 text-daisy-space-40 ">

                    <div className="cursor-pointer flex gap-x-3 items-center ml-1 text-xs">
                        <NewCheckBox defaultChecked />
                        <div>Ajustar costo según valor asignado de la oportunidad(actualizar)</div>
                    </div>

                    <div className="flex gap-x-3 cursor-pointer items-center">
                        <div>Agregar fila</div>
                        <IconSquareRoundedPlusFilled height={18} width={18} />
                    </div>
                </div>
            </div>

            <div className="flex gap-x-3 items-center mt-6">
                <NewBadge value="Crear tarea" size="md" className="text-daisy-space-100 bg-daisy-space-20 hover cursor-pointer transition-all hover:scale-105" />
                <NewBadge value="Finalizar oportunidad" size="md" className='text-white -bg--daisy-red-100 cursor-pointer transition-all hover:scale-105' />
            </div>

        </NewModal>
    )
}


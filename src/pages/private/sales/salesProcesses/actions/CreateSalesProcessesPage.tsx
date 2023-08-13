//shared
import { NewInput, NewModal, SimpleTable, } from "@/shared"

//components
import { fireSuccessAlert } from '@/components';
import { TableCell, TableRow } from "@mui/material";

//icons
import { IconSquareRoundedPlusFilled, IconTrash } from '@tabler/icons-react';

//utils
import { nanoid } from "nanoid";

type TCreateSalesProcessesPage = {
    showModal: boolean,
    onClosed: () => void
}

function createData(
    nameStage: string,
    probability: number,
) {
    return { nameStage, probability };
}

const rows = [
    createData('Etapa 3', 10),
];

export const CreateSalesProcessesPage = ({ showModal, onClosed }: TCreateSalesProcessesPage) => {

    return (
        <NewModal
            title="Crear proceso"
            open={showModal}
            onClickCancel={onClosed}
            onClickSave={() => {
                onClosed()
                fireSuccessAlert({ message: '' })
            }}
        >
            <NewInput
                required
                label="Nombre del proceso de ventas"
                color="secondary"
            />

            <div className="mt-5">
                <SimpleTable
                    TableHeadRow={(
                        <TableRow>
                            <TableCell style={{fontWeight:'bold'}} className="text-daisy-space-100" align="left">Nombre etapa</TableCell>
                            <TableCell style={{fontWeight:'bold'}} className="text-daisy-space-100" align="center">Probabilidad</TableCell>
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
                                <TableCell className="text-daisy-space-40" align="left">{row.nameStage}</TableCell>
                                <TableCell className="text-daisy-space-40" align="center">{row.probability}%</TableCell>
                                <TableCell className="text-daisy-space-40" align="center" width={50}>
                                    <IconTrash height={18} width={18} className="cursor-pointer"/>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                />

                <div className="flex gap-3 items-center justify-end text-sm mt-3 text-gray-400 cursor-pointer">
                    <div>Agregar fila</div>
                    <IconSquareRoundedPlusFilled height={18} width={18}/>
                </div>
            </div>


        </NewModal>
    )
}
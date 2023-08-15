//shared
import { CardState, NewBadge, NewDropdown, SimpleTable, Text } from "@/shared/";

//components
import { Box, TableCell, TableRow } from "@mui/material";

//hooks
import { useScreenSize } from "@/hooks";

//icons
import { IconCalendarEvent } from "@tabler/icons-react";

//utils
import { nanoid } from "nanoid";

function createData(
    contacts: string,
    type: string,
    state: boolean
) {
    return { contacts, type, state };
}

const rows = [
    createData('Alejandro Gómez', 'Llamar', true),
    createData('Alejandro Gómez', 'whatsApp', true),
    createData('Alejandro Gómez', 'Llamar', true),

    createData('Sebastian Torres Gómez', 'whatsApp', false),
    createData('Sebastian Torres Gómez', 'Llamar', false),
    createData('Sebastian Torres Gómez', 'whatsApp', false),

];

type TCardInfoTab = {
    title: string
}

export const CardInfoTab = ({ title }: TCardInfoTab) => {

    const { height } = useScreenSize()

    return (
        <Box
            className="border-x border-t rounded-t-lg border-gray-300 py-3 px-5"
            style={{ minHeight: `calc(${height}px - ${height > 900 ? '285px' : '258px'})` }}
            sx={{ marginTop: '60px' }}
        >
            <div className="flex justify-between mb-3">
                <Text value={title} className="text-xl font-extrabold" mb="mb-0" />
                <NewBadge value="En curso" />
            </div>

            <div className="flex gap-x-4 text-daisy-space-100 text-xs items-center mb-4">
                <div className="font-medium">Vencimiento</div>

                <div className="flex gap-x-1 items-center text-gray-500">
                    <IconCalendarEvent height={18} width={18} className="cursor-pointer hover:scale-105" />
                    <div>10/05/2023</div>
                </div>

                <NewBadge value="Asociar contacto" color="gray" />

                <NewDropdown
                    tabIndex={1}
                    listItems={[
                        { text: 'Editar correo' },
                        { text: 'Duplicar correo' },
                        { text: 'Eliminar correo' },
                    ]}
                />
            </div>


            <div className="mt-5">
                <SimpleTable
                    TableHeadRow={(
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold' }} className="text-daisy-space-100" align="left">Contactos</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }} className="text-daisy-space-100" align="left">Tipo</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }} className="text-daisy-space-100" align="center">Estado</TableCell>
                        </TableRow>
                    )}

                    TableBodyRow={(
                        rows.map((row) => (
                            <TableRow
                                key={nanoid()}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                className="hover:bg-daisy-space-10"
                            >
                                <TableCell className="text-daisy-space-80" align="left">{row.contacts}</TableCell>
                                <TableCell className="text-daisy-space-80" align="left">{row.type}</TableCell>
                                <TableCell className="text-daisy-space-80" align="center" width={130}>
                                    <CardState text={row.state ? 'Pendiente' : 'Finalizada'} type={row.state ? 'warning' : 'info'} />
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                />
            </div>

        </Box>
    )
}
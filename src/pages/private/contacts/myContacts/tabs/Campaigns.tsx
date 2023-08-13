//layouts
import { HeaderLayout } from "@/components/layouts"

//shared
import { CardState, NewInput, Search, SelectSingle, SimpleTable } from "@/shared"

//components
import { TableCell, TableRow } from "@mui/material"

//utils
import { nanoid } from "nanoid"

function createData(
  hour: string,
  date: string,
  nameCampaign: string,
  createdBy: string,
  state: boolean,
) {
  return { hour, date, nameCampaign, createdBy, state };
}

const rows = [
  createData('08:30 am', '08/10/2023', 'Promoción referidos', 'Andrea Contreras Gaviria', true),
  createData('08:30 am', '08/10/2023', 'Promoción referidos', 'Andrea Contreras Gaviria', true),
  createData('08:30 am', '08/10/2023', 'Promoción referidos', 'Andrea Contreras Gaviria', true),
  createData('08:30 am', '08/10/2023', 'Promoción referidos', 'Andrea Contreras Gaviria', true),
  createData('08:30 am', '08/10/2023', 'Promoción referidos', 'Andrea Contreras Gaviria', true),

  createData('11:45 am', '08/10/2023', 'Descuento cumpleaños', 'Andrea Contreras Gaviria', false),
  createData('11:45 am', '08/10/2023', 'Descuento cumpleaños', 'Andrea Contreras Gaviria', false),
  createData('11:45 am', '08/10/2023', 'Descuento cumpleaños', 'Andrea Contreras Gaviria', false),
];

export const Campaigns = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <HeaderLayout>
        <div className="grid gap-5 grid-cols-new-1-1-2 items-center">
          <NewInput label="Fecha" />
          <SelectSingle inputLabel="Estado" value={''} />
          <Search />
        </div>
      </HeaderLayout>

      <SimpleTable
        TableHeadRow={(
          <TableRow className="bg-daisy-space-100 text-white">
            <TableCell className="text-white" align="center">Hora</TableCell>
            <TableCell className="text-white" align="center">Fecha</TableCell>
            <TableCell className="text-white" align="left">Nombre campaña</TableCell>
            <TableCell className="text-white" align="left">Creador</TableCell>
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
              <TableCell className="text-daisy-space-40" align="center">{row.hour}</TableCell>
              <TableCell className="text-daisy-space-40" align="center">{row.date}</TableCell>
              <TableCell className="text-daisy-space-40" align="left">{row.nameCampaign}</TableCell>
              <TableCell className="text-daisy-space-40" align="left">{row.createdBy}</TableCell>
              <TableCell className="text-daisy-space-40" align="center" width={130}>
                <CardState text={row.state ? 'Abierto' : 'Rebotado'} type={row.state ? 'success' : 'error'} />
              </TableCell>
            </TableRow>
          ))
        )}
      />
    </div>
  )
}
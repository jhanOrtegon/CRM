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
  nameProfesional: string,
  service: string,
  state: boolean,
) {
  return { hour, date, nameProfesional, service, state };
}

const rows = [
  createData('08:30 am', '08/10/2023', 'Andrea Contreras Gaviria', 'Calza y limpias', true),
  createData('08:30 am', '08/10/2023', 'Andrea Contreras Gaviria', 'Calza y limpias', true),
  createData('08:30 am', '08/10/2023', 'Andrea Contreras Gaviria', 'Calza y limpias', true),
  createData('08:30 am', '08/10/2023', 'Andrea Contreras Gaviria', 'Calza y limpias', true),
  createData('08:30 am', '08/10/2023', 'Andrea Contreras Gaviria', 'Calza y limpias', true),

  createData('11:30 am', '08/10/2023', 'Juan Camilo Mercado Rojas', 'Consulta prequirúrgica', false),
  createData('11:30 am', '08/10/2023', 'Juan Camilo Mercado Rojas', 'Consulta prequirúrgica', false),
  createData('11:30 am', '08/10/2023', 'Juan Camilo Mercado Rojas', 'Consulta prequirúrgica', false),
];

export const Appointments = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <HeaderLayout>
        <div className="grid gap-5 grid-cols-new-1-1-1-2 items-center">
          <NewInput label="Fecha" />
          <SelectSingle inputLabel="Estado" value={''} />
          <SelectSingle inputLabel="Servicios" value={''} />
          <Search />
        </div>
      </HeaderLayout>

      <SimpleTable
        TableHeadRow={(
          <TableRow className="bg-daisy-space-100 text-white">
            <TableCell className="text-white" align="center">Hora</TableCell>
            <TableCell className="text-white" align="center">Fecha</TableCell>
            <TableCell className="text-white" align="left">Nombre professional</TableCell>
            <TableCell className="text-white" align="left">Service</TableCell>
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
              <TableCell className="text-daisy-space-40" align="left">{row.nameProfesional}</TableCell>
              <TableCell className="text-daisy-space-40" align="left">{row.service}</TableCell>
              <TableCell className="text-daisy-space-40" align="center" width={130}>
                <CardState text={row.state ? 'Atendido' : 'Cancelada'} type={row.state ? 'success' : 'error'} />
              </TableCell>
            </TableRow>
          ))
        )}
      />
    </div>
  )
}
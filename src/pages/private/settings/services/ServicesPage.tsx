import { fireSuccessAlert } from "@/components";
import { GeneralLayout, HeaderLayout } from "@/components/layouts"
import { Button, CardState, NewDrawer, Search, SelectSingle, SimpleTable, Textarea } from "@/shared"
import { TextField } from "@mui/material";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { nanoid } from "nanoid";
import { useState } from "react";

function createData(
  code: number,
  service: string,
  type: string,
  description: string,
  price: string,
  state: boolean,
) {
  return { code, service, type, description, price, state };
}

export const ServicesPage = () => {

  const [showDrawer, setShowDrawer] = useState(false)
  const onOpenDrawer = () => setShowDrawer(true)
  const onCloseDrawer = () => setShowDrawer(false)

  const rows = [
    createData(123456, 'Ortodoncia', 'Procedimiento', 'Corrección las posiciones y defectos de los dientes', '$0.000.000', true),
    createData(123456, 'Ortodoncia', 'Procedimiento', 'Corrección las posiciones y defectos de los dientes', '$0.000.000', true),
    createData(123456, 'Ortodoncia', 'Procedimiento', 'Corrección las posiciones y defectos de los dientes', '$0.000.000', true),
    createData(123456, 'Ortodoncia', 'Procedimiento', 'Corrección las posiciones y defectos de los dientes', '$0.000.000', true),
    createData(123456, 'Ortodoncia', 'Procedimiento', 'Corrección las posiciones y defectos de los dientes', '$0.000.000', true),

    createData(6789, 'Odontopedriata', 'Tratamiento', 'Servicio odontología para niños', '$0.000.000', false),
    createData(6789, 'Odontopedriata', 'Tratamiento', 'Servicio odontología para niños', '$0.000.000', false),
    createData(6789, 'Odontopedriata', 'Tratamiento', 'Servicio odontología para niños', '$0.000.000', false),
    createData(6789, 'Odontopedriata', 'Tratamiento', 'Servicio odontología para niños', '$0.000.000', false),
    createData(6789, 'Odontopedriata', 'Tratamiento', 'Servicio odontología para niños', '$0.000.000', false),
  ];

  return (
    <GeneralLayout title="Servicios">

      <HeaderLayout>
        <div className="grid gap-5 grid-cols-new-3 items-center">
          <SelectSingle inputLabel="Estado" value={''} />
          <Search />
          <Button
            color="primary"
            onClick={onOpenDrawer}
          >
            Nuevo servicio
          </Button>
        </div>
      </HeaderLayout>

      <SimpleTable
        TableHeadRow={(
          <TableRow className="bg-daisy-space-100 text-white">
            <TableCell className="text-white" align="center">Código</TableCell>
            <TableCell className="text-white" align="left">Servicio</TableCell>
            <TableCell className="text-white" align="center">Tipo</TableCell>
            <TableCell className="text-white" align="left">Descripción</TableCell>
            <TableCell className="text-white" align="right">Precio</TableCell>
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
              <TableCell className="text-daisy-space-40" align="center">{row.code}</TableCell>
              <TableCell className="text-daisy-space-40" align="left">{row.service}</TableCell>
              <TableCell className="text-daisy-space-40" align="center">{row.type}</TableCell>
              <TableCell className="text-daisy-space-40" align="left">{row.description}</TableCell>
              <TableCell className="text-daisy-space-40" align="right">{row.price}</TableCell>
              <TableCell className="text-daisy-space-40" align="center">
                <CardState text={row.state ? 'Habilitado' : 'Inhabilitado'} type={row.state ? 'success' : 'error'} />
              </TableCell>
            </TableRow>
          ))
        )}
      />

      <NewDrawer
        isAction
        nameAction="Crear"
        title="Servicio"
        anchor={'right'}
        open={showDrawer}
        onClose={onCloseDrawer}
        onClickCancel={onCloseDrawer}
        onClickSave={() => {
          onCloseDrawer()
          fireSuccessAlert({ message: 'Ortodoncia' })
        }}
      >

        <TextField
          required
          fullWidth
          size="small"
          id={nanoid()}
          label="Código"
          color="secondary"
          sx={{ mb: 2 }}
        />

        <TextField
          required
          fullWidth
          size="small"
          id={nanoid()}
          label="Nombre servicio"
          color="secondary"
          sx={{ mb: 2 }}
        />

        <TextField
          required
          fullWidth
          size="small"
          id={nanoid()}
          label="Tipo"
          color="secondary"
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          size="small"
          id={nanoid()}
          label="Subtipo"
          color="secondary"
          sx={{ mb: 2 }}
        />

        <TextField
          required
          fullWidth
          size="small"
          id={nanoid()}
          label="Precio"
          color="secondary"
          sx={{ mb: 2 }}
        />

        <Textarea placeholder="Descripción" />



      </NewDrawer>

    </GeneralLayout>
  )
}
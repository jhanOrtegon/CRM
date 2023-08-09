import { GeneralLayout, HeaderLayout } from "@/components/layouts"
import { Button, CardState, InputText, NewDrawer, Search, SimpleTable, Textarea } from "@/shared"
import { TableCell, TableRow } from "@mui/material"
import { nanoid } from "nanoid"
import { useState } from 'react';
import { fireSuccessAlert } from "@/components";

function createData(
  role: string,
  users: number,
  state: boolean,
) {
  return { role, users, state };
}


export const RolesPermissionsPage = () => {

  const [showDrawer, setShowDrawer] = useState(false)
  const onOpenDrawer = () => setShowDrawer(true)
  const onCloseDrawer = () => setShowDrawer(false)

  const rows = [
    createData('Coordinador', 8, true),
    createData('Coordinador', 8, true),
    createData('Coordinador', 8, true),
    createData('Coordinador', 8, true),
    createData('Coordinador', 8, true),

    createData('Auditor', 5, false),
    createData('Auditor', 5, false),
    createData('Auditor', 5, false),
    createData('Auditor', 5, false),
    createData('Auditor', 5, false),
  ];

  return (
    <GeneralLayout title="Roles y permisos" anchor="small">

      <HeaderLayout>
        <div className="grid gap-5 grid-cols-new-2 items-center">
          <Search />
          <Button color="primary" onClick={onOpenDrawer}>Nuevo rol y permiso</Button>
        </div>
      </HeaderLayout>

      <SimpleTable

        TableHeadRow={(
          <TableRow className="bg-daisy-space-100 text-white">
            <TableCell className="text-white" align="left">Rol</TableCell>
            <TableCell className="text-white" align="center">Usuarios</TableCell>
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
              <TableCell className="text-daisy-space-40" align="left">{row.role}</TableCell>
              <TableCell className="text-daisy-space-40" align="center">{row.users}</TableCell>
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
        title="Área"
        anchor={'right'}
        open={showDrawer}
        onClose={onCloseDrawer}
        onClickCancel={onCloseDrawer}
        onClickSave={() => {
          onCloseDrawer()
          fireSuccessAlert({ message: 'Donante' })
        }}
      >

        <InputText
          required
          label="Nombre área"
          color="secondary"
        />

        <Textarea placeholder="Descripción"/>

      </NewDrawer>

    </GeneralLayout>
  )
}
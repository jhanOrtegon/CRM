import { GeneralLayout, HeaderLayout } from "@/components/layouts"
import { Button, CardState, NewInput, NewDrawer, Search, SimpleTable } from "@/shared"
import { TableCell, TableRow } from "@mui/material"
import { nanoid } from "nanoid"
import { useState } from 'react';
import { fireSuccessAlert } from "@/components";

function createData(
  color: string,
  tags: string,
  contacts: number,
  state: boolean,
) {
  return { color, tags, contacts, state };
}


export const TagsPage = () => {

  const [showDrawer, setShowDrawer] = useState(false)
  const onOpenDrawer = () => setShowDrawer(true)
  const onCloseDrawer = () => setShowDrawer(false)

  const rows = [
    createData('blue', 'Donante', 8, true),
    createData('blue', 'Donante', 8, true),
    createData('blue', 'Donante', 8, true),
    createData('blue', 'Donante', 8, true),
    createData('blue', 'Donante', 8, true),
    createData('blue', 'Donante', 8, true),

    createData('Yellow', 'Mamá', 5, false),
    createData('Yellow', 'Mamá', 5, false),
    createData('Yellow', 'Mamá', 5, false),
    createData('Yellow', 'Mamá', 5, false),
  ];

  return (
    <GeneralLayout title="Etiquetas" anchor="small">

      <HeaderLayout>
        <div className="grid gap-5 grid-cols-new-2 items-center">
          <Search />
          <Button color="primary" onClick={onOpenDrawer}>Nueva etiqueta</Button>
        </div>
      </HeaderLayout>

      <SimpleTable

        TableHeadRow={(
          <TableRow className="bg-daisy-space-100 text-white">
            <TableCell className="text-white" align="center">Color</TableCell>
            <TableCell className="text-white" align="left">Etiqueta</TableCell>
            <TableCell className="text-white" align="center">Contactos</TableCell>
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
              <TableCell className="text-daisy-space-40" align="center">
                <div className={`${row.color === 'blue' ? '-bg--daisy-blue-jeans-100' : '-bg--daisy-yellow-100'} m-auto h-5 w-5 rounded-md flex justify-center`} />
              </TableCell>
              <TableCell className="text-daisy-space-40" align="left">{row.tags}</TableCell>
              <TableCell className="text-daisy-space-40" align="center">{row.contacts}</TableCell>
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
        title="Etiqueta"
        anchor={'right'}
        open={showDrawer}
        onClose={onCloseDrawer}
        onClickCancel={onCloseDrawer}
        onClickSave={() => {
          onCloseDrawer()
          fireSuccessAlert({ message: 'Donante' })
        }}
      >

        <NewInput
          required
          sx={{mb:3}}
          label="Nombre etiqueta"
          color="secondary"
        />
        
        <NewInput
          required
          type="color"
          label="Color etiqueta"
          color="secondary"
        />


      </NewDrawer>

    </GeneralLayout>
  )
}
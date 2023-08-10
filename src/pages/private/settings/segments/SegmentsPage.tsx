import { fireSuccessAlert } from "@/components";
import { GeneralLayout, HeaderLayout } from "@/components/layouts"
import { Button, CardState, Search, SelectSingle, SimpleTable, NewModal, NewInput } from "@/shared"
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { nanoid } from "nanoid";
import { useState } from 'react';

function createData(
  nameSegment: string,
  dateCreation: string,
  contacts: number,
  createBy: string,
  state: boolean,
) {
  return { nameSegment, dateCreation, contacts, createBy, state };
}

export const SegmentsPage = () => {

  const [showModal, setShowModal] = useState(false)
  const onOpenModal = () => setShowModal(true)
  const onCloseModal = () => setShowModal(false)

  const rows = [
    createData('Mujeres madres de familia', '02/08/2023', 12850, 'Andrea Paola Contreras Gaviria', true),
    createData('Mujeres madres de familia', '02/08/2023', 12850, 'Andrea Paola Contreras Gaviria', true),
    createData('Mujeres madres de familia', '02/08/2023', 12850, 'Andrea Paola Contreras Gaviria', true),
    createData('Mujeres madres de familia', '02/08/2023', 12850, 'Andrea Paola Contreras Gaviria', true),
    createData('Mujeres madres de familia', '02/08/2023', 12850, 'Andrea Paola Contreras Gaviria', true),
    createData('Mujeres madres de familia', '02/08/2023', 12850, 'Andrea Paola Contreras Gaviria', true),
    createData('Mujeres madres de familia', '02/08/2023', 12850, 'Andrea Paola Contreras Gaviria', true),
    createData('Hombres mayores de 60 años', '24/06/2023', 45987, 'Juan Camilo Mercado Rojas', false),
    createData('Hombres mayores de 60 años', '24/06/2023', 45987, 'Juan Camilo Mercado Rojas', false),
    createData('Hombres mayores de 60 años', '24/06/2023', 45987, 'Juan Camilo Mercado Rojas', false),
  ];

  return (
    <GeneralLayout title="Segmentos">

      <HeaderLayout>
        <div className="grid gap-5 grid-cols-new-3 items-center">
          <SelectSingle inputLabel="Estado" value={''} />
          <Search />
          <Button color="primary" onClick={onOpenModal}>Crear tarea</Button>
        </div>
      </HeaderLayout>

      <SimpleTable
        TableHeadRow={(
          <TableRow className="bg-daisy-space-100 text-white">
            <TableCell className="text-white" align="left">Nombre segmento</TableCell>
            <TableCell className="text-white" align="center">F.creación</TableCell>
            <TableCell className="text-white" align="center">Contactos</TableCell>
            <TableCell className="text-white" align="left">Creado por</TableCell>
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
              <TableCell className="text-daisy-space-40" align="left">{row.nameSegment}</TableCell>
              <TableCell className="text-daisy-space-40" align="center">{row.dateCreation}</TableCell>
              <TableCell className="text-daisy-space-40" align="center">{row.contacts}</TableCell>
              <TableCell className="text-daisy-space-40" align="left">{row.createBy}</TableCell>
              <TableCell className="text-daisy-space-40" align="center">
                <CardState text={row.state ? 'Habilitado' : 'Inhabilitado'} type={row.state ? 'success' : 'error'} />
              </TableCell>
            </TableRow>
          ))
        )}
      />

      <NewModal
        open={showModal}
        onClickCancel={onCloseModal}
        onClickSave={() => {
          onCloseModal()
          fireSuccessAlert({ message: 'Mujeres madres de familia' })
        }}
      >
        

        <div>
          <div className="font-semibold">Segmentos</div>

          <div className="flex gap-3">
            <NewInput
              required
              label="Nombre"
              color="secondary"
              margin="dense"
            />

            <NewInput
              required
              label="Descripción"
              color="secondary"
              margin="dense"
            />
          </div>
        </div>

        <div>
          <div className="font-semibold mt-4 mb-2">Condiciones</div>

          <div className="flex gap-3">
            <SelectSingle inputLabel="Filtro" value={''} color="secondary"/>
            <SelectSingle inputLabel="Variable" value={''} color="secondary"/>

            <NewInput
              required
              label="Valor"
              color="secondary"
            />

          </div>
        </div>

      </NewModal>


    </GeneralLayout>
  )
}
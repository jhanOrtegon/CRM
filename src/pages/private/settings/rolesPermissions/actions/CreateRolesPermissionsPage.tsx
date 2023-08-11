//components
import { fireSuccessAlert } from "@/components";
import { GeneralLayout } from "@/components/layouts"

//models
import { IGeneralsPropsPages } from "@/models"
import { Card, FooterButton, NewCheckBox, NewInput, SimpleTable, Text } from "@/shared"
import { TableCell, TableRow } from "@mui/material";

// utils
import { nanoid } from "nanoid";


function createData(
  functionality: boolean,
  read: boolean,
  create: boolean,
  update: boolean,
  edit: boolean,
  download: boolean,
) {
  return { functionality, read, create, update, edit, download };
}
const rows = [
  createData(false, false, false, false, false, false),
  createData(false, false, false, false, false, false),
  createData(false, false, false, false, false, false),
  createData(false, false, false, false, false, false),
];


export const CreateRolesPermissionsPage = ({ onchangePage }: IGeneralsPropsPages) => {

  const handleValidForm = () => {

    fireSuccessAlert(
      { message: 'Coordinador' }
    ).then(({ isConfirmed }) => {
      if (isConfirmed) onchangePage('READ')
    })

  }

  return (
    <GeneralLayout title="Crear rol y permiso" goBack={() => onchangePage('READ')}>

      <Card cardClass="bg-white">

        <Text value="Rol" />

        <div className="grid grid-cols-new-1x2 gap-5">
          <NewInput required label="Nombre del rol" />
          <NewInput label="Descripción" />
        </div>

      </Card>

      <div className="my-4 2xl:my-7">
        <Text
          value="Permisos"
          mb={'mb-1 2xl:mb-4'}
          color="blue-jean"
        />

        <SimpleTable
          TableHeadRow={(
            <TableRow className="bg-daisy-space-100 text-white">
              <TableCell className="text-white" align="left">Funcionalidad</TableCell>
              <TableCell className="text-white" align="center">Ver</TableCell>
              <TableCell className="text-white" align="center">Crear</TableCell>
              <TableCell className="text-white" align="center">Editar</TableCell>
              <TableCell className="text-white" align="center">Habilitar/Inhabilitar</TableCell>
              <TableCell className="text-white" align="center">Descargar</TableCell>
            </TableRow>
          )}

          TableBodyRow={(
            rows.map(() => (
              <TableRow
                key={nanoid()}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                className="hover:bg-daisy-space-10"
              >
                <TableCell className="text-daisy-space-40" align="left">
                  <div className="flex gap-x-3 items-center">
                    <NewCheckBox defaultChecked />
                    <Text value={'Funcionalidad'} className="font-extralight-100 text-sm 2xl:text-lg" mb="mb-0" />
                  </div>
                </TableCell>

                <TableCell align="center">
                  <div className="flex items-center justify-center">
                    <NewCheckBox defaultChecked />
                  </div>
                </TableCell>

                <TableCell align="center">
                  <div className="flex items-center justify-center">
                    <NewCheckBox defaultChecked />
                  </div>
                </TableCell>

                <TableCell align="center">
                  <div className="flex items-center justify-center">
                    <NewCheckBox defaultChecked />
                  </div>
                </TableCell>

                <TableCell align="center">
                  <div className="flex items-center justify-center">
                    <NewCheckBox defaultChecked />
                  </div>
                </TableCell>

                <TableCell align="center">
                  <div className="flex items-center justify-center">
                    <NewCheckBox defaultChecked />
                  </div>
                </TableCell>

              </TableRow>
            ))
          )}
        />


      </div>


      <FooterButton
        onClickSave={handleValidForm}
        onClickCancel={() => onchangePage('READ')}
      />

    </GeneralLayout>
  )
}
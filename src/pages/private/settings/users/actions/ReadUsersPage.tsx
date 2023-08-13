import { GeneralLayout, HeaderLayout } from "@/components/layouts"
import { Button, CardState, Search, SelectSingle, SimpleTable } from "@/shared"
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { nanoid } from "nanoid";

// images
import avatarMen from '@/assets/images/avatars/avatarMen.png'
import { IGeneralsPropsPages } from "@/models";

function createData(
  user: string,
  role: string,
  area: string,
  email: string,
  contact: number,
  state: boolean,
) {
  return { user, role, area, email, contact, state };
}

export const ReadUsersPage = ({ onchangePage }: IGeneralsPropsPages) => {

  const rows = [
    createData('Andrea Paola Contreras Gaviria', 'Administrador', 'Mercadeo', 'dir.mercadeo@cfc.com', 12, true),
    createData('Andrea Paola Contreras Gaviria', 'Administrador', 'Mercadeo', 'dir.mercadeo@cfc.com', 12, true),
    createData('Andrea Paola Contreras Gaviria', 'Administrador', 'Mercadeo', 'dir.mercadeo@cfc.com', 12, true),
    createData('Andrea Paola Contreras Gaviria', 'Administrador', 'Mercadeo', 'dir.mercadeo@cfc.com', 12, true),
    createData('Andrea Paola Contreras Gaviria', 'Administrador', 'Mercadeo', 'dir.mercadeo@cfc.com', 12, true),
    createData('Andrea Paola Contreras Gaviria', 'Administrador', 'Mercadeo', 'dir.mercadeo@cfc.com', 12, true),
    createData('Andrea Paola Contreras Gaviria', 'Administrador', 'Mercadeo', 'dir.mercadeo@cfc.com', 12, false),
    createData('Andrea Paola Contreras Gaviria', 'Administrador', 'Mercadeo', 'dir.mercadeo@cfc.com', 12, false),
    createData('Andrea Paola Contreras Gaviria', 'Administrador', 'Mercadeo', 'dir.mercadeo@cfc.com', 12, false),
    createData('Andrea Paola Contreras Gaviria', 'Administrador', 'Mercadeo', 'dir.mercadeo@cfc.com', 12, false),
  ];

  return (
    <GeneralLayout title="Usuarios">

      <HeaderLayout>
        <div className="grid gap-5 grid-cols-new-4 items-center">
          <SelectSingle inputLabel="Rol" value={''} />
          <SelectSingle inputLabel="Area" value={''} />
          <Search />
          <Button color="primary" onClick={()=> onchangePage("CREATE")}>
            Nuevo usuario
          </Button>
        </div>
      </HeaderLayout>

      <SimpleTable
        TableHeadRow={(
          <TableRow className="bg-daisy-space-100 text-white">
            <TableCell className="text-white" align="left">Usuario</TableCell>
            <TableCell className="text-white" align="center">Rol</TableCell>
            <TableCell className="text-white" align="center">Área</TableCell>
            <TableCell className="text-white" align="center">Correo electrónico</TableCell>
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
              <TableCell className="text-daisy-space-40" align="left">
                <div className="flex gap-2 items-center">
                  <img src={avatarMen} alt="logo-user" width={25} />
                  {row.user}
                </div>
              </TableCell>
              <TableCell className="text-daisy-space-40" align="center">{row.role}</TableCell>
              <TableCell className="text-daisy-space-40" align="center">{row.area}</TableCell>
              <TableCell className="text-daisy-space-40" align="center">{row.email}</TableCell>
              <TableCell className="text-daisy-space-40" align="center">{row.contact}</TableCell>
              <TableCell className="text-daisy-space-40" align="center" width={130}>
                <CardState text={row.state ? 'Habilitado' : 'Inhabilitado'} type={row.state ? 'success' : 'error'} />
              </TableCell>
            </TableRow>
          ))
        )}
      />

    </GeneralLayout>
  )
}
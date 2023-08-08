import { GeneralLayout, HeaderLayout } from "@/components/layouts"
import { Button, CardState, Search, SelectSingle, SimpleTable } from "@/shared"
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { nanoid } from "nanoid";

function createData(
  nit: number,
  tradename: string,
  typeSociety: string,
  city: string,
  phone: number,
  state: boolean,
) {
  return { nit, tradename, typeSociety, city, phone, state };
}

export const AccountsPage = () => {

  // const [showModal, setShowModal] = useState(false)
  // const onOpenModal = () => setShowModal(true)
  // const onCloseModal = () => setShowModal(false)

  const rows = [
    createData(123456789, 'Clínica Lynd NewBall', 'Anónima simplificada', 'Barranquilla', 3003158540, true),
    createData(123456789, 'Clínica Lynd NewBall', 'Anónima simplificada', 'Barranquilla', 3003158540, true),
    createData(123456789, 'Clínica Lynd NewBall', 'Anónima simplificada', 'Barranquilla', 3003158540, true),
    createData(123456789, 'Clínica Lynd NewBall', 'Anónima simplificada', 'Barranquilla', 3003158540, true),
    createData(123456789, 'Clínica Lynd NewBall', 'Anónima simplificada', 'Barranquilla', 3003158540, true),
    createData(123456789, 'Clínica Lynd NewBall', 'Anónima simplificada', 'Barranquilla', 3003158540, true),
    createData(123456789, 'Clínica Lynd NewBall', 'Anónima simplificada', 'Barranquilla', 3003158540, true),
    createData(123456789, 'Clínica Lynd NewBall', 'Anónima simplificada', 'Barranquilla', 3003158540, true),
    createData(123456789, 'Clínica Lynd NewBall', 'Anónima simplificada', 'Barranquilla', 3003158540, true),
    createData(123456789, 'Clínica Lynd NewBall', 'Anónima simplificada', 'Barranquilla', 3003158540, true),

  ];

  return (
    <GeneralLayout title="Cuentas">

      <HeaderLayout>
        <div className="grid gap-5 grid-cols-new-3 items-center">
          <SelectSingle inputLabel="Tipo de sociedad" value={''} />
          <Search />
          <Button
            color="primary"
            // onClick={onOpenModal}
          >
            Nueva cuenta
          </Button>
        </div>
      </HeaderLayout>

      <SimpleTable
        TableHeadRow={(
          <TableRow className="bg-daisy-space-100 text-white">
            <TableCell className="text-white" align="left">Nit</TableCell>
            <TableCell className="text-white" align="left">Nombre comercial</TableCell>
            <TableCell className="text-white" align="left">Tipo de sociedad</TableCell>
            <TableCell className="text-white" align="left">Ciudad</TableCell>
            <TableCell className="text-white" align="center">Teléfono</TableCell>
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
              <TableCell className="text-daisy-space-40" align="left">{row.nit}</TableCell>
              <TableCell className="text-daisy-space-40" align="left">{row.tradename}</TableCell>
              <TableCell className="text-daisy-space-40" align="left">{row.typeSociety}</TableCell>
              <TableCell className="text-daisy-space-40" align="left">{row.city}</TableCell>
              <TableCell className="text-daisy-space-40" align="center">{row.phone}</TableCell>
              <TableCell className="text-daisy-space-40" align="center">
                <CardState text={row.state ? 'Habilitado' : 'Inhabilitado'} type={row.state ? 'success' : 'error'} />
              </TableCell>
            </TableRow>
          ))
        )}
      />

    </GeneralLayout>
  )
}
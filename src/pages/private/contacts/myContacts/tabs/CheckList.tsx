//layouts
import { HeaderLayout } from "@/components/layouts"

//shared
import { Button, NewInput, Search, SimpleTable } from "@/shared"
import { Card } from '@/shared';
import { TableCell, TableRow } from "@mui/material";
import { nanoid } from "nanoid";

function createData(
  nameProfessional: string,
  date: string
) {
  return { nameProfessional, date };
}

const rows = [
  createData('Carlos Mancilla Rodriguez', '13/07/2023'),
  createData('Carlos Mancilla Rodriguez', '13/07/2023'),
  createData('Carlos Mancilla Rodriguez', '13/07/2023'),
  createData('Carlos Mancilla Rodriguez', '13/07/2023'),
];

export const CheckList = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <HeaderLayout>
        <div className="grid gap-5 grid-cols-new-1-2-1 items-center">
          <NewInput label="Fecha" />
          <Search />
          <Button color="primary">Nuevo checkList</Button>
        </div>
      </HeaderLayout>

      <div className="grid grid-cols-new-2 gap-x-4">
        <Card cardClass="vh-50" />

        <div>
          <SimpleTable
            TableHeadRow={(
              <TableRow className="bg-daisy-space-100 text-white">
                <TableCell className="text-white">Nombre del profesional</TableCell>
              </TableRow>
            )}

            TableBodyRow={(
              rows.map((row) => (
                <TableRow
                  key={nanoid()}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  className="hover:bg-daisy-space-10"
                >
                  <TableCell className="text-daisy-space-40">
                    <div className="text-daisy-space-60">{row.nameProfessional}</div>
                    <div className="size11 font-extralight-100">{row.date}</div>
                  </TableCell>

                </TableRow>
              ))
            )}
          />
        </div>
      </div>
    </div>
  )
}
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { useScreenSize } from '@/hooks';
import { breakPoints } from '@/utils';

type TSImpleTable = {
    TableHeadRow: React.ReactNode,
    TableBodyRow: React.ReactNode,
    size?: 'medium' | 'small',
    anchor?: 'medium' | 'small' | 'large',
}

export function SimpleTable({ TableHeadRow, TableBodyRow, anchor='large', size = 'small' }: TSImpleTable) {

    const { width } = useScreenSize()

    return (
        <TableContainer component={Paper}>
            <Table
                size={width >= breakPoints.lg ? 'medium' : size}
                aria-label="simple table"
                className={`${anchor === 'large' ? 'w-full' : anchor === 'medium' ? 'w-6/12' : 'w-4/12'} rounded-2xl`}
            >

                <TableHead>
                    {TableHeadRow}

                </TableHead>

                <TableBody>
                    {TableBodyRow}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
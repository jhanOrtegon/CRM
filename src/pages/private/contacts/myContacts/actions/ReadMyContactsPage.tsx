import { useState } from 'react';

//layouts
import { GeneralLayout, HeaderLayout } from "@/components/layouts"

//shared
import {
    Button,
    CardState,
    NewBadge,
    NewDrawer,
    NewModal,
    Search,
    SelectSingle,
    SimpleTable
} from "@/shared"

//components
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

//utils
import { nanoid } from "nanoid";

//models
import { IGeneralsPropsPages, TTableStates } from "@/models";

//icons
import { IconFileImport, IconDownload, IconInfoSquareRounded } from '@tabler/icons-react';
import { fireSuccessAlert } from '@/components';

type TActionModal = 'import' | 'download'

function createData(
    fullName: string,
    tags: string[],
    email: string,
    fonts: string,
    rating: number[],
    date: string,
    state: TTableStates,
) {
    return { fullName, tags, fonts, email, rating, date, state };
}

export const ReadMyContactsPage = ({ onchangePage }: IGeneralsPropsPages) => {

    //drawer state
    const [showDrawer, setShowDrawer] = useState(false)
    const onOpenDrawer = () => setShowDrawer(true)
    const onCloseDrawer = () => setShowDrawer(false)

    // modales states
    const [showModalActionImport, setShowModalActionImport] = useState(false)
    const [showModalActionDownload, setShowModalActionDownload] = useState(false)

    const onOpenModal = (action: TActionModal) => {
        action === 'import'
            ? setShowModalActionImport(true)
            : setShowModalActionDownload(true)
    }

    const onCloseModal = (action: TActionModal) => {
        action === 'import'
            ? setShowModalActionImport(false)
            : setShowModalActionDownload(false)
    }

    const rows = [
        createData('Andrea Paola Contreras Gaviria', ['Madre', 'Vip', 'Nuevo'], 'dir.mercadeo@cfc.com', 'Importado', [1, 1, 1, 1, 2,], '14/12/2021', 'success'),
        createData('Andrea Paola Contreras Gaviria', ['Madre', 'Vip', 'Nuevo'], 'dir.mercadeo@cfc.com', 'Importado', [1, 1, 1, 2, 2,], '14/12/2021', 'success'),
        createData('Andrea Paola Contreras Gaviria', ['Madre', 'Vip',], 'dir.mercadeo@cfc.com', 'Importado', [1, 1, 2, 2, 2], '14/12/2021', 'error'),
        createData('Andrea Paola Contreras Gaviria', ['Madre', 'Vip', 'Nuevo'], 'dir.mercadeo@cfc.com', 'Importado', [1, 1, 1, 1, 1,], '14/12/2021', 'gray'),
        createData('Andrea Paola Contreras Gaviria', ['Madre', 'Vip'], 'dir.mercadeo@cfc.com', 'Importado', [1, 2, 2, 2, 2], '14/12/2021', 'warning'),
        createData('Andrea Paola Contreras Gaviria', ['Madre'], 'dir.mercadeo@cfc.com', 'Importado', [1, 1, 1, 1, 1], '14/12/2021', 'info'),
        createData('Andrea Paola Contreras Gaviria', ['Madre', 'Nuevo'], 'dir.mercadeo@cfc.com', 'Importado', [1, 1, 2, 2, 2], '14/12/2021', 'warning'),
        createData('Andrea Paola Contreras Gaviria', ['Madre', 'Vip', 'Nuevo'], 'dir.mercadeo@cfc.com', 'Importado', [1, 1, 1, 1, 1], '14/12/2021', 'error'),
    ];

    return (
        <GeneralLayout title="Mis contactos">

            <HeaderLayout>
                <div className="grid gap-5 grid-cols-new-custom items-center">

                    <SelectSingle inputLabel="Etiquetas" value={''} />

                    <SelectSingle inputLabel="Estado" value={''} />

                    <Search />

                    <Button variant='accent' onClick={() => onchangePage("CREATE")}>
                        Nuevo contacto
                    </Button>

                    <Button
                        opacity={false}
                        color="primary"
                        variant="hover-gray"
                        endIcon={<IconFileImport />}
                        onClick={() => onOpenModal('import')}
                    >
                        Import
                    </Button>

                    <Button
                        opacity={false}
                        color="primary"
                        variant="hover-gray"
                        endIcon={<IconDownload />}
                        onClick={() => onOpenModal('download')}
                    >
                        Descargar
                    </Button>

                </div>
            </HeaderLayout>

            <SimpleTable
                TableHeadRow={(
                    <TableRow className="bg-daisy-space-100 text-white">
                        <TableCell className="text-white" align="left">Nombre completo</TableCell>
                        <TableCell className="text-white" align="left">Etiquetas</TableCell>
                        <TableCell className="text-white" align="left">Correo electrónico</TableCell>
                        <TableCell className="text-white" align="left">Fuente</TableCell>
                        <TableCell className="text-white" align="left">Rating</TableCell>
                        <TableCell className="text-white" align="center">Creado</TableCell>
                        <TableCell className="text-white" align="center">
                            <div className="flex gap-2 items-center">
                                <div>Estado</div>
                                <IconInfoSquareRounded
                                    width={18}
                                    height={18}
                                    className="-text--daisy-blue-jeans-100 cursor-pointer"
                                    onClick={onOpenDrawer}
                                />
                            </div>
                        </TableCell>
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
                                {row.fullName}
                            </TableCell>

                            <TableCell className="text-daisy-space-40" align="left">
                                <div className="flex gap-x-2 items-center">
                                    {row.tags.map(tag => <NewBadge value={tag} color='info' />)}
                                </div>
                            </TableCell>

                            <TableCell className="text-daisy-space-40" align="center">{row.email}</TableCell>

                            <TableCell className="text-daisy-space-40" align="center">{row.fonts}</TableCell>

                            <TableCell className="text-daisy-space-40" align="center">
                                <div className="rating rating-sm">
                                    {
                                        row.rating.map(() => (
                                            <input
                                                key={nanoid()}
                                                type="radio"
                                                className="mask mask-star-2 -bg--daisy-yellow-60"
                                            // checked
                                            />
                                        ))
                                    }

                                </div>
                            </TableCell>

                            <TableCell className="text-daisy-space-40" align="center">{row.date}</TableCell>

                            <TableCell className="text-daisy-space-40" align="center">
                                <CardState
                                    text={row.state === 'success' ? 'Activo' : 'Inactivo'}
                                    type={row.state === 'success' ? 'success' : 'error'}
                                />
                            </TableCell>
                        </TableRow>
                    ))
                )}
            />

            <NewDrawer
                isAction
                footerHide
                anchorDrawer="large"
                nameAction="Detalle de estados"
                anchor={'right'}
                open={showDrawer}
                onClose={onCloseDrawer}
                onClickCancel={onCloseDrawer}
            >

                <CardState
                    mb={3}
                    type="success"
                    title='Activo:'
                    text="Contacto que ha tenido una oportunidad y haya sido marcada como ganada; Se encuentra activo en la empresa"
                />

                <CardState
                    mb={3}
                    type="error"
                    title='Inactivo:'
                    text="Estado asignado de manera manual, cliente que ha dejado de asistir a las instalaciones"
                />

                <CardState
                    mb={3}
                    type="info"
                    title='Visitante:'
                    text="Contacto que solo ha visitado nuestros sitios web o alguna landing page"
                />

                <CardState
                    mb={3}
                    type="warning"
                    title='En oportunidad:'
                    text="Cuando se ha iniciado una negociación o no se está trabajando activamente en la venta con el contacto"
                />

                <CardState
                    mb={3}
                    type="gray"
                    variant='full'
                    title='Pendiente:'
                    text="Contacto que esta interesado en los servicios  y esta listo para ser contactado de manera directa con un asesor"
                />

                <CardState
                    mb={3}
                    type="success"
                    variant='full'
                    title='Lead nuevo:'
                    text="Contacto agregado por primera vez y aún no se ha realizado ningún tipo de seguimiento o interacción con el. (manual, por formulario, o bot)"
                />

                <CardState
                    mb={5}
                    type="error"
                    variant='full'
                    title='Lead perdido:'
                    text="Oportunidad perdida"
                />

            </NewDrawer>

            <NewModal
                titleBorder
                hideBtnCancel
                titleColor='Secondary'
                title='Importar datos'
                titlePosition='Center'
                open={showModalActionImport}
                btnNameChildren={(
                    <div className='flex gap-x-3 items-center'>
                        <div>Descargar plantilla de excel</div>
                        <IconDownload />
                    </div>
                )}
                onClickCancel={() => onCloseModal('import')}
                onClickSave={() => {
                    onCloseModal('import')
                    fireSuccessAlert({ message: '' })
                }}
            >
                <div className='h-32 my-5 text-sm cursor-pointer rounded-md border text-center border-gray-300 flex items-center justify-center'>
                    Soltar archivo aquí
                </div>

                <div className='text-daisy-space-40 font-semibold'>
                    Se puede cargar cualquier archivo .csv, .xls, .xlsx, .sml, con cualquier conjunto de columnas, siempre que tenga un registro por fila.
                </div>

            </NewModal>

            <NewModal
                title='Descargar'
                open={showModalActionDownload}
                onClickCancel={() => onCloseModal('download')}
                onClickSave={() => {
                    onCloseModal('download')
                    fireSuccessAlert({ message: '' })
                }}
            >
                <div>
                    <div className="font-semibold">Contactos</div>

                    <div className="flex gap-3 mb-4 mt-2">
                        <SelectSingle inputLabel="Etiqueta" value={''} />
                        <SelectSingle inputLabel="Estado" value={''} />
                    </div>

                    <div className="flex gap-3">
                        <SelectSingle inputLabel="Fuente" value={''} />
                        <SelectSingle inputLabel="Rating" value={''} />
                    </div>

                    <div className='flex gap-3 justify-end mt-4 items-center'>
                        <input type="checkbox" className="toggle toggle-info" />
                        <div className='text-daisy-space-60 text-sm font-semibold'>
                            Todos los contactos
                        </div>
                    </div>
                </div>

            </NewModal>
        </GeneralLayout>
    )
}
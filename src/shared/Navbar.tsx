import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';
import { IconBell } from '@tabler/icons-react';


type TDetailsComponent = {
    summary: string,
    children: React.ReactNode
    path: string
}

export const Navbar = () => {

    const navigate = useNavigate()

    const [menuSelected, setMenuSelected] = useState('');

    const onToggleOpen = (event: React.SyntheticEvent<HTMLDetailsElement, Event>, summary: string) => {
        setMenuSelected(event ? summary : '')
    }

    const DetailsComponent = ({ summary, children, path }: TDetailsComponent) => {

        return (
            <details onToggle={(event) => onToggleOpen(event, summary)} open={(menuSelected === summary)}>
                {/* className={menuSelected === summary ? '-bg--daisy-blue-jeans-100 text-white hover:text-white' : ''} */}
                <summary className={location.pathname.includes(path) ? 'bg-daisy-accent-navbar text-white hover:text-white' : 'hover:text-white'}>
                    {summary}
                </summary>
                {children}
            </details>
        );
    };


    return (

        <div className="navbar bg-daisy-space-100 px-8 h-20">

            <div 
                className="navbar-start w-2/6"
                onClick={()=>navigate('/dashboard')}
            >
                <a className="btn btn-ghost normal-case text-xl">
                    <img src='/src/assets/images/logos/navbarLogo.png' />
                </a>
            </div>

            <div className="navbar-center flex">
                <ul className="menu menu-horizontal px-1 gap-2 z-10">
                    <li>
                        <Link to={'/dashboard'} className={location.pathname.includes('dashboard') ? 'bg-accent text-white' : 'hover:text-white'}>Dashboard</Link>
                    </li>

                    <li tabIndex={0}>
                        <DetailsComponent summary={'Contactos'} path='contacts'>
                            <ul className="p-2 w-56">
                                <li className="hover:bg-daisy-space-100 rounded-md">
                                    <Link
                                        to={'/contacts/myContacts'}
                                        className={location.pathname.includes('myContacts') ? 'bg-daisy-space-100 text-white' : 'hover:text-white'}
                                    >
                                        Mis contactos
                                    </Link>
                                </li>

                                <li className="hover:bg-daisy-space-100 rounded-md">
                                    <Link to={'/contacts/referees'} className="hover:text-white">Referidos</Link>
                                </li>

                            </ul>
                        </DetailsComponent>
                    </li>

                    <li tabIndex={1}>
                        <DetailsComponent summary={'Marketing'} path='marketing'>
                            <ul className="p-2 w-56">
                                <li className="hover:bg-daisy-space-100 rounded-md">
                                    <Link
                                        to={'/marketing/emailMarketing'}
                                        className={location.pathname.includes('emailMarketing') ? 'bg-daisy-space-100 text-white' : 'hover:text-white'}
                                    >
                                        Email marketing
                                    </Link>
                                </li>

                                <li className="hover:bg-daisy-space-100 rounded-md">
                                    <Link
                                        to={'/marketing/forms'}
                                        className={location.pathname.includes('forms') ? 'bg-daisy-space-100 text-white' : 'hover:text-white'}
                                    >
                                        Formularios
                                    </Link>
                                </li>

                                <li className="hover:bg-daisy-space-100 rounded-md">
                                    <Link
                                        to={'/marketing/satisfactionSurvey'}
                                        className={location.pathname.includes('satisfactionSurvey') ? 'bg-daisy-space-100 text-white' : 'hover:text-white'}
                                    >
                                        Encuesta de satisfacción
                                    </Link>
                                </li>



                            </ul>
                        </DetailsComponent>
                    </li>

                    <li tabIndex={1}>
                        <DetailsComponent summary={'Ventas'} path='sales'>
                            <ul className="p-2 w-56">
                                <li className="hover:bg-daisy-space-100 rounded-md">
                                    <Link
                                        to={'/sales/salesProcesses'}
                                        className={location.pathname.includes('salesProcesses') ? 'bg-daisy-space-100 text-white' : 'hover:text-white'}
                                    >
                                        Procesos de ventas
                                    </Link>
                                </li>

                                <li className="hover:bg-daisy-space-100 rounded-md">
                                    <Link
                                        to={'/sales/opportunities'}
                                        className={location.pathname.includes('opportunities') ? 'bg-daisy-space-100 text-white' : 'hover:text-white'}
                                    >
                                        Oportunidades
                                    </Link>
                                </li>

                            </ul>
                        </DetailsComponent>
                    </li>

                    <li>
                        <Link
                            to={'/task'}
                            className={location.pathname.includes('task') ? 'bg-accent text-white' : 'hover:text-white'}
                        >
                            Tareas
                        </Link>
                    </li>

                    <li tabIndex={1}>
                        <DetailsComponent summary={'Configuración'} path='settings'>
                            <ul className="p-2 w-56">
                                <li className="hover:bg-daisy-space-100 rounded-md">
                                    <Link
                                        to={'/settings/segments'}
                                        className={location.pathname.includes('segments') ? 'bg-daisy-space-100 text-white' : 'hover:text-white'}
                                    >
                                        Segmentos
                                    </Link>
                                </li>

                                <li className="hover:bg-daisy-space-100 rounded-md">
                                    <Link
                                        to={'/settings/tags'}
                                        className={location.pathname.includes('tags') ? 'bg-daisy-space-100 text-white' : 'hover:text-white'}
                                    >
                                        Etiquetas
                                    </Link>
                                </li>

                                <li className="hover:bg-daisy-space-100 rounded-md">
                                    <Link
                                        to={'/settings/accounts'}
                                        className={location.pathname.includes('accounts') ? 'bg-daisy-space-100 text-white' : 'hover:text-white'}
                                    >
                                        Cuentas
                                    </Link>
                                </li>

                                <li className="hover:bg-daisy-space-100 rounded-md">
                                    <Link
                                        to={'/settings/users'}
                                        className={location.pathname.includes('users') ? 'bg-daisy-space-100 text-white' : 'hover:text-white'}
                                    >
                                        Usuarios
                                    </Link>
                                </li>

                                <li className="hover:bg-daisy-space-100 rounded-md">
                                    <Link
                                        to={'/settings/areas'}
                                        className={location.pathname.includes('areas') ? 'bg-daisy-space-100 text-white' : 'hover:text-white'}
                                    >
                                        Áreas
                                    </Link>
                                </li>

                                <li className="hover:bg-daisy-space-100 rounded-md">
                                    <Link
                                        to={'/settings/rolesPermissions'}
                                        className={location.pathname.includes('rolesPermissions') ? 'bg-daisy-space-100 text-white' : 'hover:text-white'}
                                    >
                                        Roles y permisos
                                    </Link>
                                </li>

                                <li className="hover:bg-daisy-space-100 rounded-md">
                                    <Link
                                        to={'/settings/places'}
                                        className={location.pathname.includes('places') ? 'bg-daisy-space-100 text-white' : 'hover:text-white'}
                                    >
                                        Lugares
                                    </Link>
                                </li>

                                <li className="hover:bg-daisy-space-100 rounded-md">
                                    <Link
                                        to={'/settings/services'}
                                        className={location.pathname.includes('services') ? 'bg-daisy-space-100 text-white' : 'hover:text-white'}
                                    >
                                        Servicios
                                    </Link>
                                </li>

                                <li className="hover:bg-daisy-space-100 rounded-md">
                                    <Link
                                        to={'/settings/connections'}
                                        className={location.pathname.includes('connections') ? 'bg-daisy-space-100 text-white' : 'hover:text-white'}
                                    >
                                        Conexiones
                                    </Link>
                                </li>

                            </ul>
                        </DetailsComponent>
                    </li>

                </ul>
            </div>

            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div className="flex gap-5 items-center">
                        <img src={'/src/assets/icons/happy.png'} alt="happy" className="cursor-pointer" />

                        <IconBell className="text-white cursor-pointer" />

                        <div tabIndex={0} className="btn btn-ghost flex items-center gap-3 px-2 text-white">
                            <label className="btn btn-circle avatar border-0">
                                <img src="/src/assets/images/avatars/avatarMenLg.png" />
                            </label>
                            <div>Richard C.</div>
                        </div>


                    </div>

                    <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <div className="flex gap-3 items-center">
                            <img src="/src/assets/images/avatars/avatarMen.png" />
                            <div className="text-daisy-space-100">
                                <div className="font-bold text-base">Richard Castro</div>
                                <div className="text-sm font-medium">Ver perfil</div>
                            </div>
                        </div>
                        <div
                            className="mt-3 ml-14 m-auto -text--daisy-red-80 text-sm cursor-pointer"
                            onClick={() => navigate('/', { replace: true })}
                        >
                            Cerrar sesión
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
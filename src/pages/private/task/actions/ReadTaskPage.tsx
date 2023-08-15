//react
import { useState } from "react";

//layouts
import { GeneralLayout, HeaderLayout } from "@/components/layouts"

//shared
import { Button, MultiTabs, NewInput, Search, SelectSingle, NewCheckBox } from "@/shared"

//components
import { CardInfoTab, TLisItem } from "../components";

//utils
import { nanoid } from "nanoid";
import { DailyTasks, ExpiredTasks, History } from "../tabs";
import { CreateTaskPage } from ".";

const tabs = {
    dailyTasks: 'Tareas diarias',
    history: 'Historial',
    expiredTask: 'Tareas vencidas',
}

export const ReadTaskPage = () => {

    // in the future this will be changed, because at the time it was done running
    const [listExpiredTasks, setListExpiredTasks] = useState([
        {
            id: nanoid(),
            bodyResponsible: 'Laura Gomez',
            bodyTitle: 'una cita de prueba',
            bodyType: 'llamar',
            footerDate: '10/07/2023',
            tab: 'LUNES',
            active: false,
        },
        {
            id: nanoid(),
            bodyResponsible: 'Laura Gomez',
            bodyTitle: 'Confirmar llamada',
            bodyType: 'llamar',
            footerDate: '10/07/2023',
            tab: 'MARTES',
            active: false
        },

    ])

    const [listHistory, setListHistory] = useState([
        {
            id: nanoid(),
            bodyResponsible: 'Laura Gomez',
            bodyTitle: 'una cita de prueba',
            bodyType: 'llamar',
            footerDate: '10/07/2023',
            tab: 'Personalizado',
            active: false,
        },
        {
            id: nanoid(),
            bodyResponsible: 'Laura Gomez',
            bodyTitle: 'Laura prueba eso bien',
            bodyType: 'llamar',
            footerDate: '10/07/2023',
            tab: 'todos los lunes',
            active: false
        },
        {
            id: nanoid(),
            bodyResponsible: 'Laura Gomez',
            bodyTitle: 'Laura prueba eso bien',
            bodyType: 'llamar',
            footerDate: '10/07/2023',
            tab: 'todos los lunes',
            active: false
        },

    ])

    const [listDailyTask, setListDailyTask] = useState([
        
        {
            id: nanoid(),
            bodyResponsible: 'Laura Gomez',
            bodyTitle: 'una cita de prueba',
            bodyType: 'llamar',
            footerDate: '10/07/2023',
            tab: 'Personalizado',
            active: false,
        },
        {
            id: nanoid(),
            bodyResponsible: 'Laura Gomez',
            bodyTitle: 'una cita de prueba',
            bodyType: 'llamar',
            footerDate: '10/07/2023',
            tab: 'Personalizado',
            active: false,
        },
        {
            id: nanoid(),
            bodyResponsible: 'Laura Gomez',
            bodyTitle: 'una cita de prueba',
            bodyType: 'llamar',
            footerDate: '10/07/2023',
            tab: 'Personalizado',
            active: false,
        },
        {
            id: nanoid(),
            bodyResponsible: 'Laura Gomez',
            bodyTitle: 'una cita de prueba',
            bodyType: 'llamar',
            footerDate: '10/07/2023',
            tab: 'Personalizado',
            active: false,
        },
        {
            id: nanoid(),
            bodyResponsible: 'Laura Gomez',
            bodyTitle: 'una cita de prueba',
            bodyType: 'llamar',
            footerDate: '10/07/2023',
            tab: 'Personalizado',
            active: false,
        },

    ])

    // state local tabs
    const [tabActive, setTabActive] = useState<string>(tabs.dailyTasks)
    const onChangeTab = (tab: string) => setTabActive(tab)

    
    // state modal create opportunity
    const [showModalCreate, setShowModalCreate] = useState(false)
    const onOpenModalCreate = () => setShowModalCreate(true)
    const onCloseModalCreate = () => setShowModalCreate(false)

    const renderChildrenHeader = () => {

        return (
            <div className="flex items-center gap-x-2">
                <NewCheckBox defaultChecked />
                <div className="font-medium text-xs text-daisy-space-100">Ver mis tareas</div>
            </div>
        )
    }

    const onChangeStateCardToggle1 = (element: TLisItem) => {

        const formatData = listExpiredTasks.map(item => item.id === element.id
            ? { ...item, active: element.active }
            : { ...item, active: false }
        )

        setListExpiredTasks(formatData)
    }

    const onChangeStateCardToggle2 = (element: TLisItem) => {
        const formatData = listHistory.map(item => item.id === element.id
            ? { ...item, active: element.active }
            : { ...item, active: false }
        )

        setListHistory(formatData)
    }

    const onChangeStateCardToggle3 = (element: TLisItem) => {
        const formatData = listDailyTask.map(item => item.id === element.id
            ? { ...item, active: element.active }
            : { ...item, active: false }
        )

        setListDailyTask(formatData)
    }

    return (
        <GeneralLayout title="Oportunidades" outPaddingBottom>

            <HeaderLayout>
                <div className="grid gap-5 grid-cols-new-1-1-2-1-1 items-center">
                    <NewInput label="Fecha" />
                    <SelectSingle inputLabel="Estado" value={''} />
                    <Search />
                    <div className="flex gap-2 items-center justify-center">
                        <input
                            type="checkbox"
                            className="toggle toggle-info"
                        // onChange={(e) => setShowBoard(e.target.checked)}
                        />
                        <div className='text-daisy-space-60 text-sm font-semibold'>
                            Modo agenda
                        </div>
                    </div>
                    <Button
                        variant="accent"
                        onClick={onOpenModalCreate}
                    >
                        Crear tarea
                    </Button>
                </div>
            </HeaderLayout>

            <div className="grid gap-x-4 grid-cols-2">

                <MultiTabs
                    variant="boxed"
                    color="dark-blue"
                    listNames={[tabs.dailyTasks, tabs.history, tabs.expiredTask]}
                    active={tabActive}
                    onClick={(e) => onChangeTab(e)}
                    childrenHeader={renderChildrenHeader()}
                    components={[
                        {
                            tabActive: tabs.dailyTasks,
                            component: (
                                <DailyTasks
                                    key={nanoid()}
                                    onChangeStateCardToggle={onChangeStateCardToggle3}
                                    lisItem={listDailyTask}
                                />
                            )
                        },

                        {
                            tabActive: tabs.history,
                            component: (
                                <History
                                    key={nanoid()}
                                    onChangeStateCardToggle={onChangeStateCardToggle2}
                                    lisItem={listHistory}
                                />
                            )
                        },

                        {
                            tabActive: tabs.expiredTask,
                            component: (
                                <ExpiredTasks
                                    key={nanoid()}
                                    onChangeStateCardToggle={onChangeStateCardToggle1}
                                    lisItem={listExpiredTasks}
                                />
                            )
                        }
                    ]}
                />

                <CardInfoTab title="Confirmar cita de limpieza" />

            </div>

            <CreateTaskPage
                onClosed={() => onCloseModalCreate()}
                showModal={showModalCreate}
            />

        </GeneralLayout>
    )
}
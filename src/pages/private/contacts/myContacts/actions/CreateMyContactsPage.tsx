import { useState } from 'react';

//utils
import { nanoid } from 'nanoid';

//layouts
import { GeneralLayout, SidebarLayout } from "@/components/layouts"

//models
import { IGeneralsPropsPages } from "@/models"

//components
import { Header, Sidebar } from "../components"

//shared
import { MultiTabs } from '@/shared';
import { Appointments, Campaigns, CheckList, ManagementTasks, Profile } from '../tabs';

const tabs = {
    appointments: 'Citas',
    campaigns: 'Campañas',
    checkList: 'Check list',
    managementTasks: 'Tareas de gestión',
    profile: 'Perfil'
}

export const CreateMyContactsPage = ({ onchangePage }: IGeneralsPropsPages) => {

    const [tabActive, setTabActive] = useState<string>('')

    const onChangeTab = (tab: string) => setTabActive(tab)
    
    return (
        <GeneralLayout
            outPaddingBottom
            title="Contacto"
            goBack={() => onchangePage('READ')}
            component={<Header />}
        >

            <SidebarLayout component={<Sidebar />}>

                <MultiTabs
                    listNames={[tabs.managementTasks, tabs.appointments, tabs.campaigns, tabs.checkList, tabs.profile]}
                    active={tabActive}
                    onClick={(e) => onChangeTab(e)}
                    components={[
                        { tabActive: tabs.appointments, component: <Appointments key={nanoid()} /> },
                        { tabActive: tabs.campaigns, component: <Campaigns key={nanoid()} /> },
                        { tabActive: tabs.checkList, component: <CheckList key={nanoid()} /> },
                        { tabActive: tabs.managementTasks, component: <ManagementTasks key={nanoid()} /> },
                        { tabActive: tabs.profile, component: <Profile key={nanoid()} /> },

                    ]}
                />

            </SidebarLayout>

        </GeneralLayout>
    )
}
import { useState } from 'react';

//models
import { TMethods } from '@/models'

//pages actions
import { CreateRolesPermissionsPage, ReadRolesPermissionsPage } from ".";


export const RolesPermissionsPage = () => {

  const [showPage, setShowPage] = useState<TMethods>('READ')

  const onchangePage = (page:TMethods) => setShowPage(page)

  const main = () => {
    if(showPage === 'CREATE') return <CreateRolesPermissionsPage onchangePage={onchangePage} />
    if(showPage === 'READ') return <ReadRolesPermissionsPage onchangePage={onchangePage} />
  }

  return main()
}
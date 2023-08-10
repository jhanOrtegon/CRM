import { useState } from 'react';

//models
import { TMethods } from '@/models'

//pages actions
import { CreateUsersPage, ReadUsersPage } from "./";


export const UsersPage = () => {

  const [showPage, setShowPage] = useState<TMethods>('READ')

  const onchangePage = (page:TMethods) => setShowPage(page)

  const main = () => {
    if(showPage === 'CREATE') return <CreateUsersPage onchangePage={onchangePage} />
    if(showPage === 'READ') return <ReadUsersPage onchangePage={onchangePage} />
  }

  return main()
}
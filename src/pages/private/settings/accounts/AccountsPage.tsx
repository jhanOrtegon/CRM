import { useState } from 'react';

//models
import { TMethods } from '@/models'

//pages actions
import { CreateAccountPage, ReadAccountPage } from ".";


export const AccountsPage = () => {

  const [showPage, setShowPage] = useState<TMethods>('READ')

  const onchangePage = (page:TMethods) => setShowPage(page)

  const main = () => {
    if(showPage === 'CREATE') return <CreateAccountPage onchangePage={onchangePage} />
    if(showPage === 'READ') return <ReadAccountPage onchangePage={onchangePage} />
  }

  return main()
}
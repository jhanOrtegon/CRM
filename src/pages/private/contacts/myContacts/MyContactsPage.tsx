import { useState } from 'react';

//models
import { TMethods } from '@/models'

//pages actions
import { CreateMyContactsPage, ReadMyContactsPage } from "./";


export const MyContactsPage = () => {

  const [showPage, setShowPage] = useState<TMethods>('READ')

  const onchangePage = (page:TMethods) => setShowPage(page)

  const main = () => {
    if(showPage === 'CREATE') return <CreateMyContactsPage onchangePage={onchangePage} />
    if(showPage === 'READ') return <ReadMyContactsPage onchangePage={onchangePage} />
  }

  return main()
}
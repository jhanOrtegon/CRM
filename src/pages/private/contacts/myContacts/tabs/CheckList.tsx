import { HeaderLayout } from "@/components/layouts"
import { Button, NewInput, Search } from "@/shared"


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
    </div>
  )
}
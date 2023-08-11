//components
import { GeneralLayout, HeaderLayout } from "@/components/layouts"
import { CardPlaces } from "./components"

//shared
import { Button, Search } from "@/shared"



export const PlacesPage = () => {
  return (
    <GeneralLayout title="Lugares">

      <HeaderLayout>
        <Search />
      </HeaderLayout>

      <main className="grid gap-5 grid-cols-new-1x3">

        <CardPlaces labelInput="País">
          {
            ['Colombia', 'Ecuador', 'Republica Dominicana'].map(country => (
              <Button
                variant="full-transparent"
                color="primary"
                onClickAdd={() => { }}
                onClickDelete={() => { }}
              >
                {country}
              </Button>
            ))
          }
        </CardPlaces>

        <CardPlaces labelInput="Departamento">

        </CardPlaces>

        <CardPlaces labelInput="Ciudad">

        </CardPlaces>

      </main>

    </GeneralLayout>
  )
}
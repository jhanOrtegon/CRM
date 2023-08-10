//components
import { GeneralLayout } from "@/components/layouts"

//models
import { IGeneralsPropsPages } from "@/models"
import { Card, FooterButton, NewInput, SelectSingle, Text } from "@/shared"


export const CreateUsersPage = ({ onchangePage }: IGeneralsPropsPages) => {
    return (
        <GeneralLayout title="Crear usuario" goBack={() => onchangePage('READ')}>

            <Card cardClass="bg-white" className="grid grid-cols-new-1-4 py-4 px-5 gap-5">

                <Card className="2xl:h-48 p-0" />

                <div>
                    <Text value="Usuario" mb={'mb-2'} />

                    <div className="grid grid-cols-new-1x3 gap-5 mb-3">
                        <NewInput required label="Nombre completo" />
                        <NewInput required label="Correo electrónico institucional" />
                        <NewInput required label="Cuenta" />
                    </div>

                    <div className="grid grid-cols-new-1x2 gap-5 mb-3">
                        <SelectSingle inputLabel="Rol" value={''} />
                        <SelectSingle inputLabel="Área" value={''} />
                    </div>
                </div>

            </Card>

            <div className="my-4 2xl:my-7">
                <Text value="Información general" mb={'mb-1 2xl:mb-4'} />

                <div className="flex gap-5">

                    <SelectSingle inputLabel="Tipo de ID" value={''} />
                    <NewInput required label="Identificación" />
                    <SelectSingle inputLabel="Genero" value={''} />
                    <NewInput required label="Fecha nacimiento" />

                </div>

            </div>


            <div className="my-4 2xl:my-7">
                <Text value="Domicilio y contacto" mb={'mb-1 2xl:mb-4'} />
                
                <div className="flex gap-5 mb-5">
                    <SelectSingle inputLabel="Tipo de ID" value={''} />
                    <SelectSingle inputLabel="Genero" value={''} />
                    <SelectSingle inputLabel="Genero" value={''} />
                    <SelectSingle inputLabel="Genero" value={''} />
                </div>
                
                <div className="grid gap-5 grid-cols-new-1-4">
                    <NewInput required label="Teléfono" />
                    <NewInput required label="Correo electrónico" />
                </div>
            </div>

            <FooterButton />

        </GeneralLayout>
    )
}
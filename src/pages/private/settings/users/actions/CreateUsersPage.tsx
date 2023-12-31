//components
import { fireSuccessAlert } from "@/components"
import { GeneralLayout } from "@/components/layouts"

//models
import { IGeneralsPropsPages } from "@/models"
import { Card, FooterButton, NewInput, SelectSingle, Text } from "@/shared"


export const CreateUsersPage = ({ onchangePage }: IGeneralsPropsPages) => {

    const handleValidForm = () => {

        fireSuccessAlert(
            { message: 'Andrea Paola Contreras Gaviria' }
        ).then(({ isConfirmed }) => {
            if (isConfirmed) onchangePage('READ')
        })

    }

    return (
        <GeneralLayout title="Crear usuario" goBack={() => onchangePage('READ')}>

            <Card cardClass="bg-white" className="grid grid-cols-new-1-4 py-4 px-5 gap-5">

                <Card className="2xl:h-48 p-0 grid text-center items-center justify-center size11">
                    <div>
                        <div>Soltar foto aquí</div>
                        <div>PNG o JPG 320 x 320 mpx</div>
                    </div>
                </Card>


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
                    <SelectSingle inputLabel="Género" value={''} />
                    <NewInput required label="Fecha nacimiento" />

                </div>

            </div>


            <div className="my-4 2xl:my-7">
                <Text value="Domicilio y contacto" mb={'mb-1 2xl:mb-4'} />

                <div className="flex gap-5 mb-5">
                    <SelectSingle inputLabel="País" value={''} />
                    <SelectSingle inputLabel="Departamento" value={''} />
                    <SelectSingle inputLabel="Ciudad" value={''} />
                    <SelectSingle inputLabel="Dirección de residencia" value={''} />
                </div>

                <div className="flex" style={{ gap: '20px' }}>
                    <NewInput required label="Teléfono" style={{ width: '31.7%' }} />
                    <NewInput required label="Correo electrónico" />
                </div>
            </div>

            <FooterButton
                onClickSave={handleValidForm}
                onClickCancel={() => onchangePage('READ')}
            />

        </GeneralLayout>
    )
}
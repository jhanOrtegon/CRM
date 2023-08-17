//components
import { fireSuccessAlert } from "@/components";
import { GeneralLayout } from "@/components/layouts"

//models
import { IGeneralsPropsPages } from "@/models"
import { Card, FooterButton, NewInput, SelectSingle, Text } from "@/shared"

//icons
import {
  IconWorld,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter
} from '@tabler/icons-react';


export const CreateAccountPage = ({ onchangePage }: IGeneralsPropsPages) => {

  const handleValidForm = () => {

    fireSuccessAlert(
      { message: 'Carlos Fernández de Castro' }
    ).then(({ isConfirmed }) => {
      if (isConfirmed) onchangePage('READ')
    })

  }

  return (
    <GeneralLayout title="Crear cuenta" goBack={() => onchangePage('READ')}>

      <Card cardClass="bg-white" className="grid grid-cols-new-1-4 p-5 gap-5">

        <Card className="h-36 2xl:h-48 grid text-center items-center justify-center size11">
          <div>
            <div>Soltar logo aquí</div>
            <div>PNG o JPG 320 x 320 mpx</div>
          </div>
        </Card>

        <div>
          <Text value="Información general" mb={'mb-3'} />

          <div className="grid grid-cols-new-1x2 gap-5 mb-4">
            <NewInput required label="Nombre comercial" />
            <NewInput required label="Razón social" />
          </div>

          <div className="grid grid-cols-new-1x2 gap-5 mb-4">
            <SelectSingle inputLabel="Tipo de sociedad" value={''} />
            <NewInput required label="Nit" />
          </div>

          <div className="grid grid-cols-new-1x3 gap-5">
            <NewInput required label="Ciudad" />
            <NewInput required label="Dirección" />
            <NewInput required label="Teléfono" />
          </div>

        </div>

      </Card>

      <div className="my-4 2xl:my-7">
        <Text value="Plataforma" mb={'mb-1 2xl:mb-4'} />

        <div className="flex gap-5">

          <NewInput required label="Correo electrónico" />
          <SelectSingle inputLabel="País" value={''} />
          <SelectSingle inputLabel="Idioma" value={''} />
          <SelectSingle inputLabel="Horario" value={''} />
          <SelectSingle inputLabel="Moneda" value={''} />

        </div>

      </div>

      <div>
        <Text value="Redes sociales" mb={'mb-1 2xl:mb-4'} />

        <div className="grid grid-cols-new-1x4 gap-5 mb-3">

          <div className="flex gap-1 flex-1 w-full items-center">
            <IconWorld width={60} height={40} strokeWidth={2} className='text-black' />
            <NewInput label="Url" />
          </div>

          <div className="flex gap-1 flex-1 w-full items-center">
            <IconBrandFacebook width={60} height={40} strokeWidth={2} className='text-black' />
            <NewInput label="Url" />
          </div>

          <div className="flex gap-1 flex-1 w-full items-center">
            <IconBrandInstagram width={60} height={40} strokeWidth={2} className='text-black' />
            <NewInput label="Url" />
          </div>

          <div className="flex gap-1 flex-1 w-full items-center">
            <IconBrandTwitter width={60} height={40} strokeWidth={2} className='text-black' />
            <NewInput label="Url" />
          </div>

        </div>

      </div>

      <FooterButton
        onClickSave={handleValidForm}
        onClickCancel={() => onchangePage('READ')}
      />

    </GeneralLayout>
  )
}
//icons
import avatarMen from '@/assets/images/avatars/avatarMen.png'

//shared
import { NewBadge, Text } from '@/shared'

export const Sidebar = () => {
  return (
    <div className='mb-2'>

      <div className='flex gap-3 items-start mb-6'>
        <div className="avatar">
          <div className="w-9 rounded-full">
            <img src={avatarMen} />
          </div>
        </div>

        <div>
          <Text value='Maria Andrea Montoya Gonzales' mb='mb-0' className='text-md' />
          <NewBadge value='Activo' />
        </div>
      </div>

      <div className='mb-4'>
        <Text
          className='text-md'
          color='blue-jean'
          mb='mb-2'
          value='Información obligatoria'
        />

        <div className='grid gap-x-2 grid-cols-new-1x2 mb-2'>
          <div>
            <div className='size11 text-daisy-space-100 font-normal'>
              Tipo
            </div>

            <div className='text-sm text-daisy-space-60 font-normal'>
              Cédula
            </div>
          </div>

          <div>
            <div className='size11 text-daisy-space-100 font-normal'>
              Número de ID
            </div>

            <div className='text-sm text-daisy-space-60 font-normal'>
              1045746685
            </div>
          </div>

        </div>

        <div className='grid gap-x-2 grid-cols-new-1x2 mb-2'>
          <div>
            <div className='size11 text-daisy-space-100 font-normal'>
              Fecha de nacimiento
            </div>

            <div className='text-sm text-daisy-space-60 font-normal'>
              08/17/2023
            </div>
          </div>

          <div>
            <div className='size11 text-daisy-space-100 font-normal'>
              Género
            </div>

            <div className='text-sm text-daisy-space-60 font-normal'>
              Femenino
            </div>
          </div>

        </div>

        <div className='mb-2'>
          <div className='size11 text-daisy-space-100 font-normal'>
            Correo electrónico
          </div>

          <div className='text-sm text-daisy-space-60 font-normal'>
            andream@gmail.com
          </div>
        </div>

        <div className='mb-2'>
          <div className='size11 text-daisy-space-100 font-normal'>
            Número de contacto
          </div>

          <div className='text-sm text-daisy-space-60 font-normal'>
            300 000 00 00
          </div>
        </div>

        <div className='grid gap-x-2 grid-cols-new-1x2 mb-2'>
          <div>
            <div className='size11 text-daisy-space-100 font-normal'>
              Ciudad
            </div>

            <div className='text-sm text-daisy-space-60 font-normal'>
              Barranquilla
            </div>
          </div>

          <div>
            <div className='size11 text-daisy-space-100 font-normal'>
              País
            </div>

            <div className='text-sm text-daisy-space-60 font-normal'>
              Colombia
            </div>
          </div>

        </div>


      </div>

      <div>
        <Text
          className='text-md'
          color='blue-jean'
          mb='mb-2'
          value='Información opcional'
        />

        <div className='grid gap-x-2 grid-cols-new-1x2 mb-2'>
          <div>
            <div className='size11 text-daisy-space-100 font-normal'>
              Persona o medio referido
            </div>

            <div className='text-sm text-daisy-space-60 font-normal'>
              Ernesto Rodriguez
            </div>
          </div>

          <div>
            <div className='size11 text-daisy-space-100 font-normal'>
              Fuente
            </div>

            <div className='text-sm text-daisy-space-60 font-normal'>
              Importado
            </div>
          </div>

        </div>

        <div className='grid gap-x-2 grid-cols-new-1x2 mb-2'>
          <div>
            <div className='size11 text-daisy-space-100 font-normal'>
              Mis referidos
            </div>

            <div className='text-sm text-daisy-space-60 font-normal'>
              100
            </div>
          </div>

          <div>
            <div className='size11 text-daisy-space-100 font-normal'>
              Nivel de referidos
            </div>

            <div className='text-sm text-daisy-space-60 font-normal'>
              1
            </div>
          </div>

        </div>

        <div className='mb-2'>
          <div className='size11 text-daisy-space-100 font-normal'>
            Etiquetas
          </div>

          <div className='flex gap-x-2 flex-wrap'>
            <NewBadge value='Madre' />
            <NewBadge value='VIP' />
            <NewBadge value='Nuevo' />
          </div>
        </div>

        <div className='mb-2'>
          <div className='size11 text-daisy-space-100 font-normal'>
            Anexos
          </div>

          <div className='flex gap-2 flex-wrap'>
            <NewBadge value='Documentos.doc' />
          </div>
        </div>

      </div>
    </div>
  )
}
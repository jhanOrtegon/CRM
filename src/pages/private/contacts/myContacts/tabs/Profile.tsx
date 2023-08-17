//components
import { fireSuccessAlert } from "@/components"

//shared
import { Button, NewInput, SelectSingle, Text } from "@/shared"

//models
import { IGeneralsPropsPages } from "@/models"


export const Profile = ({ onchangePage }: IGeneralsPropsPages) => {
  return (
    <div className="animate__animated animate__fadeIn">
      <div className="mb-6">
        <Text value="Información obligatoria" mb="mb-2" />

        <div className="grid grid-cols-new-2-1-1-1-1 gap-3 mb-3">
          <NewInput
            required
            fullWidth
            label="Nombre completo"
            color="secondary"
          />

          <SelectSingle inputLabel="Tipo ID" value={''} color="secondary" />

          <NewInput
            required
            fullWidth
            label="Número de ID"
            color="secondary"
          />

          <NewInput
            required
            fullWidth
            label="Fecha nacimiento"
            color="secondary"
          />

          <SelectSingle inputLabel="Genero" value={''} color="secondary" />

        </div>

        <div className="grid grid-cols-new-1x2 gap-3 mb-3">
          <SelectSingle inputLabel="Correo electrónico" value={''} color="secondary" />
          <NewInput
            required
            fullWidth
            type="number"
            label="Número de contacto"
            color="secondary"
          />
        </div>

        <div className="grid grid-cols-new-1x3 gap-3 mb-3">
          <NewInput
            required
            fullWidth
            label="Dirección"
            color="secondary"
          />
          <SelectSingle inputLabel="País" value={''} color="secondary" />
          <SelectSingle inputLabel="Ciudad" value={''} color="secondary" />
        </div>
      </div>

      <div>
        <Text value="Información opcional" mb="mb-2" />
        <div className="grid grid-cols-new-3-1 gap-3 mb-3">
          <NewInput
            required
            fullWidth
            label="Persona que refiere"
            color="secondary"
          />

          <NewInput
            required
            fullWidth
            label="Fuente"
            color="secondary"
          />

        </div>

        <div className="grid grid-cols-new-1x2 gap-3">
          <SelectSingle inputLabel="Anexos" value={''} color="secondary" />
          <SelectSingle inputLabel="Etiquetas" value={''} color="secondary" />
        </div>

      </div>

      <div className="flex gap-4 items-center justify-end mt-12">
        <Button
          className='btn'
          variant='transparent'
          onClick={() => onchangePage('READ')}
        >
          Cancelar
        </Button>

        <Button
          onClick={() => {
            fireSuccessAlert({
              message: 'Maria Andrea Montoya González'
            }).finally(() => onchangePage('READ'))
          }}
        >
          Guardar
        </Button>
      </div>
    </div>
  )
}
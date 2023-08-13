//shared
import { Card, Text } from "@/shared"

//components
import { CardManagementHistory } from "../components";

//icons
import { IconBrandWaze, IconBrandWhatsapp, IconMailFilled, IconPhoneFilled } from '@tabler/icons-react'


export const ManagementTasks = () => {
  return (
    <div>

      <Card className="px-4 py-2">
        <div>
          <Text value="Tareas" mb="mb-0" />
          <div className="flex gap-3 items-center justify-between">
            <div className="font-medium text-daisy-space-80 text-sm">Realiza o asigna una tarea</div>
            <div className="flex gap-3 items-center justify-end">
              <IconBrandWaze />
              <IconBrandWhatsapp />
              <IconMailFilled />
              <IconPhoneFilled />

            </div>
          </div>
        </div>
      </Card>

      <div className="mt-8">
        <Text value="Historial de gestión" mb="mb-2" />
      </div>

      <div className="grid gap-5 grid-cols-new-1x2">

        <CardManagementHistory title="Dia de la madre"/>
        <CardManagementHistory title="Recordatorio de cita"/>
        <CardManagementHistory title="Descuento"/>
        <CardManagementHistory title="Nuevo recordatorio"/>

      </div>


    </div>
  )
}

//shared
import { InfoCard } from "@/shared"

//images
import avatarMen from '@/assets/images/avatars/avatarMen.png'


export const ReadBoardOpportunitiesPage = ({onOpenModalDetail}) => {
    return (
        <div className="animate__animated animate__fadeIn grid gap-x-2 grid-cols-new-1x6 items-baseline">

            <InfoCard
                onClick={onOpenModalDetail}
                valueHeader="$1.000"
                titleHeader="Prospecto"
                titleBody="Blanqueamiento dental"
                valueBody="$100.000"
                subtitleBody={'Probabilidad 35%'}
                iconFooter={<img src={avatarMen} alt="user" height={25} width={25} />}
                textFooter="01/02/2023"
            />


            <InfoCard
                onClick={onOpenModalDetail}
                colorHeader="space-80"
                valueHeader="$1.000"
                titleHeader="Calificación"
                titleBody="Tratamiento de ortodoncia"
                valueBody="$100.000"
                subtitleBody={'Probabilidad 35%'}
                iconFooter={<img src={avatarMen} alt="user" height={25} width={25} />}
                textFooter="01/02/2023"
            />


            <InfoCard
                onClick={onOpenModalDetail}
                colorHeader="space-60"
                valueHeader="$1.000"
                titleHeader="Propuesta"
                titleBody="Consulta dental"
                valueBody="$100.000"
                subtitleBody={'Probabilidad 35%'}
                iconFooter={<img src={avatarMen} alt="user" height={25} width={25} />}
                textFooter="01/02/2023"
            />


            <InfoCard
                onClick={onOpenModalDetail}
                colorHeader="space-40"
                valueHeader="$1.000"
                titleHeader="Cierre"
                titleBody="Prótesis dental"
                valueBody="$100.000"
                subtitleBody={'Probabilidad 35%'}
                iconFooter={<img src={avatarMen} alt="user" height={25} width={25} />}
                textFooter="01/02/2023"
            />


            <InfoCard
                onClick={onOpenModalDetail}
                colorHeader="success"
                valueHeader="$1.000"
                titleHeader="Ganada"
                titleBody="Oportunidad: Blanqueamiento dental"
                valueBody="$100.000"
                subtitleBody={'Probabilidad 35%'}
                iconFooter={<img src={avatarMen} alt="user" height={25} width={25} />}
                textFooter="01/02/2023"
            />


            <InfoCard
                onClick={onOpenModalDetail}
                colorHeader="warning"
                valueHeader="$1.000"
                titleHeader="Perdida"
                titleBody="Oportunidad: Blanqueamiento dental"
                valueBody="$100.000"
                subtitleBody={'Probabilidad 35%'}
                iconFooter={<img src={avatarMen} alt="user" height={25} width={25} />}
                textFooter="01/02/2023"
            />



        </div>
    )
}
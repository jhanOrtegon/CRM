//shared
import { Card, Divider, NewBadge, Text } from "@/shared"

//icons
import { IconMailFilled  } from "@tabler/icons-react"

//images
import avatarMen from '@/assets/images/avatars/avatarMen.png'

type TCardManagementHistory = {
    title: string
}

export const CardManagementHistory = ({ title }: TCardManagementHistory) => {
    return (
        <Card className="px-4 py-2">
            <div>
                <div className="flex items-center gap-x-4 mb-2">
                    <IconMailFilled  className="-text--daisy-blue-jeans-100" />
                    <div>
                        <Text value={title} color="blue-jean" mb="mb-0" />
                        <div className='text-sm text-daisy-space-60 font-normal'>
                            Campaña
                        </div>
                    </div>

                    <div className="ml-auto">
                        <NewBadge value="Abierto" />
                    </div>
                </div>

                <Divider />

                <div className="flex items-center gap-x-4 mt-2">
                    <div className="avatar">
                        <div className="w-9 rounded-full">
                            <img src={avatarMen} />
                        </div>
                    </div>
                    <div>

                        <div className='size11 text-daisy-space-60 font-normal'>
                            Responsable
                        </div>

                        <div className='text-sm text-daisy-space-100 font-normal'>
                            Juan Mercado
                        </div>

                    </div>

                    <div className="ml-auto">
                        <NewBadge value="20/09/2023" color="info" size="md" />
                    </div>
                </div>

            </div>
        </Card>



    )
}
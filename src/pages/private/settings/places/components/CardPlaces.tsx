
//icons
import { IconSquareRoundedPlusFilled } from '@tabler/icons-react';

//shared
import { Card, Button, NewInput, Divider } from "@/shared"

type TCardPlaces = {
    labelInput: string,
    children: React.ReactNode
}

export const CardPlaces = ({ labelInput, children }: TCardPlaces) => {
    return (
        <Card className="vh-65 px-3 py-5">
            <div className="flex gap-x-2">
                {/* <SelectSingle inputLabel="País" /> */}
                <NewInput
                    label={labelInput}
                    color="secondary"
                />

                <Button
                    variant='primary'
                    endIcon={<IconSquareRoundedPlusFilled color='text-white' width={20} height={20} />}
                >
                    Agregar
                </Button>
            </div>

            <Divider />

            {children}

        </Card>
    )
}
//components
// import { fireSuccessAlert } from "@/components"
import { GeneralLayout } from "@/components/layouts"

//models
import { IGeneralsPropsPages } from "@/models"
// import { Card, FooterButton, NewInput, SelectSingle, Text } from "@/shared"


export const CreateMyContactsPage = ({ onchangePage }: IGeneralsPropsPages) => {

    // const handleValidForm = () => {

    //     fireSuccessAlert(
    //       { message: 'Andrea Paola Contreras Gaviria' }
    //     ).then(({ isConfirmed }) => {
    //       if (isConfirmed) onchangePage('READ')
    //     })
    
    //   }

    return (
        <GeneralLayout title="Contacto" goBack={() => onchangePage('READ')}>

            {/* <FooterButton 
                onClickSave={handleValidForm}
                onClickCancel={()=>onchangePage('READ')}
            /> */}

        </GeneralLayout>
    )
}
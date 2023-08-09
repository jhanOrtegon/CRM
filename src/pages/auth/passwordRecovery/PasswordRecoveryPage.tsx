import { useState } from "react";
import { useNavigate } from "react-router-dom";

//components
import { fireWarningAlert } from "@/components"
import { AuthLayout } from "@/components/layouts"
import { Button, TextField } from "@mui/material"

// images
import bgLogin from '@/assets/images/auth/bgLogin.png'
import bgEmail from '@/assets/images/auth/bgEmail.png'

//icons
import { IconCircleCheckFilled } from '@tabler/icons-react';

//utils
import { isValidEmail } from "@/utils";

export const PasswordRecoveryPage = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [isValidForm, setIsValidForm] = useState(false);

    const handleValidation = () => {

        const isValid = isValidEmail({ email })

        if (isValid) return setIsValidForm(true)

        return fireWarningAlert({ message: 'Digite un email correcto', title: 'Intenta de nuevo' })

    }

    return (
        <AuthLayout image={isValidForm ? bgEmail : bgLogin}>
            <div className="flex flex-col justify-center">

                {
                    isValidForm ? (
                        <>
                            <div className="flex gap-3 mb-5 items-center">
                                <IconCircleCheckFilled className="text-daisy-green-leaf-100 w-min h-16" />
                                <div className="size-24px text-daisy-space-100 font-bold">Correo enviado exitosamente</div>
                            </div>

                            <div>
                                <div className="text-daisy-space-40 mb-3">Por favor revise su correo electrónico para crear una nueva contraseña.</div>

                                <div className="flex gap-3 items-center">
                                    <div className="text-daisy-space-40">¿No ha recibido el correo electrónico?</div>
                                    <div className="p-3 -text--daisy-blue-jeans-100  daisy-hover-blue-jeans-100 rounded-lg cursor-pointer">
                                        <div>Reenviar</div>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-3">
                                <Button
                                    variant="outlined"
                                    className='-text--daisy-blue-jeans-100 w-5/12'
                                    onClick={() => navigate("/auth/login",{replace:true})}
                                >
                                    Iniciar sesión
                                </Button>
                            </div>


                        </>
                    ) : (
                        <>
                            <div>
                                <div className="size-24px text-daisy-space-100 font-bold">Contraseña olvidada</div>
                                <div className="mt-3 mb-6 text-daisy-space-40 font-semibold text-sm">Ingrese su correo electrónico registrado a continuación:</div>
                            </div>

                            <div>
                                <TextField
                                    fullWidth
                                    required
                                    sx={{ mb: 1 }}
                                    label="Correo electrónico"
                                    id="outlined-required-email"
                                    onChange={({ target }) => setEmail(target.value)}
                                />

                                <div className="flex gap-3 text-sm items-center">
                                    <div className="text-daisy-space-40">¿Recuerdas la contraseña?</div>

                                    <div 
                                        className="p-3 -text--daisy-blue-jeans-100  daisy-hover-blue-jeans-100 rounded-lg cursor-pointer"
                                        onClick={() => navigate("/auth/login",{replace:true})}
                                    >
                                        <div>Iniciar sesión</div>
                                    </div>
                                </div>

                            </div>

                            <Button
                                color="secondary"
                                sx={{ marginTop: '2rem' }}
                                className='w-9/12 m-auto self-center'
                                variant="contained"
                                size="large"
                                onClick={handleValidation}
                            >
                                Enviar
                            </Button>
                        </>
                    )
                }

            </div>

        </AuthLayout>
    )
}
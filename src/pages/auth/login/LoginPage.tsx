import { useState } from "react";
import { useNavigate } from "react-router-dom";

//components
import { AuthLayout } from "@/components/layouts"
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"

//icons
import { IconEyeClosed, IconEyeCheck, IconCircle1Filled, IconSquareRoundedX } from '@tabler/icons-react';

// images
import bgLogin from '@/assets/images/auth/bgLogin.png'
import avatarMen from '@/assets/images/avatars/avatarMen.png'
import avatarWoMen from '@/assets/images/avatars/avatarWoMen.png'
import { NewCheckBox, NewInput } from "@/shared";
import { useScreenSize } from "@/hooks";
import { breakPoints } from "@/utils";


export const LoginPage = () => {

    const { width } = useScreenSize()

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleLogin = () => {
        navigate("/dashboard", { replace: true })
    }

    return (
        <AuthLayout image={bgLogin}>
            <div className="flex flex-col justify-center">
                <div>
                    <NewInput
                        required
                        fullWidth
                        sx={{mb:4}}
                        label="Usuario o correo electrónico"
                        defaultValue="jhan@ttn.com"
                    />

                    <FormControl
                        sx={{ mb: 2 }}
                        variant="outlined"
                        fullWidth
                    >
                        <InputLabel required htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                        <OutlinedInput
                            size={width >= breakPoints.lg ? 'medium' : 'small'}
                            required
                            defaultValue="123456"
                            label="Contraseña "
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <IconEyeCheck /> : <IconEyeClosed />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <div className="form-control inline-flex">
                        <label className="label cursor-pointer justify-start gap-3">
                            <NewCheckBox defaultChecked />
                            <span className="label-text">Recuerdame</span>
                        </label>
                    </div>
                </div>

                <div className="flex flex-col justify-center">
                    <Button
                        color="secondary"
                        sx={{ marginTop: '1.5rem' }}
                        className='w-7/12 m-auto self-center'
                        variant="contained"
                        size={width >= breakPoints.lg ? 'large' : 'medium'}
                        onClick={handleLogin}
                    >
                        Iniciar Sesión
                    </Button>

                    <div
                        className="flex text-sm justify-center gap-x-1 w-7/12 m-auto items-center p-2 text-center my-3 -text--daisy-blue-jeans-100  daisy-hover-blue-jeans-100 rounded-lg cursor-pointer"
                        onClick={() => navigate("/auth/passwordRecovery")}
                    >
                        <div>¿Has olvidado tu contraseña?</div>
                        <IconCircle1Filled />
                    </div>
                </div>

                <div>
                    <div className="divider text-daisy-space-60 text-xs mb-4">Inicia sesión como</div>

                    <div className="gap-5 grid grid-cols-2 justify-center mt-7">

                        <div
                            onClick={handleLogin}
                            className="rounded-box shadow-lg flex gap-3 p-2 bg-white cursor-pointer hover:shadow-daisy-space-40 hover:scale-105 transition-all"
                        >
                            <div className="avatar">
                                <div className="rounded-full">
                                    <img src={avatarMen} className="h-auto max-w-full" />
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-3">
                                    <div className="text-daisy-space-100 font-bold">Juan Camilo</div>
                                    <IconSquareRoundedX size={15} className="cursor-pointer" />
                                </div>
                                <div className="text-xs">Active 1 day ago</div>
                            </div>
                        </div>

                        <div
                            onClick={handleLogin}
                            className="rounded-box shadow-lg flex gap-3 p-2 bg-white cursor-pointer hover:shadow-daisy-space-40 hover:scale-105 transition-all"
                        >
                            <div className="avatar">
                                <div className="rounded-full">
                                    <img src={avatarWoMen} className="h-auto max-w-full" />
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-3">
                                    <div className="text-daisy-space-100 font-bold">Andrea</div>
                                    <IconSquareRoundedX size={15} className="cursor-pointer" />
                                </div>
                                <div className="text-xs">Active 1 day ago</div>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>

        </AuthLayout>
    )

}
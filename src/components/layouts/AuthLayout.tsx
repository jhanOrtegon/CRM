// components
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

// images
import companyLogo from '@/assets/images/logos/companyLogo.png'

// types
type TAuthLayout = {
    image:string,
    children?: JSX.Element
}

export const AuthLayout = ({ image, children }: TAuthLayout) => {
    return (
        <Grid container className='h-screen bg-daisy-space-100'>
            <Grid
                xs={7}
                padding={5}
                className='flex items-center justify-center m-auto'
            >
                <img 
                    alt="image" 
                    style={{height:'60vh'}}
                    src={image}
                />
            </Grid>

            <Grid 
                xs={5} 
                padding={5} 
                className='bg-white rounded-s-4xl flex flex-col justify-center gap-16'
                id="auth-vector-style"
            >
                <Box>
                    <img 
                        alt="companyLogo"
                        src={companyLogo}
                    />
                </Box>

                {children}

            </Grid>
        </Grid>
    )
}
import "react-circular-progressbar/dist/styles.css";

//components
import { Card, Divider, Title } from "@/shared"
import { GeneralLayout } from "@/components/layouts"
import Grid from "@mui/material/Unstable_Grid2"
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";

// icons
import { IconAlertCircle, IconCaretDownFilled, IconCaretUpFilled, IconMinus, IconCalendarDue } from '@tabler/icons-react';
import Line from "@/components/Line";


export const DashboardPage = () => {
    return (
        <GeneralLayout title="Dashboard">
            <>
                <Grid container spacing={2}>

                    <Grid xs={8}>
                        <Card cardClass={'bg-white'} className="vh-44 sm:py-3 2xl:py-8">
                            <div className="flex gap-2 items-center justify-between">
                                <div className="flex gap-2 items-center">
                                    <div className="text-base -text--daisy-navy-blue-60 font-bold">Total reportes</div>
                                    <IconAlertCircle className="-text--daisy-grey-50 h-8" />
                                </div>

                                <div className="flex gap-4 items-center">
                                    <div className="flex gap-2 items-center">
                                        <IconMinus size={30} />
                                        <div className="-text--daisy-navy-blue-60 font-normal text-sm">Año anterior</div>
                                    </div>

                                    <div className="flex gap-2 items-center rounded-md border px-2 py-1 text-sm cursor-pointer">
                                        <div className="-text--daisy-navy-blue-100 font-bold">2023</div>
                                        <IconCalendarDue className="text-warning" size={16} />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <Line />
                            </div>
                        </Card>
                    </Grid>

                    <Grid xs={4}>
                        <Card cardClass={'bg-white'} className="overflow-y-auto vh-44 justify-between gap-1 sm:text-sm sm:py-3 sm:px-6 2xl:p-8 2xl:text-base">
                            <div className="flex gap-2 items-center justify-between">

                                <div className="flex gap-2 items-center">
                                    <div className="text-base -text--daisy-navy-blue-60 font-bold">Riesgos</div>
                                    <IconAlertCircle className="-text--daisy-grey-50 h-5" />
                                </div>

                                <div className="flex gap-2 items-center">
                                    <div className="-text--daisy-royal-blue-100 text-xl font-bold">583</div>
                                    <div className="-text--daisy-navy-blue-60 self-end">total</div>
                                </div>
                            </div>

                            <Grid container className='items-center'>
                                <Grid xs={8}>
                                    <div className="-text--daisy-navy-blue-40">Alta</div>
                                    <div className="-text--daisy-navy-blue-100 font-bold">10 riesgos</div>
                                </Grid>

                                <Grid xs={4} className='flex gap-2 ml-auto text-sm items-center justify-end'>
                                    <IconCaretDownFilled className="-text--daisy-caribbean-green" />
                                    <div className="-text--daisy-navy-blue-100 font-medium">4,26%</div>
                                </Grid>

                                <Divider />
                            </Grid>

                            <Grid container className='items-center'>
                                <Grid xs={8}>
                                    <div className="-text--daisy-navy-blue-40">Alta</div>
                                    <div className="-text--daisy-navy-blue-100 font-bold">10 riesgos</div>
                                </Grid>

                                <Grid xs={4} className='flex gap-2 ml-auto text-sm items-center justify-end'>
                                    <IconCaretDownFilled className="-text--daisy-caribbean-green" />
                                    <div className="-text--daisy-navy-blue-100 font-medium">4,26%</div>
                                </Grid>

                                <Divider />
                            </Grid>

                            <Grid container className='items-center'>
                                <Grid xs={8}>
                                    <div className="-text--daisy-navy-blue-40">Media</div>
                                    <div className="-text--daisy-navy-blue-100 font-bold">500 riesgos</div>
                                </Grid>

                                <Grid xs={4} className='flex gap-2 ml-auto text-sm items-center justify-end'>
                                    <IconCaretUpFilled className="-text--daisy-bittersweet-100" />
                                    <div className="-text--daisy-navy-blue-100 font-medium">1,85%</div>
                                </Grid>

                                <Divider />
                            </Grid>

                            <Grid container className='items-center' >
                                <Grid xs={8}>
                                    <div className="-text--daisy-navy-blue-40">Baja</div>
                                    <div className="-text--daisy-navy-blue-100 font-bold">28 riesgos</div>
                                </Grid>

                                <Grid xs={4} className='flex gap-2 ml-auto text-sm items-center justify-end'>
                                    <IconCaretUpFilled className="-text--daisy-bittersweet-100" />
                                    <div className="-text--daisy-navy-blue-100 font-medium">0,12%</div>
                                </Grid>

                                <Divider />
                            </Grid>


                            <Grid container className='items-center'>
                                <Grid xs={8}>
                                    <div className="-text--daisy-navy-blue-40">Muy baja</div>
                                    <div className="-text--daisy-navy-blue-100 font-bold">45 riesgos</div>
                                </Grid>

                                <Grid xs={4} className='flex gap-2 ml-auto text-sm items-center justify-end'>
                                    <IconCaretDownFilled className="-text--daisy-caribbean-green" />
                                    <div className="-text--daisy-navy-blue-100 font-medium">2,1%</div>
                                </Grid>
                            </Grid>

                        </Card>
                    </Grid>

                </Grid>


                <Grid container spacing={2} mt={1}>

                    <Grid xs={6}>
                        <Card className="flex items-center justify-center vh-27" cardClass={'bg-white'}>

                            <div className="flex gap-4 justify-center items-center">
                                <div style={{ width: "30%" }}>
                                    <CircularProgressbarWithChildren
                                        circleRatio={5}
                                        value={50}
                                        strokeWidth={8}
                                        styles={buildStyles({
                                            pathColor: "#4377EB",
                                            trailColor: "#B4C9F7",
                                        })}
                                    >
                                        <Title text="50%" mb="mb-0" />
                                        <div className="-text--daisy-navy-blue-40 font-semibold text-base">Eficiencia</div>
                                    </CircularProgressbarWithChildren>
                                </div>

                                <div>
                                    <div className="font-semibold -text--daisy-navy-blue-60">Cumplimientos planes de acción</div>

                                    <div className="flex gap-3 items-center my-2">
                                        <div className="w-4 h-4 -bg--daisy-royal-blue-100 rounded-md" />
                                        <div className="font-medium text-sm">Actividades diarias</div>
                                    </div>

                                    <div className="flex gap-3 items-center">
                                        <div className="w-4 h-4 -bg--daisy-royal-blue-40 rounded-md" />
                                        <div className="font-medium text-sm">Actividades pendientes</div>
                                    </div>
                                </div>
                            </div>

                        </Card>
                    </Grid>

                    <Grid xs={6}>

                        <Card cardClass={'bg-white'} className="vh-27 sm:py-2 2xl:py-8 ">
                            <div className="font-semibold -text--daisy-navy-blue-60 text-center mt-3 sm:mb-1 2xl:mb-5">Riesgos con tratamiento</div>

                            <div className="flex gap-3 2xl:mb-2 text-sm text-end">
                                <div className="-text--daisy-navy-blue-60 w-20">Alto</div>
                                <progress className="progress progress-warning -bg--daisy-royal-blue-10 sm:h-3 2xl:h-4" value="15" max="100"></progress>
                            </div>

                            <div className="flex gap-3 2xl:mb-2 text-sm text-end">
                                <div className="-text--daisy-navy-blue-60 w-20">Media</div>
                                <progress className="progress progress-warning -bg--daisy-royal-blue-10 sm:h-3 2xl:h-4" value="50" max="100"></progress>
                            </div>

                            <div className="flex gap-3 2xl:mb-2 text-sm text-end">
                                <div className="-text--daisy-navy-blue-60 w-20">Baja</div>
                                <progress className="progress progress-warning -bg--daisy-royal-blue-10 sm:h-3 2xl:h-4" value="30" max="100"></progress>
                            </div>

                            <div className="flex gap-3 2xl:mb-2 text-sm text-end">
                                <div className="-text--daisy-navy-blue-60 w-20">Muy baja</div>
                                <progress className="progress progress-warning -bg--daisy-royal-blue-10 sm:h-3 2xl:h-4" value="30" max="100"></progress>
                            </div>

                        </Card>

                    </Grid>

                </Grid>

            </>



        </GeneralLayout>
    )
}
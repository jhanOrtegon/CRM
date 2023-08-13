import { NewInput, SelectSingle } from "@/shared"

export const CreateOpportunityStageOne = () => {
    return (
        <>
            <NewInput
                required
                label="Nombre de la oportunidad"
                color="secondary"
            />

            <div className="grid gap-x-3 grid-cols-new-1x3 mt-5">
                <NewInput
                    required
                    label="Valor oportunidad"
                    color="secondary"
                />

                <NewInput
                    required
                    label="Fecha de cierre"
                    color="secondary"
                />

                <NewInput
                    required
                    label="Contacto"
                    color="secondary"
                />
            </div>

            <div className="grid gap-x-3 grid-cols-new-1x2 mt-5">
                <SelectSingle inputLabel="Proceso de ventas" value={''} color="secondary" />
                <SelectSingle inputLabel="Fuentes" value={''} color="secondary" />
            </div>

            <div className="grid gap-x-3 grid-cols-new-1x2 mt-5">
                <SelectSingle inputLabel="Seleccionar etapa" value={''} color="secondary" />
                <SelectSingle inputLabel="Responsable" value={''} color="secondary" />
            </div>

            <div className="flex mt-5 w-40">
                <SelectSingle inputLabel="Probabilidad" value={''} color="secondary" />
            </div>
        </>
    )
}
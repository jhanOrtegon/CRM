import Swal from "sweetalert2";

type TMessage = {
    message: string
    title?: string
}

export function fireErrorAlert({message, title = "Error"}:TMessage) {
    return Swal.fire({
        title: `<span class="text-primary fw-bold fs-3">${title}</span>`,
        text: message,
        icon: "error",
        confirmButtonColor: "#5FBAFC",
        confirmButtonText: "Aceptar",
        customClass: {
            confirmButton: "button button-primary shadow-none-focus",
            cancelButton: "button button-outline shadow-none-focus"
        },
    })
}

export function fireSuccessAlert({message, title = "Proceso exitoso"}:TMessage) {
    return Swal.fire({
        title: `<span class="text-primary fw-bold fs-3">${title}</span>`,
        text: message,
        icon: "success",
        confirmButtonColor: "#5FBAFC",
        confirmButtonText: "Aceptar",
        customClass: {
            confirmButton: "button button-primary shadow-none-focus",
            cancelButton: "button button-outline shadow-none-focus"
        }
    })
}

export function fireInfoAlert({message, title = "Información"}:TMessage) {
    return Swal.fire({
        title: `<span class="text-primary fw-bold fs-3">${title}</span>`,
        text: message,
        icon: "info",
        confirmButtonColor: "#5FBAFC",
        confirmButtonText: "Aceptar",
        customClass: {
            confirmButton: "button button-primary shadow-none-focus",
            cancelButton: "button button-outline shadow-none-focus"
        }
    })
}

export function fireWarningAlert({message, title = "Advertencia"}:TMessage) {
    return Swal.fire({
        title: `<span class="text-accent fw-bold fs-3">${title}</span>`,
        text: message,
        icon: "warning",
        confirmButtonColor: "#5FBAFC",
        confirmButtonText: "Aceptar",
        customClass: {
            confirmButton: "button button-primary shadow-none-focus",
            cancelButton: "button button-outline shadow-none-focus"
        }
    });
}

export function fireCautionAlert({message, title}:TMessage) {
    return Swal.fire({
        icon: "warning",
        title: `<span class='text-primary fw-bold fs-3'>${title || "¿Está seguro?"}</span>`,
        text: message,
        confirmButtonColor: "#5FBAFC",
        showCancelButton: true,
        confirmButtonText: "Sí, continuar",
        cancelButtonText: "Cancelar",
        customClass: {
            confirmButton: "button button-primary shadow-none-focus",
            cancelButton: "button button-outline shadow-none-focus"
        }
    });
}
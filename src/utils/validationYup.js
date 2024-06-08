import { mixed, object, string } from "yup";

let useSchema =  object({
    nombre: string("El nombre solo debe contener letras").required("El campo Nombre es requerido"),
    telefono: mixed().required("El campo Telefono es requerido"),
    email: string().email("El email no tiene formato correcto @").required("El campo email es requerido")
})

const validateForm = async(dataForm) => {
    try {
        await useSchema.validate(dataForm)
        return { status: "success" }
    } catch (error) {
        return{ status: "error", message: error.message }
    }
}

export default validateForm
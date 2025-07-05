import {useContext} from "react";
import {ActividadContext} from "../context/ActividadContext.tsx";

export const useActividad = () => {
    const context = useContext(ActividadContext);
    if (!context) {
        throw new Error("Error en la busqueda del context de la aplicación");
    }
    return context;
}
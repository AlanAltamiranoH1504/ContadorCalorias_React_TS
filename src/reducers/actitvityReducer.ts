import type {Actividad} from "../types";

export type ActivityActions =
    { type: 'save_actividad', payload: { newActividad: Actividad } } |
    { type: "set_actividadId", payload: { id: Actividad['id'] } } |
    { type: "delete_actividad", payload: { id: Actividad['id'] } } |
    {type: "clear_actividades"}

export type ActivityState = {
    actividades: Actividad[],
    actividadId: Actividad['id']
}

const localStoraActividades = () => {
    const actividades = localStorage.getItem("actividades");
    return actividades ? JSON.parse(actividades) : [];
}
export const initialState: ActivityState = {
    actividades: localStoraActividades(),
    actividadId: ""
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    //Actualizacion o agregado de actividad
    if (action.type === "save_actividad") {
        let updatedActividades: Actividad[] = [];
        if (state.actividadId) {
            updatedActividades = state.actividades.map((actividad) => {
                return actividad.id === state.actividadId ? action.payload.newActividad : actividad
            });
        } else {
            updatedActividades = [...state.actividades, action.payload.newActividad]
        }
        return {
            ...state,
            actividades: updatedActividades,
            actividadId: ""
        }
    }

    //Seteo de id de actividad
    if (action.type === "set_actividadId") {
        return {
            ...state,
            actividadId: action.payload.id
        }
    }

    //Eliminacion de actividad
    if (action.type === "delete_actividad") {
        const updatedActividades: Actividad[] = state.actividades.filter((actividad) => {
            return actividad.id !== action.payload.id;
        })
        return {
            ...state,
            actividades: updatedActividades,
            actividadId: ""
        }
    }

    //Limpieza de la actividades del localStorage
    if (action.type === "clear_actividades"){
        return {
            actividades: [],
            actividadId: ""
        }
    }
    return state;
}
import type {Actividad} from "../types";

export type ActivityActions =
    { type: 'save_actividad', payload: { newActividad: Actividad } } |
    { type: "set_actividadId", payload: { id: Actividad['id'] } } |
    { type: "delete_actividad", payload: { id: Actividad['id'] } }

export type ActivityState = {
    actividades: Actividad[],
    actividadId: Actividad['id']
}
export const initialState: ActivityState = {
    actividades: [],
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
    if (action.type === "delete_actividad"){
        const updatedActividades: Actividad[]  = state.actividades.filter((actividad) => {
            return actividad.id !== action.payload.id;
        })
        return {
            ...state,
            actividades: updatedActividades,
            actividadId: ""
        }
    }
    return state;
}
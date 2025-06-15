import type {Actividad} from "../types";

export type ActivityActions =
    { type: 'save_actividad', payload: {newActividad: Actividad} }

type ActivityState = {
    actividades: Actividad[]
}
export const initialState: ActivityState = {
    actividades: [],
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    if (action.type === "save_actividad") {
        //Codigo que actualiza el state
        // console.log(action.payload.newActividad);
        return {
            ...state, actividades:[...state.actividades, action.payload.newActividad]
        }
    }
    return state;
}
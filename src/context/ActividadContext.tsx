import {createContext, type Dispatch, useReducer} from "react";
import * as React from "react";
import {type ActivityActions, activityReducer, type ActivityState, initialState} from "../reducers/actitvityReducer.ts";

type ActividadContextProps = {
    state: ActivityState,
    dispatch: Dispatch<ActivityActions>
}

type ActividadProviderProps = {
    children: React.ReactNode;
}

export const ActividadContext = createContext<ActividadContextProps>(null!);

const ActividadProvider = ({children}: ActividadProviderProps) => {
    const [state, dispatch] = useReducer(activityReducer, initialState);
    return (
        <ActividadContext.Provider
        value={{state, dispatch}}
        >
            {children}
        </ActividadContext.Provider>
    );
}
export default ActividadProvider;
import {Fragment} from "react";
import {PencilSquareIcon} from "@heroicons/react/24/outline"

import type {Actividad} from "../types";
import type {ActivityActions} from "../reducers/actitvityReducer.ts";
import {XCircleIcon} from "@heroicons/react/16/solid";

type ActividadDetallesProps = {
    actividades: Actividad[]
    dispatch: React.ActionDispatch<[action: ActivityActions]>
}

const ActividadDetalles = ({actividades, dispatch}: ActividadDetallesProps) => {
    return (
        <Fragment>
            <h2 className="text-4xl font-bold text-slate-600 text-center">Comidas y Actividades</h2>
            {actividades.map((actividad) => {
                return (
                    <div key={actividad.id} className="px-5 py-10 bg-white mt-5 flex justify-between">
                        <div className="space-y-2 relative">
                            <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${actividad.categoria === 1 ? "bg-lime-500" : "bg-orange-500"}`}>{actividad.categoria === 1 ? "Comida" : "Ejercicio"}</p>
                            <p className="text-2xl font-bold pt-5">{actividad.actividad}</p>
                            <p className="font-black text-4xl text-lime-500">{actividad.calorias} <span>calorias</span>
                            </p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <button
                                onClick={() => {
                                    dispatch({type: "set_actividadId", payload: {id: actividad.id}})
                                }}
                            ><PencilSquareIcon className="h-8 w-8 text-gray-800"/></button>
                            <button
                                onClick={() => {
                                    dispatch({type: "delete_actividad", payload: {id: actividad.id}})
                                }}
                            ><XCircleIcon className="h-8 w-8 text-red-800"/></button>
                        </div>
                    </div>
                );
            })}
        </Fragment>
    )
}
export default ActividadDetalles;
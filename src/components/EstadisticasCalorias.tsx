import {Fragment} from "react";
import {useActividad} from "../hooks/useActividad.ts";

// import type {Actividad} from "../types";
// type EstadisticasCaloriasProps = {
//     actividades: Actividad[]
// }
// const EstadisticasCalorias = ({actividades}: EstadisticasCaloriasProps) => {

const EstadisticasCalorias = () => {
    const {state} = useActividad();
    const caloriasQuemadas = state.actividades.filter((actividad) => {
        return actividad.categoria === 2;
    }).reduce((acumulador, actividad) => {
        return acumulador += actividad.calorias;
    }, 0);

    const caloriasConsumidas = state.actividades.filter((actividad) => {
        return actividad.categoria === 1;
    }).reduce((acumulador, actividad) => {
        return acumulador += actividad.calorias
    }, 0);

    const balance: number = caloriasConsumidas - caloriasQuemadas;

    return (
        <Fragment>
            <h2 className="text-4xl font-black text-white text-center">Resumen de Calorias</h2>
            <div className="flex justify-around mt-5">
                <p className="text-xl text-white">Consumidas: <strong className="text-orange-600">{caloriasConsumidas}</strong> calorias</p>
                <p className="text-xl text-white">Quemadas: <strong className="text-lime-600">{caloriasQuemadas}</strong> calorias</p>
            </div>
            <h3 className="text-4xl font-black text-white text-center mt-5">Balance: <strong className={balance > 0 ? "text-orange-600" : "text-lime-600"}>{balance}</strong></h3>
        </Fragment>
    )
}

export default EstadisticasCalorias;
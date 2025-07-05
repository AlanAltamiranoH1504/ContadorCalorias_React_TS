import {Fragment, useEffect} from "react";
import Formulario from "./components/Formulario.tsx";
// import {activityReducer, initialState} from "./reducers/actitvityReducer.ts";
import ActividadDetalles from "./components/ActividadDetalles.tsx";
import EstadisticasCalorias from "./components/EstadisticasCalorias.tsx";
import {useActividad} from "./hooks/useActividad.ts";

function App() {
    // const [state, dispatch] = useReducer(activityReducer, initialState);
    const {state, dispatch} = useActividad();

    useEffect(() => {
        localStorage.setItem("actividades", JSON.stringify(state.actividades));
    }, [state.actividades]);

    return (
        <>
            <header className="bg-lime-600 py-3">
                <div className="max-w-4xl mx-auto flex justify-between">
                    <h1 className="text-center text-lg font-bold text-white uppercase">Contador de Calorias</h1>
                    {state.actividades.length > 0 ? (
                        <>
                            <button
                                onClick={() => dispatch({type: "clear_actividades"})}
                                className="uppercase border p-2 bg-slate-900 text-white rounded-lg font-bold">Reinicar
                                APP
                            </button>
                        </>
                    ) : (
                        <>
                        </>
                    )}
                </div>
            </header>

            <section className="bg-lime-500 py-20 px-5">
                <div className="max-w-4xl mx-auto">
                    <Formulario
                        dispatch={dispatch}
                        state={state}
                    />
                </div>
            </section>

            <section className="bg-gray-800 py-10">
                <div className="max-w-lg mx-auto">
                    <EstadisticasCalorias
                        // actividades={state.actividades}
                    />
                </div>
            </section>

            <section className="p-10 mx-auto max-w-4xl">
                <>
                    {state.actividades.length > 0 ? (
                        <ActividadDetalles
                            // actividades={state.actividades}
                            // dispatch={dispatch}
                        />
                    ) : (
                        <Fragment>
                            <h2 className="text-center text-2xl font-bold uppercase">No hay actividades registradas</h2>
                        </Fragment>
                    )}
                </>

            </section>
        </>
    )
}

export default App

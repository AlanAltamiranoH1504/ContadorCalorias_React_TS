import {useReducer} from "react";
import Formulario from "./components/Formulario.tsx";
import {activityReducer, initialState} from "./reducers/actitvityReducer.ts";
import ActividadDetalles from "./components/ActividadDetalles.tsx";

function App() {
    const [state, dispatch] = useReducer(activityReducer, initialState);
    return (
        <>
            <header className="bg-lime-600 py-3">
                <div className="max-w-4xl mx-auto flex justify-between">
                    <h1 className="text-center text-lg font-bold text-white uppercase">Contador de Calorias</h1>
                </div>
            </header>

            <section className="bg-lime-500 py-20 px-5">
                <div className="max-w-4xl mx-auto">
                    <Formulario
                        dispatch={dispatch}
                    />
                </div>
            </section>
            <section className="p-10 mx-auto max-w-4xl">
                <ActividadDetalles
                    actividades={state.actividades}
                />
            </section>
        </>
    )
}

export default App

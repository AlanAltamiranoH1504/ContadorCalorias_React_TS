import {type Dispatch, Fragment, useEffect, useState} from "react";
import {v4 as uuidv4} from "uuid";

import {categories} from "../data/categorias.ts";
import type {Actividad} from "../types";
import type {ActivityActions, ActivityState} from "../reducers/actitvityReducer.ts";

type FormularioProps = {
    dispatch: Dispatch<ActivityActions>
    state: ActivityState
}

const Formulario = ({dispatch, state}: FormularioProps) => {
    const [formulario, setFormulario] = useState<Actividad>({
        id: uuidv4(),
        categoria: 0,
        actividad: "",
        calorias: 0
    });
    useEffect(() => {
        if (state.actividadId) {
            const selectedActividad = state.actividades.filter((actividad) => {
                return actividad.id === state.actividadId
            })[0];
            setFormulario(selectedActividad);
        }
    }, [state.actividadId]);

    function guardarFormulario(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
        const esCampoNumerico = ["categoria", "calorias"].includes(e.target.name);
        setFormulario({
            ...formulario, [e.target.name]: esCampoNumerico ? Number(e.target.value) : e.target.value
        });
    }

    function validarFormulario() {
        const {categoria, actividad, calorias} = formulario;
        if (categoria === 0 || actividad.trim() === "" || calorias === 0) {
            return true;
        } else {
            return false;
        }
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch({type: "save_actividad", payload: {newActividad: formulario}})
        setFormulario({
            ...formulario,
            id: uuidv4(),
            categoria: 0,
            actividad: "",
            calorias: 0
        })
    }

    return (
        <Fragment>
            <form
                className="space-y-5 bg-white shadow-md rounded-lg p-10"
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <div className="mb-5">
                    <label htmlFor="categoria" className="mb-3 block font-bold text-xl uppercase">Categoria:</label>
                    <select
                        onChange={(e) => {
                            guardarFormulario(e);
                        }}
                        value={formulario.categoria}
                        id="categoria" name="categoria"
                        className="w-full p-2 rounded-lg font-semibold border border-slate-300 bg-white">
                        <option value="">--- Selecciona una Opción ---</option>
                        {categories.map((categoria) => {
                            return (
                                <Fragment key={categoria.id}>
                                    <option value={categoria.id}>{categoria.name}</option>
                                </Fragment>
                            );
                        })}
                    </select>
                </div>
                <div className="mb-5">
                    <label className="mb-3 block font-bold text-xl uppercase">Actividad:</label>
                    <input
                        onChange={(e) => {
                            guardarFormulario(e);
                        }}
                        value={formulario.actividad}
                        name="actividad" type="text" className="border p-2 w-full rounded-lg border border-slate-300"
                        placeholder="Ej. Comida, Ejercicio, Jugos frutales, Pesas"/>
                </div>
                <div className="mb-5">
                    <label className="mb-3 block font-bold text-xl uppercase">Calorias</label>
                    <input
                        onChange={(e) => {
                            guardarFormulario(e);
                        }}
                        value={formulario.calorias}
                        name="calorias" type="text" className="border p-2 w-full border border-slate-300 rounded-lg"
                        placeholder="Número de calorias de la actividad"/>
                </div>
                <div className="mb-5">
                    <input type="submit"
                           disabled={validarFormulario()}
                           className="border p-2 rounded-lg w-full bg-gray-800 text-white uppercase font-bold  cursor-pointer"
                           value={formulario.categoria === 1 ? "Guardar Comida" : "Guardar Ejercicio"}/>
                </div>
            </form>
        </Fragment>
    )
        ;
}
export default Formulario;
import {Fragment, useState} from "react";
import {categories} from "../data/categorias.ts";

const Formulario = () => {
    const [formulario, setFormulario] = useState({
        categoria: "",
        actividad: "",
        calorias: ""
    });

    function guardarFormulario(e) {
        setFormulario({
            ...formulario, [e.target.name]: e.target.value
        });
    }

    function validarFormulario() {
        const {categoria, actividad, calorias} = formulario;
        if (categoria.trim() === "" || actividad.trim() === "" || calorias.trim() === "") {
            return true;
        } else {
            return false;
        }
    }

    return (
        <Fragment>
            <form
                className="space-y-5 bg-white shadow-md rounded-lg p-10"
            >
                <div className="mb-5">
                    <label htmlFor="categoria" className="mb-3 block font-bold text-xl uppercase">Categoria:</label>
                    <select
                        onChange={(e) => {
                            guardarFormulario(e);
                        }}
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
                        name="actividad" type="text" className="border p-2 w-full rounded-lg border border-slate-300"
                        placeholder="Ej. Comida, Ejercicio, Jugos frutales, Pesas"/>
                </div>
                <div className="mb-5">
                    <label className="mb-3 block font-bold text-xl uppercase">Calorias</label>
                    <input
                        onChange={(e) => {
                            guardarFormulario(e);
                        }}
                        name="calorias" type="text" className="border p-2 w-full border border-slate-300 rounded-lg"
                        placeholder="Número de calorias de la actividad"/>
                </div>
                <div className="mb-5">
                    <input type="submit"
                           className="border p-2 rounded-lg w-full bg-gray-800 text-white uppercase font-bold hover:bg-gray-900 cursor-pointer"
                           value={formulario.categoria == 1 ? "Guardar Comida" : "Guardar Ejercicio"}/>
                </div>
            </form>
        </Fragment>
    );
}
export default Formulario;
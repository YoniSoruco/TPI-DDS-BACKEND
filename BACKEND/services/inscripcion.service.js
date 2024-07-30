import Inscripcion from "../models/inscripcion.js";
import { Op } from "sequelize";

async function agregarInscripcion(datosInscripcion) {
    try {


        const inscripcion = await Inscripcion.create(datosInscripcion);
        return inscripcion;
    } catch (error) {
        console.error('Error al crear la inscripcion:', error);
        throw error;
    }
}
//FALTA TRY CATCH 
async function traerTodos() {
    try {
        const inscripciones = await Inscripcion.findAll();
        return inscripciones;
    } catch (error) {
        console.error('Error al buscar todos las inscripciones', error);
        throw error;
    }

}

async function traerInscripcionXId(idBuscado) {

    try {
        const inscripcionBuscada = await Inscripcion.findOne({
            where: {
                id: idBuscado
            }
        })
        return inscripcionBuscada;
    } catch (error) {
        console.error('Error al buscar la inscripcion', error);
        throw error;
    }

}

async function modificarInscripcion(idModificar, datosInscripcionMod) {
    try {
        const inscripcionModificada = await Inscripcion.findOne({
            where: {
                id: idModificar
            }
        });
        if (!inscripcionModificada) {
            throw new Error('Inscripcion no encontrada');
        }
        await inscripcionModificada.update(datosInscripcionMod);
        return inscripcionModificada;
    } catch (error) {
        console.error('Error al modificar la inscripcion', error);
        throw error;
    }
}

async function eliminarInscripcion(idEliminar) {
    try {
        const inscripcionEliminada = await Inscripcion.findOne({
            where: {
                id: idEliminar
            }
        });
        if (!inscripcionEliminada) {
            throw new Error('Inscripcion no encontrada');
        }
        await inscripcionEliminada.destroy();
        return inscripcionEliminada;
    } catch (error) {
        console.error('Error al eliminar la inscripcion', error);
        throw error;
    }
}

export default { agregarInscripcion, traerTodos, traerInscripcionXId, modificarInscripcion, eliminarInscripcion }
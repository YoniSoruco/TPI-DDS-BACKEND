import Calificacion from "../models/calificaciones.js";
import { Op } from "sequelize";

async function agregarCalificacion(datosCalificacion) {
    try {

        
        const calificacion = await Calificacion.create(datosCalificacion);
        return calificacion;
    } catch (error) {
        console.error('Error al crear la Calificacion:', error);
        throw error;
    }
}
//FALTA TRY CATCH 
async function traerTodos() {
    try {
        const calificacion = Calificacion.findAll();
        return calificacion;
    } catch (error) {
        console.error('Error al buscar todas las calificaciones', error);
        throw error;
    }

}

async function traerCalificacionXId(idBuscado) {

    try {
        const calificacion = Calificacion.findOne({
            where: {
                id: idBuscado
            }
        })
        return calificacion;
    } catch (error) {
        console.error('Error al buscar la calificación', error);
        throw error;
    }

}

async function modificarCalificacion(idBuscado, datosCalificacionMod) {
    try {
        console.log("entre");
        const calificacion = await Calificacion.findOne({
            where:{
                id:idBuscado
            }
        });
        console.log("entre");
        // if (!departamento) {
        //     throw new Error('Calificacion no encontrada');
        // }
        console.log("entre");
        await calificacion.update(datosCalificacionMod);
        return calificacion;
    } catch (error) {
        console.error('Error al modificar la calificación', error);
        throw error;
    }
}

async function eliminarCalificacion(idEliminar) {
    try {
        const calificacion = await Calificacion.findOne({
            where:{
                id: idEliminar
            }
        });
        if (!calificacion) {
            throw new Error('Calificacion no encontrada');
        }
        await calificacion.destroy();
        return calificacion;
    } catch (error) {
        console.error('Error al eliminar la calificación', error);
        throw error;
    }
}

export default { agregarCalificacion, traerTodos, traerCalificacionXId, modificarCalificacion, eliminarCalificacion }

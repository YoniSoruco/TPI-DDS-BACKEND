import Asignacion from "../models/asignaciones.js";
import { Op } from "sequelize";

async function agregarAsignacion(datosAsignacion) {
    try {

        
        const asignacion = await Asignacion.create(datosAsignacion);
        return asignacion;
    } catch (error) {
        console.error('Error al crear la Asignacion:', error);
        throw error;
    }
}
//FALTA TRY CATCH 
async function traerTodos() {
    try {
        const asignacion = Asignacion.findAll();
        return asignacion;
    } catch (error) {
        console.error('Error al buscar todas las asignaciones', error);
        throw error;
    }

}

async function traerAsignacionXId(idBuscado) {

    try {
        const asignacion = Asignacion.findOne({
            where: {
                id: idBuscado
            }
        })
        return asignacion;
    } catch (error) {
        console.error('Error al buscar la asignacion', error);
        throw error;
    }

}

async function modificarAsignacion(idBuscado, datosAsignacionMod) {
    try {
        const asignacion = await Asignacion.findOne({where:{
            id: idBuscado
        }});
        if (!asignacion) {
            throw new Error('Asignacion no encontrada');
        }
        await asignacion.update(datosAsignacionMod);
        return asignacion;
    } catch (error) {
        console.error('Error al modificar la asignación', error);
        throw error;
    }
}

async function eliminarAsignacion(idEliminar) {
    try {
        const asignacion = await Asignacion.findOne({
            where:{
                id: idEliminar
            }
        });
        if (!asignacion) {
            throw new Error('Asignacion no encontrada');
        }
        await asignacion.destroy();      
        return asignacion;
    } catch (error) {
        console.error('Error al eliminar la asignacion', error);
        throw error;
    }
}

export default { agregarAsignacion, traerTodos, traerAsignacionXId, modificarAsignacion, eliminarAsignacion }
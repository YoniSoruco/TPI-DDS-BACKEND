import Examen from "../models/examenes.js";
import { Op } from "sequelize";

async function agregarExamen(datosExamen) {
    try {

        
        const examen = await Examen.create(datosExamen);
        return examen;
    } catch (error) {
        console.error('Error al crear el Examen:', error);
        throw error;
    }
}
//FALTA TRY CATCH 
async function traerTodos() {
    try {
        const examen = Examen.findAll();
        return examen;
    } catch (error) {
        console.error('Error al buscar todos los examenes', error);
        throw error;
    }

}

async function traerExamenXId(idBuscado) {

    try {
        const examen = Examen.findOne({
            where: {
                id: idBuscado
            }
        })
        return examen;
    } catch (error) {
        console.error('Error al buscar el examen', error);
        throw error;
    }

}

async function modificarExamen(idBuscado, datosExamenMod) {
    try {
        console.log("entre");
        const examen = await Examen.findOne({
            where:{
                id:idBuscado
            }
        });
        console.log("entre");
        // if (!departamento) {
        //     throw new Error('Examen no encontrado');
        // }
        console.log("entre");
        await examen.update(datosExamenMod);
        return examen;
    } catch (error) {
        console.error('Error al modificar el examen', error);
        throw error;
    }
}

async function eliminarExamen(idEliminar) {
    try {
        const examen = await Examen.findOne({
            where:{
                id: idEliminar
            }
        });
        if (!examen) {
            throw new Error('Examen no encontrado');
        }
        await examen.destroy();
        return examen;
    } catch (error) {
        console.error('Error al eliminar el examen', error);
        throw error;
    }
}

export default { agregarExamen, traerTodos, traerExamenXId, modificarExamen, eliminarExamen }

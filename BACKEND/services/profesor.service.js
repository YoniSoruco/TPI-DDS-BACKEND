import Profesor from "../models/profesores.js";
import { Op } from "sequelize";

async function agregarProfesor(datosProfesor) {
    try {

        
        const profesor = await Profesor.create(datosProfesor);
        return profesor;
    } catch (error) {
        console.error('Error al crear el Profesor:', error);
        throw error;
    }
}
//FALTA TRY CATCH 
async function traerTodos() {
    try {
        const profesor = await Profesor.findAll();
        return profesor;
    } catch (error) {
        console.error('Error al buscar todos los profesores', error);
        throw error;
    }

}

async function traerProfesorXId(idBuscado) {

    try {
        const profesor = Profesor.findOne({
            where: {
                id: idBuscado
            }
        })
        return profesor;
    } catch (error) {
        console.error('Error al buscar el profesor', error);
        throw error;
    }

}

async function modificarProfesor(idBuscado, datosProfesorMod) {
    try {
        const profesor = await Profesor.findOne({
            where:{
                id: idBuscado
            }
        });;
        if (!profesor) {
            throw new Error('Profesor no encontrado');
        }
        await profesor.update(datosProfesorMod);
        return profesor;
    } catch (error) {
        console.error('Error al modificar el profesor', error);
        throw error;
    }
}

async function eliminarProfesor(idEliminar) {
    try {
        const profesor = await Profesor.findOne({
            where:{
                id: idEliminar
            }
        });
        if (!profesor) {
            throw new Error('Profesor no encontrado');
        }
        await profesor.destroy();
        return profesor;
    } catch (error) {
        console.error('Error al eliminar el profesor', error);
        throw error;
    }
}

export default { agregarProfesor, traerTodos, traerProfesorXId, modificarProfesor, eliminarProfesor }
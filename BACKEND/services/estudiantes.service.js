
import Estudiante from "../models/estudiantes.js";
import { Op } from "sequelize";

async function agregarEstudiante(datosEstudiante) {
    try {

        
        const estudiante = await Estudiante.create(datosEstudiante);
        return estudiante;
    } catch (error) {
        console.error('Error al crear el estudiante:', error);
        throw error;
    }
}
//FALTA TRY CATCH 
async function traerTodos() {
    try {
        const estudiantes = Estudiante.findAll();
        return estudiantes;
    } catch (error) {
        console.error('Error al buscar todos los estudiantes', error);
        throw error;
    }

}

async function traerEstudianteXId(idBuscado) {

    try {
        const estudiante = Estudiante.findOne({
            where: {
                id: idBuscado
            }
        })
        return estudiante;
    } catch (error) {
        console.error('Error al buscar el estudiante', error);
        throw error;
    }

}

async function modificarEstudiante(idBuscado, datosEstudianteMod) {
    try {
        console.log("entre");
        const estudiante = await Estudiante.findOne({
            where:{
                id:idBuscado
            }
        });
        console.log("entre");
        // if (!departamento) {
        //     throw new Error('Departamento no encontrado');
        // }
        console.log("entre");
        await estudiante.update(datosEstudianteMod);
        return estudiante;
    } catch (error) {
        console.error('Error al modificar el estudiante', error);
        throw error;
    }
}

async function eliminarEstudiante(idEliminar) {
    try {
        const estudiante = await Estudiante.findOne({
            where:{
                id: idEliminar
            }
        });
        if (!estudiante) {
            throw new Error('estudiante no encontrado');
        }
        await estudiante.destroy();
        return estudiante;
    } catch (error) {
        console.error('Error al eliminar el estudiante', error);
        throw error;
    }
}

export default { agregarEstudiante, traerTodos, traerEstudianteXId, modificarEstudiante, eliminarEstudiante };

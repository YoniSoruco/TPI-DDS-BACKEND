import Departamento from "../models/departamento.js";
import { Op } from "sequelize";

async function agregarDepartamento(datosDepartamento) {
    try {

        
        const departamento = await Departamento.create(datosDepartamento);
        return departamento;
    } catch (error) {
        console.error('Error al crear el departamento:', error);
        throw error;
    }
}
//FALTA TRY CATCH 
async function traerTodos() {
    try {
        const departamentos = Departamento.findAll();
        return departamentos;
    } catch (error) {
        console.error('Error al buscar todos los departamentos', error);
        throw error;
    }

}

async function traerDepartamentoXId(idBuscado) {

    try {
        const departamento = Departamento.findOne({
            where: {
                id: idBuscado
            }
        })
        return departamento;
    } catch (error) {
        console.error('Error al buscar el departamento', error);
        throw error;
    }

}

async function modificarDepartamento(idBuscado, datosDepartamentoMod) {
    try {
        console.log("entre");
        const departamento = await Departamento.findOne({
            where:{
                id:idBuscado
            }
        });
        console.log("entre");
        // if (!departamento) {
        //     throw new Error('Departamento no encontrado');
        // }
        console.log("entre");
        await departamento.update(datosDepartamentoMod);
        return departamento;
    } catch (error) {
        console.error('Error al modificar el departamento', error);
        throw error;
    }
}

async function eliminarDepartamento(idEliminar) {
    try {
        const departamento = await Departamento.findOne({
            where:{
                id: idEliminar
            }
        });
        if (!departamento) {
            throw new Error('Departamento no encontrado');
        }
        await departamento.destroy();
        return departamento;
    } catch (error) {
        console.error('Error al eliminar el departamento', error);
        throw error;
    }
}

export default { agregarDepartamento, traerTodos, traerDepartamentoXId, modificarDepartamento, eliminarDepartamento }
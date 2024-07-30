
import Beca from "../models/becas.js";
import { Op } from "sequelize";

async function agregarBeca(datosBeca) {
    try {

        
        const beca = await Beca.create(datosBeca);
        return beca;
    } catch (error) {
        console.error('Error al crear la beca:', error);
        throw error;
    }
}
//FALTA TRY CATCH 
async function traerTodos() {
    try {
        const becas = Beca.findAll();
        return becas;
    } catch (error) {
        console.error('Error al buscar todos las becas', error);
        throw error;
    }

}

async function traerBecaXId(idBuscado) {

    try {
        const beca = Beca.findOne({
            where: {
                id: idBuscado
            }
        })
        return beca;
    } catch (error) {
        console.error('Error al buscar la beca', error);
        throw error;
    }

}

async function modificarBeca(idBuscado, datosBecaMod) {
    try {
        console.log("entre");
        const beca = await Beca.findOne({
            where:{
                id:idBuscado
            }
        });
        console.log("entre");
        // if (!departamento) {
        //     throw new Error('Departamento no encontrado');
        // }
        console.log("entre");
        await beca.update(datosBecaMod);
        return beca;
    } catch (error) {
        console.error('Error al modificar la beca', error);
        throw error;
    }
}

async function eliminarBeca(idEliminar) {
    try {
        const beca = await Beca.findOne({
            where:{
                id: idEliminar
            }
        });
        if (!beca) {
            throw new Error('beca no encontrada');
        }
        await beca.destroy();
        return beca;
    } catch (error) {
        console.error('Error al eliminar la beca', error);
        throw error;
    }
}

export default { agregarBeca, traerTodos, traerBecaXId, modificarBeca, eliminarBeca };

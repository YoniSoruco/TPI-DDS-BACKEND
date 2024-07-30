import estudianteBeca from "../models/estudiantesBecas.js";


async function addBeca(datosEstudiante){
    try{
        const beca = await estudianteBeca.create(datosEstudiante)
        return beca
    }catch(error){

        console.error("Error en la creacion de las becas",error)
        throw error
    }
}

async function getAll(){
    try{
        const becas = await estudianteBeca.findAll()
        return becas

    }catch(error){
        console.error("Error al obtener las becas",error)
        throw error

    }
}

async function getAllById(idBeca){
    try{
        const becaEstudiante = await estudianteBeca.findOne({
            where:{id:idBeca}
        })
        return becaEstudiante
    }catch(error){
        console.error("Error al buscar la beca del estudiante",error)
        throw error

    }
}


async function modifyBeca(idModificar,datosBeca){
    try {
        const becaModificada = await estudianteBeca.findOne({
            where: {id: idModificar}
        });
        if (!becaModificada) {
            throw new Error('Beca no encontrado');
        }
        await becaModificada.update(datosBeca);
        return becaModificada;
    } catch (error) {
        console.error('Error al modificar la beca', error);
        throw error;
    }
}

async function deleteBeca(idEliminar) {
    try {
        const becaEliminada = await estudianteBeca.findOne({
            where: {id: idEliminar}
        });
        if (!becaEliminada) {
            throw new Error('curso no encontrado');
        }
        await becaEliminada.destroy();
        return becaEliminada;
    } catch (error) {
        console.error('Error al eliminar la beca', error);
        throw error;
    }
}




export default{addBeca,getAll,getAllById,modifyBeca,deleteBeca}
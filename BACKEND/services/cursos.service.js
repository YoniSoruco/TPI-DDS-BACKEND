import Curso from "../models/cursos.js";


async function addCurso(datosCurso){
    try{
        const cursos = await Curso.create(datosCurso)
        return cursos
    }catch(error){

        console.error("Error en la creacion del curso",error)
        throw error
    }
}

async function getAll(){
    try{
        const cursos = await Curso.findAll()
        return cursos

    }catch(error){
        console.error("Error al obtener los cursos",error)
        throw error

    }
}

async function getAllById(id){
    try{
        const curso = await Curso.findOne({
            where:{id:id}
        })
        return curso
    }catch(error){
        console.error("Error al buscar el curso",error)
        throw error

    }
}


async function modifyCurso(idModificar,datosCurso){
    try {
        const cursoModificado = await Curso.findOne({
            where: {id: idModificar}
        });
        if (!cursoModificado) {
            throw new Error('curso no encontrado');
        }
        await cursoModificado.update(datosCurso);
        return cursoModificado;
    } catch (error) {
        console.error('Error al modificar el curso', error);
        throw error;
    }
    }


    async function deleteCurso(idEliminar) {
        try {
            const cursoEliminado = await Curso.findOne({
                where: {id: idEliminar}
            });
            if (!cursoEliminado) {
                throw new Error('curso no encontrado');
            }
            await cursoEliminado.destroy();
            return cursoEliminado;
        } catch (error) {
            console.error('Error al eliminar el curso', error);
            throw error;
        }
    }


export default{addCurso,getAll,getAllById,modifyCurso,deleteCurso}
import express from "express"
import cursoservice from "../services/cursos.service.js"



const router = express.Router()

router.post("/", async (req,res) =>{
    try{
        const nuevoCurso = await cursoservice.addCurso(req.body)
        res.status(201).json(nuevoCurso)
    }catch(error){
      console.error('Error al manejar la solicitud de creación del curso:', error);
      res.status(500).json({ error: error.message });
    }
})

router.get('/', async (req, res) => {
    try {
      const cursos = await cursoservice.getAll();
      if (!cursos) {
        return res.status(404).json({ error: 'Estudiantes no encontrados' });
      }
      res.status(200).json(cursos);
    } catch (error) {
      res.status(500).json({ error: 'Error en la obtencion' });
    }
  });
  
  // READ (one)
  router.get('/:id', async (req, res) => {
    try {
      const cursoBuscado = await cursoservice.getAllById(req.params.id);
      if (!cursoBuscado) {
        return res.status(404).json({ error: 'Curso no encontrado' });
      }
      res.status(200).json(cursoBuscado);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el curso' });
    }
  });
  
  // UPDATE
  router.put('/:id', async (req, res) => {
    try {
      
      const cursoModificado = await cursoservice.modifyCurso(req.params.id , req.body);
      if (!cursoModificado) {
        return res.status(404).json({ error: 'Curso no encontrado' });
      }
       res.status(200).json(cursoModificado);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el Curso' });
    }
  });
  
  // DELETE
  router.delete('/:id', async (req, res) => {
    try {
      const cursoEliminado = await cursoservice.deleteCurso(req.params.id);
      if (!cursoEliminado) {
        return res.status(404).json({ error: 'Curso no encontrado' });
      }
      
      res.status(204).json(cursoEliminado);
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el Curso' });
    }
  });

  export default router;
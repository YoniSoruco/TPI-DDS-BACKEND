import express from "express"
import estudianteService from "../services/estudianteBecas.service.js"



const router = express.Router()

router.post("/", async (req,res) =>{
    try{
        const nuevoEstudiante = await estudianteService.addBeca(req.body)
        res.status(201).json(nuevoEstudiante)
    }catch(error){
        console.error("Error al obtener el estudiante",error)
        res.status(500).json({error:error.message})
    }
})

router.get('/', async (req, res) => {
    try {
      const estudiantesBecados = await estudianteService.getAll();
      if (!estudiantesBecados) {
        return res.status(404).json({ error: 'Estudiantes no encontrados' });
      }
      res.status(200).json(estudiantesBecados);
    } catch (error) {
      res.status(500).json({ error: 'Error en la obtencion' });
    }
  });
  
  // READ (one)
  router.get('/:id', async (req, res) => {
    try {
      const estudianteBuscado = await estudianteService.getAllById(req.params.id);
      if (!estudianteBuscado) {
        return res.status(404).json({ error: 'Estudiante no encontrado' });
      }
      res.status(200).json(estudianteBuscado);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener al estudiante' });
    }
  });
  
  // UPDATE
  router.put('/:id', async (req, res) => {
    try {
      
      const estudianteModificado = await estudianteService.modifyBeca(req.params.id , req.body);
      if (!estudianteModificado) {
        return res.status(404).json({ error: 'Estudiante no encontrado' });
      }
      res.status(200).json(estudianteModificado);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el Estudiante' });
    }
  });
  
  // DELETE
  router.delete('/:id', async (req, res) => {
    try {
      const estudianteEliminado = await estudianteService.deleteBeca(req.params.id);
      if (!estudianteEliminado) {
        return res.status(404).json({ error: 'Estudiante no encontrado' });
      }     
      res.status(204).json(estudianteEliminado);
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el estudiante' });
    }
  });

  export default router;
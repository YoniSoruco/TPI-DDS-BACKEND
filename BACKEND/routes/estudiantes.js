import express from 'express';
import EstudianteService from '../services/estudiantes.service.js'


const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
    try {
      const nuevoEstudiante = await EstudianteService.agregarEstudiante(req.body);
      
      res.status(201).json(nuevoEstudiante);
    } catch (error) {
        console.error('Error al manejar la solicitud de creación del estudiante:', error);
        res.status(500).json({ error: error.message });
    }
  });
  
  // READ (all)
  router.get('/', async (req, res) => {
    try {
      const estudiantes = await EstudianteService.traerTodos();
      if (!estudiantes) {
        return res.status(404).json({ error: 'Estudiantes no encontrados' });
      }
      res.status(200).json(estudiantes);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los estudiantes' });
    }
  });
  
  // READ (one)
  router.get('/:id', async (req, res) => {
    try {
      const estudiante = await EstudianteService.traerEstudianteXId(req.params.id);
      if (!estudiante) {
        return res.status(404).json({ error: 'Estudiante no encontrado' });
      }
      res.status(200).json(estudiante);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el estudiante' });
    }
  });
  
  // UPDATE
  router.put('/:id', async (req, res) => {
    try {
      
      const estudianteModificado = await EstudianteService.modificarEstudiante(req.params.id , req.body);
      if (!estudianteModificado) {
        return res.status(404).json({ error: 'Estudiante no encontrado' });
      }
      
      // await estuiante.save();
     return await res.status(200).json(estudianteModificado);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el estudinate' });
    }
  });
  
  // DELETE
  router.delete('/:id', async (req, res) => {
    try {
      const estudianteEliminado = await EstudianteService.eliminarEstudiante(req.params.id);
      if (!estudianteEliminado) {
        return res.status(404).json({ error: 'Estudiante no encontrado' });
      }
      
      res.status(204).json(estudianteEliminado);
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el estudiante' });
    }
  });

  export default router;
  

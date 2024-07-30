import express from 'express';
import ProfesorService from '../services/profesor.service.js';


const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
  try {
      const nuevoProfesor = await ProfesorService.agregarProfesor(req.body);
      res.status(201).json(nuevoProfesor);
  } catch (error) {
      console.error('Error al manejar la solicitud de creación del profesor:', error);
      res.status(500).json({ error: error.message });
  }
});
  
  // READ (all)
  router.get('/', async (req, res) => {
    try {
        const profesores = await ProfesorService.traerTodos();
        if (!profesores) {
            return res.status(404).json({ error: 'Profesores no encontrados' });
        }
        res.status(200).json(profesores);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los profesores' });
    }
});
  
  // READ (one)
  router.get('/:id', async (req, res) => {
    try {
        const profesor = await ProfesorService.traerProfesorXId(req.params.id);
        if (!profesor) {
            return res.status(404).json({ error: 'Profesor no encontrado' });
        }
        res.status(200).json(profesor);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el profesor' });
    }
});
  
  // UPDATE
  router.put('/:id', async (req, res) => {
    try {
        const profesor = await ProfesorService.modificarProfesor(req.params.id, req.body);
        if (!profesor) {
            return res.status(404).json({ error: 'Profesor no encontrado' });
        }
        res.status(200).json(profesor);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el profesor' });
    }
});
  
  // DELETE
  router.delete('/:id', async (req, res) => {
    try {
        const profesorEliminado = await ProfesorService.eliminarProfesor(req.params.id);
        if (!profesorEliminado) {
            return res.status(404).json({ error: 'Profesor no encontrado' });
        }
        res.status(204).json(profesorEliminado);
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el profesor' });
    }
});

  export default router;
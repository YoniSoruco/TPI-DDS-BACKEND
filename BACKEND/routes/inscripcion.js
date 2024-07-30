import express from 'express';
import InscripcionService from '../services/inscripcion.service.js'


const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
    try {
      const nuevaInscripcion = await InscripcionService.agregarInscripcion(req.body);
      
      res.status(201).json(nuevaInscripcion);
    } catch (error) {
        console.error('Error al manejar la solicitud de creación de la Inscripcion:', error);
        res.status(500).json({ error: error.message });
    }
  });
  
  // READ (all)
  router.get('/', async (req, res) => {
    try {
      const inscripciones = await InscripcionService.traerTodos();
      if (!inscripciones) {
        return res.status(404).json({ error: 'Inscripcion no encontrada' });
      }
      res.status(200).json(inscripciones);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las Inscripciones' });
    }
  });
  
  // READ (one)
  router.get('/:id', async (req, res) => {
    try {
      const inscripcionBuscada = await InscripcionService.traerInscripcionXId(req.params.id);
      if (!inscripcionBuscada) {
        return res.status(404).json({ error: 'Inscripcion no encontrado' });
      }
      res.status(200).json(inscripcionBuscada);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la Inscripcion' });
    }
  });
  
  // UPDATE
  router.put('/:id', async (req, res) => {
    try {
      
      const inscripcionModificada = await InscripcionService.modificarInscripcion(req.params.id , req.body);
      if (!inscripcionModificada) {
        return res.status(404).json({ error: 'Inscripcion no encontrado' });
      }
      res.status(200).json(inscripcionModificada);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el Inscripcion' });
    }
  });
  
  // DELETE
  router.delete('/:id', async (req, res) => {
    try {
      const inscripcionEliminada = await InscripcionService.eliminarInscripcion(req.params.id);
      if (!inscripcionEliminada) {
        return res.status(404).json({ error: 'Inscripcion no encontrado' });
      }
      
      res.status(204).json(inscripcionEliminada);
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la Inscripcion' });
    }
  });

  export default router;
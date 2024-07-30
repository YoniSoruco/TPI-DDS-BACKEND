import express from 'express';
import ExamenService from '../services/examen.service.js';

const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
    try {
      const nuevoExamen = await ExamenService.agregarExamen(req.body);
      
      res.status(201).json(nuevoExamen);
    } catch (error) {
        console.error('Error al manejar la solicitud de creación del examen:', error);
        res.status(500).json({ error: error.message });
    }
  });
  
  // READ (all)
  router.get('/', async (req, res) => {
    try {
      const examen = await ExamenService.traerTodos();
      if (!examen) {
        return res.status(404).json({ error: 'Examenes no encontrado' });
      }
      res.status(200).json(examen);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los examenes' });
    }
  });
  
  // READ (one)
  router.get('/:id', async (req, res) => {
    try {
      const examen = await examen.traerExamen(req.params.id);
      if (!examen) {
        return res.status(404).json({ error: 'examen no encontrado' });
      }
      res.status(200).json(examen);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el examen' });
    }
  });
  
  // UPDATE
  router.put('/:id', async (req, res) => {
    try {
      
      const examen = await ExamenService.modificarExamen(req.params.id , req.body);
      if (!examen) {
        return res.status(404).json({ error: 'Examen no encontrado' });
      }
      
      // await examen.save();
     return await res.status(200).json(examen);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el examen' });
    }
  });
  
  // DELETE
  router.delete('/:id', async (req, res) => {
    try {
      const examenEliminado = await ExamenService.eliminarExamen(req.params.id);
      if (!examenEliminado) {
        return res.status(404).json({ error: 'Examen no encontrado' });
      }
      
      res.status(204).json(examenEliminado);
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el examen' });
    }
  });

  export default router;
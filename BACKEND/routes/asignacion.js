import express from 'express';

import AsignacionService from '../services/asignacion.service.js';


const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
  try {
      const nuevaAsignacion = await AsignacionService.agregarAsignacion(req.body);
      res.status(201).json(nuevaAsignacion);
  } catch (error) {
      console.error('Error al manejar la solicitud de creación de la asignación:', error);
      res.status(500).json({ error: error.message });
  }
});
  
  // READ (all)
  router.get('/', async (req, res) => {
    try {
        const asignaciones = await AsignacionService.traerTodos();
        if (!asignaciones) {
            return res.status(404).json({ error: 'Asignaciones no encontradas' });
        }
        res.status(200).json(asignaciones);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las asignaciones' });
    }
});
  
  // READ (one)
  router.get('/:id', async (req, res) => {
    try {
        const asignacion = await AsignacionService.traerAsignacionXId(req.params.id);
        if (!asignacion) {
            return res.status(404).json({ error: 'Asignación no encontrada' });
        }
        res.status(200).json(asignacion);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la asignación' });
    }
});
  
  // UPDATE
  router.put('/:id', async (req, res) => {
    try {
        const asignacion = await AsignacionService.modificarAsignacion(req.params.id, req.body);
        if (!asignacion) {
            return res.status(404).json({ error: 'Asignación no encontrada' });
        }
        res.status(200).json(asignacion);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la asignación' });
    }
});
  
  // DELETE
  router.delete('/:id', async (req, res) => {
    try {
        const asignacionEliminada = await AsignacionService.eliminarAsignacion(req.params.id);
        if (!asignacionEliminada) {
            return res.status(404).json({ error: 'Asignación no encontrada' });
        }
        res.status(204).json(asignacionEliminada);
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la asignación' });
    }
});

  export default router;
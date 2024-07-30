import express from 'express';
import CalificacionService from '../services/calificacion.service.js';

const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
    try {
      const nuevoCalificacion = await CalificacionService.agregarCalificacion(req.body);
      
      res.status(201).json(nuevoCalificacion);
    } catch (error) {
        console.error('Error al manejar la solicitud de creación del calificacion:', error);
        res.status(500).json({ error: error.message });
    }
  });
  
  // READ (all)
  router.get('/', async (req, res) => {
    try {
      const calificacion = await CalificacionService.traerTodos();
      if (!calificacion) {
        return res.status(404).json({ error: 'Calificaciones no encontrado' });
      }
      res.status(200).json(calificacion);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los calificaciones' });
    }
  });
  
  // READ (one)
  router.get('/:id', async (req, res) => {
    try {
      const calificacion = await calificacion.traerCalificacion(req.params.id);
      if (!calificacion) {
        return res.status(404).json({ error: 'calificacion no encontrado' });
      }
      res.status(200).json(calificacion);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el calificacion' });
    }
  });
  
  // UPDATE
  router.put('/:id', async (req, res) => {
    try {
      
      const calificacion = await CalificacionService.modificarCalificacion(req.params.id , req.body);
      if (!calificacion) {
        return res.status(404).json({ error: 'Calificacion no encontrado' });
      }
      
      // await calificacion.save();
     return await res.status(200).json(calificacion);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el calificacion' });
    }
  });
  
  // DELETE
  router.delete('/:id', async (req, res) => {
    try {
      const calificacionEliminado = await CalificacionService.eliminarCalificacion(req.params.id);
      if (!calificacionEliminado) {
        return res.status(404).json({ error: 'Calificacion no encontrado' });
      }
      
      res.status(204).json(calificacionEliminado);
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el calificacion' });
    }
  });

  export default router;
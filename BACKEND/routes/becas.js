import express from 'express';
import BecaService from '../services/becas.service.js'


const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
    try {
      const nuevaBeca = await BecaService.agregarBeca(req.body);
      
      res.status(201).json(nuevaBeca);
    } catch (error) {
        console.error('Error al manejar la solicitud de creación de la beca:', error);
        res.status(500).json({ error: error.message });
    }
  });
  
  // READ (all)
  router.get('/', async (req, res) => {
    try {
      const becas = await BecaService.traerTodos();
      if (!becas) {
        return res.status(404).json({ error: 'Beca no encontrada' });
      }
      res.status(200).json(becas);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las becas' });
    }
  });
  
  // READ (one)
  router.get('/:id', async (req, res) => {
    try {
      const beca = await BecaService.traerBecaXId(req.params.id);
      if (!beca) {
        return res.status(404).json({ error: 'Beca no encontrada' });
      }
      res.status(200).json(beca);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la beca' });
    }
  });
  
  // UPDATE
  router.put('/:id', async (req, res) => {
    try {
      
      const becaModificada = await BecaService.modificarBeca(req.params.id , req.body);
      if (!becaModificada) {
        return res.status(404).json({ error: 'Beca no encontrada' });
      }
      
      // await beca.save();
     return await res.status(200).json(becaModificada);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la beca' });
    }
  });
  
  // DELETE
  router.delete('/:id', async (req, res) => {
    try {
      const becaEliminada = await BecaService.eliminarBeca(req.params.id);
      if (!becaEliminada) {
        return res.status(404).json({ error: 'Beca no encontrada' });
      }
      
      res.status(204).json(becaEliminada);
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la beca' });
    }
  });

  export default router;
  

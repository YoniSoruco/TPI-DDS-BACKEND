import express from 'express';
import DepartamentoService from '../services/departamento.service.js'


const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
    try {
      const nuevoDepartamento = await DepartamentoService.agregarDepartamento(req.body);
      
      res.status(201).json(nuevoDepartamento);
    } catch (error) {
        console.error('Error al manejar la solicitud de creación del departamento:', error);
        res.status(500).json({ error: error.message });
    }
  });
  
  // READ (all)
  router.get('/', async (req, res) => {
    try {
      const departamentos = await DepartamentoService.traerTodos();
      if (!departamentos) {
        return res.status(404).json({ error: 'Departamentos no encontrado' });
      }
      res.status(200).json(departamentos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los departamentos' });
    }
  });
  
  // READ (one)
  router.get('/:id', async (req, res) => {
    try {
      const departamento = await DepartamentoService.traerDepartamentoXId(req.params.id);
      if (!departamento) {
        return res.status(404).json({ error: 'Departamento no encontrado' });
      }
      res.status(200).json(departamento);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el departamento' });
    }
  });
  
  // UPDATE
  router.put('/:id', async (req, res) => {
    try {
      
      const departamentoModificado = await DepartamentoService.modificarDepartamento(req.params.id , req.body);
      if (!departamentoModificado) {
        return res.status(404).json({ error: 'Departamento no encontrado' });
      }
      
      // await departamento.save();
     return await res.status(200).json(departamentoModificado);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el departamento' });
    }
  });
  
  // DELETE
  router.delete('/:id', async (req, res) => {
    try {
      const departamentoEliminado = await DepartamentoService.eliminarDepartamento(req.params.id);
      if (!departamentoEliminado) {
        return res.status(404).json({ error: 'Departamento no encontrado' });
      }
      
      res.status(204).json(departamentoEliminado);
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el departamento' });
    }
  });

  export default router;
  
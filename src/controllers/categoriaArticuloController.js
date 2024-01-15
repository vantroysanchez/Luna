import CategoriaArticulo from '../models/categoriaArticulo.js';
import Repository from '../repositories/genericRepository.js'
import CategoriaArticuloService from "../services/categoriaArticuloService.js";

const Repo = new Repository(CategoriaArticulo);
const Service = new CategoriaArticuloService(Repo);

const getAll = async (req, res) => {
    try {
      const data = await Service.getAll();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener todas las categorías de artículos' });
    }
  };
  
  const getById = async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Service.getById(id);
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ error: 'Categoría de artículo no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la categoría de artículo por ID' });
    }
  };
  
  const create = async (req, res) => {
    try {
      const model = req.body;
      console.log(req);
      const data = await Service.create(model);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear una nueva categoría de artículo' });
    }
  };
  
  const update = async (req, res) => {
    try {
      const id = req.params.id;
      const model = req.body;
      const data = await Service.update(id, model);
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ error: 'Categoría de artículo no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la categoría de artículo' });
    }
  };
  
  const remove = async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Service.delete(id);
      if (data) {
        res.json({ success: true });
      } else {
        res.status(404).json({ error: 'Categoría de artículo no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la categoría de artículo' });
    }
  };
  
  export default {
    getAll,
    getById,
    create,
    update,
    remove
  };
import userService from '../services/userService.js';

const getAllUser = (req, res) => {
    const users = userService.getAll()
    res.json(users)
}

const getUserById = (req, res) => {
    const userId = parseInt(req.params.id, 10);
  
    const user = userService.getById(userId);
  
    if (!user) {
      res.status(404).json({ message: 'Usuario no encontrado' });
    } else {
      res.json(user);
    }
};


export default {
    getAllUser,
    getUserById,
};
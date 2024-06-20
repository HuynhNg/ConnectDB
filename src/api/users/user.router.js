import express from 'express';
import UserController from './user.controller';

const route = express.Router();

route.get('/', UserController.getAllUsers) 
route.get('/:id', UserController.getByID)
route.post('/', UserController.PostUser)
route.put('/:id', UserController.PutUser)
route.delete('/:id', UserController.DeleteUser)

export default route;
import userService from "./user.service.js";

class UserController {
    getAllUsers(req, res,next) {
        const users = userService.getAll(); 
        return res.status(200).send(users);
    };

    getByID(req, res,next) {
        const id = parseInt(req.params.id);
        const user = userService.getByID(id);
        return res.status(200).send(user);
    }

    PostUser(req,res,next){
        const NewUser = {
            name: req.body.name,
            Age: req.body.Age
        }
        return res.status(201).send(userService.PostUser(NewUser));
    }

    PutUser(req,res,next){
        const id = parseInt(req.params.id);
        const User = {
            name: req.body.name,
            Age: req.body.Age
        }
        return res.status(201).send(UserService.PutUser(id,User));
    }

    DeleteUser(req,res,next){
        const id = parseInt(req.params.id);
        return res.status(201).send(UserService.DeleteUser(id));
    }
}

export default new UserController();
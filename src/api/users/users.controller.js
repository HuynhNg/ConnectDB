import userService from "./users.service.js";

class UserController {
    async getAllUsers(req, res,next) {
        try{
            const users = await userService.getAll(); 
            // console.log(users);
            return res.status(200).send(users);
        }
        catch(ERR){
            return res.status(500).json({
                success: false,
                message: "Internal Server Error"
            })
        }
    };

    async getByID(req, res,next) {
        try{
            const id = parseInt(req.params.id);
            const user = await userService.getByID(id);
            return res.status(200).send(user);
        }
        catch(ERR){
            return res.status(500).json({
                success: false,
                message: "Internal Server Error"
            })
        }
    }

    async PostUser(req,res,next){
        try{
            const NewUser = {
                Name: req.body.Name,
                Email: req.body.Email,
                Password: req.body.Password,
                Gender: req.body.Gender,
                Age: req.body.Age
            }
            return res.status(201).send(await userService.PostUser(NewUser));
        }
        catch(ERR){
            return res.status(500).json({
                success: false,
                message: "Internal Server Error"
            })
        }
    }

    async PutUser(req,res,next){
        try{
            const id = parseInt(req.params.id);
            const User = {
                Name: req.body.Name,
                Email: req.body.Email,
                Password: req.body.Password,
                Gender: req.body.Gender,
                Age: req.body.Age
            }
            return res.status(201).send(await userService.PutUser(id,User));
        }
        catch(ERR){
            return res.status(500).json({
                success: false,
                message: "Internal Server Error"
            })
        }
    }

    async DeleteUser(req,res,next){
        try{
            const id = parseInt(req.params.id);
            return res.status(201).send(await userService.DeleteUser(id));
        }
        catch(ERR){
            return res.status(500).json({
                success: false,
                message: "Internal Server Error"
            })
        }
    }
}

export default new UserController();
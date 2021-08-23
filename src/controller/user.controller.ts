import {json, Request, Response} from 'express'
import { User } from '../entities/user';
import jwt from 'jsonwebtoken'


class UserController {

    async register (req: Request, res:Response){

            const newUser:any = User.create(req.body)

            if(newUser.userName == null) return res.json("Username null");

            const save = await User.save(newUser);

            res.json(newUser)

    }

    async login (req: Request, res:Response){

            var user = await User.findOne({userName: req.body.userName});

            if (user == null) {
                
                return res.json("this user no exist");
            }

            var passwordValid = user.ComparePassword(req.body.password)

            if (!passwordValid) {
                
                return res.json("this password is incorrect");

            }


           const token = jwt.sign({id: user.id, userName: user.userName}, "TEST", {
                expiresIn: 36000
            })

            res.json(token);


    }
    async list(req:Request, res:Response) {
        
        const list = await User.find();


        return res.json(list);


    }

}


export default new UserController();
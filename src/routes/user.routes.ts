import {Router} from 'express'
import userController from '../controller/user.controller';
import { verifyToken } from '../middlewares/auth.mdw';


const router = Router();

router.post("/user/register", userController.register);
router.post("/user/login", userController.login);

router.get("/user/list", verifyToken, userController.list);

export default router;
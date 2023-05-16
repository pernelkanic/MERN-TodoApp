import  express from "express";
import { createlogin,createregister } from "../controllers/userController.js";

const router = express.Router();

//login route
router.post('/login' , createlogin);
//register route
router.post('/signup' , createregister );



export default router;
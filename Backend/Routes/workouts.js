import  express from "express";
import {getWorkout,singlegetWorkout,createWork, updateWork, deleteWork} from '../controllers/workoutController.js'
import authVerify from "../Middleware/authVerify.js";
const router = express.Router();
//verify first whether the req is authorized
router.use(authVerify);
//then below statements are executed
router.get('/' , getWorkout);
router.get('/:id' , singlegetWorkout);
router.post('/' , createWork );
router.delete('/:id' , deleteWork);
router.patch('/:id' , updateWork);


export default router;
import  express from "express";
import {getWorkout,singlegetWorkout,createWork, updateWork, deleteWork} from '../controllers/workoutController.js'
const router = express.Router();

router.get('/' , getWorkout);
router.get('/:id' , singlegetWorkout);
router.post('/' , createWork );
router.delete('/:id' , deleteWork);
router.patch('/:id' , updateWork);


export default router;
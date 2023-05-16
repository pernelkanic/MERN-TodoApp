import  express  from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from "mongoose";
import workoutRoutes from './Routes/workouts.js';
import userRoutes from './Routes/User.js'
import helmet from 'helmet';
import morgan from "morgan";
dotenv.config();
const app = express();
app.use(cors())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy:"cross-origin"}));
app.use(morgan("common"));
app.disable('etag');

app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

app.use('/api/workouts' , workoutRoutes);
app.use('/api/user' , userRoutes);
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('listening on port ' , process.env.PORT);
    })
})
.catch((err)=>{
    console.log(err);
})
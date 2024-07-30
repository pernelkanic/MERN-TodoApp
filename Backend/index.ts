import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import mongoose from "mongoose";
import morgan from "morgan";
import userRoutes from './Routes/User.js';
import workoutRoutes from './Routes/workouts.js';
import config from './config';
dotenv.config();
const app = express();
app.use(cors())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy:"cross-origin"}));
app.use(morgan("common"));
app.disable('etag');

app.use(express.json());

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PORT: number;
        MONGO_DB_USERNAME: string;
        MONGO_DB_PASSWORD: string;
        SECRET: string;
      }
    }
  }

app.use('/api/workouts' , workoutRoutes);
app.use('/api/user' , userRoutes);

mongoose.connect(config.mongo.url)
.then(()=>{
    app.listen(config.server.port,()=>{
        console.log('listening on port ' , 7000);
    })
})
.catch((err)=>{
    console.log(err);
})
import dotenv from 'dotenv';

dotenv.config();


const MONGO_DB_USERNAME = process.env.MONGO_DB_USERNAME || '';
const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD || '';
const MONGO_URL = `mongodb://localhost:27017`;
const SERVER_PORT = process.env.PORT;
const SECRET = process.env.SECRET;

const config = {
    mongo: {
        url: MONGO_URL,
    },
    server: {
        port: SERVER_PORT,
    },
    jwt_secret:{
        secret: SECRET
    }
};

    config.mongo.url = MONGO_URL;
    config.server.port = SERVER_PORT;
    config.jwt_secret.secret = SECRET;

//EXPORT
export default config;
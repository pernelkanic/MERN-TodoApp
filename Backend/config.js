"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_DB_USERNAME = process.env.MONGO_DB_USERNAME || '';
const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD || '';
const MONGO_URL = `mongodb+srv://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@cluster0.y4slnwe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const SERVER_PORT = process.env.PORT;
const SECRET = process.env.SECRET;
const config = {
    mongo: {
        url: MONGO_URL,
    },
    server: {
        port: SERVER_PORT,
    },
    jwt_secret: {
        secret: SECRET
    }
};
config.mongo.url = MONGO_URL;
config.server.port = SERVER_PORT;
config.jwt_secret.secret = SECRET;
//EXPORT
exports.default = config;

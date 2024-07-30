"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const mongoose_1 = __importDefault(require("mongoose"));
const morgan_1 = __importDefault(require("morgan"));
const User_js_1 = __importDefault(require("./Routes/User.js"));
const workouts_js_1 = __importDefault(require("./Routes/workouts.js"));
const config_1 = __importDefault(require("./config"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use((0, morgan_1.default)("common"));
app.disable('etag');
app.use(express_1.default.json());
app.use('/api/workouts', workouts_js_1.default);
app.use('/api/user', User_js_1.default);
mongoose_1.default.connect(config_1.default.mongo.url)
    .then(() => {
    app.listen(config_1.default.server.port, () => {
        console.log('listening on port ', 7000);
    });
})
    .catch((err) => {
    console.log(err);
});

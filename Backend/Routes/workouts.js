"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authVerify_js_1 = require("../Middleware/authVerify.js");
const workoutController_1 = require("../controllers/workoutController");
const router = express_1.default.Router();
//verify first whether the req is authorized
router.use(authVerify_js_1.authVerify);
//then below statements are executed
router.get('/', workoutController_1.getWorkout);
router.get('/:id', workoutController_1.singlegetWorkout);
router.post('/', workoutController_1.createWork);
router.delete('/:id', workoutController_1.deleteWork);
router.patch('/:id', workoutController_1.updateWork);
exports.default = router;

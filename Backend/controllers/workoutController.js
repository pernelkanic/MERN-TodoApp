"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateWork = exports.deleteWork = exports.createWork = exports.singlegetWorkout = exports.getWorkout = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const workout_js_1 = __importDefault(require("../Models/workout.js"));
const getWorkout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const user_id = (_a = req.user) === null || _a === void 0 ? void 0 : _a._id;
    const todoget = yield workout_js_1.default.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(todoget);
});
exports.getWorkout = getWorkout;
const singlegetWorkout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: "No such todo" });
    }
    const todosingleid = yield workout_js_1.default.findById(id);
    if (!todosingleid) {
        res.status(404).json({ error: "No such todo" });
    }
    res.status(200).json(todosingleid);
});
exports.singlegetWorkout = singlegetWorkout;
const createWork = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const { title, description } = req.body;
    let emptyfield = [];
    if (!title) {
        emptyfield.push('title');
    }
    if (!description) {
        emptyfield.push('description');
    }
    if (emptyfield.length > 0) {
        return res.status(400).json({ error: 'Please enter the required fields', emptyfield });
    }
    try {
        const user_id = (_b = req.user) === null || _b === void 0 ? void 0 : _b._id;
        const todocreate = yield workout_js_1.default.create({ title, description, user_id });
        res.status(200).json(todocreate);
    }
    catch (err) {
        res.status(400).json({ err: err.message });
    }
});
exports.createWork = createWork;
const deleteWork = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: "No such todo" });
    }
    const todo = yield workout_js_1.default.findOneAndDelete({ _id: id });
    if (!todo) {
        return res.status(400).json({ error: 'No such workout' });
    }
    res.status(200).json(todo);
});
exports.deleteWork = deleteWork;
const updateWork = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        res.status(400).json({ error: "No such todo" });
    }
    const todogetid = yield workout_js_1.default.findByIdAndUpdate({ _id: id }, Object.assign({}, req.body));
    res.status(200).json(todogetid);
});
exports.updateWork = updateWork;

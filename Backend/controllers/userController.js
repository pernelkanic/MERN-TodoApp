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
exports.createregister = exports.createlogin = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validator_1 = __importDefault(require("validator"));
const user_js_1 = __importDefault(require("../Models/user.js"));
const config_js_1 = __importDefault(require("../config.js"));
const createToken = (_id) => {
    return jsonwebtoken_1.default.sign({ _id: _id }, config_js_1.default.jwt_secret.secret, { expiresIn: '3d' });
};
//login user
const createlogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            throw Error('All fields must be filled');
        }
        const us = yield user_js_1.default.findOne({ email });
        if (!us) {
            throw Error('Invalid Email');
        }
        const pass = yield bcrypt_1.default.compare(password, us.password);
        if (!pass) {
            throw Error('Incorrect Password');
        }
        const token = createToken(us._id);
        res.status(200).json({ email, token });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.createlogin = createlogin;
//register user
const createregister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, name } = req.body;
    try {
        if (!email || !password || !name) {
            throw new Error('All fields must be filled');
        }
        if (!validator_1.default.isEmail(email)) {
            throw new Error('Email is not valid');
        }
        if (password.length < 6) {
            throw new Error('Password is not strong enough');
        }
        const exist = yield user_js_1.default.findOne({ email });
        if (exist) {
            throw new Error('Email already in use');
        }
        const salt = yield bcrypt_1.default.genSalt(10);
        const hash = yield bcrypt_1.default.hash(password, salt);
        const reg = yield user_js_1.default.create({ name, email, password: hash });
        const token = createToken(reg._id);
        res.status(200).json({ email, token });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.createregister = createregister;

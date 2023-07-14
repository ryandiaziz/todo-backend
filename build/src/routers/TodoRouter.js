"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoController_1 = __importDefault(require("../controllers/todoController"));
const router = (0, express_1.Router)();
const todoController = new todoController_1.default();
router.post('/', (res) => {
    res.send('Welcome to To-do list API');
});
router.post('/todos', todoController.createTodo);
router.get('/todos', todoController.getAllTodo);
router.get('/todos/:id', todoController.getTodoById);
router.delete('/todos/:id', todoController.deteleTodo);
router.put('/todos/:id', todoController.updateTodo);
exports.default = router;

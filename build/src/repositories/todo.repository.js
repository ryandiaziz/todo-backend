"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_model_1 = require("../models/todo.model");
const utils_1 = __importDefault(require("../utils/utils"));
class TodoRepository {
    constructor() {
        this.utils = new utils_1.default();
    }
    async getAll() {
        return todo_model_1.Todo.findAll();
    }
    async getOneById(id) {
        return todo_model_1.Todo.findByPk(id);
    }
    async create(title) {
        const generatedUUID = await this.utils.generateUUID();
        return todo_model_1.Todo.create({ id: generatedUUID, title });
    }
    async update(id, title, completed) {
        const existingTodo = await todo_model_1.Todo.findByPk(id);
        if (existingTodo) {
            return existingTodo.update({ title, completed });
        }
        return null;
    }
    async delete(id) {
        const isDeleted = await todo_model_1.Todo.destroy({ where: { id } });
        return isDeleted > 0;
    }
}
exports.default = TodoRepository;

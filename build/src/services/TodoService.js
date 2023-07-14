"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todoRepository_1 = __importDefault(require("../repositories/todoRepository"));
class TodoService {
    constructor() {
        this.todoRepository = new todoRepository_1.default();
    }
    async getAllTodos() {
        return this.todoRepository.getAll();
    }
    async getTodoById(id) {
        return this.todoRepository.getOneById(id);
    }
    async createTodo(title) {
        return this.todoRepository.create(title);
    }
    async updateTodo(id, title, completed) {
        return this.todoRepository.update(id, title, completed);
    }
    async deleteTodo(id) {
        return this.todoRepository.delete(id);
    }
}
exports.default = TodoService;

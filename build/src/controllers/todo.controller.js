"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_service_1 = __importDefault(require("../services/todo.service"));
const todoService = new todo_service_1.default();
class TodoController {
    async createTodo(req, res) {
        const { title } = req.body;
        const newTodo = await todoService.createTodo(title);
        if (newTodo) {
            res
                .status(201)
                .json({
                status: "success",
                message: "todo created successfully",
                data: newTodo
            });
        }
    }
    async deteleTodo(req, res) {
        const { id } = req.params;
        const existingTodo = await todoService.getTodoById(id);
        if (existingTodo) {
            const isDeletedTodo = await todoService.deleteTodo(id);
            if (isDeletedTodo) {
                return res
                    .status(200)
                    .json({
                    status: "success",
                    message: "todo deleted successfully",
                    data: existingTodo
                });
            }
        }
        else {
            return res
                .status(404)
                .json({
                status: "failed",
                message: "todo not found"
            });
        }
    }
    async getAllTodo(req, res) {
        try {
            const todoList = await todoService.getAllTodos();
            if (todoList.length == 0) {
                return res
                    .status(200)
                    .json({
                    status: "success",
                    message: "todo list is empty"
                });
            }
            else {
                return res
                    .status(200)
                    .json({
                    status: "success",
                    message: "todo list fetched successfully",
                    data: todoList
                });
            }
        }
        catch (error) {
            return res
                .status(500)
                .json({
                status: "failed",
                message: error
            });
        }
    }
    async getTodoById(req, res) {
        const { id } = req.params;
        const existingTodo = await todoService.getTodoById(id);
        if (existingTodo) {
            res
                .status(200)
                .json({
                status: "success",
                message: 'todo fetched successfully',
                data: existingTodo
            });
        }
        else {
            res
                .status(404)
                .json({
                status: 'failed',
                message: `todo ${id} not found`
            });
        }
    }
    async updateTodo(req, res) {
        const { id } = req.params;
        const { title, completed } = req.body;
        const updatedTodo = await todoService.updateTodo(id, title, completed);
        if (updatedTodo) {
            return res
                .status(200)
                .json({
                status: "success",
                message: "todo updated successfully",
                data: updatedTodo
            });
        }
    }
}
exports.default = TodoController;

import { Request, RequestHandler, Response } from "express";
import TodoService from "../services/todo.service";
import { Todo } from "../models/todo.model";

const todoService = new TodoService();

class TodoController {

    async createTodo(req: Request, res: Response) {
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

    async deleteTodo(req: Request, res: Response) {
        const { id } = req.params;
        const existingTodo: Todo | null = await todoService.getTodoById(id);
        if (existingTodo) {
            const isDeletedTodo: boolean = await todoService.deleteTodo(id);
            if (isDeletedTodo) {
                return res
                    .status(200)
                    .json({
                        status: "success",
                        message: "todo deleted successfully",
                        data: existingTodo
                    });
            }
        } else {
            return res
                .status(404)
                .json({
                    status: "failed",
                    message: "todo not found"
                });
        }
    }

    async getAllTodo(req: Request, res: Response) {
        try {
            const todoList: Todo[] = await todoService.getAllTodos();
            if (todoList.length == 0) {
                return res
                    .status(200)
                    .json({
                        status: "success",
                        message: "todo list is empty"
                    });
            } else {
                return res
                    .status(200)
                    .json({
                        status: "success",
                        message: "todo list fetched successfully",
                        data: todoList
                    });
            }
        } catch (error) {
            return res
                .status(500)
                .json({
                    status: "failed",
                    message: error
                });
        }
    }

    async getTodoById(req: Request, res: Response) {
        const { id } = req.params;
        const existingTodo: Todo | null = await todoService.getTodoById(id);
        if (existingTodo) {
            res
                .status(200)
                .json({
                    status: "success",
                    message: 'todo fetched successfully',
                    data: existingTodo
                });
        } else {
            res
                .status(404)
                .json({
                    status: 'failed',
                    message: `todo ${id} not found`
                });
        }
    }

    async updateTodo(req: Request, res: Response) {
        const { id } = req.params;
        const { title, completed } = req.body;
        const updatedTodo: Todo | null = await todoService.updateTodo(id, title, completed);
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

export default TodoController;
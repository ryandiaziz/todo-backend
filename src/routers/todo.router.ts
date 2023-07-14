import { Router } from "express";
import TodoController from "../controllers/todo.controller";

const router = Router();
const todoController = new TodoController();

router.post('/', (res: any) => {
    res.send('Welcome to To-do list API');
});

router.post('/todos', todoController.createTodo);
router.get('/todos', todoController.getAllTodo);
router.get('/todos/:id', todoController.getTodoById);
router.delete('/todos/:id', todoController.deteleTodo);
router.put('/todos/:id', todoController.updateTodo);

export default router;
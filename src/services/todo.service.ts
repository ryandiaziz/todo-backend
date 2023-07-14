import TodoRepository from "../repositories/todo.repository";


class TodoService {

    private todoRepository: TodoRepository;

    constructor() {
        this.todoRepository = new TodoRepository();
    }

    async getAllTodos() {
        return this.todoRepository.getAll();
    }

    async getTodoById(id: string) {
        return this.todoRepository.getOneById(id);
    }

    async createTodo(title: string) {
        return this.todoRepository.create(title);
    }

    async updateTodo(id: string, title: string, completed: boolean) {
        return this.todoRepository.update(id, title, completed);
    }

    async deleteTodo(id: string) {
        return this.todoRepository.delete(id);
    }
}

export default TodoService;
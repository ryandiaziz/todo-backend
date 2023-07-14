import { Todo } from "../models/todo.model";
import Utils from "../utils/utils";


class TodoRepository {
    private utils: Utils;

    constructor() {
        this.utils = new Utils();
    }

    async getAll(): Promise<Todo[]> {
        return Todo.findAll();
    }

    async getOneById(id: string): Promise<Todo | null> {
        return Todo.findByPk(id);
    }

    async create(title: string): Promise<Todo> {
        const generatedUUID = await this.utils.generateUUID();
        return Todo.create({ id: generatedUUID, title });
    }

    async update(id: string, title: string, completed: boolean) {
        const existingTodo = await Todo.findByPk(id);
        if (existingTodo) {
            return existingTodo.update({ title, completed });
        }
        return null;
    }

    async delete(id: string): Promise<boolean> {
        const isDeleted = await Todo.destroy({ where: { id } });
        return isDeleted > 0;
    }
}


export default TodoRepository;
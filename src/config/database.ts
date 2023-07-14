import { Sequelize } from 'sequelize-typescript'
import 'dotenv/config';
import { Todo } from '../models/todo.model';

const connection = new Sequelize({
    dialect: 'postgres',
    host: process.env.HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [Todo]
});

export default connection;
import {Sequelize} from 'sequelize-typescript'
import 'dotenv/config';
import {Todo} from '../models/todo.model';

const connection = new Sequelize({
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    models: [Todo],
    dialect: 'postgres',
    dialectOptions:{
        ssl:{
            require: true,
            rejectUnauthorized: false
        }
    }

});

export default connection;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
require("dotenv/config");
const todo_model_1 = require("../models/todo.model");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: 'postgres',
    host: process.env.HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [todo_model_1.Todo]
});
exports.default = connection;

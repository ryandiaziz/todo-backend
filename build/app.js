"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const body_parser_1 = require("body-parser");
const todo_router_1 = __importDefault(require("./src/routers/todo.router"));
const database_1 = __importDefault(require("./src/config/database"));
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use('/api', todo_router_1.default);
database_1.default
    .sync()
    .then(() => {
    console.log("Database successfully connected");
})
    .catch((error) => {
    console.log('error: ', error);
});
app.listen(port, () => {
    console.log(`Running at ${port} 🚀`);
});

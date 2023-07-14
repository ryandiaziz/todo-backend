import express from "express";
import 'dotenv/config';
import { json, urlencoded } from "body-parser";
import router from "./src/routers/todo.router";
import connection from "./src/config/database";

const app = express();
const port = process.env.PORT;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/api', router);
connection
    .sync()
    .then(() => {
        console.log("Database successfully connected");
    })
    .catch((error) => {
        console.log('error: ', error);
    })
app.listen(port, () => {
    console.log(`Running at ${port} 🚀`);
});
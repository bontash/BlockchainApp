import Koa from "koa"
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import http, {createServer} from "http"
import RouterConfig from "./router/Router";
import Controller from "./controllers/Controller";
import HashService from "./service/HashService";
import TransactionService from "./service/TransactionService";
import * as dotenv from 'dotenv';
import {connectToDatabase} from "./repository/config/mongoose/setup";
import DataProvider from "./repository/DataProvider";

dotenv.config();

const app = new Koa();
const server = createServer(app);
const port: number = 3001

app.use(cors())
app.use(bodyParser())


const router = new Router();

const services = {
    hashService: new HashService(),
    transactionService: new TransactionService(new DataProvider())
};

const controller = new Controller(services);

new RouterConfig(router,controller);

// server.on('connection',(err, socket) => {
//     connectToDatabase().then(() => {
//         console.log("connected");
//     })
// })

app.use(router.routes())

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})


import Koa from "koa"
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import http from "http"
import RouterConfig from "./router/Router";
const app = new Koa()
const server = http.createServer(app.callback())
const port: number = 3001

app.use(cors())
app.use(bodyParser())

const router = new Router();
new RouterConfig(router);
app.use(router.routes())

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})


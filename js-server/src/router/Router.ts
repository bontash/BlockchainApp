import Controller from "../controllers/Controller";

export default class Router {
    controller: Controller

    public constructor(router, controller) {
        this.controller = controller
        this.initEndpointMapping(router)
    }


    private initEndpointMapping(router) {
        router.post("/hashing", ({request, response}) => {
            try {
                const result = this.controller.encrypt(request.body);
                response.status = 200;
                response.body = result;
            } catch (e) {
                response.status = 500;
                response.body = {error: "Internal server error"};
            }
        })

        router.post("/ethereumEncryption", ({request, response}) => {
            try {
                const result = this.controller.ethereumEncryption(request.body);
                response.status = 200;
                response.body = result;
            } catch (e) {
                response.status = 500;
                response.body = {error: "Internal server error"};
            }
        })

        router.post("/bitcoinEncryption", ({request, response}) => {
            try {
                const result = this.controller.bitcoinEncryption(request.body);
                response.status = 200;
                response.body = result;
            } catch (e) {
                response.status = 500;
                response.body = {error: "Internal server error"};
            }
        })

        router.post("/ethereumTransaction", async ({request, response}) => {
            try {
                const result = await this.controller.createEthereumTransaction(request.body);
                response.status = 200;
                response.body = result;
            } catch (e) {
                response.status = 500;
                response.body = {error: "Internal server error"};
            }
        })

        router.get("/ethereumTransaction", async (ctx) => {
            try {
                const result = await this.controller.getAllEthereumTransactions(ctx.query.senderAccountID);
                ctx.response.status = 200;
                ctx.response.body = result;
            } catch (e) {
                ctx.status = 500;
                ctx.body = {error: "Internal server error"};
            }
        })

        router.post("/bitcoinTransaction",async ({request, response}) => {
            try {
                const result = await this.controller.sendBitcoinTransaction(request.body.tx_hex, request.body.senderAccountID, request.body.receiverAccountID, request.body.value, request.body.satoshisUsed, request.body.script);
                response.status = 200;
                response.body = result;
            } catch (e) {
                response.status = 500;
                response.body = {error: "Internal server error"};
            }
        })

        router.get("/bitcoinTransaction", async (ctx) => {
            try {
                const result = await this.controller.getAllBitcoinTransactions(ctx.query.senderAccountID);
                ctx.status = 200;
                ctx.body = result;
            } catch(e) {
                ctx.status = 500;
                ctx.body = {error: "Internal server error"};
            }
        })
    }
}
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

        // router.post("/ethereumTransaction", ({request, response}) => {
        //     try {
        //         const result = this.controller.ethereumTransaction(request.body);
        //         response.status = 200;
        //         response.body = result;
        //     } catch (e) {
        //         response.status = 500;
        //         response.body = {error: "Internal server error"};
        //     }
        // })

        router.post("/bitcoinTransaction",async ({request, response}) => {
            try {
                const result = await this.controller.sendBitcoinTransaction(request.body);
                response.status = 200;
                response.body = result;
            } catch (e) {
                response.status = 500;
                response.body = {error: "Internal server error"};
            }
        })

        router.get("/bitcoinTransaction", async ({response}) => {
            try {
                const result = await this.controller.getAllBitcoinTransactions();
                response.status = 200;
                response.body = result;
                console.log("Response body:", response.body);
                console.log("Response status:", response.status);
            } catch(e) {
                response.status = 500;
                response.body = {error: "Internal server error"};
            }
        })
    }
}
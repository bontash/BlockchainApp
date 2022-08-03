import Controller from "../controllers/Controller";

export default class Router {
    controller: Controller

    public constructor(router) {
        this.controller = new Controller()
        this.initEndpointMapping(router)
    }


    private initEndpointMapping(router) {
        router.post("/hashing", ({request,response}) => {
            try {
                const result = this.controller.encrypt(request.body);
                response.status = 200;
                response.body = result;
            } catch (e) {
                response.status = 500;
                response.body = {error: "Internal server error"};
            }
        })
    }
}
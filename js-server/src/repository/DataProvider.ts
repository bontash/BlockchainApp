import axios from "axios";

export default class DataProvider {

    private sochainNetwork = "BTCTEST";

    constructor() {
    }

    public async sendTransaction(tx_hex: string) {
        const instance = axios.create();

        const body = {
            method: "POST",
            url: `https://chain.so/api/v2/send_tx/${this.sochainNetwork}`,
            data: {
                tx_hex: tx_hex,
            }
        }
        const result = await instance(body).catch((e) => console.log(e));
        return result?.data;
    }

    public findTransaction(transactionId: string) {
        return;
    }
}
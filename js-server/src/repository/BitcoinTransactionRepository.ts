import {SchemaList} from "./config/mongoose/setup";
import {IBitcoinTransaction} from "./config/schemas/BitcoinTransaction";

export default class BitcoinTransactionRepository {
    private schema: SchemaList;

    constructor(schema) {
        this.schema = schema;
    }

    async createBitcoinTransaction(bitcoinTransaction: IBitcoinTransaction): Promise<any> {
        return await this.schema.bitcoinTransactions?.insertMany([bitcoinTransaction]).then(data => {
            if (data.length > 1) return data[0];
            return null;
        }).catch(err => console.log(err));
    }

    async getAllBitcoinTransactions(senderAccountID: string): Promise<any> {
        const response = await this.schema.bitcoinTransactions?.find({senderAccountID: senderAccountID});
        console.log("Repo: ", response);
        return response;
    }
}
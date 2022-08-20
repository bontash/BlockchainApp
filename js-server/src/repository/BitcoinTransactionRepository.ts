import {SchemaList} from "./config/mongoose/setup";
import {ITransaction} from "./config/schemas/BlockchainTransaction";

export default class BitcoinTransactionRepository {
    private schema: SchemaList;

    constructor(schema) {
        this.schema = schema;
    }

    async createBitcoinTransaction(bitcoinTransaction: ITransaction): Promise<any> {
        return await this.schema.bitcoinTransactions?.insertMany([bitcoinTransaction]).then(data => {
            if (data.length > 1) return data[0];
            return null;
        }).catch(err => console.log(err));
    }

    async getAllBitcoinTransactions(): Promise<any> {
        const response = await this.schema.bitcoinTransactions?.find();
        return response;
    }
}
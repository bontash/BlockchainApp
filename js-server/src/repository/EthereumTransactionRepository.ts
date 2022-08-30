import {SchemaList} from "./config/mongoose/setup";
import {IEthereumTransaction} from "./config/schemas/EthereumTransaction";
import {EthereumTransactionInput} from "../types/TransactionInput";

export default class EthereumTransactionRepository {
    private schema: SchemaList;

    constructor(schema) {
        this.schema = schema;
    }

    async createEthereumTransaction(ethereumTransaction: IEthereumTransaction): Promise<any> {
        return await this.schema.ethereumTransactions?.insertMany([ethereumTransaction]).then(data => {
            if (data.length > 1) return data[0];
            return null;
        }).catch(err => console.log(err));
    }

    async getAllEthereumTransactions(senderAccountID: string): Promise<any> {
        const response = await this.schema.ethereumTransactions?.find({senderAccountID: senderAccountID});
        return response;
    }
}
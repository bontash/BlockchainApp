import {SchemaList} from "./config/mongoose/setup";
import {ITransaction} from "./config/schemas/BlockchainTransaction";

export default class EthereumTransactionRepository {
    private schema: SchemaList;

    constructor(schema) {
        this.schema = schema;
    }

    async createEthereumTransaction(ethereumTransaction: ITransaction[]): Promise<ITransaction[]> {
        // @ts-ignore
        return await this.schema.ethereumTransactions?.insertMany([ethereumTransaction]).then(data => {
            if (data.length > 1) return data[0];
            return null;
        }).catch(err => console.log(err));
    }

    async getEthereumTransactionById(ethereumTransactionId: string): Promise<ITransaction[]> {
        // @ts-ignore
        return await this.schema.ethereumTransactions.findById(ethereumTransactionId);
    }
}
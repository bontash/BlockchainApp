import {SchemaList} from "./config/mongoose/setup";
import {ITransaction} from "./config/schemas/BlockchainTransaction";

export default class EthereumTransactionRepository {
    private schema: SchemaList;

    constructor(schema) {
        this.schema = schema;
    }

    async createEthereumTransactions(ethereumTransactions: ITransaction[]): Promise<ITransaction[]> {
        // @ts-ignore
        return await this.schema.ethereumTransactions.insertMany(ethereumTransactions);
    }

    async getEthereumTransactionById(ethereumTransactionId: string): Promise<ITransaction[]> {
        // @ts-ignore
        return await this.schema.ethereumTransactions.findById(ethereumTransactionId);
    }
}
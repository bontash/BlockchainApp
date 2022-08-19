import {SchemaList} from "./config/mongoose/setup";
import {ITransaction} from "./config/schemas/BlockchainTransaction";

export default class BitcoinTransactionRepository {
    private schema: SchemaList;

    constructor(schema) {
        this.schema = schema;
    }

    async createBitcoinTransactions(bitcoinTransactions: ITransaction[]): Promise<ITransaction[]> {
        // @ts-ignore
        return await this.schema.bitcoinTransactions.insertMany(bitcoinTransactions);
    }

    async getBitcoinTransactionById(bitcoinTransactionId: string): Promise<ITransaction[]> {
        // @ts-ignore
        return await this.schema.bitcoinTransactions.findById(bitcoinTransactionId);
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
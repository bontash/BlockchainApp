import {SchemaList} from "./config/mongoose/setup";
import {ITransaction} from "./config/schemas/BlockchainTransaction";

export default class EthereumTransactionRepository {
    private schema: SchemaList;

    constructor(schema) {
        this.schema = schema;
    }

    async createEthereumTransaction(ethereumTransaction: ITransaction): Promise<any> {
        console.log("Repo: ",ethereumTransaction);
        return await this.schema.ethereumTransactions?.insertMany([ethereumTransaction]).then(data => {
            if (data.length > 1) return data[0];
            return null;
        }).catch(err => console.log(err));
    }

    async getAllEthereumTransactions(): Promise<any> {
        const response = await this.schema.ethereumTransactions?.find();
        return response;
    }
}
import DataProvider from "../repository/DataProvider";
import {RepositoryConfig} from "../repository/config/types";


export default class TransactionService {
    private dataProvider: DataProvider;
    private repositories: RepositoryConfig;

    constructor(dataProvider: DataProvider, repositories: RepositoryConfig) {
        this.dataProvider = dataProvider;
        this.repositories = repositories;
    }

    public async sendBitcoinTransaction(tx_hex: string, accountID: string): Promise<any> {
        const responseObject = await this.dataProvider.sendTransaction(tx_hex);

        if (responseObject == null)
            return responseObject;

        this.repositories.BitcoinTransaction?.createBitcoinTransaction({
            transactionID: responseObject.data.txid,
            accountID: accountID
        });

        return responseObject
    }

    public async getAllBitcoinTransactions(): Promise<any> {
        const response = await this.repositories.BitcoinTransaction?.getAllBitcoinTransactions();
        return response;
    }

    public async createEthereumTransaction(transactionId: string, accountId: string): Promise<any> {
        console.log("Service: ",transactionId);
        return this.repositories.EthereumTransaction?.createEthereumTransaction({
            transactionID: transactionId,
            accountID: accountId
        })
    }

    public async getAllEthereumTransactions(): Promise<any> {
        const response = await this.repositories.EthereumTransaction?.getAllEthereumTransactions();
        return response;
    }


}
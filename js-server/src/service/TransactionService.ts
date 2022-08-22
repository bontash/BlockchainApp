import DataProvider from "../repository/DataProvider";
import {RepositoryConfig} from "../repository/config/types";
import {EthereumInput} from "../types/EthereumInput";
import {EthereumTransactionInput} from "../types/TransactionInput";


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

    public async createEthereumTransaction(transaction: EthereumTransactionInput): Promise<any> {
        const data = this.repositories.EthereumTransaction?.createEthereumTransaction({
            transactionID: transaction.transactionID,
            senderAccountID: transaction.senderAccountID,
            receiverAccountID: transaction.receiverAccountID,
            value: transaction.value,
            blockNr: transaction.blockNr,
            gasUsed: transaction.gasUsed
        });
        return data;
    }

    public async getAllEthereumTransactions(senderAccountID: string): Promise<any> {
        const response = await this.repositories.EthereumTransaction?.getAllEthereumTransactions(senderAccountID);
        console.log("Service get: ", response);
        return response;
    }


}
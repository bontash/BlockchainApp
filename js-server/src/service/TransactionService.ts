import DataProvider from "../repository/DataProvider";


export default class TransactionService {
    private dataProvider: DataProvider;

    constructor(dataProvider: DataProvider) {
        this.dataProvider = dataProvider;

    }

    public async addBitcoinTransaction(tx_hex): Promise<any> {
        return await this.dataProvider.sendTransaction(tx_hex);
    }
}
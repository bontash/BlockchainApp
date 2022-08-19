import * as dotenv from 'dotenv'
import * as mongoose from "mongoose";
import {ITransaction, transactionSchema} from "../schemas/BlockchainTransaction";

export type SchemaList = {
    bitcoinTransactions?: mongoose.Model<ITransaction>,
    ethereumTransactions?: mongoose.Model<ITransaction>
}

export const schemaList: SchemaList = {};

export const schemaNames: {
    bitcoinTransactions: string,
    ethereumTransactions: string
} = {
    bitcoinTransactions: 'BitcoinTransactions',
    ethereumTransactions: 'EthereumTransactions'
}

export async function connectToDatabase() {
    dotenv.config();
    const dbConnection = process.env.DB_CONNECTION;
    //@ts-ignore
    mongoose.connect(dbConnection, {useNewUrlParser: true});

    const bitcoinTransactionCollection = new mongoose.Schema<ITransaction>(transactionSchema);
    const ethereumTransactionCollection = new mongoose.Schema<ITransaction>(transactionSchema);
    schemaList.bitcoinTransactions = mongoose.model(schemaNames.bitcoinTransactions, bitcoinTransactionCollection);
    schemaList.ethereumTransactions = mongoose.model(schemaNames.ethereumTransactions, ethereumTransactionCollection);
}
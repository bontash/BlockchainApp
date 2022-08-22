import * as dotenv from 'dotenv'
import mongoose from "mongoose";
import {IBitcoinTransaction, bitcoinTransactionSchema} from "../schemas/BitcoinTransaction";
import {IEthereumTransaction, ethereumTransactionSchema} from "../schemas/EthereumTransaction"

export type SchemaList = {
    bitcoinTransactions?: mongoose.Model<IBitcoinTransaction>,
    ethereumTransactions?: mongoose.Model<IEthereumTransaction>
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

    const bitcoinTransactionCollection = new mongoose.Schema<IBitcoinTransaction>(bitcoinTransactionSchema);
    const ethereumTransactionCollection = new mongoose.Schema<IEthereumTransaction>(ethereumTransactionSchema);
    schemaList.bitcoinTransactions = mongoose.model<IBitcoinTransaction>(schemaNames.bitcoinTransactions, bitcoinTransactionCollection);
    schemaList.ethereumTransactions = mongoose.model<IEthereumTransaction>(schemaNames.ethereumTransactions, ethereumTransactionCollection);
}
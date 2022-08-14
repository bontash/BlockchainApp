import * as dotenv from 'dotenv'
import * as mongoose from "mongoose";
import {ITransaction, transactionSchema} from "../schemas/Transaction";

export type SchemaList = {
    transactions?: mongoose.Model<ITransaction>
}

export const schemaList: SchemaList = {};

export const schemaNames: {
    transactions: string
} = {
    transactions: 'Transactions'
}

export async function connectToDatabase() {
    dotenv.config();
    const dbConnection = process.env.DB_CONNECTION;
    //@ts-ignore
    mongoose.connect(dbConnection, {useNewUrlParser: true});

    const transactionCollection = new mongoose.Schema<ITransaction>(transactionSchema);
    schemaList.transactions = mongoose.model(schemaNames.transactions, transactionCollection);
}
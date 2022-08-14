import mongoose, {Schema, Types} from "mongoose";

export interface ITransaction {
    _id?: Types.ObjectId,
    accountID?: string,
    transactionID?: string
}

export const transactionSchema = {
    accountID: {type: String, required: true},
    transactionID: {type: String, required: true, unique: true}
}
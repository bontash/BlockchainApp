import {Types} from "mongoose";

export interface IBitcoinTransaction {
    _id?: Types.ObjectId,
    accountID?: string,
    transactionID?: string
}

export const bitcoinTransactionSchema = {
    accountID: {type: String, required: true},
    transactionID: {type: String, required: true, unique: true}
}



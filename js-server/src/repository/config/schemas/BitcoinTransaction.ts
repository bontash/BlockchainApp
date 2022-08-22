import {Types} from "mongoose";

export interface IBitcoinTransaction {
    _id?: Types.ObjectId,
    senderAccountID?: string,
    transactionID?: string,
    receiverAccountID?: string,
    value?: string,
    satoshisUsed?: number,
    script?: string
}

export const bitcoinTransactionSchema = {
    senderAccountID: {type: String, required: true},
    transactionID: {type: String, required: true, unique: true},
    receiverAccountID: {type: String, required: true},
    value: {type: String, required: true},
    satoshisUsed: {type: String, required: true},
    script: {type: String, required: true}
}



import {Types} from "mongoose";

export interface IEthereumTransaction {
    _id?: Types.ObjectId,
    senderAccountID?: string,
    transactionID?: string,
    receiverAccountID?: string,
    value?: string,
    gasUsed?: number,
    blockNr?: number
}

export const ethereumTransactionSchema = {
    senderAccountID: {type: String, required: true},
    transactionID: {type: String, required: true, unique: true},
    gasUsed: {type: Number, required: true},
    blockNr: {type: Number, required: true},
    receiverAccountID: {type: String, required: true},
    value: {type: String, required: true}
}
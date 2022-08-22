export type BitcoinTransactionInput = {
    tx_hex: string,
    accountID:string
}

export type EthereumTransactionInput = {
    transactionID: string,
    senderAccountID: string,
    receiverAccountID: string,
    value: string,
    blockNr: number,
    gasUsed: number
}
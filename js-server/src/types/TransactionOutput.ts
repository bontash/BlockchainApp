export type BitcoinTransactionOutput = {
    transactionId: string,
    error?: string
}

export type GetBitcoinTransactionsOutput = {
    bitcoinTransactions?: BitcoinColumns[],
    error?: string
}
type BitcoinColumns = {
    id: any,
    transactionId: string,
    senderAccount: string
    idk: any
}

export type GetEthereumTransactionsOutput = {
    ethereumTransactions?: EthereumColumns[],
    error?: string
}

type EthereumColumns = {
    id: any,
    transactionId: string,
    senderAccount: string
    idk: any
}
export type EthereumInput = {
    blockNr: number,
    nonce: number,
    timestamp: string,
    value: string,
    gasLimit: number,
    gasUsed: number,
    prevBlockHash: string,
    hash: string
}
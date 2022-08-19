import BitcoinTransactionRepository from "../BitcoinTransactionRepository";
import EthereumTransactionRepository from "../EthereumTransactionRepository";


export type RepositoryConfig = {
    BitcoinTransaction?: BitcoinTransactionRepository,
    EthereumTransaction?: EthereumTransactionRepository
}
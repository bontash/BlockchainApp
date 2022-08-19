import {RepositoryConfig} from "./types";
import {schemaList} from "./mongoose/setup";
import BitcoinTransactionRepository from "../BitcoinTransactionRepository";
import EthereumTransactionRepository from "../EthereumTransactionRepository";


export async function repositoryConfig() {
    const repository: RepositoryConfig = {};
    repository.BitcoinTransaction = new BitcoinTransactionRepository(schemaList);
    repository.EthereumTransaction = new EthereumTransactionRepository(schemaList);

    return repository;
}
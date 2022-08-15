import {HashInput} from "../types/HashInput";
import {HashOutput, HashBenchmarks} from "../types/HashOutput";
import {BitcoinInput} from "../types/BitcoinInput";
import {toHex, utf8ToBytes} from "ethereum-cryptography/utils";
import {changeEndianness} from "../utils/changeEndianness";
import {BitcoinOutput} from "../types/BitcoinOutput";
import {EthereumInput} from "../types/EthereumInput";
import {EthereumOutput} from "../types/EthereumOutput";
import RLP from "rlp";
import {BitcoinTransactionInput, TransactionInput} from "../types/TransactionInput";
import {TransactionOutput} from "../types/TransactionOutput";
import HashService from "../service/HashService";
import TransactionService from "../service/TransactionService";

export default class Controller {
    services: { hashService:HashService, transactionService:TransactionService };
    hashServiceFunctions: any;

    public constructor(services) {
        this.services = services;
        this.initServiceFunctions();
    }

    private initServiceFunctions() {
        this.hashServiceFunctions = {
            "simpleSha256": this.services.hashService.hashToSimpleSHA256,
            "simpleRipemd160": this.services.hashService.hashToSimpleRIPEMD160,
            "keccak256": this.services.hashService.hashToKeccak256,
            "doubleSha256": this.services.hashService.hashToDoubleSHA256,
            "shaAndRipe": this.services.hashService.hashToSHAandRIPE
        }
    }

    public encrypt({stringToHash, hashTypes}: HashInput): HashOutput {
        console.log(stringToHash);
        const hashResponse: HashBenchmarks[] = [];
        console.log(hashTypes)

        hashTypes.forEach(hash => {
            const hashFunc: any = this.hashServiceFunctions[hash]
            const benchmarks = hashFunc.apply(null, [stringToHash]);
            hashResponse.push(benchmarks);
        })

        return {hashResponse}
    }

    public ethereumEncryption(input: EthereumInput): EthereumOutput {
        const blockNrHex = changeEndianness(toHex(utf8ToBytes(input.blockNr.toString())));
        const nonceHex = changeEndianness(toHex(utf8ToBytes(input.nonce.toString())));
        const timestampHex = changeEndianness(toHex(utf8ToBytes(input.timestamp)));
        const valueHex = changeEndianness(toHex(utf8ToBytes(input.value.toString())));
        const prevBlockHashHex = changeEndianness(toHex(utf8ToBytes(input.prevBlockHash)));
        const gasLimitHex = changeEndianness(toHex(utf8ToBytes(input.gasLimit.toString())));
        const gasUsedHex = changeEndianness(toHex(utf8ToBytes(input.gasUsed.toString())));
        const rlpString = toHex(RLP.encode(blockNrHex + nonceHex + timestampHex + valueHex + gasLimitHex + gasUsedHex + prevBlockHashHex));
        const finalHash = this.services.hashService.hashToKeccak256(rlpString).hashedString;
        return {finalHash};
    }


    public bitcoinEncryption(input: BitcoinInput): BitcoinOutput {
        const blockNrHex = toHex(utf8ToBytes(input.blockNr.toString()));
        const nonceHex = toHex(utf8ToBytes(input.nonce.toString()));
        const timestampHex = toHex(utf8ToBytes(input.timestamp));
        const valueHex = toHex(utf8ToBytes(input.value.toString()));
        const prevBlockHashHex = toHex(utf8ToBytes(input.prevBlockHash));
        const stringOutput = this.services.hashService.hashToDoubleSHA256(blockNrHex + nonceHex + timestampHex + valueHex + prevBlockHashHex).hashedString;
        const finalHash = changeEndianness(stringOutput);
        return {finalHash};
    }

    public ethereumTransaction({account}: TransactionInput): TransactionOutput {
        return {};
    }

    public async bitcoinTransaction({tx_hex}: BitcoinTransactionInput): Promise<any> {
        return await this.services.transactionService.addBitcoinTransaction(tx_hex);
    }
}

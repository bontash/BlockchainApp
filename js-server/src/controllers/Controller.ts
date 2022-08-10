import Service from "../service/Service";
import {HashInput, HashType} from "../types/HashInput";
import {HashOutput, HashBenchmarks} from "../types/HashOutput";
import {BitcoinInput} from "../types/BitcoinInput";
import {toHex, utf8ToBytes} from "ethereum-cryptography/utils";
import {changeEndianness} from "../utils/changeEndianness";
import {BitcoinOutput} from "../types/BitcoinOutput";

export default class Controller {
    service: Service;
    serviceFunctions: any;

    public constructor() {
        this.service = new Service();
        this.initServiceFunctions();
    }

    private initServiceFunctions() {
        this.serviceFunctions = {
            "simpleSha256": this.service.hashToSimpleSHA256,
            "simpleRipemd160": this.service.hashToSimpleRIPEMD160,
            "keccak256": this.service.hashToKeccak256,
            "doubleSha256": this.service.hashToDoubleSHA256,
            "shaAndRipe": this.service.hashToSHAandRIPE
        }
    }

    public encrypt({stringToHash, hashTypes}: HashInput): HashOutput {
        console.log(stringToHash);
        const hashResponse: HashBenchmarks[] = [];
        console.log(hashTypes)

        hashTypes.forEach(hash => {
            const hashFunc: any = this.serviceFunctions[hash]
            const benchmarks = hashFunc.apply(null, [stringToHash]);
            hashResponse.push(benchmarks);
        })

        return {hashResponse}
    }

    public ethereumEncryption() {
        return;
    }

    public bitcoinEncryption(input:BitcoinInput): BitcoinOutput {
        const blockNrHex = toHex(utf8ToBytes(input.blockNr.toString()));
        const nonceHex = toHex(utf8ToBytes(input.nonce.toString()));
        const timestampHex = toHex(utf8ToBytes(input.timestamp));
        const valueHex = toHex(utf8ToBytes(input.value.toString()));
        const prevBlockHashHex = toHex(utf8ToBytes(input.prevBlockHash));
        const stringOutput = this.service.hashToDoubleSHA256(blockNrHex + nonceHex + timestampHex + valueHex + prevBlockHashHex).hashedString;
        const finalHash = changeEndianness(stringOutput);
        return {finalHash};
    }
}

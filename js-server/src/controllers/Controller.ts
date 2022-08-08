import Service from "../service/Service";
import {HashInput, HashType} from "../types/HashInput";
import {HashOutput, HashBenchmarks} from "../types/HashOutput";

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


}

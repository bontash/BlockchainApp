import {
    sha256DoubleHashing,
    sha256SimpleHashing,
    ripemd160SimpleHashing,
    sha256Ripemd160Hashing
} from "../utils/Bitcoin/BitcoinUtils";
import {HashBenchmarks} from "../types/HashOutput";
import {keccak256Hashing} from "../utils/Ethereum/EthereumUtils";
import {performance} from "perf_hooks";
import {AvalancheEffect} from "../utils/AvalancheEffect";


export default class HashService {

    hashToSimpleSHA256(stringToHash: string): HashBenchmarks {
        const startTime = performance.now();
        const hash = sha256SimpleHashing(stringToHash);
        const endTime = performance.now();
        const hashLength = hash.length;
        const nrBitsHash = 256;
        const timeInterval = endTime - startTime;
        const avalanche = AvalancheEffect(stringToHash, sha256SimpleHashing, hash, nrBitsHash);
        return {
            benchmarks: {executionTime: timeInterval, avalancheEffect: avalanche, length: hashLength},
            hashedString: hash,
            stringToHash,
            typeOfHash: "Simple SHA-256"
        };
    }

    hashToSimpleRIPEMD160(stringToHash: string): HashBenchmarks {
        const startTime = performance.now();
        const hash = ripemd160SimpleHashing(stringToHash);
        const hashLength = hash.length;
        const nrBitsHash = 160;
        const endTime = performance.now();
        const timeInterval = endTime - startTime;
        const avalanche = AvalancheEffect(stringToHash, ripemd160SimpleHashing, hash, nrBitsHash);
        return {
            benchmarks: {executionTime: timeInterval, avalancheEffect: avalanche, length: hashLength},
            hashedString: hash,
            stringToHash,
            typeOfHash: "Simple RIPEMD-160"
        };
    }

    hashToKeccak256(stringToHash: string): HashBenchmarks {
        const startTime = performance.now();
        const hash = keccak256Hashing(stringToHash);
        const endTime = performance.now();
        const timeInterval = endTime - startTime;
        const hashLength = hash.length;
        const nrBitsHash = 256;
        const avalanche = AvalancheEffect(stringToHash, keccak256Hashing, hash, nrBitsHash);
        return {
            benchmarks: {executionTime: timeInterval, avalancheEffect: avalanche, length: hashLength},
            hashedString: hash,
            stringToHash,
            typeOfHash: "Keccak-256"
        };
    }

    hashToDoubleSHA256(stringToHash: string): HashBenchmarks {
        const startTime = performance.now();
        const hash = sha256DoubleHashing(stringToHash);
        const endTime = performance.now();
        const nrBitsHash = 256;
        const hashLength = hash.length;
        const timeInterval = endTime - startTime;
        const avalanche = AvalancheEffect(stringToHash, sha256DoubleHashing, hash, nrBitsHash);
        return {
            benchmarks: {executionTime: timeInterval, avalancheEffect: avalanche, length: hashLength},
            hashedString: hash,
            stringToHash,
            typeOfHash: "Double SHA-256"
        };
    }

    hashToSHAandRIPE(stringToHash: string): HashBenchmarks {
        const startTime = performance.now();
        const hash = sha256Ripemd160Hashing(stringToHash);
        const endTime = performance.now();
        const timeInterval = endTime - startTime;
        const hashLength = hash.length;
        const nrBitsHash = 160;
        const avalanche = AvalancheEffect(stringToHash, sha256Ripemd160Hashing, hash, nrBitsHash);
        return {
            benchmarks: {executionTime: timeInterval, avalancheEffect: avalanche, length: hashLength},
            hashedString: hash,
            stringToHash,
            typeOfHash: "SHA-256 and RIPEMD-160"
        };
    }

}
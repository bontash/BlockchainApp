import {hex2Binary} from "./Hex2Binary"

export const AvalancheEffect = (stringToHash, hashFct, hash, nrOfBits) => {
    let differentBits = 0;
    const stringToHashModified = stringToHash+"a";
    const modifiedStringHash = hashFct(stringToHashModified);
    const stringToHashModifiesBits = hex2Binary(modifiedStringHash);
    const stringToHashBits = hex2Binary(hash);
    for (let i = 0; i < stringToHashBits.length; i++) {
        if (stringToHashBits[i] != stringToHashModifiesBits[i])
            differentBits += 1;
    }
    return (differentBits / nrOfBits) * 100;
}
import {hex2Binary} from "./Hex2Binary"
import {bytesToUtf8, utf8ToBytes} from "ethereum-cryptography/utils";

export const AvalancheEffect = (stringToHash, hashFct, hash, nrOfBits) => {
    let differentBits = 0;
    const stringToHashBytes = utf8ToBytes(stringToHash);
    let modifiedStringBytes = stringToHashBytes;
    modifiedStringBytes[stringToHashBytes.length - 1] = stringToHashBytes[stringToHashBytes.length - 1] ^ 1;
    const modifiedString = bytesToUtf8(modifiedStringBytes);
    const modifiedStringHex = hashFct(modifiedString);
    const modifiedStringHexBits = hex2Binary(modifiedStringHex);
    const hashBits = hex2Binary(hash);
    for (let i = 0; i < hashBits.length; i++) {
        if (hashBits[i] != modifiedStringHexBits[i])
            differentBits += 1;
    }
    return (differentBits / nrOfBits) * 100;
}
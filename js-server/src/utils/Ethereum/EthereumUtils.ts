import {keccak256} from "ethereum-cryptography/keccak";
import {utf8ToBytes, toHex} from "ethereum-cryptography/utils"


export function keccak256Hashing(userString : string) {
    const hash = keccak256(utf8ToBytes(userString));
    return toHex(hash);
}
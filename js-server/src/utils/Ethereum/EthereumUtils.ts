import {keccak256} from "ethereum-cryptography/keccak";
import {utf8ToBytes, toHex, hexToBytes} from "ethereum-cryptography/utils"


export function keccak256Hashing(userString: string) {
    const stringLength = userString.length;
    let hash;
    const pattern_64 = new RegExp('[0-9A-Fa-f]{64}');
    const pattern40 = new RegExp('[0-9A-Fa-f]{40}');
    if ((stringLength === 64 && pattern_64.test(userString)) || (stringLength === 40 && pattern40.test(userString)))
        hash = keccak256(hexToBytes(userString));
    else
        hash = keccak256(utf8ToBytes(userString));
    return toHex(hash);
}
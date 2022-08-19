import {sha256} from "ethereum-cryptography/sha256";
import {toHex, utf8ToBytes, hexToBytes} from "ethereum-cryptography/utils";
import {ripemd160} from "ethereum-cryptography/ripemd160";

export function sha256DoubleHashing(userString: string) {
    const stringLength = userString.length;
    let hash;
    const pattern_64 = new RegExp('[0-9A-Fa-f]{64}');
    const pattern40 = new RegExp('[0-9A-Fa-f]{40}');
    if ((stringLength === 64 && pattern_64.test(userString)) || (stringLength === 40 && pattern40.test(userString)))
        hash = sha256(hexToBytes(userString));
    else
        hash = sha256(utf8ToBytes(userString));
    const finalHash = sha256(hash);
    return toHex(finalHash);
}

export function sha256Ripemd160Hashing(userString: string) {
    const stringLength = userString.length;
    let hash;
    const pattern_64 = new RegExp('[0-9A-Fa-f]{64}');
    const pattern40 = new RegExp('[0-9A-Fa-f]{40}');
    if ((stringLength === 64 && pattern_64.test(userString)) || (stringLength === 40 && pattern40.test(userString)))
        hash = sha256(hexToBytes(userString));
    else
        hash = sha256(utf8ToBytes(userString));
    const finalHash = ripemd160(hash);
    return toHex(finalHash);
}

export function sha256SimpleHashing(userString: string) {
    const stringLength = userString.length;
    let hash;
    const pattern_64 = new RegExp('[0-9A-Fa-f]{64}');
    const pattern40 = new RegExp('[0-9A-Fa-f]{40}');
    if ((stringLength === 64 && pattern_64.test(userString)) || (stringLength === 40 && pattern40.test(userString)))
        hash = sha256(hexToBytes(userString));
    else
        hash = sha256(utf8ToBytes(userString));
    return toHex(hash);
}

export function ripemd160SimpleHashing(userString: string) {
    const stringLength = userString.length;
    let hash;
    const pattern_64 = new RegExp('[0-9A-Fa-f]{64}');
    const pattern40 = new RegExp('[0-9A-Fa-f]{40}');
    if ((stringLength === 64 && pattern_64.test(userString)) || (stringLength === 40 && pattern40.test(userString)))
        hash = ripemd160(hexToBytes(userString));
    else
        hash = ripemd160(utf8ToBytes(userString));
    return toHex(hash);
}

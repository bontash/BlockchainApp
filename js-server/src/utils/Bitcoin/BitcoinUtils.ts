import {sha256} from "ethereum-cryptography/sha256";
import {toHex, utf8ToBytes} from "ethereum-cryptography/utils";
import {ripemd160} from "ethereum-cryptography/ripemd160";

export function sha256DoubleHashing(userString : string) {
    const firstHash = sha256(utf8ToBytes(userString));
    const finalHash = sha256(firstHash);
    return toHex(finalHash);
}

export function sha256Ripemd160Hashing(userString : string) {
    const firstHash = sha256(utf8ToBytes(userString));
    const finalHash = ripemd160(firstHash);
    return toHex(finalHash);
}

export function sha256SimpleHashing(userString : string) {
    const hash = sha256(utf8ToBytes(userString));
    return toHex(hash);
}

export function ripemd160SimpleHashing(userString : string) {
    const hash = ripemd160(utf8ToBytes(userString));
    return toHex(hash);
}
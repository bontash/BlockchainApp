export type HashInput = {
    stringToHash:string
    hashTypes:HashType[]
}

export enum HashType{
    shaAndRipe = "shaAndRipe",
    doubleSha256 = "doubleSha256",
    keccak256 = "keccak256",
    simpleRipemd160 = "simpleRipemd160",
    simpleSha256= "simpleSha256"
}

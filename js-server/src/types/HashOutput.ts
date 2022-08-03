export type HashOutput = {
    hashResponse?:HashBenchmarks[]
    error?:string
}

export type HashBenchmarks = {
    stringToHash: string,
    hashedString: string,
    benchmarks: Object,
    typeOfHash: string
}
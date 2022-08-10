export const changeEndianness = (string) => {
    const result = [];
    let len = string.length - 2;
    while (len >= 0) {
        // @ts-ignore
        result.push(string.substr(len, 2));
        len -= 2;
    }
    return result.join('');
}

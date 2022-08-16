import {FormControl, InputLabel, MenuItem, OutlinedInput, Select} from "@mui/material";

const HashDropdown = ({hashList, setHashList}) => {
    const hashTypes = [{text: "Keccak-256", value: "keccak256"},
        {text: "SHA-256", value: "simpleSha256"},
        {text: "Double SHA-256", value: "doubleSha256"},
        {text: "RIPEMD-160", value: "simpleRipemd160"},
        {text: "SHA-256 and RIPEMD-160", value: "shaAndRipe"}]

    const handleChange = (event) => {
        const {
            target: {value},
        } = event;

        const listOfHashes = [];
        value.forEach(hashValue => {
            listOfHashes.push(hashTypes.filter(hashType => hashType.value === hashValue)[0])
        })
        setHashList(listOfHashes)
    };

    return <FormControl sx={{m: 1, width: 500}}>
        <InputLabel id="hashDropdownLabel">Hash types</InputLabel>
        <Select
            labelId="hashDropdownLabel"
            id="hashDropdown"
            multiple
            value={hashList.map(hash => hash.value)}
            onChange={handleChange}
            input={<OutlinedInput label="Name"/>}
            sx={{backgroundColor:'#FAF5E4'}}
        >
            {hashTypes.map((hash, idx) => (
                <MenuItem
                    key={`menuitem-${idx}`}
                    value={hash.value}
                >
                    {hash.text}
                </MenuItem>
            ))}
        </Select>
    </FormControl>
}

export default HashDropdown
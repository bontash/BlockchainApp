import React, {useEffect, useState} from "react";
import {Box, Button, Snackbar, TextField} from "@mui/material";
import HashDropdown from "../../core/ui/HashDropdown";
import {ParticlesBackground} from "../../core/ui/background/ParticlesBackground";
import CustomizedTables from "./modules/HashResultTable";
import {PageTitle} from "../../core/ui/PageTitle";

const fetchEncryptedString = (hashList, stringToEncrypt, setResponse) => {

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({stringToHash: stringToEncrypt, hashTypes: hashList.map(hash => hash.value)})
    };


    fetch('http://localhost:3001/hashing', requestOptions)
        .then(response => response.json())
        .then(data => setResponse(data.hashResponse));
}


const StringEncryption = () => {
    const [hash, setHash] = useState([]);
    const [stringToEncrypt, setStringToEncrypt] = useState("");
    const [encryptionResponse, setEncryptionResponse] = useState([]);
    const [open, setOpen] = useState(false);

    function handleClose() {
        setOpen(false);
    }


    useEffect(() => {
        setOpen(true)
    }, [])


    return <>
        <ParticlesBackground/>
        <Snackbar sx={{maxWidth: 800}} message={"Why these functions? These are the only hash functions used in the presented blockchains." +
        "The simple hashes are implemented with the ethereum-cryptography library and the composite ones are self-made. Only strings and hashes can be encrypted " +
        "here, because these are the only options available on the blockchain. It automatically detects if the input data is a simple string or a hash."} autoHideDuration={35000} open={open} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'left'}}
        />
        <PageTitle>
            Encryption
        </PageTitle>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <HashDropdown setHashList={setHash} hashList={hash}/>
            <TextField
                label={"Data to encrypt"}
                variant={'filled'}
                value={stringToEncrypt}
                multiline
                rows={10}
                sx={{backgroundColor: '#FAF5E4', width: '500px'}}
                onChange={(e) => setStringToEncrypt(e.target.value)}
            />
            <p></p>
            <Button variant={'contained'} onClick={() => {
                fetchEncryptedString(hash, stringToEncrypt, setEncryptionResponse)
            }}>
                Hash data
            </Button>
            <p></p>
            <CustomizedTables rows={encryptionResponse}/>
        </Box>
    </>
}

export default StringEncryption;
export {fetchEncryptedString};
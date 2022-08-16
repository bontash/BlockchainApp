import React, {useEffect, useState} from "react";
import {Box, Button, TextField, ThemeProvider} from "@mui/material";
import HashDropdown from "./modules/HashDropdown";
import {ParticlesBackground} from "../../core/ui/background/ParticlesBackground";
import {theme} from "../../core/ui/theme/themeOptions";
import CustomizedTables from "./modules/HashResultTable";
import NavbarContainer from "../../core/ui/navbar/navbar/NavbarContainer";
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

    useEffect(()=>{
        console.log(encryptionResponse)
    },[encryptionResponse])

    return <ThemeProvider theme={theme}>
        <ParticlesBackground/>
        <NavbarContainer>
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
                Hash string
            </Button>
            <p></p>
            <CustomizedTables rows={encryptionResponse}/>
        </Box>
        </NavbarContainer>
    </ThemeProvider>
}

export default StringEncryption;
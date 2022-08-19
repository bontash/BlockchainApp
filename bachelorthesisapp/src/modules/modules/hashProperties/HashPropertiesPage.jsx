import {Box, Button, Snackbar, TextField, ThemeProvider} from "@mui/material";
import {ParticlesBackground} from "../../core/ui/background/ParticlesBackground";
import {PageTitle} from "../../core/ui/PageTitle";
import HashPropertiesTable from "./modules/HashPropertiesTable";
import HashDropdown from "../../core/ui/HashDropdown";
import React, {useEffect, useState} from "react";
import {fetchEncryptedString} from "../stringEncryption";


const HashProperties = () => {

    const [hashList, setHashList] = useState([]);
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
        <ParticlesBackground />
        <Snackbar sx={{maxWidth: 600}} message={"This web-application aims to provide the user a deeper understanding of how cryptography\n" +
        "                and blockchain are related. At the core, there are 3 cryptographic hash functions, presented below."} autoHideDuration={15000} open={open} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'left'}}
        />
            <PageTitle>Cryptographic hash functions properties</PageTitle>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <HashDropdown hashList={hashList} setHashList={setHashList}/>
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
                fetchEncryptedString(hashList, stringToEncrypt, setEncryptionResponse)
            }}>
                Hash string
            </Button>
            <p></p>
            </Box>
            <HashPropertiesTable rows={encryptionResponse}/>
    </>
}

export default HashProperties;
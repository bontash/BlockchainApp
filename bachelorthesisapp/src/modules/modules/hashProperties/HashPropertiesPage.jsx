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
        <Snackbar sx={{maxWidth: 600}} message={"For a user who wants more in-depth knowledge about properties of the various hash functions " +
        "applied in the chain, for a more educated choice of what blockchain to use, this page provides basic characteristics of those functions. A " +
        "user can select more than one hash type, to see a clear comparison between them. The avalanche effect is a criterion which states that a small " +
        "modification in the input bits(like flipping a bit) should result in a modification of the output bits by ~50% for a good hash function. Another " +
        "property is that the length should always be fixed and not depend on the length of the input. Finally, a good hash function should be quick and easy to compute."} autoHideDuration={20000} open={open} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'left'}}
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
                Hash data
            </Button>
            <p></p>
            </Box>
            <HashPropertiesTable rows={encryptionResponse}/>
    </>
}

export default HashProperties;
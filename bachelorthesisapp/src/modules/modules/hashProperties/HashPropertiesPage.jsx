import {Box, Button, TextField, ThemeProvider} from "@mui/material";
import {theme} from "../../core/ui/theme/themeOptions";
import {ParticlesBackground} from "../../core/ui/background/ParticlesBackground";
import NavbarContainer from "../../core/ui/navbar/navbar/NavbarContainer";
import {PageTitle} from "../../core/ui/PageTitle";
import HashPropertiesTable from "./modules/HashPropertiesTable";
import HashDropdown from "../../core/ui/HashDropdown";
import React, {useState} from "react";
import {fetchEncryptedString} from "../stringEncryption";


const HashProperties = () => {

    const [hashList, setHashList] = useState([]);
    const [stringToEncrypt, setStringToEncrypt] = useState("");
    const [encryptionResponse, setEncryptionResponse] = useState([]);
    return <ThemeProvider theme={theme}>
        <ParticlesBackground />
        <NavbarContainer>
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
        </NavbarContainer>
    </ThemeProvider>
}

export default HashProperties;
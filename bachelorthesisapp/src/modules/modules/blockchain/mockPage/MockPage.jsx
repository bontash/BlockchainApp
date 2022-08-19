import {ParticlesBackground} from "../../../core/ui/background/ParticlesBackground";
import {Grid, Snackbar, ThemeProvider} from "@mui/material";
import BitcoinBlockchain from "./modules/BitcoinBlockchain";
import StyledChip from "./components/StyledChip";
import EthereumBlockchain from "./modules/EthereumBlockchain";
import {PageTitle} from "../../../core/ui/PageTitle";
import {useEffect, useState} from "react";

const MockPage = () => {
    const [open, setOpen] = useState(false);

    function handleClose() {
        setOpen(false);
    }


    useEffect(() => {
        setOpen(true)
    }, [])


    return <>
        <ParticlesBackground/>
        <Snackbar sx={{maxWidth: 600}} message={"This web-application aims to provide the user a deeper understanding of how cryptography\n" +
        "                and blockchain are related. At the core, there are 3 cryptographic hash functions, presented below."} autoHideDuration={15000} open={open} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'left'}}
        />
            <PageTitle>
                Mock blockchains
            </PageTitle>
            <Grid container direction="column" rowGap={4} justifyContent={"flex-start"}>
                <Grid item xs={6}>
                    <StyledChip label={'Ethereum blockchain'}/>
                </Grid>
                <Grid item xs={12}>
                    <EthereumBlockchain/>
                </Grid>
                <Grid item xs={6}>
                    <StyledChip label={'Bitcoin blockchain'}/>
                </Grid>
                <Grid item xs={12}>
                    <BitcoinBlockchain/>
                </Grid>
            </Grid>
    </>
}

export default MockPage;

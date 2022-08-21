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
        <Snackbar sx={{maxWidth: 800}} message={"Here you can see several aspects of hash functions and blockchains. For the hashes, you can see that " +
        " it changes when each input changes and if you remove the changes, the hash is the same as before. For blockchains, you can see some of the fields which take " +
        "part in the construction of the node, you can see the link between them using hashes and if you wish to change some field in a mined block, all the nodes after it will" +
        "be notified that something is wrong. The first block of each chain is called the genesis block and has the hash = 0. Here I already generated the first random hash after " +
        "the genesis one."} autoHideDuration={60000} open={open} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'left'}}
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

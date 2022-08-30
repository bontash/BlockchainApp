import React, {useEffect, useState} from "react";
import {Grid, Snackbar, ThemeProvider, Typography} from "@mui/material";
import {ParticlesBackground} from "../../../core/ui/background/ParticlesBackground";
import {PageTitle} from "../../../core/ui/PageTitle";
import {TransactionsPageMainSection} from "./components/TransactionsPageMainSection";
import TransactionsPageCard from "./components/TransactionsPageCard";
import {useHistory} from "react-router-dom";

const TransactionsMainPage = () => {

    const history = useHistory();
    const routes = ["/bitcoinTransaction", "/ethereumTransaction"]
    const logos = ["https://png.monster/wp-content/uploads/2022/02/png.monster-623.png", "https://www.pngall.com/wp-content/uploads/10/Ethereum-Classic-Logo-PNG-Pic.png"]
    const [open, setOpen] = useState(false);

    function handleClose() {
        setOpen(false);
    }


    useEffect(() => {
        setOpen(true)
    }, [])
    return <>
        <ParticlesBackground/>
        <Snackbar sx={{maxWidth: 800}} message={"Here are presented the 2 blockchains of interest, Bitcoin and Ethereum. Below is a short " +
        "description of the matters which helped me achieve the connection with both chains. Each blockchain is unique in its design and different " +
        "approaches were taken in order to make the connection possible: Ethereum has the web3 library which facilitates the interaction with Metamask, " +
        "whereas Bitcoin's bitcore library does not possess the same integration power with its wallet. "} autoHideDuration={45000} open={open} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'left'}}
        />
        <PageTitle>
            Transactions main page
        </PageTitle>
        <TransactionsPageMainSection>
            <Typography fontSize={'115%'}>

            </Typography>
        </TransactionsPageMainSection>
        <Grid container direction={'row'} justifyContent={'space-evenly'} alignItems={'center'}>
            <TransactionsPageCard onClick={() => history.push(routes[0])} pageName={'Bitcoin'}
                                  description={'Connection made to the Bitcoin Testnet, which provides the same functionalities' +
                                  ' as the Bitcoin Mainnet, with the help of bitcore-lib JS library and Electrum wallet.'}
                                  logo={logos[0]}/>
            <TransactionsPageCard onClick={() => history.push(routes[1])} pageName={'Ethereum'}
                                  description={'Connection to the Ropsten Testnet, which has the same capabilities as the Ethereum Mainnet,' +
                                  'the following functionalities are achieved through the web3.js React library and Metamask.'}
                                  logo={logos[1]}/>
        < /Grid>
    </>
}

export default TransactionsMainPage;
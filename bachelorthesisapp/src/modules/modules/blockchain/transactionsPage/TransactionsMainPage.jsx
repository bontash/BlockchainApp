import React from "react";
import {Grid, ThemeProvider, Typography} from "@mui/material";
import {theme} from "../../../core/ui/theme/themeOptions";
import NavbarContainer from "../../../core/ui/navbar/navbar/NavbarContainer";
import {ParticlesBackground} from "../../../core/ui/background/ParticlesBackground";
import {PageTitle} from "../../../core/ui/PageTitle";
import {TransactionsPageMainSection} from "./components/TransactionsPageMainSection";
import TransactionsPageCard from "./components/TransactionsPageCard";

const TransactionsMainPage = () => {
    const logos = ["https://png.monster/wp-content/uploads/2022/02/png.monster-623.png", "https://www.pngall.com/wp-content/uploads/10/Ethereum-Classic-Logo-PNG-Pic.png"]
    return <ThemeProvider theme={theme}>
        <NavbarContainer>
            <ParticlesBackground/>
            <PageTitle>
                Transactions main page
            </PageTitle>
            <TransactionsPageMainSection>
                <Typography fontSize={'115%'}>

                </Typography>
            </TransactionsPageMainSection>
            <Grid container direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <TransactionsPageCard pageName={'Bitcoin'}
                                      description={'Connection made to the Bitcoin Testnet, which provides the same functionalities' +
                                      ' as the Bitcoin Mainnet, with the help of bitcore-lib JS library and Bitpay wallet.'}
                                      logo={logos[0]}/>
                <TransactionsPageCard pageName={'Ethereum'}
                                      description={'Connection to the Ropsten Testnet, which has the same capabilities as the Ethereum Mainnet,' +
                                      'the following functionalities are achieved through the web3.js React library and Metamask.'}
                                      logo={logos[1]}/>
            < /Grid>
        </NavbarContainer>
    </ThemeProvider>
}

export default TransactionsMainPage;
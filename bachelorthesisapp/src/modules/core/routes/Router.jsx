import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "../../modules/home";
import StringEncryption from "../../modules/stringEncryption";
import HashProperties from "../../modules/hashProperties/HashPropertiesPage";
import EthereumTransactionPage from "../../modules/blockchain/transactionsPage/EthereumTransactionPage";
import BitcoinTransactionPage from "../../modules/blockchain/transactionsPage/BitcoinTransactionPage";
import BlockchainPage from "../../modules/blockchain/BlockchainPage";
import MockPage from "../../modules/blockchain/mockPage/MockPage";
import TransactionsMainPage from "../../modules/blockchain/transactionsPage/TransactionsMainPage";
import {theme} from "../ui/theme/themeOptions";
import NavbarContainer from "../ui/navbar/navbar/NavbarContainer";
import {ThemeProvider} from "@emotion/react";


const Router = () => {
    return<ThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <NavbarContainer>
                    <Route path="/" exact render={() => <Redirect to={"/home"}/>}/>
                    <Route path={"/home"} exact component={Home}/>
                    <Route path={"/hashing"} exact component={StringEncryption}/>
                    <Route path={"/blockchain"} exact component={BlockchainPage}/>
                    <Route path={"/properties"} exact component={HashProperties}/>
                    <Route path={"/ethereumTransaction"} exact component={EthereumTransactionPage}/>
                    <Route path={'/bitcoinTransaction'} exact component={BitcoinTransactionPage}/>
                    <Route path={'/mockPage'} exact component={MockPage}/>
                    <Route path={'/transactionsPage'} exact component={TransactionsMainPage}/>
                    </NavbarContainer>
                </Switch>
            </BrowserRouter>
    </ThemeProvider>
}

export default Router;
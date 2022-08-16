import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "../../modules/home";
import StringEncryption from "../../modules/stringEncryption";
import HashProperties from "../../modules/hashProperties/HashPropertiesPage";
import Database from "../../modules/database";
import EthereumTransactionPage from "../../modules/blockchain/transactionsPage/EthereumTransactionPage";
import BitcoinTransactionPage from "../../modules/blockchain/transactionsPage/BitcoinTransactionPage";
import BlockchainPage from "../../modules/blockchain/BlockchainPage";
import MockPage from "../../modules/blockchain/mockPage/MockPage";
import TransactionsMainPage from "../../modules/blockchain/transactionsPage/TransactionsMainPage";

const Router = () => {
    return <BrowserRouter>
        <Switch>
            <Route path="/" exact render={() => <Redirect to={"/home"}/>}/>
            <Route path={"/home"} exact component={Home}/>
            <Route path={"/hashing"} exact component={StringEncryption}/>
            <Route path={"/blockchain"} exact component={BlockchainPage}/>
            <Route path={"/properties"} exact component={HashProperties}/>
            <Route path={"/database"} exact component={Database}/>
            <Route path={"/ethereumTransaction"} exact component={EthereumTransactionPage}/>
            <Route path={'/bitcoinTransaction'} exact component={BitcoinTransactionPage}/>
            <Route path={'/mockPage'} exact component={MockPage}/>
            <Route path={'/transactionsPage'} exact component={TransactionsMainPage} />
        </Switch>
    </BrowserRouter>
}

export default Router;
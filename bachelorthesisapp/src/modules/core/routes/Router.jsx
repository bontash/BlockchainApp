import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "../../modules/home";
import StringEncryption from "../../modules/stringEncryption";
import Blockchain from "../../modules/blockchain/mockPage/MockPage";
import HashProperties from "../../modules/hashProperties";
import Database from "../../modules/database";
import EthereumTransactionPage from "../../modules/blockchain/transactionsPage/EthereumTransactionPage";
import BitcoinTransactionPage from "../../modules/blockchain/transactionsPage/BitcoinTransactionPage";

const Router = () => {
    return <BrowserRouter>
        <Switch>
            <Route path="/" exact render={() => <Redirect to={"/home"}/>}/>
            <Route path={"/home"} exact component={Home}/>
            <Route path={"/hashing"} exact component={StringEncryption}/>
            <Route path={"/blockchain"} exact component={Blockchain}/>
            <Route path={"/properties"} exact component={HashProperties}/>
            <Route path={"/database"} exact component={Database}/>
            <Route path={"/ethereumTransaction"} exact component={EthereumTransactionPage}/>
            <Route path={'/bitcoinTransaction'} exact component={BitcoinTransactionPage}/>
        </Switch>
    </BrowserRouter>
}

export default Router;
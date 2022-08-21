import React from "react";
import {Grid, ThemeProvider, Typography} from "@mui/material";
import {ParticlesBackground} from "../../core/ui/background/ParticlesBackground";
import {MainSection} from "../home/components/MainSection";
import BlockchainPageFlipCard from "./modules/BlockchainPageFlipCard";
import {PageTitle} from "../../core/ui/PageTitle";
import {useHistory} from "react-router-dom";
import {BlockchainPageMainSection} from "./modules/BlockchainPageMainSection";

const BlockchainPage = () => {

    const history = useHistory();
    const routes = [
        {
            text: 'MockPage',
            path: '/mockPage'
        },
        {
            text: 'TransactionMainPage',
            path: '/transactionsPage'
        }
    ]

    return <>
        <ParticlesBackground/>
        <PageTitle>
            Blockchain main page
        </PageTitle>
        <MainSection>
            <BlockchainPageMainSection>
                <Typography fontSize={'115%'}>
                    Blockchain technology encompasses a series of functionalities to ensure data protection, at the same
                    time
                    allowing a semi-transparency to exist. Its core mechanisms are the ones presented on the cards
                    below. Hover over them to go
                    to the page where the functionality is presented.
                </Typography>
            </BlockchainPageMainSection>
        </MainSection>
        <p/>
        <Grid container direction={'row'} justifyContent={'space-evenly'} alignItems={'center'}>
            <Grid item alignContent={'center'}>
                <BlockchainPageFlipCard onClick={() => history.push(routes[0].path)} pageName={'Mock'}
                                        descriptionFront={"Protection against possible attacks, using a cryptographic " +
                                        "link between each node. After a node is mined, you cannot change its content. The link is a hash, which updates when a change occurs in a block." +
                                        "All the blocks after the tampered one will be notified that the link is broken and they are corrupted."}
                                        descriptionBack={"Choose from " +
                                        "2 mock blockchains, which mimic the interaction with the real ones. Here, the data can be any string you wish. In a real life scenario, " +
                                        "presented in the next flip card, data can be only positive integers."}/>
            </Grid>
            <Grid item>
                <BlockchainPageFlipCard onClick={() => history.push(routes[1].path)} pageName={'Transactions'}
                                        descriptionFront={"Exchange transactions without a third-party to facilitate the process. Everything is based " +
                                        "on mutual trust and transparency. The transaction is added into a mined block and you can see its details. Every transaction has a fee which will be added " +
                                        "at the total cost, in order to make people be aware of their actions on the chain."}
                                        descriptionBack={"Choose " +
                                        "which blockchain you wish to see doing a real-time transaction. You need to have installed Metamask web extension for interaction " +
                                        "with Ethereum and any wallet which supports the Bitcoin Testnet, like Bitpay. "}/>
            </Grid>
        </Grid>
    </>
}

export default BlockchainPage;
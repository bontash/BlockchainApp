import React from "react";
import {Grid, ThemeProvider, Typography} from "@mui/material";
import {theme} from "../../core/ui/theme/themeOptions";
import NavbarContainer from "../../core/ui/navbar/navbar/NavbarContainer";
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

    return <ThemeProvider theme={theme}>
        <NavbarContainer>
            <ParticlesBackground/>
            <MainSection>
                <PageTitle>
                    Blockchain main page
                </PageTitle>
                <BlockchainPageMainSection>
                    <Typography fontSize={'115%'}>
                            Blockchain technology encompasses a series of functionalities to ensure data protection, at the same
                            time
                            allowing a semi-transparency to exist. Its core mechanisms can be described as:
                    </Typography>
                </BlockchainPageMainSection>
                <p/>
                <Grid container direction={'row'} justifyContent={'space-evenly'} alignItems={'center'}>
                    <Grid item>
                        <BlockchainPageFlipCard pageName={'Mock'} description={"Mock page"}/>
                    </Grid>
                    <Grid item>
                        <BlockchainPageFlipCard pageName={'Transactions'} description={"Transactions page"}/>
                    </Grid>
                </Grid>
            </MainSection>
        </NavbarContainer>
    </ThemeProvider>
}

export default BlockchainPage;
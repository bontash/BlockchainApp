import React from "react";
import {ThemeProvider, Typography} from "@mui/material";
import {theme} from "../../../core/ui/theme/themeOptions";
import NavbarContainer from "../../../core/ui/navbar/navbar/NavbarContainer";
import {ParticlesBackground} from "../../../core/ui/background/ParticlesBackground";
import {PageTitle} from "../../../core/ui/PageTitle";
import {TransactionsPageMainSection} from "./components/TransactionsPageMainSection";
import TransactionsPageCard from "./components/TransactionsPageCard";

const TransactionsMainPage = () => {
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
            <TransactionsPageCard />
        </NavbarContainer>
    </ThemeProvider>
}

export default TransactionsMainPage;
import React from "react";
import {ThemeProvider} from "@mui/material";
import {theme} from "../../../core/ui/theme/themeOptions";
import NavbarContainer from "../../../core/ui/navbar/navbar/NavbarContainer";
import {ParticlesBackground} from "../../../core/ui/background/ParticlesBackground";
import {PageTitle} from "../../../core/ui/PageTitle";

const TransactionsMainPage = () => {
    return <ThemeProvider theme={theme}>
        <NavbarContainer>
            <ParticlesBackground />
            <PageTitle>
                Transactions main page
            </PageTitle>
        </NavbarContainer>
    </ThemeProvider>
}

export default TransactionsMainPage;
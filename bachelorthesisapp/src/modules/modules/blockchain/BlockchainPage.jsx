import React from "react";
import {ThemeProvider} from "@mui/material";
import {theme} from "../../core/ui/theme/themeOptions";
import NavbarContainer from "../../core/ui/navbar/navbar/NavbarContainer";
import {ParticlesBackground} from "../../core/ui/background/ParticlesBackground";
import {MainSection} from "../../core/ui/MainSection";
import Paper from "@mui/material/Paper";

const BlockchainPage = () => {
    return <ThemeProvider theme={theme}>
        <NavbarContainer>
            <ParticlesBackground />
            <MainSection>
                <Paper sx={{backgroundColor: 'lightgoldenrodyellow'}}>

                </Paper>
            </MainSection>
        </NavbarContainer>
    </ThemeProvider>
}

export default BlockchainPage;
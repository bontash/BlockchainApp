import {ParticlesBackground} from "../../../core/ui/background/ParticlesBackground";
import {theme} from "../../../core/ui/theme/themeOptions";
import {Chip, Grid, ThemeProvider, Typography} from "@mui/material";
import NavbarContainer from "../../../core/ui/navbar/navbar/NavbarContainer";
import BitcoinBlockchain from "./modules/BitcoinBlockchain";
import StyledChip from "./components/StyledChip";
import EthereumBlockchain from "./modules/EthereumBlockchain";

const Blockchain = () => {
    return <ThemeProvider theme={theme}>
        <ParticlesBackground/>
        <NavbarContainer>
            <Grid container direction="column" rowGap={4} justifyContent={"flex-start"}>
                <Grid item xs={12}>
                    <StyledChip label={'Ethereum blockchain'}/>
                </Grid>
                <Grid item xs={6}>
                    <EthereumBlockchain/>
                </Grid>
                <Grid item xs={12}>
                    <StyledChip label={'Bitcoin blockchain'}/>
                </Grid>
                <Grid item xs={6}>
                    <BitcoinBlockchain/>
                </Grid>
            </Grid>
        </NavbarContainer>
    </ThemeProvider>
}

export default Blockchain;

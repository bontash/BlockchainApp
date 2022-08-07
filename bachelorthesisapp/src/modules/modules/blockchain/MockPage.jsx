import {ParticlesBackground} from "../../core/ui/background/ParticlesBackground";
import {theme} from "../../core/ui/theme/themeOptions";
import {Grid, ThemeProvider} from "@mui/material";
import NavbarContainer from "../../core/ui/navbar/navbar/NavbarContainer";
import EthereumBlockchain from "./modules/EthereumBlockchain";
import BitcoinBlockchain from "./modules/BitcoinBlockchain";

const Blockchain = () => {
    return <ThemeProvider theme={theme}>
        <ParticlesBackground />
        <NavbarContainer>
        <Grid container direction="column" justifyContent="space-evenly" rowGap={2}>
            <Grid item xs={12}>
                <EthereumBlockchain/>
            </Grid>
            <Grid item xs={12}>
                <BitcoinBlockchain/>
            </Grid>
        </Grid>
        </NavbarContainer>
    </ThemeProvider>
}

export default Blockchain;

import {ThemeProvider} from "@mui/material";
import {theme} from "../../core/ui/theme/themeOptions";
import {ParticlesBackground} from "../../core/ui/background/ParticlesBackground";
import NavbarContainer from "../../core/ui/navbar/navbar/NavbarContainer";


const Database = () => {
    return <ThemeProvider theme={theme}>
        <ParticlesBackground />
        <NavbarContainer />
    </ThemeProvider>
}

export default Database;
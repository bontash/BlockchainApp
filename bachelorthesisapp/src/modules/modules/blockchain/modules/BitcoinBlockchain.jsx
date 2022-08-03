import {Grid} from "@mui/material";
import BitcoinBlock from "./BitcoinBlock";


const BitcoinBlockchain = () => {
    return <Grid container direction="row" justifyContent="space-evenly" >
        <Grid item xs={6}>
        <BitcoinBlock />
        </Grid>
        <Grid item xs={6}>
        <BitcoinBlock />
        </Grid>
    </Grid>
}

export default BitcoinBlockchain;
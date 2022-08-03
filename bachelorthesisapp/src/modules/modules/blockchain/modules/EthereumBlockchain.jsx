import EthereumBlock from "./EthereumBlock";
import {Grid} from "@mui/material";


const EthereumBlockchain = () => {
    return <Grid container direction="row" justifyContent="space-evenly">
        <Grid item xs={6}>
        <EthereumBlock />
        </Grid>
        <Grid item xs={6}>
        <EthereumBlock />
        </Grid>
    </Grid>
}

export default EthereumBlockchain;
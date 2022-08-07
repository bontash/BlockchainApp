import EthereumBlock from "./EthereumBlock";
import {Grid} from "@mui/material";
import {useState} from "react";
import ControlPointIcon from '@mui/icons-material/ControlPoint';


const EthereumBlockchain = () => {
    const [blocks, setBlocks] = useState([{
        blockNr: "",
        nonce: "",
        timestamp: "",
        value: "",
        gasLimit: "",
        gasUsed: "",
        difficulty: "",
        prevBlockHash: "",
        hash: ""
    }]);

    function getItemSize() {
        if (blocks.length >= 4) {
            return 3;
        }
        return 12 / blocks.length;
    }

    return <Grid container direction="row" justifyContent={"flex-start"} alignItems={"center"}>
        <Grid item xs={6}>
            <EthereumBlock blockInfo={{
                blockNr: 1,
                nonce: 0,
                timestamp: new Date().toLocaleTimeString(),
                value: "",
                gasLimit: 0,
                gasUsed: 0,
                difficulty: '000',
                prevBlockHash: '0x0000000000000000000000000000000000000000'
            }}/>
        </Grid>
        <Grid item xs={6} alignContent={"center"}>
            <ControlPointIcon color={"primary"}/>
        </Grid>
        {/*{blocks.map((block, idx) => {*/}
        {/*    return <Grid item xs={getItemSize}>*/}
        {/*        <EthereumBlock blockInfo={block}*/}
        {/*                       setBlockInfo={(value, field) => setBlocks(prevValue => prevValue.map((prevBlock, prevBlockIdx) =>*/}
        {/*                           prevBlockIdx !== idx ? prevBlock : {...prevBlock, [field]: value}))}/>*/}
        {/*    </Grid>*/}
        {/*})}*/}
    </Grid>
}

export default EthereumBlockchain;
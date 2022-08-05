import EthereumBlock from "./EthereumBlock";
import {Grid} from "@mui/material";
import {useEffect, useState} from "react";
import BitcoinBlock from "./BitcoinBlock";


const BitcoinBlockchain = () => {
    const [blocks, setBlocks] = useState([{
        blockNr: "",
        nonce: "",
        timestamp: "",
        value: "",
        difficulty: "",
        prevBlockHash: "",
        hash: ""
    }, {
        blockNr: "",
        nonce: "",
        timestamp: "",
        value: "",
        difficulty: "",
        prevBlockHash: "",
        hash: ""
    }, {
        blockNr: "",
        nonce: "",
        timestamp: "",
        value: "",
        difficulty: "",
        prevBlockHash: "",
        hash: ""
    }, {
        blockNr: "",
        nonce: "",
        timestamp: "",
        value: "",
        difficulty: "",
        prevBlockHash: "",
        hash: ""
    }, {
        blockNr: "",
        nonce: "",
        timestamp: "",
        value: "",
        difficulty: "",
        prevBlockHash: "",
        hash: ""
    }]);

    useEffect(() => {


    },[blocks])

    function getItemSize() {
        if (blocks.length >= 4) {
            return 3;
        }
        return 12 / blocks.length;
    }
    return <Grid container direction="row" justifyContent="space-evenly">
        {blocks.map((block, idx) => {
            return <Grid item xs={getItemSize}>
                <BitcoinBlock blockInfo={block}
                               setBlockInfo={(value, field) => setBlocks(prevValue => prevValue.map((prevBlock, prevBlockIdx) =>
                                   prevBlockIdx !== idx ? prevBlock : {...prevBlock, [field]: value}))}/>
            </Grid>
        })}
    </Grid>
}

export default BitcoinBlockchain;
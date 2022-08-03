import EthereumBlock from "./EthereumBlock";
import {Grid} from "@mui/material";
import {useState} from "react";


const EthereumBlockchain = () => {
    const [blocks, setBlocks] = useState([{
        blockNr: "",
        nonce: "",
        timestamp: "",
        data: "",
        gasLimit: "",
        gasUsed: "",
        difficulty: "",
        prevBlockHash: "",
        hash: ""
    }, {
        blockNr: "",
        nonce: "",
        timestamp: "",
        data: "",
        gasLimit: "",
        gasUsed: "",
        difficulty: "",
        prevBlockHash: "",
        hash: ""
    }, {
        blockNr: "",
        nonce: "",
        timestamp: "",
        data: "",
        gasLimit: "",
        gasUsed: "",
        difficulty: "",
        prevBlockHash: "",
        hash: ""
    }, {
        blockNr: "",
        nonce: "",
        timestamp: "",
        data: "",
        gasLimit: "",
        gasUsed: "",
        difficulty: "",
        prevBlockHash: "",
        hash: ""
    }, {
        blockNr: "",
        nonce: "",
        timestamp: "",
        data: "",
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
    return <Grid container direction="row" justifyContent="space-evenly">
        {blocks.map((block, idx) => {
            return <Grid item xs={getItemSize}>
                <EthereumBlock blockInfo={block}
                               setBlockInfo={(value, field) => setBlocks(prevValue => prevValue.map((prevBlock, prevBlockIdx) =>
                                   prevBlockIdx !== idx ? prevBlock : {...prevBlock, [field]: value}))}/>
            </Grid>
        })}
    </Grid>
}

export default EthereumBlockchain;
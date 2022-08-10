import {Button, Grid} from "@mui/material";
import {useEffect, useState} from "react";
import BitcoinBlock from "./BitcoinBlock";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import {CustomButton} from "../../../../core/ui/CustomButton";

const BitcoinBlockchain = () => {
    const [blocks, setBlocks] = useState([{
        blockNr: 1,
        nonce: 0,
        timestamp: Date.now().toString(),
        value: "",
        prevBlockHash: "000000000000000000000000000000000000000",
        hash: ""
    }]);

    function addBlocks() {
        const newBlockchain = [...blocks];
        newBlockchain.push({
            blockNr: blocks[blocks.length - 1].blockNr + 1,
            nonce: 0,
            timestamp: Date.now().toString(),
            value: "",
            prevBlockHash: blocks[blocks.length - 1].hash,
            hash: ""
        })
        setBlocks(newBlockchain);
    }

    function checkHash() {
        let isCorrupted = false;
        for (let i = 1; i < blocks.length; i++) {
            if (blocks[i - 1].hash !== blocks[i].hash)
                isCorrupted = true;
        }
        return isCorrupted;
    }

    return <Grid container direction="row" justifyContent={"flex-start"} alignItems={"center"}>
        {blocks.map((block, idx) => {
            return (<Grid item xs={3} key={"btc-block" + idx}>
                <BitcoinBlock blockInfo={block}
                              setBlockInfo={(value, field) => setBlocks(prevValue => prevValue.map((prevBlock, prevBlockIdx) =>
                                  prevBlockIdx !== idx ? prevBlock : {...prevBlock, [field]: value}))}/>
            </Grid>)
        })}
        {blocks.length < 4 && <Grid item xs={3} alignContent={"center"}>
            <CustomButton>
                <Button>
                    <ControlPointIcon color={"primary"} onClick={() => addBlocks()}/>
                </Button>
            </CustomButton>
        </Grid>
        }
    </Grid>
}

export default BitcoinBlockchain;
import {Button, Grid} from "@mui/material";
import React, {useEffect, useState} from "react";
import BitcoinBlock from "./BitcoinBlock";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import {CustomButton} from "../../../../core/ui/CustomButton";

const defaultBlock = {
    blockNr: 1,
    nonce: 0,
    timestamp: Date.now().toString(),
    value: "",
    prevBlockHash: "000000000000000000000000000000000000000",
    hash: ""
}

async function fetchHash(blockInfo) {

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            blockNr: blockInfo.blockNr,
            nonce: blockInfo.nonce,
            timestamp: blockInfo.timestamp,
            value: blockInfo.value,
            prevBlockHash: blockInfo.prevBlockHash,
            hash: blockInfo.hash
        })
    };

    return await fetch('http://localhost:3001/bitcoinEncryption', requestOptions).then(data => data.json())
}

const BitcoinBlockchain = () => {
    const [blocks, setBlocks] = useState([]);
    const [corruptedArray, setCorruptedArray] = useState([]);

    async function addBlocks() {
        const newBlockchain = [...blocks];
        const newBlock = {
            ...defaultBlock,
            timestamp: Date.now().toString(),
            blockNr: blocks[blocks.length - 1].blockNr + 1,
            prevBlockHash: blocks[blocks.length - 1].hash,
        }
        const {finalHash, error} = await fetchHash(newBlock);
        newBlockchain.push({...newBlock, hash: finalHash});
        setBlocks(newBlockchain);
        setCorruptedArray([...corruptedArray, false]);
    }

    useEffect(() => {
        async function fetchInitialData() {
            const {finalHash, error} = await fetchHash(defaultBlock);
            setBlocks([{...defaultBlock, hash: finalHash}])
            setCorruptedArray([false])
        }

        fetchInitialData();
    }, [])

    useEffect(()=>{
        let index;
        if(blocks.length !== 1){
            const newCorruptedArray = [...corruptedArray];
            for (let i = 1; i < blocks.length - 1; i++) {
                if (blocks[i].hash !== blocks[i + 1].prevBlockHash)
                {
                    index = i + 1;
                    break;
                }
                else newCorruptedArray[i + 1] = false;
            }
            for (let j = index; j < blocks.length; j++) {
                newCorruptedArray[j] = true;
            }
            setCorruptedArray(newCorruptedArray);
        }
    },[blocks])

    return <Grid container direction="row" justifyContent={"flex-start"} alignItems={"center"}>
        {blocks.map((block, idx) => {
            return (<Grid item xs={3} key={"btc-block" + idx}>
                <BitcoinBlock blockInfo={block} isCorrupted={corruptedArray[idx]}
                              setBlockInfo={async (value, field) => {
                                  const {finalHash, error} = await fetchHash({...block, [field]: value});
                                  setBlocks(prevValue => {
                                      return prevValue.map((prevBlock, prevBlockIdx) =>
                                          prevBlockIdx !== idx
                                                  ? prevBlock
                                                  : {
                                                      ...prevBlock,
                                                      hash: finalHash,
                                                      [field]: value
                                                  }
                                      )
                                  })
                              }}
                />
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
import EthereumBlock from "./EthereumBlock";
import {Button, Grid} from "@mui/material";
import React, {useEffect, useState} from "react";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import BitcoinBlock from "./BitcoinBlock";
import {CustomButton} from "../../../../core/ui/CustomButton";

const defaultBlock = {
    blockNr: 1,
    nonce: 0,
    timestamp: Date.now().toString(),
    value: "",
    gasLimit: 0,
    gasUsed: 0,
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
            gasLimit: blockInfo.gasLimit,
            gasUsed: blockInfo.gasUsed,
            prevBlockHash: blockInfo.prevBlockHash,
            hash: blockInfo.hash
        })
    };

    return await fetch('http://localhost:3001/ethereumEncryption', requestOptions).then(data => data.json())
}

const EthereumBlockchain = () => {
    const [blocks, setBlocks] = useState([]);
    const [corruptedArray, setCorruptedArray] = useState([]);

    function generateGas() {
        const gasLimit = Math.random()*100;
        let gasUsed;
        do {
            gasUsed = Math.random()*100;
        }while(gasLimit <= gasUsed);
        return {gasLimit, gasUsed};
    }

    async function addBlocks() {
        const newBlockchain = [...blocks];
        const newBlock = {
            ...defaultBlock,
            timestamp: Date.now().toString(),
            blockNr: blocks[blocks.length - 1].blockNr + 1,
            prevBlockHash: blocks[blocks.length - 1].hash,
            gasLimit: generateGas().gasLimit,
            gasUsed: generateGas().gasUsed,
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
            return (<Grid item xs={4} key={"eth-block" + idx}>
                <EthereumBlock blockInfo={block} isCorrupted={corruptedArray[idx]}
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
        {blocks.length < 4 && <Grid item xs={4} alignContent={"center"}>
            <CustomButton>
                <Button>
                    <ControlPointIcon color={"primary"} onClick={() => addBlocks()}/>
                </Button>
            </CustomButton>
        </Grid>
        }
    </Grid>
}

export default EthereumBlockchain;
import React from "react";
import {Chip} from "@mui/material";

const StyledChip = ({label}) => {
    return <Chip sx={{width: 200, height:70, display: 'flex', marginLeft:2}} label={label} color={"primary"}/>
}

export default StyledChip;
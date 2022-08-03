import React from "react";
import {TextField} from "@mui/material";

const BlockField = ({fieldName, onChange}) => {
    return <TextField sx={{width: 270}}
                      label={fieldName}
                      variant={'outlined'}
                      margin={"dense"} onChange={onChange}/>
}

export default BlockField;
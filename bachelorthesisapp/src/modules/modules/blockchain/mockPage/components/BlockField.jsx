import React from "react";
import {TextField} from "@mui/material";

const BlockField = ({fieldName, fieldValue, onChange, readOnly}) => {
    return <TextField sx={{width: 300}}
                      label={fieldName}
                      variant={'outlined'}
                      margin={"dense"} onChange={onChange}
                      value={fieldValue}
                      InputProps={{readOnly:readOnly}}
    />
}

export default BlockField;
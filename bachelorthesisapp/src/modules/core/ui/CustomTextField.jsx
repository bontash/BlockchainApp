import React from "react";
import {TextField} from "@mui/material";

const CustomTextField = ({onChange, value, label, width, type}) => {
    return <TextField sx={{width: {width}}}
                      label={label}
                      variant={'outlined'}
                      margin={"dense"} onChange={onChange}
                      value={value}
                      type={type}
    />
}

export default CustomTextField;
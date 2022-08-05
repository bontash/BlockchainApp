import React from "react";
import {Button} from "@mui/material";
import {CustomButton} from "../../../core/ui/CustomButton";

const NodeButton = ({onClick}) => {
    return <CustomButton>
                <Button color="secondary" variant="contained" onClick={onClick}>
                    MINE
                </Button>
            </CustomButton>
}

export default NodeButton;
import React from "react";
import {Button} from "@mui/material";
import {CustomButton} from "../../../core/ui/CustomButton";

const NodeButton = () => {
    return <CustomButton>
    <Button color="secondary" variant="contained" disabled>
        MINE
    </Button>
    </CustomButton>
}

export default NodeButton;
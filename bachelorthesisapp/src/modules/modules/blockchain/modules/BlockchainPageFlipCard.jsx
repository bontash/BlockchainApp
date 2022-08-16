import React from "react";
import {
    FlipCard,
    FlipCardBack,
    FlipCardFront,
    FlipCardInner
} from "../../../core/ui/FlipCards";
import {CustomButton} from "../../../core/ui/CustomButton";
import {Button, Grid, Typography} from "@mui/material";

const BlockchainPageFlipCard = ({onClick, pageName, description}) => {
    return <Grid item xl={3} m={6}>
        <FlipCard>
            <FlipCardInner>
                <FlipCardFront>
                    <Typography>{description}</Typography>
                </FlipCardFront>
                <FlipCardBack>
                    <CustomButton>
                        <Button color="secondary" variant="contained" onClick={onClick}>
                            Go to {pageName} page->
                        </Button>
                    </CustomButton>
                </FlipCardBack>
            </FlipCardInner>
        </FlipCard>
    </Grid>
}

export default BlockchainPageFlipCard;
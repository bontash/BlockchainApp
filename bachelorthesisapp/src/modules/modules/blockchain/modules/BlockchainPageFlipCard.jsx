import React from "react";
import {
    FlipCard,
    FlipCardBack,
    FlipCardFront,
    FlipCardInner,
    LogoFrontFlipCard,
    TextFrontFlipCard
} from "../../../core/ui/FlipCards";
import {CustomButton} from "../../../core/ui/CustomButton";
import {Button, Grid} from "@mui/material";

const BlockchainPageFlipCard = ({onClick, pageName}) => {
    return <Grid item xl={3} m={6}>
        <FlipCard>
            <FlipCardInner>
                <FlipCardFront>
                    <p>absdf</p>
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
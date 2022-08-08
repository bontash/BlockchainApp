import React from "react";
import {
    FlipCard,
    FlipCardBack,
    FlipCardFront,
    FlipCardInner,
    LogoFrontFlipCard,
    TextFrontFlipCard
} from "../components/FlipCards";
import {Grid, Typography} from "@mui/material";

const HomeCard = ({hash}) => {
    
    return <Grid item xl={3} m={6}>
        <FlipCard>
            <FlipCardInner>
                <FlipCardFront>
                    {
                        hash.logo ? <LogoFrontFlipCard src={hash.logo}/> : <TextFrontFlipCard>
                            {hash.name}
                        </TextFrontFlipCard>
                    }
                </FlipCardFront>
                <FlipCardBack>
                    <Typography variant={"subtitle1"}>{hash.description}</Typography>
                </FlipCardBack>
            </FlipCardInner>
        </FlipCard>
    </Grid>
}

export default HomeCard;
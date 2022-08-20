import React from "react";
import {Button, Card, CardContent, Grid, Typography} from "@mui/material";
import {CustomButton} from "../../../../core/ui/CustomButton";
import {TransactionCardContent} from "./TransactionCardContent";
import {TransactionPageCardLogo} from "./TransactionPageCardLogo";

const TransactionsPageCard = ({onClick, pageName, description, logo}) => {
    return <Grid item xs={3} md={3} alignSelf={'center'}>
        <Card sx={{
            width: 400,
            height: 450,
            backgroundColor: 'lightgoldenrodyellow',
            fontFamily: 'Trebuchet MS',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <CardContent>
                <TransactionCardContent>
                    <TransactionPageCardLogo src={logo} />
                    <Typography fontSize={'70%'}>
                        {description}
                    </Typography>
                </TransactionCardContent>
                <p></p>
                <CustomButton>
                    <Button color="secondary" variant="contained" onClick={onClick}>
                        Go to {pageName} page->
                    </Button>
                </CustomButton>
            </CardContent>
        </Card>
    </Grid>;
}

export default TransactionsPageCard;
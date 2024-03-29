import React from "react";
import {Card, CardContent, Grid, Typography} from "@mui/material";
import AccountCardButton from "./AccountCardButton";
import CustomTextField from "../../../../core/ui/CustomTextField";

const BitcoinAccountsCard = ({
                                 onChangeSenderAccount,
                                 onChangeValue,
                                 senderAccountValue,
                                 valueField,
                                 onClick,
                                 receiverAccountValue,
                                 onChangeReceiverAccount,
                                 onChangePrivateKey,
                                 privateKeyValue
                             }) => {
    return <Grid container alignItems={'center'} justify={'center'} direction={'column'}>
        <Grid item xs={3}>
            <Card sx={{
                width: 450,
                height: 440,
                backgroundColor: 'lightgoldenrodyellow',
                fontFamily: 'Trebuchet MS',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <CardContent>
                    <Typography>Enter your account:</Typography>
                    <CustomTextField onChange={onChangeSenderAccount} value={senderAccountValue}
                                     label={'Sender account'}
                                     width={415} type={'text'}/>
                    <Typography>Enter your private key:</Typography>
                    <CustomTextField onChange={onChangePrivateKey} value={privateKeyValue}
                                     label={'Private key'}
                                     width={415} type={'password'}/>
                    <Typography>Enter the receiver account:</Typography>
                    <CustomTextField onChange={onChangeReceiverAccount} value={receiverAccountValue}
                                     label={'Receiver account'} width={415} type={'text'}/>
                    <Typography>Enter a value:</Typography>
                    <CustomTextField onChange={onChangeValue} value={valueField} label={'Value'} width={415}
                                     type={'text'}/>
                    <AccountCardButton onClick={onClick}/>
                </CardContent>
            </Card>
        </Grid>
    </Grid>;
}

export default BitcoinAccountsCard;
import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {StyledTableCell} from "../../../../core/ui/StyledTableCell";
import {StyledTableRow} from "../../../../core/ui/StyledTableRow";
import TableBody from "@mui/material/TableBody";

const BitcoinTransactionsTable = ({rows}) => {

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 700}} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Transaction hash</StyledTableCell>
                        <StyledTableCell align="center">Sender account</StyledTableCell>
                        <StyledTableCell align="center">Receiver account</StyledTableCell>
                        <StyledTableCell align="center">Value</StyledTableCell>
                        <StyledTableCell align="center">Satoshis used</StyledTableCell>
                        <StyledTableCell align="center">Script</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows!==[]?rows?.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell align="center" component="th" scope="row">{row.transactionID}</StyledTableCell>
                            <StyledTableCell align="center">{row.senderAccountID}</StyledTableCell>
                            <StyledTableCell align="center">{row.receiverAccountID}</StyledTableCell>
                            <StyledTableCell align="center">{row.value}</StyledTableCell>
                            <StyledTableCell align="center">{row.satoshisUsed}</StyledTableCell>
                            <StyledTableCell align="center">{row.script}</StyledTableCell>
                        </StyledTableRow>
                    )):null}
                </TableBody>
            </Table>
        </TableContainer>
    );

}

export default BitcoinTransactionsTable;
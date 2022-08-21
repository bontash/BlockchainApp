import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {StyledTableCell} from "../../../../core/ui/StyledTableCell";

const EthereumTransactionsTable = () => {

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 700}} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Transaction hash</StyledTableCell>
                        <StyledTableCell align="center">Sender account</StyledTableCell>
                        <StyledTableCell align="center">Receiver account</StyledTableCell>
                        <StyledTableCell align="center">Value</StyledTableCell>
                        <StyledTableCell align="center">Gas used</StyledTableCell>
                        <StyledTableCell align="center">Block number</StyledTableCell>
                    </TableRow>
                </TableHead>
                {/*<TableBody>*/}
                {/*    {rows!==[]?rows?.map((row) => (*/}
                {/*        <StyledTableRow key={row.name}>*/}
                {/*            <StyledTableCell align="left" component="th" scope="row">{row.typeOfHash}</StyledTableCell>*/}
                {/*            <StyledTableCell align="left">{row.stringToHash}</StyledTableCell>*/}
                {/*            <StyledTableCell align="center">{row.hashedString}</StyledTableCell>*/}
                {/*        </StyledTableRow>*/}
                {/*    )):null}*/}
                {/*</TableBody>*/}
            </Table>
        </TableContainer>
    );

}

export default EthereumTransactionsTable;
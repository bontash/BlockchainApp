import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {StyledTableCell} from "../../../../core/ui/StyledTableCell";

const TransactionsTable = () => {


    // function mineData(data) {
    //     const hashedData = Web3Client.eth.abi.encodeFunctionSignature(data);
    //     Web3Client.eth.sendTransaction({
    //         from: '0x34e8dEe6163a1383415380b5F99AFC694B9DCEFF',
    //         data: hashedData // deploying a contract
    //     }, function (error, hash) {
    //         console.log("error: " + error + " and hash: " + hash);
    //     });
    // }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Transaction hash</StyledTableCell>
                        <StyledTableCell align="center">Sender account</StyledTableCell>
                        <StyledTableCell align="center">Receiver account</StyledTableCell>
                        <StyledTableCell align="center">Value</StyledTableCell>
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

export default TransactionsTable;
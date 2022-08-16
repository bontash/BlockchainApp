import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {StyledTableCell} from "../../../core/ui/StyledTableCell";
import {levenshteinDistance} from "./LevenshteinDistance";
import * as dljs from "damerau-levenshtein-js";
import {StyledTableRow} from "../../../core/ui/StyledTableRow";
import TableBody from "@mui/material/TableBody";

const HashPropertiesTable = ({rows}) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Hash function</StyledTableCell>
                        <StyledTableCell align="center">Initial message</StyledTableCell>
                        <StyledTableCell align="center">Resulted hash</StyledTableCell>
                        <StyledTableCell align="center">Speed of execution</StyledTableCell>
                        <StyledTableCell align="center">Non-correlation %</StyledTableCell>
                        <StyledTableCell align="center">Avalanche effect %</StyledTableCell>
                    </TableRow>
                    {console.log(dljs.distance('123456789123456abfgd', '0fb6821d93e6cee5754f9db961f4ed8ff3b362b4114c2e802f71a8b8425c2456'))}
                </TableHead>
                <TableBody>
                    {rows!==[]?rows?.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell align="center" component="th" scope="row">{row.typeOfHash}</StyledTableCell>
                            <StyledTableCell align="center">{row.stringToHash}</StyledTableCell>
                            <StyledTableCell align="center">{row.hashedString}</StyledTableCell>
                            <StyledTableCell align="center">{row.hashedString}</StyledTableCell>
                            <StyledTableCell align="center">{row.hashedString}</StyledTableCell>
                            <StyledTableCell align="center">{row.hashedString}</StyledTableCell>
                        </StyledTableRow>
                    )):null}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default HashPropertiesTable;
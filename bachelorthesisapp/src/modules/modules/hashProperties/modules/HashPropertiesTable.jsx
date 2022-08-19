import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {StyledTableCell} from "../../../core/ui/StyledTableCell";
import {StyledTableRow} from "../../../core/ui/StyledTableRow";
import TableBody from "@mui/material/TableBody";

const HashPropertiesTable = ({rows}) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Hash function</StyledTableCell>
                        <StyledTableCell align="center">Resulted hash</StyledTableCell>
                        <StyledTableCell align="center">Length</StyledTableCell>
                        <StyledTableCell align="center">Speed of execution</StyledTableCell>
                        <StyledTableCell align="center">Avalanche effect %</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows!==[]?rows?.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell align="center" component="th" scope="row">{row.typeOfHash}</StyledTableCell>
                            <StyledTableCell align="center">{row.hashedString}</StyledTableCell>
                            <StyledTableCell align="center">{row.benchmarks.length}</StyledTableCell>
                            <StyledTableCell align="center">{row.benchmarks.executionTime}</StyledTableCell>
                            <StyledTableCell align="center">{row.benchmarks.avalancheEffect}</StyledTableCell>
                        </StyledTableRow>
                    )):null}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default HashPropertiesTable;
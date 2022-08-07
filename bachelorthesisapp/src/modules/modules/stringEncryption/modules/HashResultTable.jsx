import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {StyledTableCell} from "../../../core/ui/StyledTableCell";
import {StyledTableRow} from "../../../core/ui/StyledTableRow";

export default function CustomizedTables({rows}) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">Hash function</StyledTableCell>
                        <StyledTableCell align="left">String to hash</StyledTableCell>
                        <StyledTableCell align="center">Encrypted string</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows!==[]?rows?.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell align="left" component="th" scope="row">{row.typeOfHash}</StyledTableCell>
                            <StyledTableCell align="left">{row.stringToHash}</StyledTableCell>
                            <StyledTableCell align="center">{row.hashedString}</StyledTableCell>
                        </StyledTableRow>
                    )):null}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

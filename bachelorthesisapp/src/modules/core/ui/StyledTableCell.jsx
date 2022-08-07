import React from "react";
import styled from "styled-components";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import {theme} from "./theme/themeOptions";

export const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
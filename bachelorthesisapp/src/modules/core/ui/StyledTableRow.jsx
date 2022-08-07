import {styled} from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import {theme} from "./theme/themeOptions";

export const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
import {ThemeOptions} from "@mui/material/styles"
import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#F8B400',
            light: '#FAF5E4'
        },
        secondary: {
            main: '#125B50',

        },
    }
})

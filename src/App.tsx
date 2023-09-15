import React from "react";
import theme from "./styles/theme";
import { ThemeProvider, CssBaseline } from '@mui/material';


const App: React.FC = () => {
    return (
        <ThemeProvider theme={ theme }>
            <CssBaseline />
        </ThemeProvider>
    )
}

export default App;
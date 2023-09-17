import { createTheme } from '@mui/material';


const theme = createTheme({
    palette: {
        background: {
            paper: '#1A1A1A',
            default: '#000000'
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#808080',
            disabled: 'rgb(255, 255, 255, 0.25)'
        },
        action: {
            active: '#FFFFFF',
            hover: 'rgba(255, 255, 255, 0.7)',
            hoverOpacity: 0.7,
            selected: '#97F223',
            disabled: 'rgba(255, 255, 255, 0.25)',
            disabledOpacity: 0.25
        }
    },
    typography: {
        h1: {
            fontFamily: 'Lack, Regular',
            fontSize: '4rem'
        },
        h2: {
            fontFamily: 'Lack, Regular',
            fontSize: '3rem'
        },
        h3: {
            fontFamily: 'Lack, Regular',
            fontSize: '2rem'
        },
        body1: {
            fontFamily: 'Lack, Regular',
            fontSize: '1rem'
        },
        body2: {
            fontFamily: 'Proxima Nova, Semibold',
            fontSize: '1rem'
        },
        button: {
            fontFamily: 'Lack, Regular',
            fontSize: '2rem',
        },
        htmlFontSize: 16,
        fontFamily: [
            'Lack, Regular',
            'Proxima Nova, Semibold',
            'sans-serif'
        ].join(',')
    },
    shape: {
        borderRadius: 12
    },
});

export default theme;
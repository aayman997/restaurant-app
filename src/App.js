import './styles/App.scss';
import 'uicons/uicons.min.css';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import WorkSansRegular from './assets/fonts/Work_Sans/static/WorkSans-Regular.ttf';
import WorkSansMedium from './assets/fonts/Work_Sans/static/WorkSans-Medium.ttf';
import WorkSansSemiBold from './assets/fonts/Work_Sans/static/WorkSans-SemiBold.ttf';
import WorkSansBold from './assets/fonts/Work_Sans/static/WorkSans-Bold.ttf';
import MealSelection from "./pages/MealSelection";

const theme = createTheme({
    palette: {
        primary: {
            main: '#410DEB',
        },
        secondary: {
            main: '#2F3333',
        },
        background: {
            default: "#F6F9F9"
        }
    },
    typography: {
        fontFamily: "'WorkSans'",
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: {variant: 'contained'},
                    style: {
                        borderRadius: '100px',
                        fontWeight: 500,
                        padding: '16px 22px',
                        fontSize: '14px',
                        lineHeight: '16px',
                        background: 'transparent',
                        boxShadow: 'none',
                        border: '2px solid #410DEB',
                        color: '#410DEB',
                        minWidth: "auto",
                        '&:hover': {
                            background: "#410DEB",
                            color: '#FFF',
                            boxShadow: 'none'
                        }
                    },
                },
                {
                    props: {variant: 'contained', size: 'small'},
                    style: {
                        borderRadius: '0',
                        fontWeight: 500,
                        padding: '16px 22px',
                        fontSize: '14px',
                        lineHeight: '16px',
                        background: 'transparent',
                        boxShadow: 'none',
                        border: 'none',
                        color: '#000',
                        minWidth: "auto",
                        '&:hover': {
                            background: "#410DEB",
                            color: '#FFF',
                            boxShadow: 'none'
                        }
                    },
                },
            ]
        },
        MuiCssBaseline: {
            styleOverrides: {
                '@font-face': {
                    fontFamily: '"WorkSans"',
                    fontDisplay: 'swap',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    src: `local('Work Sans Bold'),
                    url(${WorkSansBold}) format('truetype')`
                },
                fallbacks: [
                    {
                        '@font-face': {
                            fontFamily: '"WorkSans"',
                            fontDisplay: 'swap',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            src: `local('Work Sans Medium'),
                            url(${WorkSansMedium}) format('truetype')`
                        }
                    },
                    {
                        '@font-face': {
                            fontFamily: '"WorkSans"',
                            fontDisplay: 'swap',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            src: `local('Work Sans SemiBold'),
                            url(${WorkSansSemiBold}) format('truetype')`
                        }
                    },
                    {
                        '@font-face': {
                            fontFamily: '"WorkSans"',
                            fontDisplay: 'swap',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            src: `local('Work Sans Regular'),
                            url(${WorkSansRegular}) format('truetype')`
                        }
                    },

                ]
            }
        }
    },
});

function App() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <MealSelection/>
        </ThemeProvider>
    );
}

export default App;

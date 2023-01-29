import Header from "./Header";
import Footer from "./Footer";
import {Box, LinearProgress} from "@mui/material";
import OrderContext from "../../context/OrderContext";
import {useContext} from "react";

const Layout = ({children}) => {
    const {reqStatus} = useContext(OrderContext);
    return (
        <Box minHeight='100vh' maxHeight={window.outerWidth >= 1024 ? '100vh' : ''} display='flex' flexDirection='column' flexWrap='nowrap'>
            <Header/>
            {children}
            <Footer/>
            {reqStatus === 'loading' ?
                <Box display='flex' flexDirection='column' flexWrap='nowrap'
                     position='fixed' top='0' right='0' left='0' bottom='0'
                     justifyContent='center' alignItems='center' zIndex='6'
                     bgcolor='rgba(0, 0, 0, 0.5)'>
                    <LinearProgress sx={{width: '256px'}} color='primary'/>
                </Box>
                : null}
        </Box>
    )
}
export default Layout;
import {Box, Button, Container, Typography} from "@mui/material";

const Footer = () => {
    return (
        <Box id='appFooter' textAlign='right' bgcolor='#fff' mt='auto' paddingY={window.outerWidth >= 1024 ? '20px' : ''} flex='0 0 100%'>
            <Container maxWidth="xl">
                <Button variant='contained' className='active' type='submit'
                        sx={{
                            padding: window.outerWidth >= 1024 ? '20px 140px' : '20px', display: 'flex',
                            gap: '12px', marginLeft: 'auto', borderRadius: window.outerWidth >= 1024 ? '' : '6px'
                        }}>
                    <Typography fontWeight='500'>Payment</Typography>
                    <i className="fi fi-rr-arrow-right"/>
                </Button>
            </Container>
        </Box>
    )
}
export default Footer;
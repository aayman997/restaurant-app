import {Box, Container, IconButton, LinearProgress, Typography} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import OrderContext from "../../context/OrderContext";

const Header = () => {
    const [step, setStep] = useState(1);
    const {restaurant} = useContext(OrderContext);
    useEffect(() => {
        setStep(1)
    }, []);

    return (
        <Box component='header' id='appHeader'>
            <Container maxWidth="xl">
                <Box display='flex' flex='row nowrap' alignItems='center'>
                    <IconButton aria-label="close" sx={window.outerWidth >= 1024 ? {
                        width: '48px',
                        height: '48px',
                        background: '#F3F3F3',
                        color: '#0E0E0E',
                        fontSize: '12px'
                    } : {}}>
                        {window.outerWidth >= 1024 ?
                            <i className='fi fi-rr-cross'/> :
                            <i className="fi fi-rr-arrow-left"/>
                        }
                    </IconButton>
                    <Typography ml={window.outerWidth >= 1024 ? '39px' : '15px'} fontSize={window.outerWidth >= 1024 ? '24px' : '14px'} fontWeight='700'>
                        {window.outerWidth >= 1024 ?
                            'Select your meals' :
                            restaurant.name
                        }</Typography>
                    {window.outerWidth >= 1024 ?
                        <Box className='stepper' display='flex' alignItems='center' ml='auto'>
                            <Box className="step">{`step ${step}/3`}</Box>
                            <Box display='flex' ml='32px' gap='7px'>
                                <IconButton className='step-button' style={{backgroundColor: step >= 1 ? '#410DEB' : '#E0E8E4'}}/>
                                <IconButton className='step-button' style={{backgroundColor: step >= 2 ? '#410DEB' : '#E0E8E4'}}/>
                                <IconButton className='step-button' style={{backgroundColor: step >= 3 ? '#410DEB' : '#E0E8E4'}}/>
                            </Box>
                        </Box>
                        : <Box ml='auto' display='flex' gap='5px' alignItems='center'>
                            <IconButton aria-label="share"
                                        sx={{
                                            border: '1px solid #000',
                                            borderTop: 'none',
                                            borderRadius: '0 0 4px 4px',
                                            width: '18px',
                                            height: '18px'
                                        }}>
                                <i className="fi fi-rr-arrow-small-up" style={{padding: '0 3px 6px 3px'}}></i>
                            </IconButton>
                            <IconButton aria-label="search">
                                <i className="fi fi-rr-search"/>
                            </IconButton>
                        </Box>}
                </Box>
            </Container>
            {window.outerWidth >= 1024 ? <Box className="progress-bar">
                <LinearProgress variant="determinate" color='inherit' value={(step / 3) * 100} sx={{
                    position: 'absolute',
                    inset: 'auto 0 0 0'
                }}/>
            </Box> : null}
        </Box>
    )
}
export default Header;

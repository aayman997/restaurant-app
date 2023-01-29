import {Box, Button, IconButton, Stack} from "@mui/material";
import styles from '../../styles/Navigator.module.scss';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import {useState} from "react";

const Navigator = ({menu}) => {
    const [prevHidden, setPrevHidden] = useState(true);
    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: 'transparent',
        ...theme.typography.body2,
        textAlign: 'center',
        boxShadow: 'none'
    }));

    const scrollTo = (id) => {
        const targetEl = document.getElementById(id);
        targetEl.scrollIntoView({
            block: 'center',
            // behavior: 'smooth'
        });
    }
    const btnStackScroll = (dir) => {
        const btnsCon = document.getElementById('buttonsCon');
        if (btnsCon.scrollLeft > 0) setPrevHidden(false);
        btnsCon.scrollBy({
            left: dir === 'prev' ? -100 : 100,
            behavior: 'smooth'
        })
    }
    return (
        <Box className={styles['stack-box-con']}>
            <Stack className={styles['stack-box']} id='buttonsCon' direction="row" justifyContent="flex-start" alignItems="center" spacing={2} maxWidth='100%'
                   overflow='auto'>
                {
                    menu?.map(item => (
                        <Item key={item.id}>
                            <Button variant="contained" size={window.outerWidth >= 1024 ? "medium" : "small"} className={item.id === 1 ? 'active' : ''}
                                    sx={window.outerWidth >= 1024 ? {inlineSize: 'max-content'} :
                                        {
                                            inlineSize: 'max-content',
                                        }}
                                    id={`${item.name.replaceAll(' ', '')}Btn`}
                                    onClick={() => scrollTo(item.name.replaceAll(' ', ''))}>{item.name}</Button>
                        </Item>
                    ))
                }
            </Stack>
            {window.outerWidth >= 1024 ? <Box className={styles['navs-btns']}>
                <IconButton aria-label="move left" size="medium" className={`${styles['navs-btn']} ${styles['btn-prev']}`}
                            style={{display: prevHidden ? 'none' : 'flex'}} onClick={() => btnStackScroll('prev')}>
                    <i className="fi fi-rr-arrow-left"></i>
                </IconButton>
                <IconButton aria-label="move right" size="medium" className={`${styles['navs-btn']} ${styles['btn-next']}`}
                            onClick={() => btnStackScroll('next')}>
                    <i className="fi fi-rr-arrow-right"></i>
                </IconButton>
            </Box> : null}
        </Box>
    )
}
export default Navigator;
import {Badge, Box, Button, Checkbox, IconButton, Typography} from "@mui/material";
import styles from '../../styles/MealSelection.module.scss';

const CircleCheckedEl = () => {
    return (
        <svg fill='#410DEB' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='24px'>
            <path
                d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
        </svg>
    )
}
const CircleEl = () => {
    return (
        <svg fill='#020A05' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='24px'>
            <path
                d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>
        </svg>
    )
}

const DishItems = ({menu}) => {
    const getParentEl = (id) => {
        const parent = document.getElementById(id);
        parent.classList.toggle('active');
    }
    return (
        <Box className={styles.sections} id='sectionsView'>
            {menu?.map(item => (
                <Box key={item.id} id={`${item.name.replaceAll(' ', '')}`} className={styles['section-con']}>
                    <Box className={styles['section-head']}>
                        <Typography fontWeight='700' fontSize='20px'>{item.name}</Typography>
                        {window.outerWidth >= 1024 ? <>
                            <Badge>{item.items.length}</Badge>
                            <Button color='secondary'>select</Button>
                        </> : null}
                    </Box>
                    <Box>
                        {item.items.map(el => (
                            <Box key={el.id} component={window.outerWidth >= 1024 ? 'label' : 'div'} sx={{cursor: 'pointer'}} htmlFor={`id${el.id}`}>
                                <Box key={el.id} className={styles['dish-con']} id={`${el.name.replaceAll(' ', '')}${el.id}`}>
                                    {window.outerWidth >= 1024 ?
                                        <Box className={styles['dish-img']} sx={{backgroundImage: `url(${require(`../../assets/images/meals/${el.img}`)})`}}/>
                                        : null}
                                    <Box className={styles['dish-details']} flex='0 0 auto'>
                                        <Typography fontWeight='700' fontSize='18px'>{el.name}</Typography>
                                        <Box className={styles['dish-more-details']}>
                                            <Typography order={window.outerWidth >= 1024 ? 0 : 1} fontWeight='600' fontSize='14px'
                                                        flex='1 0 auto'>AED {el.price}</Typography>
                                            {window.outerWidth >= 1024 ?
                                                <Box fontWeight='400' flex='1 0 auto' display='flex' gap='3px' alignItems='center'>
                                                    <Typography color='#79E003' fontSize='14px'>{el.rate}</Typography>
                                                    <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width='12px' fill='#79E003'>
                                                        <path
                                                            d="M1.327,12.4,4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6a3.227,3.227,0,0,0-1.9-5.832H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832Z"/>
                                                    </svg>
                                                </Box> : null}
                                            <Typography fontWeight='400' fontSize='14px' flex='1 1 100%'>{el.description.slice(0, 50)}</Typography>
                                            {window.outerWidth >= 1024 ? <Box flex='1 0 auto'>
                                                <IconButton>
                                                    <i className="fi fi-rr-eye"/>
                                                </IconButton>
                                                <IconButton>
                                                    <Checkbox id={`id${el.id}`} icon={<CircleEl/>} checkedIcon={<CircleCheckedEl/>}
                                                              onChange={() => getParentEl(`${el.name.replaceAll(' ', '')}${el.id}`)}/>
                                                </IconButton>
                                            </Box> : null}
                                        </Box>
                                    </Box>
                                    {window.outerWidth >= 1024 ?
                                        null
                                        :
                                        <Box position='relative'>
                                            <Box className={styles['dish-img']}
                                                 sx={{backgroundImage: `url(${require(`../../assets/images/meals/${el.img}`)})`}}/>
                                            <Button variant='contained' className={styles['add-btn']}>Add</Button>
                                        </Box>}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            ))}
        </Box>
    )
}
export default DishItems;
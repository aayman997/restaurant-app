import {Box, IconButton, Link, Typography} from "@mui/material";
import styles from '../../styles/MealSelection.module.scss';
import {useContext} from "react";
import OrderContext from "../../context/OrderContext";

const ShoppingBox = () => {
    const {restaurant} = useContext(OrderContext);

    const addressBuilder = (address) => {
        const {state, city, area, apartment, floor} = address;

        let addressArr = [];
        apartment && addressArr.push(apartment);
        floor && addressArr.push(floor);
        area && addressArr.push(area);
        city && addressArr.push(city);
        state && addressArr.push(state);
        return addressArr.join(', ');
    }

    return (
        restaurant.id ?
            <Box>
                <Box className={styles['restaurant-image']} sx={{backgroundImage: `url(${require(`../../assets/images/${restaurant?.img}`)})`}}/>
                <Box px='28px' mt='20px' mb='40px' textAlign='center'>
                    <Box display='flex' flexDirection='row' flexWrap='nowrap' gap='14px' justifyContent='center' alignItems='center'>
                        <Typography fontWeight='700' fontSize='18px'>{restaurant.name}</Typography>
                        <Box color='#79E003' fontSize='14px' display='flex' gap='5px' alignItems='center'>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width='12px' fill='#79E003'>
                                <path
                                    d="M1.327,12.4,4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6a3.227,3.227,0,0,0-1.9-5.832H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832Z"/>
                            </svg>
                            <Typography>{restaurant.rate}</Typography>
                        </Box>
                    </Box>
                    <Box fontSize='14px' display='flex' gap='12px' mt='5px' mb='15px' justifyContent='center' alignItems='center'>
                        <Typography>{addressBuilder(restaurant.address)}</Typography>
                        <IconButton sx={{
                            backgroundColor: '#000', borderRadius: '12px', color: '#fff', fontSize: '14px', padding: '10px 11px',
                            ':hover': {
                                backgroundColor: '#000'
                            }
                        }}>
                            <i className="fi fi-rr-marker"></i>
                        </IconButton>
                    </Box>
                    <Link href='#' sx={{
                        display: 'inline-block',
                        backgroundColor: '#000',
                        padding: '10px 22px',
                        color: '#fff',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        transition: '0.2s opacity ease-in-out',
                        cursor: 'pointer',
                        ':hover': {
                            opacity: 0.5
                        }
                    }}>
                        {restaurant.cuisine}
                    </Link>
                </Box>
                <Box py='12px' px='18px' borderTop='1px solid #E0E8E4' borderBottom='1px solid #E0E8E4' display='flex' flexDirection='column' gap='12px'>
                    {
                        restaurant.dishes.find(dish => dish.id === 2).items.map(item => (
                            <Box key={item.id} className={styles['dish-con']} p='0' m='0' sx={{'&:not(:last-child)': {paddingBottom: '12px'}}}>
                                < Box className={styles['dish-img']} sx={{backgroundImage: `url(${require(`../../assets/images/meals/${item.img}`)})`}}/>
                                <Box className={styles['dish-details']} flex='0 0 auto' display='flex' flexDirection='row !important'
                                     justifyContent='space-between' alignItems='center'>
                                    <Box>
                                        <Typography fontWeight='700' fontSize='18px'>{item.name}</Typography>
                                        <Typography fontWeight='600' fontSize='14px' flex='1 0 auto'>AED {item.price}</Typography>
                                    </Box>
                                    <Box className={styles['dish-more-details']}>
                                        <Box flex='1 0 auto'>
                                            <IconButton>
                                                <i className="fi fi-rr-trash"/>
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
                <Box display='flex' gap='13px' alignItems='center' ml='18px' my='27px'>
                    <Typography fontSize='14px' color='#2F3333A6'>Total Price</Typography>
                    <Typography fontSize='18px' fontWeight='700'>AED 70</Typography>

                </Box>
            </Box> : null
    )
}
export default ShoppingBox;
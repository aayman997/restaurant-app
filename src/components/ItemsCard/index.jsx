import {Box, Divider} from "@mui/material";
import styles from '../../styles/ItemsCard.module.scss';
import Navigator from '../Navigator/index';
import DishItems from "../DishItems";
import OrderContext from "../../context/OrderContext";
import {useContext, useEffect, useState} from "react";

const ItemsCard = () => {
    const [menuTitles, setMenuTitles] = useState([]);
    const {restaurant} = useContext(OrderContext);

    useEffect(() => {
        setMenuTitles(restaurant?.dishes?.map(item => {
            return {id: item.id, name: item.name}
        }));
    }, [restaurant]);

    return (
        <Box className={styles.card}>
            <Navigator menu={menuTitles}/>
            {window.outerWidth >= 1024 ? <Divider/> : null}
            <DishItems menu={restaurant?.dishes}/>
        </Box>
    )
}
export default ItemsCard;
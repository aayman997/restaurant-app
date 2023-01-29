import {createContext, useEffect, useState} from "react";
import {fetcher} from "../helpers";

const OrderContext = createContext({});
export const OrderProvider = ({children}) => {
    const [restaurant, setRestaurant] = useState([]);
    const [reqStatus, setReqStatus] = useState('loading');
    useEffect(() => {
        fetcher('restaurant')
            .then(res => {
                setRestaurant(res);
                setReqStatus('success');
            })
            .catch(err => {
                setReqStatus('error');
                console.error(err);
            });
    }, []);

    return (
        <OrderContext.Provider value={{restaurant, reqStatus}}>
            {children}
        </OrderContext.Provider>
    );
}
export default OrderContext;

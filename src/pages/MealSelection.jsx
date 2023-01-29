import Layout from "../components/Layout/Layout";
import {Box} from "@mui/material";
import ItemsCard from "../components/ItemsCard";
import ShoppingBox from "../components/ShoppingBox";
import {OrderProvider} from "../context/OrderContext";
import {useEffect, useState} from "react";

const MealSelection = () => {
    const [layoutHeight, setLayoutHeight] = useState(0)

    const handleSectionScroll = () => {
        const sectionsCon = document.getElementById('sectionsView');
        sectionsCon.onscroll = () => {
            const sections = document.querySelectorAll('#sectionsView > div');
            const btns = document.querySelectorAll('#buttonsCon button');
            let current = "";

            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().bottom;
                if (sectionsCon.getBoundingClientRect().bottom >= sectionTop) {
                    current = section.getAttribute("id");
                }
            });
            handleNavbarScroll(`${current}Btn`);
            btns.forEach((li) => {
                li.classList.remove("active");
                if (li.id.includes(current)) {
                    li.classList.add("active");
                }
            });
        };
    }

    const handleNavbarScroll = (btnId) => {
        document.getElementById(btnId).scrollIntoView({inline: 'start'})
    }

    const boxHeightCalc = () => {
        const appHeaderHeight = document.getElementById('appHeader').getBoundingClientRect().height;
        const appFooterHeight = document.getElementById('appFooter').getBoundingClientRect().height;
        const windowHeight = window.innerHeight;
        setLayoutHeight(windowHeight - (appHeaderHeight + appFooterHeight))
    }

    useEffect(() => {
        handleSectionScroll();
        boxHeightCalc()
    })

    return (
        <OrderProvider>
            <Layout>
                <Box maxWidth={window.outerWidth >= 1024 ? "xl" : '100vw'} m='auto' sx={{
                    flex: '1 1 ' + layoutHeight + 'px',
                    maxHeight: layoutHeight + 'px',
                    overflow: 'hidden',
                    height: layoutHeight + 'px'
                }}>
                    <Box className="page-content">
                        <Box className="items-card">
                            <ItemsCard/>
                        </Box>
                        <Box className="shopping-box">
                            <ShoppingBox/>
                            <Box className='waves'/>
                        </Box>
                    </Box>
                </Box>
            </Layout>
        </OrderProvider>
    )
}
export default MealSelection;
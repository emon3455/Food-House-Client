import { Helmet } from "react-helmet-async";
import Cover from "../../../shared/cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"
import PopularMenu from "../../home/popularMenu/Popularmenu";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Food house | Menu</title>
            </Helmet>

            <Cover img={menuImg} heading="OUR MENU" text="would you like to try a dish"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} heading="OUR MENU" text="would you like to try a dish"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} heading="OUR MENU" text="would you like to try a dish"></Cover>
            <PopularMenu></PopularMenu>

        </div>
    );
};

export default Menu;
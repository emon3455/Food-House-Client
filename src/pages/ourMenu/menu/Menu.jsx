import { Helmet } from "react-helmet-async";
import Cover from "../../../shared/cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import MenuCatagory from "../menuCatagory/MenuCatagory";

import desertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";


const Menu = () => {

    const [menu] = useMenu();
    const salads = menu.filter(item=> item.category === "salad");
    const pizzas = menu.filter(item=> item.category === "pizza");
    const soups = menu.filter(item=> item.category === "soup");
    const desserts = menu.filter(item=> item.category === "dessert");
    const offereds = menu.filter(item=> item.category === "offered");

    return (
        <div>
            <Helmet>
                <title>Food house | Menu</title>
            </Helmet>

            <Cover img={menuImg} title="OUR MENU"></Cover>

            <SectionTitle subHeading="--- Don't miss ---" heading="TODAY'S OFFER"></SectionTitle>
            <MenuCatagory items={offereds} ></MenuCatagory>

            <MenuCatagory items={desserts} img={desertBg} title="Deserts"></MenuCatagory>

            <MenuCatagory items={pizzas} img={pizzaBg} title="Pizzas"></MenuCatagory>

            <MenuCatagory items={salads} img={saladBg} title="Salads"></MenuCatagory>

            <MenuCatagory items={soups} img={soupBg} title="Soups"></MenuCatagory>

        </div>
    );
};

export default Menu;
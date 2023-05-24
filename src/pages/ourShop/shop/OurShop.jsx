/* eslint-disable no-unused-vars */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import Cover from '../../../shared/cover/Cover';
import useMenu from '../../../hooks/useMenu';
import banner from "../../../assets/shop/banner2.jpg";
import OrderTab from '../orderTab/OrderTab';
import { useParams } from 'react-router-dom';
import Catagory from '../../home/catagory/Catagory';
import { Helmet } from 'react-helmet-async';


const OurShop = () => {


    const categories = ["salad","pizza","soup", "dessert", "drinks"];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const salads = menu.filter(item => item.category === "salad");
    const pizzas = menu.filter(item => item.category === "pizza");
    const soups = menu.filter(item => item.category === "soup");
    const desserts = menu.filter(item => item.category === "dessert");
    const drinks = menu.filter(item => item.category === "drinks");

    return (
        <div className="">
            <Helmet>
                <title>Food house | Shop</title>
            </Helmet>

            <Cover img={banner} title="OUR SHOP"></Cover>

            <div className="p-2 mb-5">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <div className="text-center py-5">
                        <TabList>
                            <Tab><span className=" border-yellow-500 border-b-4 font-bold text-2xl p-1">SALAD</span></Tab>
                            <Tab><span className=" border-yellow-500 border-b-4 font-bold text-2xl p-1">PIZZA</span></Tab>
                            <Tab><span className=" border-yellow-500 border-b-4 font-bold text-2xl p-1">SOUP</span></Tab>
                            <Tab><span className=" border-yellow-500 border-b-4 font-bold text-2xl p-1">DESSERT</span></Tab>
                            <Tab><span className=" border-yellow-500 border-b-4 font-bold text-2xl p-1">DRINKS</span></Tab>
                        </TabList>
                    </div>

                    <TabPanel classID="p-1">
                        <OrderTab items={salads}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={pizzas}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={soups}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={desserts}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>

                </Tabs>
            </div>

        </div>
    );
};

export default OurShop;
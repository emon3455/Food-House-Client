/* eslint-disable no-unused-vars */
import Cover from "../../shared/cover/Cover";
import banner from "../../assets/shop/banner2.jpg"
import useMenu from "../../hooks/useMenu";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import FoodCard from "../../shared/foodCard/FoodCard";


const OurShop = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const salads = menu.filter(item => item.category === "salad");
    const pizzas = menu.filter(item => item.category === "pizza");
    const soups = menu.filter(item => item.category === "soup");
    const desserts = menu.filter(item => item.category === "dessert");
    const drinks = menu.filter(item => item.category === "drinks");

    return (
        <div className="">
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                            {
                                salads.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                            {
                                pizzas.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                            {
                                soups.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                            {
                                desserts.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                            {
                                drinks.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>

                </Tabs>
            </div>

        </div>
    );
};

export default OurShop;
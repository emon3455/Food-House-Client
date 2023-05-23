import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import Catagory from "../catagory/Catagory";
import Feacherd from "../feachersItem/Feacherd";
import PopularMenu from "../popularMenu/Popularmenu";
import Testimonial from "../testimonial/Testimonial";

const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>Food house | Home</title>
            </Helmet>
            <div className="text-center mb-5">
                <Banner></Banner>
            </div>
            <div className="space-y-10 mb-10">
                <Catagory></Catagory>
                <PopularMenu></PopularMenu>
                <Feacherd></Feacherd>
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;
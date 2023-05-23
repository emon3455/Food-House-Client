import Banner from "../banner/Banner";
import Catagory from "../catagory/Catagory";
import Feacherd from "../feachersItem/Feacherd";
import PopularMenu from "../popularMenu/Popularmenu";

const Home = () => {
    return (
        <div className="">
            <div className="text-center mb-5">
                <Banner></Banner>
            </div>
            <div className="space-y-10 mb-10">
                <Catagory></Catagory>
                <PopularMenu></PopularMenu>
                <Feacherd></Feacherd>
            </div>
        </div>
    );
};

export default Home;
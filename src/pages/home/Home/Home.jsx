import Banner from "../banner/Banner";
import Catagory from "../catagory/Catagory";

const Home = () => {
    return (
        <div className="text-center mb-5">
            <Banner></Banner>
            <div className="space-y-5">
                <Catagory></Catagory>
            </div>
        </div>
    );
};

export default Home;
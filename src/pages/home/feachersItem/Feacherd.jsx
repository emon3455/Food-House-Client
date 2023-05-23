
import moment from "moment/moment";
import feacherdImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle";
import "./feacherd.css"

const Feacherd = () => {
    return (
        <section className="feacherdItem bg-fixed text-white">
            <div className="hero-overlay bg-black bg-opacity-60 w-full pt-5 pb-14">
                <SectionTitle subHeading="--- Check it out ---" heading="FROM OUR MENU"></SectionTitle>
                <div className="flex flex-col md:flex-row justify-center items-center gap-10 p-2 md:px-32 md:py-5">
                    <div className="w-full md:w-2/5">
                        <img className="w-full" src={feacherdImg} alt="feacherd image" />
                    </div>
                    <div className="w-full md:w-3/5 text-gray-200">
                        <p className="font-semibold text-sm">{moment().format('MMMM Do YYYY')}</p>
                        <p className="text-xl font-bold">WHERE CAN I GET SOME?</p>
                        <p className="text-md font-medium text-justify">
                            Chotpoti, a beloved street food from Bangladesh, takes center stage on our food website. Our recipe features perfectly boiled chickpeas, zesty tamarind chutney, and a medley of aromatic spices. Topped with crunchy puffed rice, this dish promises an explosion of flavors that will leave you craving more.
                        </p>
                        <button className="btn btn-outline border-0 border-gray-200 text-white border-b-4 mt-4">Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feacherd;
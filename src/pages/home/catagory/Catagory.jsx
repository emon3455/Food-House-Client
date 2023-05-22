// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";


const Catagory = () => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={slide1} alt="" />
                <h3 className="text-2xl font-semibold text-center text-white -mt-24 ">Salad</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="" />
                <h3 className="text-3xl font-semibold text-center text-white -mt-24 ">Pizza</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="" />
                <h3 className="text-3xl font-semibold text-center text-white -mt-24 ">Soup</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt="" />
                <h3 className="text-3xl font-semibold text-center text-white -mt-24 ">Cake</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide5} alt="" />
                <h3 className="text-3xl font-semibold text-center text-white -mt-24 ">Salad</h3>
            </SwiperSlide>

            <SwiperSlide>
                <img src={slide2} alt="" />
                <h3 className="text-3xl font-semibold text-center text-white -mt-24">Pizza</h3>
            </SwiperSlide>

        </Swiper>
    );
};

export default Catagory;
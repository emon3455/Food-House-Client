import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'
import { FaQuoteLeft } from "react-icons/fa";

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Testimonial = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section>
            <SectionTitle subHeading="--- What Our Clients Say ---" heading="TESTIMONIALS"></SectionTitle>

            <div className="">

                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="flex flex-col justify-center items-center w-4/5 mx-auto">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <div className="text-3xl my-4">
                                    <FaQuoteLeft></FaQuoteLeft>
                                </div>
                                <p className="text-center">
                                    {review.details}
                                </p>
                                <h3 className="text-3xl font-bold text-orange-400">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>

            </div>
        </section>
    );
};

export default Testimonial;
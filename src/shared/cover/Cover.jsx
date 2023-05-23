import { Parallax } from "react-parallax";


const Cover = ({ img,heading,text }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the banner"
            strength={-200}
        >
            <div className="hero h-[550px] bg-cover">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content px-40 py-20 bg-black bg-opacity-40">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-extrabold">{heading}</h1>
                        <p className="mb-5">
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;
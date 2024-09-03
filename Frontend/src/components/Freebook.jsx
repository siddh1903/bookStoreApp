import list from "../list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {
    const FilterData = list.filter((data) => data.Category === "Free");
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div>
                    <h1 className="font-semibold text-xl pd-2">Free offered courses</h1>
                    <p>lorem ipsum</p>
                </div>
            </div>
            <div className="slider-container max-w-screen-2xl container mx-auto md:px-20 px-4">
                <Slider {...settings}>
                    {FilterData.map((item) => (
                        <Cards item={item} key={item.id}/>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default Freebook;

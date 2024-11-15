
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios";
import { useEffect, useState } from "react";

function Freebook() {
    const [book, setBook]=useState([])
    useEffect(() =>{
    const getBook=async()=>{
    try {
        const res = await axios.get("http://localhost:4001/book");
        
        const data = res.data.filter((data) => data.Category === "Free");
        console.log(data)
        setBook(data)
    } catch (error) {
        console.log(error)
    }
    }
    getBook();
    },[])
    
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
                    slidesToShow: 1,  // Display only 1 card at a time for mobile
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,  // Display only 1 card at a time for smaller mobile screens
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
                    <p>Here are different Categories of books you may like to read. Explore the imaginary world while reading.</p>
                </div>
            </div>
            <div className="slider-container max-w-screen-2xl container mx-auto md:px-20 px-4">
                <Slider {...settings}>
                    {book.map((item) => (
                        <Cards item={item} key={item.id}/>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default Freebook;

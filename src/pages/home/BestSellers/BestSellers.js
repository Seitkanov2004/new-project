import React from 'react';
import gou from "../../../assets/img/Frame 10.png"
import svg from "../../../assets/img/swiper.png"
import png from "../../../assets/img/swiper2.png"
import Slider from "react-slick"
import next from "./../../../assets/img/next.svg"

const BestSellers = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        nextArrow: <img src={next}/>,
        slidesToScroll: 2,
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
                    slidesToShow: 2,
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
        <section id="best">
            <div className="container">
                <div className="best">
                    <div className="best--block">
                        <div className="best--block__text">
                            <img src={gou} alt=""/>
                            <h4>Best Sellers</h4>
                        </div>
                        <h1>You Only Reserve <br/>
                            Exception</h1>
                        <p>Each location has a menu that`s curated just for them.
                            See what new at your Cafesio and You`ll find Cafesio Covent Carden moments. </p>
                    </div>
                    <div className="best--img">
                        <div style={{
                            display: 'flex'
                        }} className="best--img__svg">
                            <Slider {...settings}>
                                <img src={svg} alt=""/>
                                <img src={png} alt=""/>
                                <img src={svg} alt=""/>
                                <img src={png} alt=""/>
                                <img src={svg} alt=""/>
                                <img src={png} alt=""/>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default BestSellers;

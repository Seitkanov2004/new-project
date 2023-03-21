import React from 'react';
import viw from "../../../assets/img/Frame 10.png"
import img from "../../../assets/img/photo.png"
import fon from "../../../assets/img/photo12.png"

const AboutUs = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="about">
                    <div className="about--block">
                        <div className="about--block__nav">
                            <div className="about--block__nav--text">
                                <img src={viw} alt=""/>
                                <h4>About Us</h4>
                            </div>
                            <h2>A Journey Throught <br/>
                                Cafesio Flavors</h2>
                        </div>
                        <div className="about--block__try">
                            <p>Try dishes that will open up new tastes for you and delight your eyes with their appearance. Here you will find a cozy atmosphere, excellent service and attention to each guest. Book a table now and enjoy a unique experience of taste discovery!</p>
                        </div>
                    </div>
                    <div className="about--img">
                        <div className="about--img__image">
                            <img src={img} alt=""/>
                        </div>
                        <div className="about--img__photo">
                            <img src={fon} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
import React from 'react';
import gou from "../../../assets/img/Frame 10.png"
import svg from "../../../assets/img/swiper.png"
import png from "../../../assets/img/swiper2.png"
import photo from "../../../assets/img/photo.png"
import photo12 from "../../../assets/img/photo12.png"



const BestSellers = () => {
    return (<section id="best">
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
                        See what new at your Cafesio and You`ll find Cafesio Covent Carden moments.</p>
                    </div>
                    <div className="best--img">
                        <div className="best--img__photo">
                            <img src={svg} alt=""/>
                            <img src={png} alt=""/>
                            <img src={photo} width={280} alt=""/>
                            <img src={photo12} width={280} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
};
export default BestSellers;

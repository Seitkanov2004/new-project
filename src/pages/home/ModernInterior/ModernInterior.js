import React from 'react';
import bg from "../../../assets/img/1.png"
import bg2 from "../../../assets/img/2.png"
import bg3 from "../../../assets/img/3.png"
import bg4 from "../../../assets/img/4.png"
import bg5 from "../../../assets/img/5.png"
import titleImg from "../../../assets/img/title.svg";
import titleRight from "../../../assets/img/title-right.svg";
import vector from "../../../assets/img/Vec1.png"
import vect from "../../../assets/img/Vec2.png"
import LINE from "../../../assets/img/Line1.png"

const ModernInterior = () => {
    return (
        <section id="modern">
            <div className="container">
                    <div className="modern--text">
                        <div className="modern--text__block">
                            <img src={vector} alt="" className="modern--text__block--img"/>
                            <img src={LINE} alt="" className="modern--text__block--line"/>
                        </div>
                        <h1 className="modern--text__title">Main Menu</h1>
                        <div className="modern--text__block">
                            <img src={vect} alt="" className="modern--text__block--img"/>
                            <img src={LINE} alt="" className="modern--text__block--line"/>
                        </div>
                    </div>
                <div className="modern">
                    <div className="modern--img">
                        <img src={bg} alt=""/>
                    </div>
                    <div className="modern--image">
                        <img src={bg2} alt=""/>
                        <div className="modern--image__fon">
                            <img src={bg3} alt=""/>
                            <img src={bg4} alt=""/>
                        </div>
                    </div>
                   <div className="modern--img">
                       <img src={bg5} alt=""/>
                   </div>
                    <div className="modern--img">
                        <img src={bg} alt=""/>
                    </div>
                    <div className="modern--image">
                        <img src={bg2} alt=""/>
                        <div className="modern--image__fon">
                            <img src={bg3} alt=""/>
                            <img src={bg4} alt=""/>
                        </div>
                    </div>
                   <div className="modern--img">
                       <img src={bg5} alt=""/>
                   </div>
                </div>
            </div>
        </section>
    );
};

export default ModernInterior;
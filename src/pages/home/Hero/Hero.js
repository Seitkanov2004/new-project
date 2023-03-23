import React, {useState} from 'react';
import img from "../../../assets/img/Frame 10.png"
import bg from "../../../assets/img/Frame 9.png"
import {FiArrowRight} from "react-icons/fi";
import {MdOutlineFmdGood} from "react-icons/md";
import {BiPhone} from "react-icons/bi";
import vr from "../../../assets/img/Group 2.svg"
import foto from "../../../assets/img/Group 1.svg"

const Hero = () => {
    const [info, setInfo] = useState(false)
    return (
        <div id="hero">
            <div className="bg-blur">
                <div className="container">
                    <div className="hero">
                        <div className="hero--height"></div>
                        <hr/>
                        <div className="hero--text">
                            <div className="hero--text__nav">
                                <img src={img} alt=""/>
                                <h4>Delicious</h4>
                                <img src={bg} alt=""/>
                            </div>
                            <h1>Italian Cuisine</h1>
                            <p>Classic steak & delicious with delightfully unexpenced twists.
                                The Restaurant`s sunny decor was inspired by the diners</p>
                            <div className="hero--text__block">
                                <div style={{
                                    transition: ".4s",
                                    width: info ? "140px" : "",
                                    marginLeft: info ? "40px" : ""
                                }} className="hero--text__block--lin"></div>
                                <div className="hero--text__block--width" onClick={() => setInfo(!info)}>
                                    <p>Reserve Your Table</p>
                                    <FiArrowRight className="hero--text__block--width__icon"/>
                                </div>
                                <div style={{
                                    transition: ".4s",
                                    width: info ? "140px" : "",
                                    marginLeft: info ? "40px" : ""
                                }} className="hero--text__block--border"></div>
                            </div>
                        </div>
                        <div className="hero--name" style={{
                            display: info ? "block" : "none",
                        }}>
                            <div className="hero--name__enter">
                                <img src={vr} alt=""/>
                                <div className="hero--name__enter--class">
                                    <h6>NAME</h6>
                                    <h4>|Enter your name</h4>
                                </div>
                            </div>
                            <div className="hero--name__phone">
                                <img src={foto} alt=""/>
                                <div className="hero--name__phone--ash">
                                    <h6>PHONE</h6>
                                    <h4>Enter your phone</h4>
                                </div>
                            </div>
                            <button>Сontact</button>
                        </div>
                        <div className="hero--title">
                            <div className="hero--title__line">
                                <p>Location</p>
                                <span></span>
                                <MdOutlineFmdGood className="hero--title__line--good"/>
                                <p>Ruada moeda 1g,1200-275,Portugal</p>
                            </div>
                            <div className="hero--title__new">
                                <p>Hotline</p>
                                <span></span>
                                <BiPhone className="hero--title__new--gou"/>
                                <p>+771219900</p>
                            </div>
                        </div>
                        <div className="hero--font"/>
                    </div>
                </div>
                <div className="bg" hidden={!info} onClick={() => setInfo(false)}/>
            </div>
        </div>
    );
};

export default Hero;
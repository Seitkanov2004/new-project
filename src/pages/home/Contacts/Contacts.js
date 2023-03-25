import React from 'react';
import {MdWifiCalling3} from "react-icons/md";
import {TfiEmail} from "react-icons/tfi";
import {FaTelegramPlane} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";

const Contacts = () => {
    return (
        <div id='contacts'>
            <div className="container">
                <div className="contacts">
                    <div className="contacts--visit">

                        <div className="contacts--visit__joinUs">
                            <svg width="52" height="16" viewBox="0 0 52 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M51.2598 8.99238H12.2598C9.25977 7.99238 9.25977 2.99238 12.2598 1.49238C14.5451 0.349559 19.7598 0.992432 19.2598 5.99238" stroke="#EF272C" stroke-width="2"/>
                                <line y1="14.9924" x2="51.2599" y2="14.9924" stroke="#EF272C" stroke-width="2"/>
                            </svg>
                            <h5>Visit restaurant</h5>
                        </div>

                        <h2>Join Us for <br/>
                            Happy Hours</h2>

                        <div className="contacts--visit__address">
                            <h3>Your neighborhood</h3>
                            <h4>225$.Lake Ave.Suite 1150 <br/>
                                Pasadena,CA 911101</h4>
                        </div>

                        <div className="contacts--visit__timeline">
                            <h3>Opening hours:</h3>
                            <h4>Mon-Thu: 10:00 am - 01:00 <br/> am <br/>
                                Fri-Sun: 10:00 am - 02:00 am
                            </h4>
                        </div>

                        <div className="contacts--visit__btn">
                            <div className="contacts--visit__btn--rightLine"></div>
                            <button>Purchase gift card →</button>
                            <div className="contacts--visit__btn--leftLine"></div>
                        </div>
                    </div>
                    <div className="contacts--cardLocation">
                        <div className="contacts--cardLocation__background">
                            <div className="contacts--cardLocation__background--contactInfo">
                                <h2>Contact Info</h2>
                                <div>
                                    <MdWifiCalling3 id={"call"}/>
                                    <h3>+771219900</h3>
                                </div>

                                <div className={"contacts--cardLocation__background--contactInfo__social"}>
                                    <TfiEmail id={"email"}/>
                                    <h3>motionweb312@gmail.com</h3>
                                </div>

                                <div>
                                    <FaTelegramPlane id={"telegram"}/>
                                    <AiFillInstagram id={"instagram"}/>
                                </div>


                            </div>

                                <div className="contacts--cardLocation__background--location">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d187305.9802435646!2d74.74054755664062!3d42.81675618838551!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1679460896513!5m2!1sru!2skg"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"

                                >
                                </iframe>
                                    width={400}
                                    height={200}
                                ></iframe>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
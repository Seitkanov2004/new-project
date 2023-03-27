import React, {useState} from 'react';
import {Foods} from "../../../components/data/foods";
import {IoIosCloseCircleOutline} from "react-icons/io";
import adapMenu from "./../../../assets/img/adap-menu.svg"
import {FiSearch} from "react-icons/fi";

const AboutFoods = () => {
    const [selectedTab, setSelectedTab] = useState(1);

    const [addFoods, setAddFoods] = useState(false)

    const handleTabClick = (index) => {
        setSelectedTab(index);
    };

    return (
        <div id="aboutFoods">
            <div className="container">
                <div className="aboutFoods">
                    <div className="aboutFoods--menuTitle">
                        <div className="aboutFoods--firstTitle">
                            <div>
                                <img src={adapMenu} alt=""/>
                                <h1>Menu</h1>
                            </div>
                            <FiSearch className="aboutFoods--firstTitle__icon"/>
                        </div>
                    </div>
                    <div className="aboutFoods--block">
                        <div style={{
                            display: addFoods ? "block" : "none"
                        }} onClick={() => setAddFoods(false)} className="aboutFoods--block__icon">
                            <IoIosCloseCircleOutline/></div>
                        <div className="aboutFoods--block--blockChild">
                            {
                                Foods.map(el => (
                                    <div className="aboutFoods--block--blockChild__foods">
                                        <div className="aboutFoods--block--blockChild__foods--allBtn">
                                            <div
                                                style={{
                                                    background: selectedTab === el.id ? "#EF272C" : "",
                                                }}
                                                className={selectedTab === el.id ? 'active mainMenu--block--blockChild__foods--allBtn__btn' : 'mainMenu--block--blockChild__foods--allBtn__btn'}
                                                onClick={() => {
                                                    handleTabClick(el.id)
                                                }}>
                                                <button style={{
                                                    border: selectedTab === el.id ? "none" : "",
                                                }}>{el.title}</button>
                                                <div style={{
                                                    transition: ".4s",
                                                    left: selectedTab === el.id ? "" : "-60px",
                                                }} className="mainMenu--block--blockChild__foods--allBtn__btn--line"/>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            <div style={{
                                display: addFoods ? "block" : "none"
                            }} className="aboutFoods--block__addedFoods">
                                {
                                    Foods.slice(0, 1).map(el => (
                                        <div className="aboutFoods--block__addedFoods--spend">
                                            {
                                                el.nameFoots.slice(0, 1).map(el => (
                                                    <div className="aboutFoods--block__addedFoods--spend__feel">
                                                        <div
                                                            className="aboutFoods--block__addedFoods--spend__feel--keep">
                                                            <div
                                                                className="aboutFoods--block__addedFoods--spend__feel--keep__make">
                                                                <img src={el.img} alt=""/>
                                                                <div
                                                                    className="aboutFoods--block__addedFoods--spend__feel--keep__make--give">
                                                                    <div
                                                                        className="aboutFoods--block__addedFoods--spend__feel--keep__make--give__let">
                                                                        <h3>{el.name}</h3>
                                                                        <h5>{el.desert}</h5>
                                                                    </div>
                                                                    <h2>{el.price}</h2>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="aboutFoods--block__addedFoods--spend__feel--keep__make--block">
                                                                <div
                                                                    className="aboutFoods--block__addedFoods--spend__feel--keep--think">
                                                                    <h3>Extras</h3>
                                                                    <div
                                                                        className="aboutFoods--block__addedFoods--spend__feel--keep--think__become">
                                                                        <h4>Cherry</h4>
                                                                        <h4>$0.90</h4>
                                                                    </div>
                                                                    <div
                                                                        className="aboutFoods--block__addedFoods--spend__feel--keep--think__become">
                                                                        <h4>Cherry</h4>
                                                                        <h4>$0.90</h4>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="aboutFoods--block__addedFoods--spend__feel--keep--think">
                                                                    <h3>Extras</h3>
                                                                    <div
                                                                        className="aboutFoods--block__addedFoods--spend__feel--keep--think__become">
                                                                        <h4>Cherry</h4>
                                                                        <h4>$0.90</h4>
                                                                    </div>
                                                                    <div
                                                                        className="aboutFoods--block__addedFoods--spend__feel--keep--think__become">
                                                                        <h4>Cherry</h4>
                                                                        <h4>$0.90</h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                            <h1 style={{
                                display: addFoods ? "block" : "none"
                            }} className="aboutFoods--block--title">Similar gueries</h1>
                            <div className="aboutFoods--block--foodsName">
                                {
                                    Foods.map(el => (
                                        <div className="aboutFoods--block__onlyFood">
                                            {
                                                selectedTab === el.id && el.nameFoots.map(el => (
                                                    <div onClick={() => setAddFoods(true)}
                                                         className="aboutFoods--block__onlyFood__parent">
                                                        <img src={el.img} alt=""
                                                             className="aboutFoods--block__onlyFood__parent--img"/>
                                                        <div className="aboutFoods--block__onlyFood__parent--order">
                                                            <div
                                                                className="aboutFoods--block__onlyFood__parent--order__title">
                                                                <h4>{el.name}</h4>
                                                                <h5>{el.desert}</h5>
                                                            </div>
                                                            <h3>{el.price}</h3>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutFoods;
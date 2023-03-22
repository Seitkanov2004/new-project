import React, {useState} from 'react';
import {Foods} from "../../../components/data/foods";

const AboutFoods = () => {
    const [selectedTab, setSelectedTab] = useState(1);

    const handleTabClick = (index) => {
        setSelectedTab(index);
    };

    return (
        <div id="aboutFoods">
            <div className="container">
                <div className="aboutFoods">
                    <div className="aboutFoods--block">
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
                                                    left: selectedTab === el.id ? "320px" : "",
                                                }} className="mainMenu--block--blockChild__foods--allBtn__btn--line"/>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="aboutFoods--block--foodsName">
                            {
                                Foods.map(el => (
                                    <div className="aboutFoods--block__onlyFood">
                                        {
                                            selectedTab === el.id && el.nameFoots.map(el => (
                                                <div className="aboutFoods--block__onlyFood__parent">
                                                    <img src={el.img} alt="" className="aboutFoods--block__onlyFood__parent--img"/>
                                                    <div className="aboutFoods--block__onlyFood__parent--order">
                                                        <div className="aboutFoods--block__onlyFood__parent--order__title">
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
    );
};

export default AboutFoods;
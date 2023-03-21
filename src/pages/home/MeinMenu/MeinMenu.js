import React, {useState} from 'react';
import titleImg from "./../../../assets/img/title.svg"
import titleRight from "./../../../assets/img/title-right.svg"
import {Foods} from "../../../components/data/foods";


const MeinMenu = () => {

    const [selectedTab, setSelectedTab] = useState(1);

    const handleTabClick = (index) => {
        setSelectedTab(index);
    };


    return (
        <div id="mainMenu">
            <div className="container">
                <div className="mainMenu">
                    <div className="mainMenu--title">
                        <div className="mainMenu--title__titleBlock">
                            <img src={titleImg} alt="" className="mainMenu--title__titleBlock--left"/>
                            <div className="mainMenu--title__titleBlock--line"/>
                        </div>
                        <h1 className="mainMenu--title__name">Main Menu</h1>
                        <div className="mainMenu--title__titleBlock--titleBlock">
                            <img src={titleRight} alt="" className="mainMenu--title__titleBlock--left"/>
                            <div className="mainMenu--title__titleBlock--line"/>
                        </div>
                    </div>
                    <h1 className="mainMenu--aboutFoods">Exceptional Quality. Delightfully Delicious</h1>
                    <div className="mainMenu--block">
                        <div className="mainMenu--block--blockChild">
                            {
                                Foods.map(el => (
                                    <div className="mainMenu--block--blockChild__foods">
                                        <div className="mainMenu--block--blockChild__foods--allBtn">
                                            <div
                                                style={{
                                                    background: selectedTab === el.id ? "#EF272C" : "",
                                                }}
                                                className={selectedTab === el.id ? 'active mainMenu--block--blockChild__foods--allBtn__btn' : 'mainMenu--block--blockChild__foods--allBtn__btn'}
                                                onClick={() => {
                                                    handleTabClick(el.id)
                                                }} >
                                                <button style={{
                                                    border: selectedTab === el.id ? "none" : "",
                                                }}>{el.title}</button>
                                                <div style={{
                                                    transition: ".4s",
                                                    left : selectedTab === el.id ? "320px" : "",
                                                }} className="mainMenu--block--blockChild__foods--allBtn__btn--line"/>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="mainMenu--block--foodsName">
                            {
                                Foods.map(el => (
                                    <div className="mainMenu--block__onlyFood">
                                        {
                                            selectedTab === el.id && el.nameFoots.map(el => (
                                                <div className="mainMenu--block__onlyFood__parent">
                                                    <div className="mainMenu--block__onlyFood__parent--about">
                                                        <h1>{el.name}</h1>
                                                        <div/>
                                                        <h3>{el.price}</h3>
                                                    </div>
                                                    <div className="mainMenu--block__onlyFood__parent--order">
                                                        <p>{el.text}</p>
                                                        <button>Order Now</button>
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

export default MeinMenu;
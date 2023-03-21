import React, {useState} from 'react';
import titleImg from "./../../../assets/img/title.svg"
import titleRight from "./../../../assets/img/title-right.svg"
import {Foods} from "../../../components/data/foods";

const MeinMenu = () => {

    const [foods, setFoods] = useState(false)

    const addFoods = (el, id) => {
        if (el.id === id){
            setFoods(true)
        }
        else {
            setFoods(false)
        }
    }

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
                                            <div onClick={() => {
                                                addFoods(el.id, el.nameFoots.id )
                                            }} className="mainMenu--block--blockChild__foods--allBtn__btn">
                                                <button>{el.title}</button>
                                                <div className="mainMenu--block--blockChild__foods--allBtn__btn--line"/>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div style={{
                            display: foods ? "block" : "none"
                        }} className="mainMenu--block--foodsName">
                            {
                                Foods.map(el => (
                                    <div className="mainMenu--block__onlyFood">
                                        {
                                            el.id === el.nameFoots.id ? el.nameFoots.slice(0, 1).map(el => (
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
                                            )) : <h1>error</h1>
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
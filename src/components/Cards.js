import React from 'react';

import CardItem from './CardItem';
import './Cards.css';

const Cards = () => {
    return (
        <div className="cards">
            <h1>Explore the EPIC space</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={"images/526200.jpg"}
                            text="check the space out"
                            label="Sci-Fi"
                            path="/services"
                        />
                        <CardItem 
                            src={"images/526200.jpg"}
                            text="check the space out"
                            label="Sci-Fi"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src={"images/526200.jpg"}
                            text="check the space out"
                            label="Sci-Fi"
                            path="/services"
                        />
                        <CardItem 
                            src={"images/526200.jpg"}
                            text="check the space out"
                            label="Sci-Fi"
                            path="/services"
                        />
                        <CardItem 
                            src={"images/526200.jpg"}
                            text="check the space out"
                            label="Sci-Fi"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;

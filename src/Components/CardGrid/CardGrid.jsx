import React, { useState } from "react";
import Card from "./Card";

const CardGrid = (data) => {
    const {cards} = data;
    return (
        <div>
            {cards.map((card) => (
                <Card key={card.id} props={card} />
            ))}
        </div>
    )
};

export default CardGrid;


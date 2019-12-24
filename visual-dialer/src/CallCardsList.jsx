import React from 'react';
import { CallCard } from './CallCard';

const CallCardsList = ({ cards }) => {

    console.log(cards);

    return (
        <div>
            <h1>Call Cards List</h1>
            {cards.map(card => <CallCard cardTitle={card.title} key={card.title} />)}

        </div>
    )

}

export default CallCardsList;
import React, { useState } from 'react'
import CardList from "./components/CardList";
import Form from "./components/Form";

function App() {
    const [cards, setCard] = useState([])
    function addNewCard(cardInfo) {
        setCard(cards.concat(cardInfo))
    }
    return (
        <div>
            <Form onSubmit={addNewCard} />
            <CardList cards={cards} />
        </div>
    )
}

export default App

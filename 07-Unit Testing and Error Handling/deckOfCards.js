function printDeckOfCards(deck) {
    function createCard(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = ['S', 'H', 'D', 'C'];

        if (validFaces.includes(face) && validSuits.includes(suit)) {
            let card = {
                face: face,
                suit: suit,
                toString() {
                    switch (suit){
                        case 'S': return this.face + '\u2660';
                        case 'H': return this.face + '\u2665';
                        case 'D': return this.face + '\u2666';
                        case 'C': return this.face + '\u2663';
                    }
                }
            }
            return card.toString(); 
        } else {
            throw new Error(`Invalid card: ${face}${suit}`);
        }
    }
    
    try {
        let newDeck = [];
        for (let card of deck) {
            if (card.length <= 2) {
                let face = card[0];
                let suit = card[1];
                let currentCard = createCard(face, suit).toString();
                newDeck.push(currentCard);           
            } else {
                let face = card[0] + card[1];
                let suit = card[2];
                let currentCard = createCard(face, suit).toString();
                newDeck.push(currentCard);
            }
        }
        console.log(newDeck.join(' '));
    } catch (ex) {
        console.log(ex.message);
    }
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);

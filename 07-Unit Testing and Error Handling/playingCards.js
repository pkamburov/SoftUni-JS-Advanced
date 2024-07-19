function playingCards(face, suit) {
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
        return card; 
    } else {
        throw new Error('Error');
    }

}


playingCards('A', 'S').toString();
playingCards('10', 'H').toString();
playingCards('1', 'C').toString();
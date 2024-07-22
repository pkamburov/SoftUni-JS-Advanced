function tickets(input, criteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = parseFloat(price);
            this.status = status;
        }
    }

    let tickets = [];

    for (let currentInput of input) {
        let [destination, price, status] = currentInput.split('|');
        let newTicket = new Ticket(destination, price, status);
        tickets.push(newTicket);
    }

    let criterion = criteria;
    let sortedTickets = sortTickets(tickets, criterion);

    function sortTickets(array, criteria) {
        if (criteria == 'destination') {
            return array.sort((objA, objB) => objA.destination.localeCompare(objB.destination));
        } else if (criteria == 'price') {
            return array.sort((objA, objB) => objA.price - objB.price);
        } else {
            return array.sort((objA, objB) => objA.status.localeCompare(objB.status));
        }
    }
    return sortedTickets;
}

// tickets(['Philadelphia|94.20|available',  'New York City|95.99|available',  'New York City|95.99|sold',  'Boston|126.20|departed'], 'destination');
tickets(['Philadelphia|94.20|available',  'New York City|95.99|available',  'New York City|95.99|sold',  'Boston|126.20|departed'], 'status');
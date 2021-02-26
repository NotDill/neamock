let cards = ["Red 1","Red 2","Red 3","Red 4","Red 5","Red 6","Red 7","Red 8","Red 9","Red 10","Black 1","Black 2","Black 3","Black 4","Black 5","Black 6","Black 7","Black 8","Black 9","Black 10","Yellow 1","Yellow 2","Yellow 3","Yellow 4","Yellow 5","Yellow 6","Yellow 7","Yellow 8","Yellow 9","Yellow 10"]
let currentIndex = cards.length, temporaryValue, randomIndex;
while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;}
var card1 = cards[1]
var card2 = cards[2]

console.log(card1,card2)
class Card {
  constructor(suit, value) {
    this.value = value;
    this.suit = suit;
  }
  show() {
    console.log(`Card: ${this.value} ${this.suit}`);
  }
}
class Deck {
  constructor() {
    this.deck = [];
  }
  reset() {
    this.deck = [];
    const suits = ["Hearts","Clubs","Diamonds","Spades"];
    const values = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];

    for (const suit of suits) {
      for (const value of values) {
          this.deck.push(`${value} of ${suit}`);
      }
    }
    return this;
  }
  shuffle() {
    let d = this.deck.length, a, b;

    while (d) {
        b = Math.floor(Math.random() * d--);

        a = this.deck[d];
        this.deck[d] = this.deck[b];
        this.deck[b] = a;
    }
    return this;
  }
  deal() {
    return this.deck.pop();
  }
  countCards(){
    console.log("Number of cards in Deck: " + this.deck.length);
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }
  draw(deck) {
    this.hand.push(deck.deal());
    return this;
  }
  discard() {
    this.hand.pop();
    return this;
  }
}

const deck = new Deck();
deck.reset().shuffle();
console.log("Shuffled Full Deck:");
deck.countCards();
console.log(deck);
console.log(`Deal card: ${deck.deal()}`);
deck.countCards();

console.log('------');
const player = new Player("Kristina");
console.log(`${player.name} draws 5 cards`)
player.draw(deck).draw(deck).draw(deck).draw(deck).draw(deck);
console.log(player);
console.log("Remaining Deck:");
console.log(deck);
deck.countCards();
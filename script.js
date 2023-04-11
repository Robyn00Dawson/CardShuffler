// fullDeck is an array of objects which represent all the possible cards the user can choose when they customize. It could be a 54 card deck with jokers, a Tarot deck, even a deck of special gaming cards like Magic the Gathering, Rezonite, Netrunner, or any other game that uses cards.
// deck is an array of objects. Each object is a card inside the deck. Likewise, hand and pile represent the cards in the discard pile and the user's hand.
// displayPosition starts at 0 and changes by increments of 5. The code displays 5 cards at a time. When there are more than 5 cards, the user can scroll between their cards. displayPosition keeps track of which 5 are displayed.
// customizing is a boolean value of whether or not the user is currently customizing the deck. Several functions in this code use 'if(customizing){...}else{...}' or 'if(!customizing){...}'.
// instructed is a boolean value of whether or not the Instructions are visible.
// emptySpot is the url to an empty image on Wikimedia Commons.
let deck = [];
let hand =[];
let pile =[];
let displayPosition = 0;
let customizing = true;
let instructed = true;
let emptySpot = 'https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png?20091205084734';
const fullDeck = [
  {name: 'Joker', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Jolly_Nero.jpg/1024px-The_Jolly_Nero.jpg', select: false},
  {name: 'Joker', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Jolly_Nero.jpg/1024px-The_Jolly_Nero.jpg', select: false},
  {name: 'Ace of Hearts', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Playing_card_heart_A.svg/1024px-Playing_card_heart_A.svg.png', select: true},
  {name: 'King of Hearts', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Playing_card_heart_K.svg/1024px-Playing_card_heart_K.svg.png', select: true},
  {name: 'Queen of Hearts', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Playing_card_heart_Q.svg/1024px-Playing_card_heart_Q.svg.png', select: true},
  {name: 'Jack of Hearts', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Playing_card_heart_J.svg/1024px-Playing_card_heart_J.svg.png', select: true},
  {name: 'Ten of Hearts', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Playing_card_heart_10.svg/1024px-Playing_card_heart_10.svg.png', select: true},
  {name: 'Nine of Hearts', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_heart_9.svg/1024px-Playing_card_heart_9.svg.png', select: true},
  {name: 'Eight of Hearts', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_heart_8.svg/1024px-Playing_card_heart_8.svg.png', select: true},
  {name: 'Seven of Hearts', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_heart_7.svg/1024px-Playing_card_heart_7.svg.png', select: true},
  {name: 'Six of Hearts', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Playing_card_heart_6.svg/1024px-Playing_card_heart_6.svg.png', select: true},
  {name: 'Five of Hearts', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_heart_5.svg/1024px-Playing_card_heart_5.svg.png', select: true},
  {name: 'Four of Hearts', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Playing_card_heart_4.svg/1024px-Playing_card_heart_4.svg.png', select: true},
  {name: 'Three of Hearts', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Playing_card_heart_3.svg/1024px-Playing_card_heart_3.svg.png', select: true},
  {name: 'Two of Hearts', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Playing_card_heart_2.svg/1024px-Playing_card_heart_2.svg.png', select: true},
  {name: 'Ace of Diamonds', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Playing_card_diamond_A.svg/1024px-Playing_card_diamond_A.svg.png', select: true},
  {name: 'King of Diamonds', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Playing_card_diamond_K.svg/1024px-Playing_card_diamond_K.svg.png', select: true},
  {name: 'Queen of Diamonds', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Playing_card_diamond_Q.svg/1024px-Playing_card_diamond_Q.svg.png', select: true},
  {name: 'Jack of Diamonds', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Playing_card_diamond_J.svg/1024px-Playing_card_diamond_J.svg.png', select: true},
  {name: 'Ten of Diamonds', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Playing_card_diamond_10.svg/1024px-Playing_card_diamond_10.svg.png', select: true},
  {name: 'Nine of Diamonds', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Playing_card_diamond_9.svg/1024px-Playing_card_diamond_9.svg.png', select: true},
  {name: 'Eight of Diamonds', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Playing_card_diamond_8.svg/1024px-Playing_card_diamond_8.svg.png', select: true},
  {name: 'Seven of Diamonds', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Playing_card_diamond_7.svg/1024px-Playing_card_diamond_7.svg.png', select: true},
  {name: 'Six of Diamonds', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Playing_card_diamond_6.svg/1024px-Playing_card_diamond_6.svg.png', select: true},
  {name: 'Five of Diamonds', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Playing_card_diamond_5.svg/1024px-Playing_card_diamond_5.svg.png', select: true},
  {name: 'Four of Diamonds', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Playing_card_diamond_4.svg/1024px-Playing_card_diamond_4.svg.png', select: true},
  {name: 'Three of Diamonds', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Playing_card_diamond_3.svg/1024px-Playing_card_diamond_3.svg.png', select: true},
  {name: 'Two of Diamonds', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Playing_card_diamond_2.svg/1024px-Playing_card_diamond_2.svg.png', select: true},
    {name: 'Ace of Spades', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Playing_card_spade_A.svg/1024px-Playing_card_spade_A.svg.png', select: true},
  {name: 'King of Spades', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Playing_card_spade_K.svg/1024px-Playing_card_spade_K.svg.png', select: true},
  {name: 'Queen of Spades', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Playing_card_spade_Q.svg/1024px-Playing_card_spade_Q.svg.png', select: true},
  {name: 'Jack of Spdaes', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Playing_card_spade_J.svg/1024px-Playing_card_spade_J.svg.png', select: true},
  {name: 'Ten of Spades', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Playing_card_spade_10.svg/1024px-Playing_card_spade_10.svg.png', select: true},
  {name: 'Nine of Spades', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Playing_card_spade_9.svg/1024px-Playing_card_spade_9.svg.png', select: true},
  {name: 'Eight of Spades', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Playing_card_spade_8.svg/1024px-Playing_card_spade_8.svg.png', select: true},
  {name: 'Seven of Spades', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Playing_card_spade_7.svg/1024px-Playing_card_spade_7.svg.png', select: true},
  {name: 'Six of Spades', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Playing_card_spade_6.svg/1024px-Playing_card_spade_6.svg.png', select: true},
  {name: 'Five of Spades', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_spade_5.svg/1024px-Playing_card_spade_5.svg.png', select: true},
  {name: 'Four of Spades', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Playing_card_spade_4.svg/1024px-Playing_card_spade_4.svg.png', select: true},
  {name: 'Three of Spades', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_spade_3.svg/1024px-Playing_card_spade_3.svg.png', select: true},
  {name: 'Two of Spades', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_spade_2.svg/1024px-Playing_card_spade_2.svg.png', select: true},
  {name: 'Ace of Clubs', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Playing_card_club_A.svg/1024px-Playing_card_club_A.svg.png', select: true},
  {name: 'King of Cluds', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Playing_card_club_K.svg/1024px-Playing_card_club_K.svg.png', select: true},
  {name: 'Queen of Clubs', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_club_Q.svg/1024px-Playing_card_club_Q.svg.png', select: true},
  {name: 'Jack of Clubs', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Playing_card_club_J.svg/1024px-Playing_card_club_J.svg.png', select: true},
  {name: 'Ten of Clubs', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Playing_card_club_10.svg/1024px-Playing_card_club_10.svg.png', select: true},
  {name: 'Nine of Clubs', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Playing_card_club_9.svg/1024px-Playing_card_club_9.svg.png', select: true},
  {name: 'Eight of Clubs', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Playing_card_club_8.svg/1024px-Playing_card_club_8.svg.png', select: true},
  {name: 'Seven of Clubs', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Playing_card_club_7.svg/1024px-Playing_card_club_7.svg.png', select: true},
  {name: 'Six of Clubs', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Playing_card_club_6.svg/1024px-Playing_card_club_6.svg.png', select: true},
  {name: 'Five of Clubs', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_club_5.svg/1024px-Playing_card_club_5.svg.png', select: true},
  {name: 'Four of Clubs', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Playing_card_club_4.svg/1024px-Playing_card_club_4.svg.png', select: true},
  {name: 'Three of Clubs', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Playing_card_club_3.svg/1024px-Playing_card_club_3.svg.png', select: true},
  {name: 'Two of Clubs', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Playing_card_club_2.svg/1024px-Playing_card_club_2.svg.png', select: true}
]



//updateDisplay() changes the src values of image0 through image4 in the html document to display the cards in the "hand" array. It also puts the text "(more)" above the left/right buttons when there are more cards to display to the left or right. If the user is customizing the deck, then the "fullDeck" array is displayed instead of the hand.

function updateDisplay(){
if (customizing) {
  (fullDeck.length > (0+displayPosition)) ? document.getElementById('image0').src = fullDeck[0+displayPosition].picture : document.getElementById('image0').src = emptySpot;
  (fullDeck.length > (1+displayPosition)) ? document.getElementById('image1').src = fullDeck[1+displayPosition].picture : document.getElementById('image0').src = emptySpot;
  (fullDeck.length > (2+displayPosition)) ? document.getElementById('image2').src = fullDeck[2+displayPosition].picture : document.getElementById('image2').src = emptySpot;
  (fullDeck.length > (3+displayPosition)) ? document.getElementById('image3').src = fullDeck[3+displayPosition].picture : document.getElementById('image3').src = emptySpot;
  (fullDeck.length > (4+displayPosition)) ? document.getElementById('image4').src = fullDeck[4+displayPosition].picture : document.getElementById('image4').src = emptySpot;
  (displayPosition > 0) ? document.getElementById('moreLeft').innerText = '(more)' : document.getElementById('moreLeft').innerText = '';
  (fullDeck.length > (5+displayPosition)) ? document.getElementById('moreRight').innerText = '(more)' : document.getElementById('moreRight').innerText = '';
  document.getElementById('handTotal').innerText = hand.length;
} else{
  (hand.length > (0+displayPosition)) ? document.getElementById('image0').src = hand[0+displayPosition].picture : document.getElementById('image0').src = emptySpot;
  (hand.length > (1+displayPosition)) ? document.getElementById('image1').src = hand[1+displayPosition].picture : document.getElementById('image1').src = emptySpot; 
  (hand.length > (2+displayPosition)) ? document.getElementById('image2').src = hand[2+displayPosition].picture : document.getElementById('image2').src = emptySpot;
  (hand.length > (3+displayPosition)) ? document.getElementById('image3').src = hand[3+displayPosition].picture : document.getElementById('image3').src = emptySpot; 
  (hand.length > (4+displayPosition)) ? document.getElementById('image4').src = hand[4+displayPosition].picture : document.getElementById('image4').src = emptySpot;
  (displayPosition > 0) ? document.getElementById('moreLeft').innerText = '(more)' : document.getElementById('moreLeft').innerText = '';
  (hand.length > (5+displayPosition)) ? document.getElementById('moreRight').innerText = '(more)' : document.getElementById('moreRight').innerText = '';
  document.getElementById('handTotal').innerText = hand.length;
} 
}

// drawCard() draws the top card of the deck into the user's hand. It pushes that card into the end of hand array, and then it shifts that card from the beginning of the deck array. If the deck has no cards left, it gives a message to the user. If the user is customizing their deck, drawCard() does nothing.
// originally I tried hand.push(deck[0]) but I found that this was causing problems in the customize menu. The deck array was a shallow copy of the fullDeck array, and the hand array was a shallow copy of the deck array. When I changed values of select for objects inside the hand, it was also changing those values inside the deck. This is bad. JSON.parse(JSON.stringify()) is a work around that makes a deep copy. 
function drawCard(){
  let localObject ={};
  if (customizing){
    document.getElementById('message').innerText = 'You cannot draw cards while customizing the deck. Click Shuffle when you are done customizing. Then you will be able to draw cards.'
  } else{
    if (deck.length > 0){
      document.getElementById('message').innerText = 'You draw the ' + deck[0].name;
      localObject = JSON.parse(JSON.stringify(deck[0]));
      localObject.select = false;
      hand.push(localObject);
      deck.shift();    
      updateDisplay();
    } else {
      document.getElementById('message').innerText = 'There are no more cards in the deck.'
    }
  }
}

// discard() takes the cards the user selected from their hand. First it calls the setSelect() function which updates the 'hand.select' to match the checkboxes the user has selected. Then it loops backwards through the hand array and checks whether each card is selected or not. select cards are pushed into the pile array and then spliced from the hand. 
function discard(){
  if (customizing){
    document.getElementById('message').innerText = 'You cannot discard cards while customizing the deck. Click Shuffle when you are done customizing. Then you will be able to draw and discard cards.'
  } else {
    let gotOne = false;
    let theMessage = 'You discard: '
    setSelect(displayPosition);
//This loop must be done backwards (starting at x=hand.length-1). I tried 'for(let x =0; x<hand.length; x++), but it did not discard all of the selected cards. Splice changes the index of all the higher number cards. Ex: If I splice hand[3], then  hand[4] becomes the new hand[3]. x++, increases x to 4, and the new hand[3] never gets considered. Instead x--, decreases x to 2 and hand[3] has already been considered.
    for (let x=hand.length-1; x>=0; x--){
      if (hand[x].select) {
        gotOne ? theMessage += ', ' : gotOne = true;
        theMessage += hand[x].name;      
        pile.push(JSON.parse(JSON.stringify(hand[x])));
        hand.splice(x,1);
      }  
    }
    theMessage +='.';
// this loop is used in case the user discards a lot of cards at once. The display position needs to be less than hand.length, so that at least 1 of the remaining cards is displayed.
    while (displayPosition >= hand.length && displayPosition >0){
      displayPosition -=5;
    }
    gotOne ? document.getElementById('message').innerText = theMessage : document.getElementById('message').innerText = 'You did not select any cards to discard.'
    updateDisplay();
    document.getElementById('spot0').checked = false;
    document.getElementById('spot1').checked = false;
    document.getElementById('spot2').checked = false;
    document.getElementById('spot3').checked = false;
    document.getElementById('spot4').checked = false;
  }
}

// shuffle() randomizes the order of the deck. If the user is customizing, it pushes the selected cards from fullDeck into Deck. The shuffle button is how you stop customizing, by shuffling the selected cards into a deck.
function shuffle(){
  if (!customizing){
    document.getElementById('message').innerText = 'The deck has been shuffled.'
    while(pile.length>0){
      deck.push(pile[0]);
      pile.shift();
    }
  } else{
    setSelect(displayPosition);
    for (x = 0; x<fullDeck.length; x++){
      if (fullDeck[x].select){
        deck.push(JSON.parse(JSON.stringify(fullDeck[x])));
      }
    }
    document.getElementById('message').innerText = 'You have created and shuffled a custom deck. Go ahead and draw some cards.'
    displayPosition = 0;
    customizing = false;
    setCheck(0);
    updateDisplay();
  } 
  // To shuffle, first define an empty array called "newDeck" and a number called "randInt". Then use a while loop until the length of deck is zero. Inside the loop,
    let newDeck = [];
    let randInt = 0;
    while(deck.length>0){
      randInt = Math.floor(Math.random()*deck.length);
      newDeck.push(deck[randInt]);
      deck.splice(randInt,1);
    }
    deck = newDeck;
}

// viewDeck() prints a message to the user containing all the cards in the deck, in order. If the user is customizing, it instead prints all the cards they have selected for their custom deck.
function viewDeck(){
  let theMessage = '';
  let gotOne = false;
  if(customizing){
    setSelect();
    theMessage = 'You are customizing the deck. The cards you have selected are: '
    for (let x=0; x<fullDeck.length; x++){
        if (fullDeck[x].select){
          gotOne ? theMessage += ', ' : gotOne = true;
          theMessage += fullDeck[x].name;         
        }
      }
      theMessage += '.';
  } else{
    theMessage = 'The deck, listed in order: '
    if (deck.length > 0) {
      for (let x=0; x<deck.length; x++){
        gotOne ? theMessage += ', ' : gotOne = true;
        theMessage += deck[x].name;
      }
      theMessage += '.';
    } else {
      theMessage = 'The deck is empty.'
    } 
  }
  document.getElementById('message').innerText = theMessage;
}

// viewPile() prints a message to the user containing all the cards in the discard pile. It gives them a different message if the discard pile is empty, or if they are customizing the deck.
function viewPile(){
  let theMessage = ''
  if(customizing){
    theMessage = 'There is no discard pile because you are customizing the deck. Click Shuffle to stop customizing the deck.'
  } else{
      if (pile.length > 0) {
        theMessage = 'The discard pile: '
        for (let x=0; x<pile.length; x++){
          theMessage += pile[x].name;
          theMessage += ', ';
      }
    } else {
        theMessage = 'The discard pile is empty.'
    }
  }
  document.getElementById('message').innerText = theMessage;
}

// customizeDeck() allows the user to select which cards to include in the deck. 
function customizeDeck(){
  hand =[];
  deck = [];
  pile = [];
  displayPosition = 0;
  customizing = true;
  document.getElementById('message').innerText = 'You are customizing your deck. Select which cards you want to include inside your custom deck. Click Shuffle when you are finished customizing.';
  setCheck(displayPosition);
  updateDisplay();
}

// rightHand() increases the displayPosition by 5, to show the next 5 cards to the right. First setSelect() is called with the old displayPosition, to save the choices the user made with the checkboxes. Then if there are more cards to display, displayPosition is increased by 5. Otherwise it gives the user a message. When customizing, fullDeck is used instead of hand. updateDisplay() is called to display the new cards. setCheck() is called to update the checkboxes based on which cards had been previously selected.
function rightHand(){
 setSelect(displayPosition);
 if (customizing){
   (fullDeck.length > (displayPosition+5)) ? displayPosition += 5 : document.getElementById('message').innerText = 'There are no cards to the right.';
 } else {
   (hand.length > (displayPosition+5)) ? displayPosition += 5 : document.getElementById('message').innerText = 'There are no cards to the right.';
 }
 updateDisplay();
 setCheck(displayPosition);
}

// leftHand decreases the displayPosition by 5, to show the next 5 cards to the left. It is just like rightHand() except simpler. The if/then statement only needs to consider whether displayPosition is greater than 0. 
function leftHand(){
  setSelect(displayPosition);
  (displayPosition > 0) ? displayPosition -= 5 : document.getElementById('message').innerText = 'There are no cards to the left.';
  updateDisplay();
  setCheck(displayPosition);
}

// setSelect sets the value of 'select' for the objects inside the 'hand' array, based on whether the checkbox has been selected.
// dp is used instead of displayPosition. This is because the rightHand() and leftHand() functions change the displayPosition value right after calling setSelect. by using a local variable I ensure that the correct value of displayPosition is used inside setSelect. same for setCheck function below. I'm not sure if that was necessary.
function setSelect(dp){
  if (customizing){
    if (fullDeck.length > (0+dp)){
      fullDeck[0+dp].select = document.getElementById('spot0').checked;
    }
    if (fullDeck.length > (1+dp)){
      fullDeck[1+dp].select = document.getElementById('spot1').checked;
    }
    if (fullDeck.length > (2+dp)){
      fullDeck[2+dp].select = document.getElementById('spot2').checked;
    }
    if (fullDeck.length > (3+dp)){
      fullDeck[3+dp].select = document.getElementById('spot3').checked;
    }
    if (fullDeck.length > (4+dp)){
      fullDeck[4+dp].select = document.getElementById('spot4').checked;
    }
  } else{
    if (hand.length > (0+dp)){
      hand[0+dp].select = document.getElementById('spot0').checked;
    }
    if (hand.length > (1+dp)){
      hand[1+dp].select = document.getElementById('spot1').checked;
    }
    if (hand.length > (2+dp)){
      hand[2+dp].select = document.getElementById('spot2').checked;
    }
    if (hand.length > (3+dp)){
      hand[3+dp].select = document.getElementById('spot3').checked;
    }
    if (hand.length > (4+dp)){
      hand[4+dp].select = document.getElementById('spot4').checked;
    }
  }
  
}

// setCheck sets the checkboxes to be checked or unchecked based on the values of 'select' in the objects inside the 'hand' array. It helps the program remember which cards have already been selected when the user scrolls left right.
function setCheck(dp){
  if (customizing){
    (fullDeck.length > (0+dp)) ? document.getElementById('spot0').checked = fullDeck[0+dp].select : document.getElementById('spot0').checked = false;
    (fullDeck.length > (1+dp)) ? document.getElementById('spot1').checked = fullDeck[1+dp].select : document.getElementById('spot1').checked = false;
    (fullDeck.length > (2+dp)) ? document.getElementById('spot2').checked = fullDeck[2+dp].select : document.getElementById('spot2').checked = false;
    (fullDeck.length > (3+dp)) ? document.getElementById('spot3').checked = fullDeck[3+dp].select : document.getElementById('spot3').checked = false;
    (fullDeck.length > (4+dp)) ? document.getElementById('spot4').checked = fullDeck[4+dp].select : document.getElementById('spot4').checked = false;
  } else {
    (hand.length > (0+dp)) ? document.getElementById('spot0').checked = hand[0+dp].select : document.getElementById('spot0').checked = false;
  (hand.length > (1+dp)) ? document.getElementById('spot1').checked = hand[1+dp].select : document.getElementById('spot1').checked = false;
  (hand.length > (2+dp)) ? document.getElementById('spot2').checked = hand[2+dp].select : document.getElementById('spot2').checked = false;
  (hand.length > (3+dp)) ? document.getElementById('spot3').checked = hand[3+dp].select : document.getElementById('spot3').checked = false;
  (hand.length > (4+dp)) ? document.getElementById('spot4').checked = hand[4+dp].select : document.getElementById('spot4').checked = false;
  }
  
}

// showHideInst() shows or hides the intructions when the user 
function showHideInst(){
  if (instructed){
    document.getElementById('theInstructions').style.display="none";
    instructed = false;
  } else {
    document.getElementById('theInstructions').style.display="block";
    instructed = true;
  }
}

setCheck(0);
shuffle();
shuffle();
// these three commands at the bottom are used to clone the fullDeck array using existing fuctions. At the top recall "let deck = [];" and "let customizing = true". 
//Shuffle() pushes all the cards from fullDeck into deck, and then customizing is set back to false. 
// SetCheck(0) is required before  shuffle. Otherwise the Ace, King, and Queen of hearts will not be included in the deck. (shuffle calls setSelect() and the boxes start unchecked. maybe I could set the default value instead but this works.)
// The second shuffle is used to update the message to the user. Plus, extra randomness is good for cards.

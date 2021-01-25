document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "bibi",
      img: "images/1.jpg",
    },
    {
      name: "gantz",
      img: "images/2.jpg",
    },
    {
      name: "lapid",
      img: "images/3.jpg",
    },
    {
      name: "benet",
      img: "images/4.jpg",
    },
    {
      name: "shaked",
      img: "images/5.jpg",
    },
    {
      name: "deri",
      img: "images/6.jpg",
    },
    {
      name: "saar",
      img: "images/7.jpg",
    },
    {
      name: "boogi",
      img: "images/8.jpg",
    },
    {
      name: "zandberg",
      img: "images/9.jpg",
    },
    {
      name: "peretz",
      img: "images/10.jpg",
    },
    {
      name: "litzman",
      img: "images/11.jpg",
    },
    {
      name: "smotrich",
      img: "images/12.jpg",
    },
    {
      name: "niskoren",
      img: "images/13.jpg",
    },
    {
      name: "holdai",
      img: "images/14.jpg",
    },
    {
      name: "liberman",
      img: "images/15.jpg",
    },
    {
      name: "bibi",
      img: "images/1.jpg",
    },
    {
      name: "gantz",
      img: "images/2.jpg",
    },
    {
      name: "lapid",
      img: "images/3.jpg",
    },
    {
      name: "benet",
      img: "images/4.jpg",
    },
    {
      name: "shaked",
      img: "images/5.jpg",
    },
    {
      name: "deri",
      img: "images/6.jpg",
    },
    {
      name: "saar",
      img: "images/7.jpg",
    },
    {
      name: "boogi",
      img: "images/8.jpg",
    },
    {
      name: "zandberg",
      img: "images/9.jpg",
    },
    {
      name: "peretz",
      img: "images/10.jpg",
    },
    {
      name: "litzman",
      img: "images/11.jpg",
    },
    {
      name: "smotrich",
      img: "images/12.jpg",
    },
    {
      name: "niskoren",
      img: "images/13.jpg",
    },
    {
      name: "holdai",
      img: "images/14.jpg",
    },
    {
      name: "liberman",
      img: "images/15.jpg",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  const movesDisplay = document.querySelector("#moves");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];
  var x = document.getElementById("btn1");
  x.addEventListener("click", newGame);

  //shuffle the board, and re initialize all of the variables back to emtpy states
  function newGame() { 
    cardArray.sort(() => 0.5 - Math.random());
    movesDisplay.textContent = 0;
    cardsChosen = [];
    cardsChosenId = [];
    cardsWon = [];
    var cards = document.querySelectorAll("img");
    //set all of our cards to blank to begin
    for (let i = 0; i < cards.length; i++) {
      cards[i].setAttribute("src", "images/blank.png");
      cards[i].addEventListener("click", flipCard);
    }
    resultDisplay.textContent = 0;
  }

  //create game board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.height = 100;
      card.width = 100;
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
    movesDisplay.textContent = 0;
    resultDisplay.textContent = 0;
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    //if we found that the images are equal:
    if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
    }
  else //the images arent the same, we can flip them back to blank
   {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
    }
    //set the cardsChosen array to 0 so we can add 2 more cards to compare
    cardsChosen = [];
    cardsChosenId = [];
  }

  //flip card
  function flipCard() {
    if (cardsChosen.length === 2) 
      checkForMatch();
    var cardId = this.getAttribute("data-id");
    cardsChosenId.push(cardId);
    if (cardsChosenId[0] === cardsChosenId[1])
		  cardsChosenId.pop();
    else {
      cardsChosen.push(cardArray[cardId].name);
      this.setAttribute("src", cardArray[cardId].img);
      if (cardsChosen.length === 2) rearrange();
    }
  }

  function rearrange() {
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    movesDisplay.textContent++;
    if (cardsChosen[0] === cardsChosen[1]) {
      cardsWon.push(cardsChosen);
      resultDisplay.textContent = cardsWon.length;
      if (cardsWon.length === cardArray.length/2) 
        alert("Congratulations! You found them all!")
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsChosen = [];
      cardsChosenId = [];
    }
  }

  createBoard();
});

// ^ HTML elements
var rgbSyntaxLabel = document.getElementById('rgbSyntax');
var easyBtn = document.getElementById('easyBtn');
var hardBtn = document.getElementById('hardBtn');
var colorsContainer = document.getElementById('colorsContainer');
var getColorsBtn = document.getElementById('getColorsBtn');

// * App variables
var levels = {
  easy: {
    name: 'easy',
    cardCount: 3
  },
  hard: {
    name: 'hard',
    cardCount: 6
  }
}
var selectedLevel = 'easy';
// ? Functions
// generate random color
function generateColor() {
  var red = Math.trunc(Math.random() * 256);
  var green = Math.trunc(Math.random() * 256);
  var blue = Math.trunc(Math.random() * 256);
  var color = `rgb(${red}, ${green}, ${blue})`
  return color;
}


// generate cards
function askQuestion(level) {
  var cardCount = levels[level]['cardCount'];
  var colorArray = [];
  for (var i = 0; i < cardCount; i++) {
    colorArray.push(generateColor());
  }
  console.log("🚀 ~ file: main.js:38 ~ askQuestion ~ colorArray:", colorArray)

  var correctAnswer = colorArray[Math.trunc(Math.random() * colorArray.length)];
  console.log("🚀 ~ file: main.js:41 ~ askQuestion ~ correctAnswer:", correctAnswer)

  rgbSyntaxLabel.innerHTML = correctAnswer;
  displayCards(colorArray, correctAnswer);
}



function displayCards(colorArray, correctAnswer) {
  var colorCardsHTML = '';
  for (var i = 0; i < colorArray.length; i++) {
    colorCardsHTML += `
    <div class="color-card col-md-4">
      <div class="inner h-100 rounded" style="background-color:${colorArray[i]}"></div>
    </div>
    `;
  }

  colorsContainer.innerHTML = `
  <div class="row g-4 py-4">
    ${colorCardsHTML}
  </div>
  `;



  var allCards = document.querySelectorAll('.color-card .inner');

  for (var i = 0; i < allCards.length; i++) {
    console.log(allCards[i]);
    allCards[i].onclick = function (event) {
      if (event.target.style.backgroundColor === correctAnswer) {
        alert('Congratulations 🎉');
        askQuestion(selectedLevel)
      }
      else {
        alert('Try again 😒');
        event.target.style.backgroundColor = 'transparent';
        event.target.style.display = 'none';
      }
    };
  }
}



// & Events
getColorsBtn.onclick = function () {
  askQuestion(selectedLevel);
};










easyBtn.onclick = function () {
  selectedLevel = 'easy';
  easyBtn.classList.add('active');
  hardBtn.classList.remove('active');
  askQuestion(selectedLevel);
  getColorsBtn.disabled = false;
}

hardBtn.onclick = function () {
  selectedLevel = 'hard';
  hardBtn.classList.add('active');
  easyBtn.classList.remove('active');
  askQuestion(selectedLevel);
  getColorsBtn.disabled = false;
}














































// // ^=======> HTML ELEMENTS
// var easyBtn = document.getElementById("easyBtn")
// var hardBtn = document.getElementById("hardBtn")
// var rgbSyntax = document.getElementById("rgbSyntax")
// var colorsContainer = document.getElementById("colorsContainer")
// var getColorsBtn = document.getElementById("getColorsBtn")


// // &=======|> App Variables
// var levels = {
//   easy: {
//     name: "easy",
//     numberOfCards: 3
//   },
//   hard: {
//     name: "hard",
//     numberOfCards: 6
//   }
// }
// var selectedLevel = "easy"
// var correctAnswer = "";

// // ?=======|> Functions
// // * generate random color
// function generateRandomColor() {
//   var red = Math.trunc(Math.random() * 256);
//   var green = Math.trunc(Math.random() * 256);
//   var blue = Math.trunc(Math.random() * 256);

//   var color = `rgb(${red}, ${green}, ${blue})`
//   return color;
// }

// // * generate and display color cards according to level
// // ^ easy => 3
// // ^ Hard => 6

// function getNewQuestion(level) {
//   var numberOfCards = levels[level].numberOfCards;
//   var colors = [];

//   for (var i = 1; i <= numberOfCards; i++) {
//     colors.push(generateRandomColor())
//   }
//   correctAnswer = colors[Math.trunc(Math.random() * numberOfCards)]

//   rgbSyntax.innerHTML = correctAnswer
//   displayColors(colors)
// }

// function displayColors(colorsArr) {
//   var colorCardsHTML = ""
//   for (var i = 0; i < colorsArr.length; i++) {
//     colorCardsHTML += `<div class="color-card col-md-4">
//       <div class="inner h-100 rounded"
//       style="background-color: ${colorsArr[i]}">
//       </div>
//     </div>
//     `
//   }

//   colorsContainer.innerHTML = `
//   <div class="row g-4 py-4">
//   ${colorCardsHTML}
//   </div>
//   `

//   var allColorCards = document.querySelectorAll(".color-card .inner")
//   for (var i = 0; i < allColorCards.length; i++) {
//     allColorCards[i].onclick = checkAnswer;
//   }
// }

// function checkAnswer(e) {
//   if (e.target.style.backgroundColor === correctAnswer) {
//     alert("Congratulation 🎉");
//     getNewQuestion(selectedLevel)
//   } else {
//     e.target.style.display = "none"
//     alert("try again 🔁 ")
//   }
// }

// //~========> EVENTS
// easyBtn.onclick = function () {
//   hardBtn.classList.remove("active");
//   easyBtn.classList.add("active")

//   selectedLevel = "easy";
//   getNewQuestion(selectedLevel)
// }

// hardBtn.onclick = function () {
//   easyBtn.classList.remove("active");
//   hardBtn.classList.add("active")

//   selectedLevel = "hard"
//   getNewQuestion(selectedLevel)
// }

// getColorsBtn.onclick = function () {
//   if (selectedLevel === "easy") {
//     getNewQuestion("easy")
//   } else {
//     getNewQuestion("hard")
//   }
// }


// getNewQuestion(selectedLevel)

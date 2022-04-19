// See Alfabet
// let showAlfabet = (alfabet) => {
//   for (const item of alfabet) {
//     let button = document.createElement("button");
//     button.setAttribute("class", "words");
//     myAlphabet.appendChild(button).innerHTML = item;
//   }
// };
// showAlfabet(alfabet);

// // //Show category in select option  (dynamic)
// let showCategory = (myObj) => {
//   for (const item in myObj) {
//     let option = document.createElement("option");
//     option.setAttribute("value", item);
//     category.appendChild(option).innerHTML = item;
//   }
// };
// showCategory(myCategory);

// // Selected Category

// let selectCategory = () => {
//   let value = category.options[category.selectedIndex].value;
//   selectCategoryWords.innerHTML = `The category is ${value}`;
//   getRandomWords(value);
// };
// category.addEventListener("change", selectCategory);

// getRandomWords;

// function getRandomWords(selectCategory) {
//   // console.log(selectCategory);
//   let selectedArr = myCategory[selectCategory];
//   let randomNum = Math.floor(Math.random() * selectedArr.length);
//   let randomWord = selectedArr[randomNum].name.toLowerCase();

//   if (randomWord.indexOf(" ") !== -1) {
//     let spaceWord = randomWord.split(" ");
//     let newWord = spaceWord.map((item) => "_".repeat(item.length));
//     word.innerHTML = newWord.join(" ");
//   } else {
//     let underLine = "_";
//     word.innerHTML = `${underLine.repeat(randomWord.length)}`;
//   }
//   verifyLetter(randomWord);
//   myHint(randomWord, selectCategory);
// }

// // Verify Letters

// function verifyLetter(value) {
//   window.onkeypress = (e) => {
//     let result = [];
//     let str = word.textContent;

//     if (value.indexOf(e.key) !== -1) {
//       for (let i = 0; i < value.length; i++) {
//         if (e.key === value[i]) {
//           result.push(i);
//         }
//       }
//       str = str.split("");
//       for (const item of result) {
//         str[item] = e.key;
//       }
//       str = str.join("");
//       word.innerHTML = str;
//     } else {
//       document.querySelector(`.manSpan${count}`).style.display = "block";
//       count--;

//       if (count === 0) {
//         gameWinLose.innerHTML = "Game Over";
//         setTimeout(() => {
//           alert("Meglub oldun yeniden basla")
//           window.location.reload();
//         }, 500);
//       }
//     }
//   };
// }

// // hint

// function myHint(randomWord, chooseCategory) {
//   hint.addEventListener("click", () => {
//     for (const item of myCategory[chooseCategory]) {
//       if (item.name.toLowerCase() === randomWord) {
//         clue.innerHTML = item.explain;
//       }
//     }
//   });
// }

// See

// ---------------------------------------------------------new version

class Hangman {
  alfabet = "abcdefghijklmnopqrstuvwxyz";
  selectCategoryWords = document.querySelector("#selectCategoryWords");
  word = document.querySelector("#word");
  lives = document.querySelector("#lives");
  clue = document.querySelector("#clue");
  hangman = document.querySelector("#hangman");
  category = document.querySelector("#category");
  hint = document.querySelector("#hint");
  gameWinLose = document.querySelector("#gameWinLose");
  count = 9;
  
  myAlphabet = document.querySelector(".myAlphabet");
  myCategory = {
    cities: [
      { name: "Paris", explain: "Eiffel tower" },
      { name: "New York", explain: "America's Most Populous City" },
      { name: "Budapest", explain: "The Capital of the Hungary" },
      { name: "Sydney", explain: "A city in Australia" },
      { name: "London", explain: "Big ben tower" },
      { name: "Tokyo", explain: "The city ​​famous for sushi" },
    ],
    football: [
      { name: "Fenerbahce", explain: "The first team of the Turkey" },
      { name: "Barcelona", explain: "The most pass team" },
      { name: "Genoa", explain: "Italy's oldest football club" },
      { name: "Boca juniors", explain: "Argentina's biggest club" },
      { name: "Flamingo", explain: "A football club in Brasil" },
      { name: "Liverpool", explain: "the strongest team on the peninsula UK" },
    ],
  };

  randomWord() {}
  startGame() {
    window.onkeypress = (e) => {
      let allWords = document.querySelectorAll(".words");
      for (const item of allWords) {
        if (item.textContent === e.key.toLowerCase()) {
            
        }
      }
    };
  }
  showAlfabet() {
    for (const item of this.alfabet) {
      let button = document.createElement("button");
      button.setAttribute("class", "words");
      this.myAlphabet.appendChild(button).innerHTML = item;
    }
  }
}

const myObj = new Hangman();
myObj.showAlfabet();
myObj.startGame();

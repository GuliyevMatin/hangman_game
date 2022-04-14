let alfabet = "abcdefghijklmnopqrstuvwxyz";
let selectCategoryWords = document.querySelector("#selectCategoryWords");
let word = document.querySelector("#word");
let lives = document.querySelector("#lives");
let clue = document.querySelector("#clue");
let hangman = document.querySelector("#hangman");
let category = document.querySelector("#category");
let hint = document.querySelector("#hint");

let myAlphabet = document.querySelector(".myAlphabet");
let myCategory = {
  cities: [
    { name: "Paris", explain: "Eiffel tower" },
    { name: "New York", explain: "America's Most Populous City" },
    { name: "Budapest", explain: "The Capital of the Hungary" },
    { name: "Sydney", explain: "A city in Australia" },
    { name: "London", explain: "Big ben tower" },
    { name: "Tokyo", explain: "The city ​​famous for sushi" },
  ],
  football: [
    // { name: "Fenerbahce", explain: "The first team of the Turkey" },
    // { name: "Barcelona", explain: "The most pass team" },
    // { name: "Genoa", explain: "Italy's oldest football club" },
    // { name: "Boca juniors", explain: "Argentina's biggest club" },
    // { name: "Flamingo", explain: "A football club in Brasil" },
    { name: "Liverpool", explain: "the strongest team on the peninsula UK" },
  ],
};

// See Alfabet
let showAlfabet = (alfabet) => {
  for (const item of alfabet) {
    let span = document.createElement("span");
    span.setAttribute("class", "words");
    myAlphabet.appendChild(span).innerHTML = item;
  }
};
showAlfabet(alfabet);

//Show category in select option  (dynamic)
let showCategory = (myObj) => {
  for (const item in myObj) {
    let option = document.createElement("option");
    option.setAttribute("value", item);
    category.appendChild(option).innerHTML = item;
  }
};
showCategory(myCategory);

// Selected Category

let selectCategory = () => {
  let value = category.options[category.selectedIndex].value;
  selectCategoryWords.innerHTML = `The category is ${value}`;
  getRandomWords(value);
};
category.addEventListener("change", selectCategory);

// getRandomWords

function getRandomWords(selectCategory) {
  //    let myObjKeys = Object.keys(selectCategory);
  let selectedArr = myCategory[selectCategory];
  let randomNum = Math.floor(Math.random() * selectedArr.length);
  let randomWord = selectedArr[randomNum].name.toLowerCase();
  console.log(randomWord);
  if (randomWord.indexOf(" ") !== -1) {
    let spaceWord = randomWord.split(" ");
    let newWord = spaceWord.map((item) => "_".repeat(item.length));
    word.innerHTML = newWord.join(" ");
  } else {
    let underLine = "_";
    word.innerHTML = `${underLine.repeat(randomWord.length)}`;
  }
  verifyLetter(randomWord);
}

// Verify Letters

function verifyLetter(value) {
  window.onkeypress = (e) => {
    if (value.includes(e.key.toLowerCase())) {
    //   let result = value.indexOf(e.key.toLowerCase());
    //   console.log(result);
    //   let underline = word.textContent;

    //   underline = underline.split("");
    //   underline[result] = e.key.toLowerCase();
    //   underline = underline.join("");

    //   word.innerHTML = underline;
    }
  };
}

// //choose category callback

// function show_selected() {
//   selectCategoryWords.classList.remove("categoryTitle");
//   var value = category.value;

//   categorySpan.innerHTML = value;
//   getRandomWords(myCategory[value]);

// }
// category.addEventListener("change", show_selected);

// //getRandomWords
// function getRandomWords(value) {
//   let randomNum = Math.floor(Math.random() * value.length);
//   let wordsLength = value[randomNum].length;
//   let _count = "_ ";

//   let words =value[randomNum];
//   console.log(words);
//   word.innerHTML = `<span>${_count.repeat(wordsLength)}</span>`;

//   window.onkeypress = function(e){
//      for (const iterator of words) {
//          if (iterator === e.key) {
//              let item =[];
//              item.push(e.key)
//              console.log(item);
//             word.innerHTML = `<span>${item}</span>`;
//          }
//      }
//   }
// }

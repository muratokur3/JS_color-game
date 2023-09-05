colors = [
  "red",
  "blue",
  "yellow",
  "green",
  "purple",
  "black",
  "grey",
  "brown",
  "pink",
  "cadetblue",
];

let eldekiler = [];
const createBoxColor = (sayi) => {
  const getRandomArray = getRandomColor(sayi);
  let sayac = 0;
  for (let i = 0; i < sayi; i++) {
    let createDiv = document.createElement("button");
    createDiv.classList = "cardBox";
   createDiv.style.backgroundColor = "chocolate";
    createDiv.setAttribute("id", sayac + 1);
    createDiv.setAttribute("value", getRandomArray[sayac]);
    createDiv.setAttribute("onclick", "kontrolEt(this)");
    document.getElementById("gameCard").appendChild(createDiv);
    sayac++;
  }
};

const getRandomColor = (cardNumber) => {
  const randomNumber = [];
  while (randomNumber.length < cardNumber) {
    const eldekiSayi = Math.floor(Math.random() * 10);
    const sayiAdedi = randomNumber.filter((sayi) => sayi === eldekiSayi).length;
    if (sayiAdedi < 2) {
      randomNumber.push(eldekiSayi);
    }
  }
  return randomNumber;
};

const kontrolEt = (kutucuk) => {

  if (eldekiler.length == 0) {
    eldekiler[0] = kutucuk.id;
    kutucuk.style.backgroundColor = colors[kutucuk.value];
  } else if (eldekiler.length == 1) {
    eldekiler[1] = kutucuk.id;
    kutucuk.style.backgroundColor = colors[kutucuk.value];

    setTimeout(function () {
      if (
        document.getElementById(eldekiler[0]).style.backgroundColor ==
        document.getElementById(eldekiler[1]).style.backgroundColor
      ) {
        eldekiler = [];
      } else {
        kutucuk.style.backgroundColor = "chocolate";
        document.getElementById(eldekiler[0]).style.backgroundColor = "chocolate";
        eldekiler = [];
      }
    }, 1000);
    
  }
};

createBoxColor(20);

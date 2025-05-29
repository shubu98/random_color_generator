const startButton = document.querySelector("#btn1");
const stopButton = document.querySelector("#btn2");
// const allcards = document.querySelectorAll(".cards");
const container = document.querySelector(".container");

const randomColorGenerator = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  
  return color;
};
let intervalID;
const StartChangeColor = function () {
 intervalID = setInterval(changeBG, 1000);

  function changeBG() {
    document.body.style.backgroundColor = randomColorGenerator();
    startButton.disabled = true;
    container.style.backgroundColor = randomColorGenerator();
    // allcards.style.backgroundColor = randomColorGenerator();
    
  }
};

const StopChangeColor = function () {
  clearInterval(intervalID);
  startButton.disabled = false;
};

startButton.addEventListener("click", StartChangeColor);
stopButton.addEventListener("click", StopChangeColor);

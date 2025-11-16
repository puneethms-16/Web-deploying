let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgc = document.querySelector(".msg-container");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const uChoice = document.querySelector("#user-choice");
const cChoice = document.querySelector("#comp-choice");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return options[index];
};

const drawGame = () => {
  console.log("Game was draw");
  msg.innerText = "Game was draw. play again.";
  msgc.style.background = "#081b31";
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = "User : " + userScore;
    console.log("You win!");
    msg.innerText = "You win!";
    msgc.style.background = "green";
  } else {
    compScore++;
    compScorePara.innerText = "Computer : " + compScore;
    console.log("You lose");
    msg.innerText = "You lose";
    msgc.style.background = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  uChoice.innerText = "User choice = " + userChoice;

  const compChoice = genCompChoice();
  console.log("computer choice =", compChoice);
  cChoice.innerText = "Computer choice = " + compChoice;

  if (compChoice === userChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    choice.classList.add("animate");
    setTimeout(() => {
      choice.classList.remove("animate");
    }, 200);
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

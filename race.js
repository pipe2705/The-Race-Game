// Main Logic for the game. ************************

let playerOne = {
  totalPoints: 0,
  points: 0,
  horseName: " "
};

let cpu = {
  totalPoints: 0,
  points: 0,
  horseName: " "
};

let addOne = () => {
  document.body.onkeydown = function(param) {
    if (param.keyCode == 32) {
      playerOne.points = playerOne.points + Math.floor(Math.random() * 3);
      document.getElementById("p1points").innerHTML = playerOne.points;
      console.log(playerOne.points);

      // console.log(playerOne.points + " p1 points");

      cpu.points = cpu.points + Math.floor(Math.random() * 3);
      document.getElementById("cpu-points").innerHTML = cpu.points;
      console.log(cpu.points + " cpu points");

      if (playerOne.points >= 10) {
        alert("I can code an alert yeaaaahhhh! Colombia Wins! ");
      }
      if (cpu.points >= 10) {
        alert("Germany wins! :((((");
      }
      if (playerOne.points >= 10 && cpu.points >= 10) {
        alert("Its a Tie");
      }
      roundWinner();
    }
  };
};

let roundWinner = () => {
  if (playerOne.points > 9.99 && playerOne.points > cpu.points) {
    playerOne.totalPoints = playerOne.totalPoints + 1;
    document.getElementById("roundsWonp1").innerText = playerOne.totalPoints;
  }
  if (cpu.points > 9.99 && cpu.points > playerOne.points) {
    cpu.totalPoints = cpu.totalPoints + 1;
    document.getElementById("roundsWoncpu").innerHTML = cpu.totalPoints;
    console.log(cpu.totalPoints);
  }
};

let nextRound;
let nextRoundButton = document.querySelector(".round2");
nextRoundButton.addEventListener(
  "click",
  (nextRound = () => {
    playerOne.points = 0;
    cpu.points = 0;
    document.getElementById("p1points").innerHTML = playerOne.points;
    document.getElementById("cpu-points").innerHTML = cpu.points;
  })
);

let progressBar = () => {
  document.getElementById("player1Bar").value = playerOne.points;
  document.getElementById("cpuBar").value = cpu.points;
};

let refreshPage = () => {
  window.location.reload();
};

document.addEventListener("keypress", addOne);
document.addEventListener("keypress", progressBar);
progressBar();
console.log(cpu);

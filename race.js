// Main Logic for the game. ************************

let playerOne = {
  totalPoints: 0,
  points: 0
};

let cpu = {
  totalPoints: 0,
  points: 0
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

      if (playerOne.points >= 50) {
        alert("I can code an alert yeaaaahhhh! Player 1 Wins!! ");
      }
      if (cpu.points >= 50) {
        alert("MONK wins!! ");
      }
      if (playerOne.points >= 50 && cpu.points >= 50) {
        alert("Its a Tie");
      }
      roundWinner();
      gameWinnerCheck();
    }
  };
};

let gameWinnerCheck = () => {
  if (playerOne.totalPoints >= 2) {
    alert("Player 1 Wins Game.. End of Rounds");
  }
  if (cpu.totalPoints >= 2) {
    alert("MONK Wins the Game..End of Rounds");
  }
};

let roundWinner = () => {
  if (playerOne.points > 49 && playerOne.points > cpu.points) {
    playerOne.totalPoints = playerOne.totalPoints + 1;
    document.getElementById("roundsWonp1").innerText = playerOne.totalPoints;
  }
  if (cpu.points > 49 && cpu.points > playerOne.points) {
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
  document.getElementById("start-window").textContent = "GO GO GEAUXX!!!";
  document.getElementById("player1Bar").value = playerOne.points;
  document.getElementById("cpuBar").value = cpu.points;
};

let refreshPage = () => {
  window.location.reload();
};

document.addEventListener("keypress", addOne);
document.addEventListener("keypress", progressBar);

// progressBar();

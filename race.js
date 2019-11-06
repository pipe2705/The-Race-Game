// the game has 2 players so I will need a variable for each player.
// the game has 1 logic for the cpu
//      thecpu logic will be for every time the player 1 presses the space bar the cpu
//      will increase by 0,1 or 2 at random. if the cpu reaches the top first then the cpu wins.

// The logic for player 1 will be. a point = 1 will be added everytime the player hits the space bar.
// if the player 1 reaches (goal) before cpu player 1 wins.

// will need to keep track of the current points for each player.
// will need to celebrate or call an alert when player 1 or cpu wins.

// the game will start when player 1 presses the space bar.

// Main Logic for the game. ************************

let playerOne = {
  currentPoints: 0,
  points: 0,
  name: ' ',
  horseName: ' '
}

let cpu = {
  currentPoints: 0,
  points: 0,
  name: ' ',
  horseName: ' '
}

let addOne = () => {
  document.body.onkeydown = function (param) {
    if (param.keyCode == 32) {
      playerOne.points = playerOne.points + Math.floor(Math.random() * 3)
      document.getElementById('p1points').innerHTML = playerOne.points
      console.log(playerOne.points)

      // console.log(playerOne.points + " p1 points");

      cpu.points = cpu.points + Math.floor(Math.random() * 3)
      document.getElementById('cpu-points').innerHTML = cpu.points
      console.log(cpu.points + ' cpu points')

      if (playerOne.points >= 11) {
        alert('player 1 wins!')
      }
      if (cpu.points >= 11) {
        alert('CPU wins!')
      }
    }
  }
}

let progressBar = () => {
  document.getElementById('player1Bar').value = playerOne.points
  document.getElementById('cpuBar').value = cpu.points
}

let refreshPage = () => {
  window.location.reload()
}

document.addEventListener('keypress', addOne)
document.addEventListener('keypress', progressBar)
progressBar()
console.log(playerOne)

//  document.addEventListener("keypress", gameEnd())
// console.log(playerOne.points)

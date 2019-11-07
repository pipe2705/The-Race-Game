// Main Logic for the game. ************************

let playerOne = {
  totalPoints: 0,
  points: 0,
  horseName: ' '
}

let cpu = {
  totalPoints: 0,
  points: 0,
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

      if (playerOne.points >= 101) {
        alert('player 1 wins!')
      }
      if (cpu.points >= 101) {
        alert('CPU wins!')
      }
      if ((playerOne.points && cpu.points) === 100) {
        alert('Its a Tie!')
      }

      if (playerOne.points > 100 && playerOne.points > cpu.points) {
        playerOne.totalPoints = playerOne.totalPoints + 1
        console.log(playerOne.totalPoints)
      }
      if (cpu.points > 100 && cpu.points > playerOne.points) {
        cpu.totalPoints = cpu.totalPoints + 1
        console.log(cpu.totalPoints)

        // button next round
        // reset points and set everything back to 0 except for total points
        //
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
console.log(cpu)

//  document.addEventListener("keypress", gameEnd())
// console.log(playerOne.points)

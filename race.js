

// the game has 2 players so I will need a variable for each player. 
// the game has 1 logic for the cpu 
//      thecpu logic will be for every time the player 1 presses the space bar the cpu 
//      will increase by 0,1 or 2 at random. if the cpu reaches the top first then the cpu wins. 

//The logic for player 1 will be. a point = 1 will be added everytime the player hits the space bar. 
    //if the player 1 reaches (goal) before cpu player 1 wins. 

// will need to keep track of the current points for each player. 
// will need to celebrate or call an alert when player 1 or cpu wins. 


// the game will start when player 1 presses the space bar.


// Main Logic for the game. ************************


let playerOne = {
    currentPoints: 0 ,   
    points : 0 , 
    name: " " , 
    horseName : " " , 
}

let cpu = {
    currentPoints: 0,
    points: 0 , 
    name: " ", 
    horseName : " "
}


// let gameLogic = () => { 

//     // let spacebarEvent = 1 
//     playerOne.currentPoints = playerOne.currentPoints + spacebarEvent 

// }

let totalPoints = document.querySelector("#p1points");
let points = playerOne.points
console.log(points)
let addOne = function() {
	document.body.onkeydown = function(bananas){
		if(bananas.keyCode == 32){
            playerOne.points = playerOne.points + Math.floor(Math.random() * 3)  
            console.log(playerOne.points); 

            cpu.points = cpu.points + Math.floor(Math.random() * 3) 

            console.log (cpu.points + "cpu points" )

            //get computer points
            //player two value equals playertwo.points + random value of 0,1, or 2
            }
        
            //alert("key worked")
            // document.getElementById('p1points').innerHTML;
            //  points = points++;
            // console.log(points);  
            // document.getElementById('p1points').innerHTML = points;   
             //playerplayerOne.currentPoints = document.getElementById('p1points').innerHTML
        }
    }    
 
 document.addEventListener("keypress", addOne())
 console.log(playerOne.points)
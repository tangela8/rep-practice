
alert('Welcome to Space Battle');

// while(player !== "attack"){
//     player = prompt("What do you want to do?", "Your action")
// }

// Your spaceship, the USS Schwarzenegger should have the following properties:

// hull - 20
// firepower - 5
// accuracy - .7
//prompt('What do you want to do?', 'Type your action here');
let randomNumber = Math.random();
let alienNum = []; //1, 2, 3, 4, 5, 6
//let remainAlien = alienNum++;

let spaceShip = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    isAlive: true,
    // get isAlive (){
    //     return true;
    // },
    attack(target) {        
        if (randomNumber < this.accuracy) {
            console.log("You've destroyed " + alienNum + " Alien Ship!");
            alienNum++;
            //console.log(randomNumber);
            //console.log(this.accuracy);
            target.hull = target.hull - this.firepower;
            //console.log(target.hull);

        }else if (target.hull <= 0) {
                target.isAlive = false;
                console.log("You've got hit");
                //console.log(target.hull);
        } 
    }
}
//console.log(spaceShip.isAlive+"isalive");
// The alien ships should each have the following ranged properties determined randomly:

// hull - between 3 and 6
// firepower - between 2 and 4
// accuracy - between .6 and .8

let alienShip = {
    hull: Math.floor(Math.random() * 4) + 3,
    firepower: Math.floor(Math.random() * 3) + 2,
    accuracy: (Math.floor(Math.random() * 3) + 5) / 10,
    isAlive: true,
    // get isAlive (){
    //     return true;
    // },
    attack(target) {
        
        if (randomNumber < this.accuracy) {
            console.log("Alien been attacked!");
            //console.log(randomNumber);
            target.hull = target.hull - this.firepower;
            //console.log(target.hull);
        }else if (target.hull <= 0) {
                target.isAlive = false;
                console.log("Alien died!");
            
        }
    }
}
//Check Win 

function checkWin (){
    let action = prompt("What do you want to do?");
    if (action.toLowerCase() === "attack"){
        
        if (alienShip.isAlive === true) {
            return spaceShip.attack(alienShip)
        }else if (alienShip.isAlive === false) {
            return target.attack === false;
    
        }
    }
}

function battle (){
    let rounds = 0;
    do {    
        rounds += 1;
        console.log(checkWin());
  
    }while (rounds <= 6){
        //console.log(checkWin());
        //alienNum.push();
        //if (alienNum === 6){
            alert("You win");
        }
        
        }





// Battle Function - doesn't work
//console.log(spaceShip.isAlive+"isalive");
// const battle = (spaceShip, alienShip) => {
//     console.log(spaceShip.isAlive);
    // while (spaceShip['isAlive'] && alienShip['isAlive'] === true) {
    //     // let action = prompt('What do you want to do?', 'Type your action here');
    //     if (action.toLowerCase === "attack")
    //     spaceShip.attack(alienShip)
    //     if (alienShip.isAlive) {
    //         return spaceShip.attack(spaceShip);
        
    //     } else {
    //         console.log("You Win!");
    //     }
    // }
//}

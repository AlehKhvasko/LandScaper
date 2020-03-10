let grassLevel = 0;
const usersChoice = 0;
let growingGrass = 0;
let usersMoney = 0;
let dayCount = 1;

function teeth() {
    grassLevel--;
    usersMoney++;
    document.getElementById('partOfDay').innerHTML = dayCount++;
    grassCutting ();
    document.getElementById('moneyScore').innerHTML = usersMoney;
    if (usersMoney >= 5) {
        document.getElementById("scissorsDisp").style.display ='flex';
    }
}
// let buyScissors = (function a() {
//     let executed = false;
//     return function a() {
//         if (!executed) {
//             executed = true;
//             usersMoney-=5;
//         }
//     };
// })();

function scissors() {
    usersMoney += 5;
    grassCutting ();
    document.getElementById('moneyScore').innerHTML = usersMoney;
    if (usersMoney >= 15) {
        document.getElementById("LawnmoverDisp").style.display ='flex';
    }
}
function oldLawnmover() {
    usersMoney+= 25;
    dayCount++;
    document.getElementById('moneyScore').innerHTML = usersMoney;
    if (usersMoney >= 100) {
        document.getElementById("battery").style.display ='flex';
    }
}
function newLawnmover() {
    usersMoney+= 100;
    dayCount++;
    document.getElementById('moneyScore').innerHTML = usersMoney;
    if (usersMoney >= 250) {
        document.getElementById("students").style.display ='flex';
    }
}
function starvingStudents () {
    usersMoney+= 250;
    dayCount++;
    document.getElementById('moneyScore').innerHTML = usersMoney;
    if (usersMoney >= 100) {
        document.getElementById('moneyScore').innerHTML = 'You won!';
    }
}

let grassCutting = () => {
document.getElementById("grassCut").style.transition = "all 2s 1s";
document.getElementById("grassCut").style.transform = "translate(-17vw) scale(0.8) translateY(3.5vh)";
}

// (Links to an external site.)Landscaper
// You are starting a landscaping business, but all you have are your teeth.

// Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.

// At any point, if you are currently using your teeth, you can buy a pair of rusty scissors for $5. You can do this once, assuming you have enough money.
// Using the rusty scissors, you can spend the day cutting lawns and make $5. You can do this as much as you want.

// At any point, if you are currently using rusty scissors, you can buy an old-timey push lawnmower for $25. You can do this once, assuming you have enough money.

// Using the old-timey push lawnmower, you can spend the day cutting lawns and make $50. You can do this as much as you want.

// At any point, if you are currently using the old-timey push lawnmower, you can buy a fancy battery-powered lawnmower for $250. You can do this once, assuming you have enough money.

// Using the the fancy battery-powered lawnmower, you can spend the day cutting lawns and make $100. You can do this as much as you want.

// At any point, if you are currently using the fancy battery-powered lawnmower, you can hire a team of starving students for $500. You can do this once, assuming you have enough money.

// Using the the team of starving students, you can spend the day cutting lawns and make $250. You can do this as much as you want.

// You win the game when you have a team of starving students and $1000. In this situation, send a message to the user telling them, they've won.
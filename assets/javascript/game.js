$(document).ready(() => {

    //variables//

    let dog = {
        pom: {
            name: 'Pom',
            value: 0
        },
        chi: {
            name: 'Chi',
            value: 0
        },
        pup: {
            name: 'Pup',
            value = 0
        },
        pug: {
            name: 'Pug',
            value = 0
        }
    }

    //scores//
    let currentScore = 0;
    let targetScore = 0;

    //wins & losses//
    let winCount = 0;
    let lossCoount = 0;


    //jQuery//

    $('#pom').click(function() {
        alert("test");
    })

});

// let randomNum = [];
// let crystalNum = [];
// let totalScore = 0;
// let wins = 0;
// let losses = 0;

// //arrays to select randomNum & crystalNum//

// for (let i = 19; i < 121; i++) {
//     randomNum.push(i);
// }

// for (let i = 1; i < 13; i++) {
//     crystalNum.push(i);
// }

// //global variables//

// let compNum = 0;

// //functions//

// let comp = randomNum[Math.floor(Math.random) * randomNum.length];
// compNum = comp;
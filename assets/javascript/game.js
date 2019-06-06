// $(document).ready(() => {

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
        value: 0
    },
    pug: {
        name: 'Pug',
        value: 0
    }
}

//scores
let currentScore = 0;
let targetScore = 0;

//wins & losses
let winCount = 0;
let lossCoount = 0;

//functions
let startGame = function() {

    let randomBones = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    //reset
    let currentScore = 0;

    //new targetScore(btwn 19-120)
    targetScore = randomBones(19, 120);

    //new dog bone values(btwn 1-12)

    dog.pom.value = randomBones(1, 12);
    dog.chi.value = randomBones(1, 12);
    dog.pup.value = randomBones(1, 12);
    dog.pug.value = randomBones(1, 12);

    //update html

    //testing
    // console.log("......................");
    // console.log(`Match Bones: ${targetScore}`);
    // console.log(`Pom: ${dog.pom.value}`);
    // console.log(".......................");
}


//jQuery

$('#pom').click(function() {
    // test
    //alert("test");
})

$('#chi').click(function() {
    // test
    // alert("test");
})

$('#pup').click(function() {
    // test
    // alert("test");
})

$('#pug').click(function() {
    // test
    // alert("test");
})

//starts game
startGame();




// });
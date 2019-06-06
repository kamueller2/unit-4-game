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
    let lossCount = 0;

    //functions


    let randomBones = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let startGame = function() {
        //reset
        currentScore = 0;

        //new targetScore(btwn 19-120)
        targetScore = randomBones(19, 120);

        //new dog bone values(btwn 1-12)

        dog.pom.value = randomBones(1, 12);
        dog.chi.value = randomBones(1, 12);
        dog.pup.value = randomBones(1, 12);
        dog.pug.value = randomBones(1, 12);

        //update html
        $('#yourScore').html(currentScore);
        $('#targetScore').html(targetScore);

        //testing
        console.log("......................");
        console.log(`Match Bones: ${targetScore}`);
        console.log(`Pom: ${dog.pom.value} | Chi: ${dog.chi.value} | Pup: ${dog.pup.value} | Pug: ${dog.pug.value}`);
        console.log(".......................");
    }

    //updates clicks on dogs
    let addValues = function(dog) {
            currentScore = currentScore + dog.value;

            //update html
            $('#yourScore').html(currentScore);

            //check if user won
            ifWon();


            //test
            console.log("your score: " + currentScore);
        }
        //check if user won or lost
    let ifWon = function() {

        //check if currentScore is larger than targetScore
        if (currentScore > targetScore) {
            alert("You lost, rematch?");
            console.log("You lost");
            lossCount++;
            $('#lossCount').html(`LOSSES: ${lossCount}`);

            startGame();

        } else if (currentScore == targetScore) {
            alert("You win all the bones!")
            console.log("You win!")
            winCount++;
            $('#winCount').html(`WINS: ${winCount}`);

            startGame();
        }
    }


    //jQuery

    //starts game
    startGame();

    $('#pom').click(function() {
        // test
        //alert("test");
        addValues(dog.pom);
    })

    $('#chi').click(function() {
        // test
        // alert("test");
        addValues(dog.chi);
    })

    $('#pup').click(function() {
        // test
        // alert("test");
        addValues(dog.pup);
    })

    $('#pug').click(function() {
        // test
        // alert("test");
        addValues(dog.pug);
    })


})
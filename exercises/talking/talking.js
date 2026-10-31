
// A says
let messagesA = ["how are u doing", "so sorry to hear that", "what color would u like then", "pick one damn", ];
let counterA = 0;
// B says
let messagesB = ["terrible", "the color of the background sucks", "def not this one",];
let counterB = 0;


// when A is clicked
// A speaks when counterA = counterB
$("#character-a").click(function () {

    if (counterA == 3) {
        $("#answers").css("display", "flex");
        $("#chat").append("<p>jake: " + messagesA[counterA] + "</p>");
        counterA = counterA + 1;
        counterB=1000;
    }
    else if ( counterA == counterB ) {
        $("#chat").append("<p>jake: " + messagesA[counterA] + "</p>");
        counterA = counterA + 1;
    }

});

// when B is clicked
// B speaks when counterB < counterA
$("#character-b").click(function () {

    if (counterB < counterA) {

        $("#chat").append("<p>finn: " + messagesB[counterB] + "</p>");
        counterB = counterB + 1;

    }

});


// make the color buttons work

$("#answer-green").click(function () {

    $("body").css( "background-color", "green" );

});

$("#answer-pink").click(function () {

    $("body").css( "background-color", "pink" );

});



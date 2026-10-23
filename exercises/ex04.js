//the clicker button program

let count=0;
let colorsCount=0;

// an indexed array of data
let colors = ["blue", "orange", "yellow", "purple", "pink"];

let buttonText="";

$("#needy-button").click( function(){

    // what to do when the button is clicked
    // first, set a new value for "count", which is the current value + 1

    count = count +1;

    console.log(count);
    console.log(colors[colorsCount]);

    // now let's find our button and set a new text for it

    buttonText="I was clicked " + count + " times and color is " + colors[colorsCount];

    $("#needy-button").html( buttonText );

    $("body").css( "background-color", colors[colorsCount] );

    //$("body").append("<img src='../environ/images/" +colors[count-1] +"flower.jpg'>" );

    if ( count >= 13) {$("#needy-button").after("<p>my mood is... wild</p>");}
    else if ( count >=7) { $("#needy-button").after("<p>my mood is... rlly agitated</p>"); }
    else if ( count >=3) { $("#needy-button").after("<p>my mood is... agitated</p>"); }

     //if ( ( count >=3 ) && ( count < 7) ) { $("#needy-button").after("<p>my mood is... agitated</p>"); }

     //if( count >=7 ) { $("#needy-button").after("<p>my mood is... rlly agitated</p>"); }

     //if( count >=13 ) { $("#needy-button").after("<p>my mood is... wild</p>"); }
    
    $('#needy-button').after("<p>my mood is... default</p>");

    // if we are run out of colors start from the first one anew

    colorsCount = colorsCount +1;

    if ( colorsCount >= 5) { colorsCount = 0; }



});
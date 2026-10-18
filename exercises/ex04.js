//the clicker button program

let counter=0;

$("#needy-button").click( function(){
    // what to do when the button is clicked
    counter = counter + 1;
    $("#needy-button").html("I was clicked " + counter + " times");
})

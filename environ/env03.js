let environmentTitle = "The Pink and Snowy Planet";

let environmentElements = ["snow", "piles of wood", "snowy rocks", "trails"];

let mainEntity = {
    name: "Magnolia",
    mood: "determined",
    memory: "her colony",
    needs: ["food", "warmth"]
}

$("title-button").click(function() {
    $("enviornment-output").html(enviornmentTitle);
});

$("elements-button").click(function () {
    $("#environment-output").html(environmentElements.join(","));
});

$("#entity-button").click(function() {
    $("#environment-output").html(mainEntity.name);
});
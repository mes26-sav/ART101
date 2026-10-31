let environmentTitle = "The Pink and Snowy Planet";

let environmentElements = ["snow", "piles of wood", "snowy rocks", "trails"];

let mainEntity = {
    name: "Magnolia",
    mood: "determined",
    memory: "her colony",
    needs: ["food", "warmth"]
}

$("#title-button").click(function() {
    $("environment-output").html(enviornmentTitle);
});

$("#elements-button").click(function () {
    $("#environment-output").html(environmentElements.join(","));
});

$("#entity-button").click(function() {
    $("#environment-output").html(mainEntity.name);
});

$("#night-button").click(function() {
    if ($("body").hasClass("night")) {
        $("body").removeClass("night");
        $("#night-button").html("Change to Night");
        $("#speech-bubble").html(
            "Magnolia: More time to continue my search"
        );
    }
    else {
        $("body").addClass("night");
        $("#night-button").html("Change to Day");
        $("#speech-bubble").html(
            "Magnolia: Time to rest"
        );
    }
});

// .click(...) runs this function when the Add button is clicked.
$("#add-button").click(function () {
    // .val() reads the field; .trim() removes spaces at either end.
    let label = $("#item-label").val().trim();
    let objectColor = $("#object-color").val();
    console.log(objectColor);

    let labelLength=label.length;

    console.log(labelLength);

    if (  ( label == "" ) || ( labelLength>20 ) ) {
        $("#message").text("Creature's name should be not empty or longer than 20 characters ");
    }
    else {
        // HTML inside $(...) creates a new element, not yet on the page.
        let item = $("<div></div>");
        item.css("background-color", objectColor);
        // .text(...) sets its label literally, including < and >.
        item.text(label);
        // .append(...) adds it after the existing list items.
        $("#items").append(item);
        // .css(property, value) changes this object's background color.
        
        
        $("#item-label").val("");
        $("#item-label").focus();
        $("#message").text("");
    }
});

// This area receives keys while focused; event.key names the pressed key.
$("#object").keydown(function (event) {
    if (event.key == "ArrowRight") {
        x = x + step;
    }
    else if (event.key == "ArrowLeft") {
        x = x - step;
    }
    else if (event.key == "ArrowDown") {
        y = y + step;
    }
    else if (event.key == "ArrowUp") {
        y = y - step;
    }
    else {
        return; // Leave other keys to the browser.
    }
    // Arrow keys move this item instead of scrolling the page.
    event.preventDefault();

    // Leave room for the whole item at the right and bottom edges.
    let maxX = $("#stage").width() - $("#item").outerWidth();
    let maxY = $("#stage").height() - $("#item").outerHeight();
    if (x < 0) { x = 0; }
    if (x > maxX) { x = maxX; }
    if (y < 0) { y = 0; }
    if (y > maxY) { y = maxY; }

    $("#item").css("left", x);
    $("#item").css("top", y);
});
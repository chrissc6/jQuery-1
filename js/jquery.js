$().ready(function() {
    console.log("Everything is ok!");

    $("p").css("color", "blue").css("font-size", "1.5em");

    $("button").click(function() {
        $("p").css("color", "red");
        $("input").val("New Value");
    });

    $("label").text("THE INPUT CONTROL IS NEXT:");
});
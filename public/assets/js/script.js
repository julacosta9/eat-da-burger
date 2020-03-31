$(function() {
    $("#submitBurger").on("click", function(event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#field_burger_name").val(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Created a new burger");
            location.reload();
        });
    });
});

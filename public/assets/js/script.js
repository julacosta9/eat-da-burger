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

    $(".change-devoured").on("click", function(event) {
        // event.preventDefault();
        let id = $(this).data("id");
        console.log(id, $(this).data("devoured"));

        let isDevoured = ($(this).data("devoured") == true) ? false : true;
        console.log("isDevoured: " + isDevoured);
        
        let updateBurger = {
            devoured: isDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: updateBurger
        }).then(function() {
            console.log("The status of this burger has been updated");
            location.reload();
        });
    });
});

$(function() {
  $(".devour-it").on("click", function(event) {
    var id = $(this).data("id");

    var isDevoured = {
      devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: isDevoured
    }).then(function(result) {
      location.reload();
    });
  });
});

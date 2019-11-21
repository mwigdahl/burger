$(function() {
    $(".devour-it").on("click", function(event) {
      //event.preventDefault();
      //console.log("event", event);
      
      var id = $(this).data("id");
      console.log("ID", id);
        var isDevoured = {
            devoured: 1
        };
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: isDevoured
      }).then(
        function(result) {
            console.log('result', result);
          location.reload();
        }
      );
  
    });  
  
    // $(".create-form").on("submit", function(event) {
    //   // Make sure to preventDefault on a submit event.
    //   event.preventDefault();
  
    //   var newCat = {
    //     name: $("#ca").val().trim(),
    //     sleepy: $("[name=sleepy]:checked").val().trim()
    //   };
  
    //   // Send the POST request.
    //   $.ajax("/api/cats", {
    //     type: "POST",
    //     data: newCat
    //   }).then(
    //     function() {
    //       console.log("created new cat");
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  });
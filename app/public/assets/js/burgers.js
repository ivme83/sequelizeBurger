// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    // ## THESE NEED TO BE CHANGED TO BURGER BUTTONS ##

    // ## Change state of item ##
    $(".change-onMenu").on("click", function(event) {
      var id = $(this).data("id");
      var newMenu = $(this).data("newmenu");

      var newonMenuState = {
        onMenu: newMenu
      };

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newonMenuState
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    
    // ## Create new burger ##
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      var newBurger = {
        burger_name: $("#burg").val().trim(),
        onMenu: $("[name=onMenu]:checked").val().trim()
      };


      console.log("THIS IS THE BURGER BEING CREATED" + newBurger);
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    
    // ## Remove burger ##
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");

      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  
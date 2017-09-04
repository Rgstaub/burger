




$(document).ready(() => {

  $.get("/ingredients", function(response) {
    response.forEach( function(burger) {
      burger.ingredients.forEach( function(ingredient) {
        var element = $('<li role="presentation"></li>');
        element.text(ingredient);
        $(`#${burger.id}`).append(element);
      })
    })
  })

    // create an on click event
  $(document).on('click', '.clickable', function() {
    event.preventDefault();
    var id = $(this).data("id");
    // Post with a path that gives the Burger ID as a parameter ("/:id")
    $.post(`/_put/${id}`)
    location.reload();
  })

  // Listener for the button to clear the eaten burgers
  $(document).on('click', '#refreshButton', function() {
    event.preventDefault();
    $.post('/refresh/');
    location.reload();
  })

  $(document).on('click', '#clearButton', function() {
    event.preventDefault();
    $.post('/clear/');
    location.reload();
  })
})
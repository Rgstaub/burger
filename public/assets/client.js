

// create an on click event
$(document).on('click', '.burger-wrap', function() {
  event.preventDefault();
  var id = $(this).data("id");
  // Post with a path that gives the Burger ID as a parameter ("/:id")
  $.post(`/_put/${id}`)
  location.reload();
})

// Listener for the button to clear the eaten burgers
$(document).on('click', '#refreshButton', function() {
  $.post('/refresh/');
  location.reload();
})

$(document).on('click', '#clearButton', function() {
  $.post('/clear/');
  location.reload();
})



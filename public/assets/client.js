

// create an on click event
$(document).on('click', '.burger-wrap', function() {
  event.preventDefault();
  console.log($(this).data("id"));
  // Post with a path that gives the Burger ID as a parameter ("/:id")
  $.post(`/_put/${$(this).data("id")}`)
  location.reload();
})

$(document).on('click', '#refreshButton', function() {
  $.post('/refresh/', function(req, res) {
    res.status(201);
  })
})



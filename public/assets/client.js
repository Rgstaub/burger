

// create an on click event
$(document).on('click', '.burger-wrap', function() {
  console.log($(this).data("id"));
  // Post with a path that gives the Burger ID as a parameter ("/:id")
  $.post(`/_put/${$(this).data("id")}`, (req, res) => {
    
  })
})




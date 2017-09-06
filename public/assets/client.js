const FORM = [
  'burger_name', 'bun', 'patty', 'pickles', 'ketchup',
  'mustard', 'onions', 'cheese', 'tomato', 'bacon', 'lettuce',
  'special'
]

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

  // create an on click event for the burger image to 'eat' a burger
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
    $.post('/refresh');
    location.reload();
  })

  $(document).on('click', '#clearButton', function() {
    event.preventDefault();
    $.post('/clear');
    location.reload();
  })

  $(document).on('click', '#filterButton', function() {
    event.preventDefault();
    var url = urlBuilder();
    $.post('/filter')
  })

  const urlBuilder = function() {
    return console.log(`this will eventually return a URL for post`);
  }

  //Build a new form with options
// header={
    // action: "/", 
    // method: "post", 
    // type: "input", // "filter" to remove name field and toggle special
    // parent: "input-box", 
    // name: "add"
    // }
  const formBuilder = function(header) {
    let formContainer = $(`<form action="${header.action}" method="${header.method}" class="form-inline"></form>`)
    FORM.forEach((ingredient) => {
      let formatted = ingredient.charAt(0).toUpperCase() + ingredient.substring(1);
      if (ingredient === 'burger_name' && header.type === 'input') {
        let burger_name = formatted.replace('_', ' ');
        let formSegment = $(`
        <div class="form-group">
          <label for="${ingredient}-input">${burger_name}</label>
          <input type="text" name="${ingredient}" id="${ingredient}-input" class="form-control">
          </select>
        </div> `);
        formContainer.append(formSegment);
      }
      if (ingredient === 'patty') {
        let formSegment = $(`
        <div class="form-group">
          <label for="${ingredient}-input">${formatted}</label>
          <select name="${ingredient}" id="${ingredient}-input" class="form-control">
            <option value="Beef">Beef</option>
            <option value="Turkey">Turkey</option>
            <option value="Veggie">Veggie</option>
          </select>
        </div> `);
        formContainer.append(formSegment);
      }
      else if (ingredient === 'bun') {
        let formSegment = $(`
        <div class="form-group">
          <label for="${ingredient}-input">${formatted}</label>
          <select name="${ingredient}" id="${ingredient}-input" class="form-control">
            <option value="Sesame-Seed">Sesame-Seed</option>
            <option value="Whole Wheat">Whole Wheat</option>
            <option value="Brioche">Brioche</option>
          </select>
        </div> `);
        formContainer.append(formSegment);
      } else {
        let formSegment = $(`
        <div class="form-group">
          <label for="pickles-input">Pickles</label>
          <input type="checkbox" name="pickles" id="pickles-input" class="form-control" value="true">
        </div>`);
        formContainer.append(formSegment);   
      }
      $(`#${header.parent}`).append(formContainer);  
    })
  }

  formBuilder({
    action: "/", 
    method: "post", 
    type: "input", 
    parent: "input-box", 
    name: "add"
  });
})
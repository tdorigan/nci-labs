
const groceryForm = document.getElementById("groceryForm");
const inputItem = document.getElementById("inputItem");
const groceryList = document.getElementById("groceryList");

groceryForm.addEventListener("submit", function (event) {
  
  event.preventDefault();

  //create new list item
  let listItem = document.createElement("li");

  //add bootstrap classes to the list item
  listItem.className = "list-group-item d-flex justify-content-between";

  listItem.textContent = inputItem.value;

  //create delete button for the list item
  let deleteButton = document.createElement("button");

  //add bootstrap classes
  deleteButton.className = "btn btn-outline-secondary btn-sm";

  deleteButton.textContent = "❌";

  //add click function the button
  deleteButton.addEventListener("click", function () {
    //remove list item
    listItem.remove();
  });

  //append the delete button to the list item
  listItem.appendChild(deleteButton);

  //append the list item to the grocery list (unordered list)
  groceryList.appendChild(listItem);

  inputItem.value = "";

});

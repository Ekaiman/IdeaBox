var list = [];

var titleValue = document.getElementById('title-value');
var bodyValue = document.getElementById('body-value');
var saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', saveIdea);

function saveIdea() {
  event.preventDefault();
  
  var newTitle = titleValue.value;
  var newBody = bodyValue.value;
  var newIdea = new Idea(newTitle, newBody);

  list.push(newIdea);
  return newIdea;
}

function displayNewIdea() {

}

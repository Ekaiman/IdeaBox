var list = [];
var newIdea;

var titleValue = document.getElementById('title-value');
var bodyValue = document.getElementById('body-value');
var saveButton = document.getElementById('save-button');
var ideaCardGrid = document.querySelector('.grid-container');
var deleteButton= document.querySelector('.delete');

saveButton.addEventListener('click', saveIdea);
saveButton.addEventListener('mouseover', function(event){
if (!titleValue.value && !bodyValue.value) {
  //button should change to lighter color
  saveButton.classList.add('hover-button')
  //cursor is not a pointer
}

});

saveButton.addEventListener('mouseout', mouseLeaving)
deleteButton.addEventListener('click', deleteIdea)
function saveIdea() {
  event.preventDefault();

  var newTitle = titleValue.value;
  var newBody = bodyValue.value;

  if(newTitle && newBody) {
    newIdea = new Idea(newTitle, newBody);
    displayNewIdea();
  }

  list.push(newIdea);
  emptyInput();
}

function displayNewIdea() {
  var cardHTML = `<section class="idea-card">
    <header class="idea-card-top">
      <img type="image" src="./assets/star-active.svg" alt="active star">
      <img type="image" src="./assets/delete.svg" alt="delete" id=${newIdea.id} class="delete">
    </header>
      <h3 class="idea-card-title">${newIdea.title}</h3>
      <p class="idea-card-body">${newIdea.body}</p>
    <footer class="idea-card-bottom">
      <img type="image" src="./assets/comment.svg" alt="comment">Comment</footer>
  </section>`;

  ideaCardGrid.innerHTML += cardHTML;
}

function emptyInput() {
  titleValue.value = '';
  bodyValue.value = '';
}

function mouseLeaving() {
  saveButton.classList.remove('hover-button')
}

function deleteIdea() {
  var targetIdeaCard = event.target.parentNode.id;

  for (var i = 0; i < list.length; i++) {
    if (list[i].id.toString() === targetIdeaCard) {
     list.splice(i, 1);
     }
   };
}

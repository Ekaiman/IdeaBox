var list = [];
var newIdea;

var titleValue = document.getElementById('title-value');
var bodyValue = document.getElementById('body-value');
var saveButton = document.getElementById('save-button');
var ideaCardGrid = document.querySelector('.grid-container');
var deleteButton = document.querySelector('.delete');
var ideaCard = document.querySelector('.idea-card')

saveButton.addEventListener('click', saveIdea);
saveButton.addEventListener('mouseover', function(event){
if (!titleValue.value && !bodyValue.value) {
  //button should change to lighter color
  saveButton.classList.add('hover-button')
  //cursor is not a pointer
}

});

saveButton.addEventListener('mouseout', mouseLeaving);
ideaCardGrid.addEventListener('click', function(event) {
  for (var i = 0; i < list.length; i++) {
    if (list[i].id.toString() === event.target.id) {
     list.splice(i, 1)

     // removeIdea()
     displayAllIdeas()
     }
   }
})


function saveIdea() {
  event.preventDefault();

  var newTitle = titleValue.value;
  var newBody = bodyValue.value;

  if(newTitle && newBody) {
    newIdea = new Idea(newTitle, newBody);
    list.push(newIdea);
    displayAllIdeas();
  }

  emptyInput();
}

function displayAllIdeas() {
  ideaCardGrid.innerHTML = ''
  for (var i = 0; i < list.length; i++) {

  ideaCardGrid.innerHTML += `<section class="idea-card">
    <header class="idea-card-top">
      <img type="image" src="./assets/star-active.svg" alt="active star">
      <img type="image" src="./assets/delete.svg" alt="delete" id=${list[i].id} class="delete">
    </header>
      <h3 class="idea-card-title">${list[i].title}</h3>
      <p class="idea-card-body">${list[i].body}</p>
    <footer class="idea-card-bottom">
      <img type="image" src="./assets/comment.svg" alt="comment">Comment</footer>
  </section>`}
}

function emptyInput() {
  titleValue.value = '';
  bodyValue.value = '';
}

function mouseLeaving() {
  saveButton.classList.remove('hover-button')
}

function removeIdea() {
  ideaCardGrid.classList.toggle('remove')
}

var list = [];
var newIdea;

var titleValue = document.getElementById('title-value');
var bodyValue = document.getElementById('body-value');
var saveButton = document.getElementById('save-button');
var ideaCardGrid = document.querySelector('.grid-container')

saveButton.addEventListener('click', saveIdea);

function saveIdea() {
  event.preventDefault();

  var newTitle = titleValue.value;
  var newBody = bodyValue.value;
  newIdea = new Idea(newTitle, newBody);

  list.push(newIdea);
  displayNewIdea();

  return newIdea;
}

function displayNewIdea() {
  var cardHTML = `<section class="idea-card">
    <header class="idea-card-top">
      <img type="image" src="./assets/star-active.svg" alt="active star">
      <img type="image" src="./assets/delete.svg" alt="delete">
    </header>
      <h3 class="idea-card-title">${newIdea.title}</h3>
      <p class="idea-card-body">${newIdea.body}</p>
    <footer class="idea-card-bottom">
      <img type="image" src="./assets/comment.svg" alt="comment">Comment</footer>
  </section>`;

  ideaCardGrid.innerHTML += cardHTML;
}

var list = [];

var titleValue = document.getElementById('title-value');
var bodyValue = document.getElementById('body-value');
var saveButton = document.getElementById('save-button');
var ideaCardGrid = document.querySelector('.grid-container');
var showStarred = document.getElementById('showStarred');
var showAllIdeas = document.getElementById('showAllIdeas');
var searchBar = document.getElementById('searchBar');
var searchContainer = document.getElementById('searchContainer')


saveButton.addEventListener('click', saveIdea);
saveButton.addEventListener('mouseover', mouseHoverEffect);
saveButton.addEventListener('mouseout', mouseLeaving);
ideaCardGrid.addEventListener('click', deleteSelectedCard);
ideaCardGrid.addEventListener('click', favoriteACard);
showStarred.addEventListener('click', showFavorites);
showAllIdeas.addEventListener('click', showIdeasAfterShowingStarred);
searchBar.addEventListener('input', random);

//fix hover when only title || body is typed in
  //save button shouldnt click
//fix all ids to camelCase
//add flex
//fix button

function saveIdea() {
  event.preventDefault();

  var newTitle = titleValue.value;
  var newBody = bodyValue.value;

  if(newTitle && newBody) {
    var newIdea = new Idea(newTitle, newBody);
    list.push(newIdea);
    displayAllIdeas(list);
  }

  emptyInput();
}

function showIdeasAfterShowingStarred() {
  displayAllIdeas(list)
}

function displayAllIdeas(array) {
  ideaCardGrid.innerHTML = '';
  for (var i = 0; i < array.length; i++) {
    if (!array[i].star) {
      ideaCardGrid.innerHTML += `
      <section class="idea-card">
      <header class="idea-card-top">
      <img type="image" src="./assets/star.svg" id=${array[i].imgId} alt="star" class="star">
      <img type="image" src="./assets/delete.svg" alt="delete" id=${array[i].id} class="delete">
      </header>
      <h3 class="idea-card-title">${array[i].title}</h3>
      <p class="idea-card-body">${array[i].body}</p>
      <footer class="idea-card-bottom">
      <img type="image" src="./assets/comment.svg" alt="comment">Comment</footer>
      </section>`
    } else {
      ideaCardGrid.innerHTML += `
      <section class="idea-card">
      <header class="idea-card-top">
      <img type="image" src="./assets/star-active.svg" id=${array[i].imgId} alt="star" class="star active">
      <img type="image" src="./assets/delete.svg" alt="delete" id=${array[i].id} class="delete">
      </header>
      <h3 class="idea-card-title">${array[i].title}</h3>
      <p class="idea-card-body">${array[i].body}</p>
      <footer class="idea-card-bottom">
      <img type="image" src="./assets/comment.svg" alt="comment">Comment</footer>
      </section>`
    }
  }
  hide(showAllIdeas)
  show(showStarred)
}


function emptyInput() {
  titleValue.value = '';
  bodyValue.value = '';
  searchBar.value = '';
}

function mouseHoverEffect() {
  if (!titleValue.value && !bodyValue.value) {
    saveButton.classList.add('hover-button');
  }
}

function mouseLeaving() {
  saveButton.classList.remove('hover-button');
}

function removeIdea() {
  ideaCardGrid.classList.toggle('remove');
}

function deleteSelectedCard() {
  for (var i = 0; i < list.length; i++) {
    if (list[i].id.toString() === event.target.id) {
     list.splice(i, 1);
     displayAllIdeas(list);
     }
   }
}

function favoriteACard() {
  for (var i = 0; i < list.length; i++) {
    if (list[i].imgId.toString() === event.target.id) {
      if (!list[i].star) {
        list[i].star = true;
      } else {
        list[i].star = false;
      }
      displayAllIdeas(list);
     }
   }
}

//fix hover when only title || body is typed in
function showFavorites() {
  var starredArray = []
  for (var i = 0; i < list.length; i++) {
    if(list[i].star){
      starredArray.push(list[i])
  }
  displayAllIdeas(starredArray)
  show(showAllIdeas)
    hide(showStarred)
  }
}

function show(element) {
  element.classList.remove('remove')
}

function hide(element) {
  element.classList.add('remove')
}

function searchIdea(searchingFor) {
  event.preventDefault()
  var searchArray = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i].title.includes(searchingFor) || list[i].body.includes(searchingFor)) {
      searchArray.push(list[i])
    }
  }
  displayAllIdeas(searchArray)
}


function random() {
  event.preventDefault()
  var searchingFor = searchBar.value
  searchIdea(searchingFor)
}

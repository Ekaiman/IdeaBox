var list = [];

var saveButton = document.getElementById('saveButton');
var showStarredButton = document.getElementById('showStarred');
var showAllIdeasButton = document.getElementById('showAllIdeas');
var titleValue = document.getElementById('titleValue');
var bodyValue = document.getElementById('bodyValue');
var searchBar = document.getElementById('searchBar');
var ideaCardGrid = document.getElementById('gridContainer');

saveButton.addEventListener('click', saveIdea);
saveButton.addEventListener('mouseover', mouseHoverEffect);
saveButton.addEventListener('mouseout', mouseLeaving);
showStarredButton.addEventListener('click', showFavorites);
showAllIdeasButton.addEventListener('click', showIdeasAfterShowingStarred);
ideaCardGrid.addEventListener('click', deleteSelectedCard);
ideaCardGrid.addEventListener('click', favoriteACard);
searchBar.addEventListener('input', grabSearchValue);

  //save button shouldnt click**** ask later
//add flex
//fix button
//oranize CSS stuff
function mouseHoverEffect() {
  if (!titleValue.value || !bodyValue.value) {
    saveButton.classList.add('hover-button');
  }
}

function mouseLeaving() {
  saveButton.classList.remove('hover-button');
}

function show(element) {
  element.classList.remove('remove');
}

function hide(element) {
  element.classList.add('remove');
}

function saveIdea() {
  event.preventDefault();

  var newTitle = titleValue.value;
  var newBody = bodyValue.value;

  if (newTitle && newBody) {
    var newIdea = new Idea(newTitle, newBody);
    list.push(newIdea);
    displayAllIdeas(list);
    emptyInput();
  }
}

function emptyInput() {
  titleValue.value = '';
  bodyValue.value = '';
  searchBar.value = '';
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

  hide(showAllIdeasButton);
  show(showStarredButton);
}

function showIdeasAfterShowingStarred() {
  displayAllIdeas(list)
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
  // if show all button is present
  
  for (var i = 0; i < list.length; i++) {
    if (list[i].imgId.toString() === event.target.id) {
      list[i].updateStar();
      displayAllIdeas(list);
     }
   }
}

function showFavorites() {
  var starredArray = []
  for (var i = 0; i < list.length; i++) {
    if (list[i].star) {
      starredArray.push(list[i])
    }
    displayAllIdeas(starredArray);
    show(showAllIdeasButton);
    hide(showStarredButton);
  }
}

function grabSearchValue() {
  var searchingFor = searchBar.value
  searchIdeasByInput(searchingFor)
}

function searchIdeasByInput(searchingFor) {
  var searchArray = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i].title.includes(searchingFor) || list[i].body.includes(searchingFor)) {
      searchArray.push(list[i]);
    }
  }
  displayAllIdeas(searchArray);
}

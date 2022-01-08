var list = [];

var titleValue = document.getElementById('title-value');
var bodyValue = document.getElementById('body-value');
var saveButton = document.getElementById('save-button');
var ideaCardGrid = document.querySelector('.grid-container');
var showStarred = document.getElementById('showStarred');
var showAllIdeas = document.getElementById('showAllIdeas');
var searchBar = document.getElementById('searchBar');
// var searchButton = document.getElementById('searchButton');
var searchContainer = document.getElementById('searchContainer')
// var deleteButton = document.querySelector('.delete');
// var ideaCard = document.querySelector('.idea-card');

saveButton.addEventListener('click', saveIdea);
saveButton.addEventListener('mouseover', mouseHoverEffect);
saveButton.addEventListener('mouseout', mouseLeaving);
ideaCardGrid.addEventListener('click', deleteSelectedCard);
ideaCardGrid.addEventListener('click', favoriteACard);
showStarred.addEventListener('click', showFavorites);
showAllIdeas.addEventListener('click', displayAllIdeas);
searchBar.addEventListener('input', random);

// showStarred.addEventListener('click', showAllIdeas)


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
///need to refactor
//fix hover when only title || body is typed in
function showFavorites() {
  ideaCardGrid.innerHTML = ''
  for (var i = 0; i < list.length; i++) {
    if(list[i].star){
    ideaCardGrid.innerHTML += `
    <section class="idea-card">
    <header class="idea-card-top">
    <img type="image" src="./assets/star-active.svg" id=${list[i].imgId} alt="star" class="star active">
    <img type="image" src="./assets/delete.svg" alt="delete" id=${list[i].id} class="delete">
    </header>
    <h3 class="idea-card-title">${list[i].title}</h3>
    <p class="idea-card-body">${list[i].body}</p>
    <footer class="idea-card-bottom">
    <img type="image" src="./assets/comment.svg" alt="comment">Comment</footer>
    </section>`
    }
  }
  // changeButton();
  show(showAllIdeas)
    hide(showStarred)
}

// function changeButton() {
//   showStarred.innerText = "Show All Ideas"
// }

// function showAllIdeas() {
//   if (showStarred.innerText === "Show All Ideas") {
//     displayAllIdeas();
//   }
// }

function show(element) {
  element.classList.remove('remove')
}

function hide(element) {
  element.classList.add('remove')
}

function searchIdea(searchingFor) {
  event.preventDefault()
  var searchArray = [];
  ideaCardGrid.innerHTML = ''
  for (var i = 0; i < list.length; i++) {
    if (list[i].title.includes(searchingFor) || list[i].body.includes(searchingFor)) {
      // list[i].searched = true;
      searchArray.push(list[i])
    }
      for (var i = 0; i < searchArray.length; i++) {
          ideaCardGrid.innerHTML += `
          <section class="idea-card">
          <header class="idea-card-top">
          <img type="image" src="./assets/star.svg" id=${searchArray[i].imgId} alt="star" class="star">
          <img type="image" src="./assets/delete.svg" alt="delete" id=${searchArray[i].id} class="delete">
          </header>
          <h3 class="idea-card-title">${searchArray[i].title}</h3>
          <p class="idea-card-body">${searchArray[i].body}</p>
          <footer class="idea-card-bottom">
          <img type="image" src="./assets/comment.svg" alt="comment">Comment</footer>
          </section>`
      // showSearched()
    }
  }
}


function random() {
  event.preventDefault()
  var searchingFor = searchBar.value
  searchIdea(searchingFor)
}

// function showSearched() {
//   event.preventDefault()
//   ideaCardGrid.innerHTML = ''
//   showStarred.innerText = 'Hello'
//   for (var i = 0; i < list.length; i++) {
//     if(list[i].searched){
//     ideaCardGrid.innerHTML += `
//     <section class="idea-card">
//     <header class="idea-card-top">
//     <img type="image" src="./assets/star.svg" id=${list[i].imgId} alt="star" class="star">
//     <img type="image" src="./assets/delete.svg" alt="delete" id=${list[i].id} class="delete">
//     </header>
//     <h3 class="idea-card-title">${list[i].title}</h3>
//     <p class="idea-card-body">${list[i].body}</p>
//     <footer class="idea-card-bottom">
//     <img type="image" src="./assets/comment.svg" alt="comment">Comment</footer>
//     </section>`
//     }
//   }
// }

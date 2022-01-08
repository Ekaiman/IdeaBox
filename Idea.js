
class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.imgId = Date.now() +1;
    this.title = title;
    this.body = body;
    this.star = false;
    this.searched = false;
  }

  saveToStorage() {

  }

  deleteFromStorage() {

  }

  updateIdea() {

  }
}

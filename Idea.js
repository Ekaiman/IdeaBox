
class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.imgId = Date.now() +1;
    this.title = title;
    this.body = body;
    this.star = false;
  }

  updateStar() {
    if (!this.star) {
      this.star = true;
    } else {
      this.star = false;
    }
  }

  saveToStorage() {

  }

  deleteFromStorage() {

  }

  updateIdea() {

  }
}

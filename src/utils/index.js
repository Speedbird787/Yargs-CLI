const movieArr = [];

class Movie {
    constructor (title,actor = "not defined"){
        this.title = title;
        this.actor = actor;
    }
    add (){
        movieArr.push(this);
    }
};


const planesArr = [];

class Plane {
  constructor(model, size, speed, manufacturer) {
    this.model = model;
    this.size = size;
    this.speed = speed;
    this.manufacturer = manufacturer
  }

  add() {
    planesArr.push(this);
  }
}

module.exports = { Movie, movieArr, Plane, planesArr};

// Fireworks OOP

class Spark {
  constructor(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = 50;
    this.g = 50;
    this.b = 50;
    this.alpha = 255;
    this.size = 5;
  }

  display() {
    noStroke;
    fill(this.r, this.g, this.b, this.alpha);
    circle(this.x, this.y, this.size);
    this.alpha--;
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
  }
  isDead() {
    return this.alpha <= 0;
  }
}

let sparkArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnSpark();
}

function draw() {
  background("black");
  for (let i = sparkArray.length - 1; i >= 0; i--) {
    sparkArray[i].update();
    sparkArray[i].display();

    // remove if needed

    if (sparkArray[i].isDead()) {
      sparkArray.splice(i, 1);
    }
  }
}

function spawnSpark() {
  let theSpark = new Spark(mouseX, mouseY, random(-5, 5), random(-5, 5));
  sparkArray.push(theSpark);
}

function mousePressed() {
  for (let i = 0;i < 100; i++) {
    spawnSpark();
  }
}
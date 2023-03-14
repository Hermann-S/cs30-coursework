// Arrays and Object Notaion Assignment
// Hermann. S
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let shapes = [];
let x1;
let y1;
let dx;
let dy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = random(height);
  y1 = random(width);
}

function draw() {
  background(0);
  moveShapes();
  displayShapes();
  // circle(x1, y1, 50);
  // fill(255);
}

function keyPressed() {
  if (keyCode === 65){
    fill(255, 0, 0);
  }
  else if (keyCode === 68) {
    fill(0,255,0);
  }
  else if (keyCode === 87) {
    fill(255);
  }
}




function mousePressed() {
  if (dist(mouseX, mouseY, x1, y1) < 25){
    x1 = random(width);
    y1 = random(height);
  }
}

// function mousePressed() {
//   spawnBall(mouseX, mouseY);
// }

function moveShapes() {
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].x += shapes[i].dx;
    shapes[i].y += shapes[i].dy;
  }
}

function displayShapes() {
  for ( let i = 0; i < shapes.length; i++) {
    fill(shapes[i].theColor);
    circle(shapes[i].x, shapes[i].y, shapes[i].diameter);
  }
}

function spawnBall(tempX,tempY) {
  let newBall = {
    x: tempX,
    y: tempY,
    dx: random(-5, 5),
    dy: random(-5, 5),
    diameter: random(25, 100),
    theColor: color(255)
  };
  shapes.push(newBall);
}
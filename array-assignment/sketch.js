// Arrays and Object Notaion Assignment
// Hermann. S
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"





// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   textSize(18);
   
//   text("Move the mouse to see the rectangle"
//         + " align to it.", 20, 30);
// }
   
// function draw() {
//   clear();
//   text("Move the mouse to see the rectangle"
//         + " align with the mouse.", 20, 30);
   
//   // Move the rectangle to the
//   // middle of the screen
//   translate(width / 2, height / 1.25);
   
//   // Use the atan2() function to find
//   // the value according to the mouse
//   // coordinates
//   let adjustedValue = atan2(mouseY - height / 1.25, mouseX - width / 2);
//   rotate(adjustedValue);
   
//   // Draw a rectangle
//   rect(0, 0, 50, 25);
   
// }


let shapes = [];
let x = width / 3;
let y1;
let x1;
let dx;
let dy;
// angleMode[DEGREES];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // x1 = random(height);
  // y1 = random(width);
}

function draw() {
  background(0);  
  translate(width / 2, height / 1.25);

  // Use the atan2() function to find
  // the value according to the mouse
  // coordinates
  let adjustedValue = atan2(mouseY - height / 1.25, mouseX - width / 2);
  rotate(adjustedValue);
   
  //  Draw a rectangle
  rect(0, 0, 50, 25);
  // translate(width / 2, height / 1.25);
  // let a = atan2( mouseY - height / 1.25, mouseX - width / 2);
  // rotate(a);
  // rect(0, 0, 60, 200);
  // fill(255);
  moveShapes();
  displayShapes();
  // circle(x1, y1, 50);
  fill(255);
}


function keyPressed() {
  if (keyCode === 68){
    x += 5;
  }
}

function mousePressed() {
  spawnBall(0, 0);
}

// function spawnBall() {
//   let x2 = 0;
//   let y2 = 0;
//   let a = atan2( mouseY - height / 2, mouseX - width / 2);
//   rotate(a);
//   rectMode(CENTER);
//   x2 += a;
//   y2 += a;
//   circle(0, 0, 10);
//   fill(255);
// }

// function keyPressed() {
//   if (keyCode === 65){
//     fill(255, 0, 0);
//   }
//   else if (keyCode === 68) {
//     fill(0,255,0);
//   }
//   else if (keyCode === 87) {
//     fill(255);
//   }
// }




// function mousePressed() {
//   if (dist(mouseX, mouseY, x1, y1) < 25){
//     x1 = random(width);
//     y1 = random(height);
//   }
// }

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
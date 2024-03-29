// Array Assignment
// Hermann Stirrett
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let grid = [
  [3, 1, 3, 1, 3, 1, 3, 1],
  [1, 3, 1, 3, 1, 3, 1, 3],
  [3, 1, 3, 1, 3, 1, 3, 1],
  [0, 3, 0, 3, 0, 3, 0, 3],
  [3, 0, 3, 0, 3, 0, 3, 0],
  [2, 3, 2, 3, 2, 3, 2, 3],
  [3, 2, 3, 2, 3, 2, 3, 2],
  [2, 3, 2, 3, 2, 3, 2, 3]];

const ROWS = 8;
const COLS = 8;
// let grid;
let cellSize;
let isBlack = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // fill the largest square area possible
  if (width < height) {
    cellSize = width / COLS;
  }
  else {
    cellSize = height / ROWS;
  }
}

function draw() {
  background(50);
  displayGrid(grid);
  piece();
  // checkersBoard();
}

function displayGrid(grid) {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] === 3) {
        fill("red");
      }
      if (isBlack) {
        fill("black");
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
      isBlack = !isBlack;
    }
    isBlack = !isBlack;
  }
}


function piece() {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] === 1) {
        fill(200);
        circle(x * cellSize + cellSize / 2, y * cellSize + cellSize / 2, 50);
      }
      else if (grid[y][x] === 2) {
        fill(200, 0, 0);
        circle(x * cellSize + cellSize / 2, y * cellSize + cellSize / 2, 50);
      }
    }
  }
}

// either do 7 * cellsize or look at how it was done on game of life
function mousePressed() {
  let mouseClicked;
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  // console.log(dist(mouseX, mouseY, grid[7][0], grid[7][0]));
  // if (dist(mouseX, mouseY, grid[x][y], grid[x][y]) < 25) {
  //   circle(width / 2, height / 2, 75);
  //   console.log("HERE");
  if (x >= 0 && x < COLS && y >= 0 && y < ROWS) {
    if (grid[y][x] === 2) {
      if (mouseClicked()){//grid[x][y] <= 1, grid[x][y])) {
        grid[y][x] = 2;
      }
    }
    else if (grid[y][x] === 1) {
      if (mouseClicked()) {//grid[x][y] === 2 ||mouseClicked(grid[x][y] === 0, grid[x][y]))) {
        grid[y][x] = 1;
      }
    }
  }
  console.log;
}


function mouseClicked() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  if (grid[y][x] <= 1) {
    grid[y][x] = 2;
  }
  else if (grid[y][x] === 2 || grid[y][x] === 0) {
    grid[y][x] = 1;
  }
}
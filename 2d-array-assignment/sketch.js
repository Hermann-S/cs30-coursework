// Array Assignment
// Hermann Stirrett
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let grid = [
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [2, 0, 2, 0, 2, 0, 2, 0],
  [0, 2, 0, 2, 0, 2, 0, 2],
  [2, 0, 2, 0, 2, 0, 2, 0]];

const ROWS = 8;
const COLS = 8;
// let grid;
let cellSize;
let isBlack = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // grid = createEmpty2dArray(ROWS, COLS);

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
      if (grid[y][x] === 0) {
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

// function createEmpty2dArray(ROWS, COLS) {
//   let newGrid = [];
//   for (let y = 0; y < ROWS; y++) {
//     newGrid.push([]);
//     for (let x = 0; x < COLS; x++) {
//       newGrid[y].push(0);
//     }
//   }
//   return newGrid;
// }

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
  console.log(dist(mouseX, mouseY, grid[7][0], grid[7][0]));
  if (dist(mouseX, mouseY, grid[7][0], grid[7][0]) < 25) {
    circle(width / 2, height / 2, 75);
    console.log("HERE")
  }
}
// function checkersBoard() {
//   let cellSize;
//   if (width >= height) {
//     cellSize = height/8;
//   }
//   else {
//     cellSize = width/8;
//   }
  
//   for (let x=0; x<8; x++) {
//     for (let y=0; y<8; y++) {
//       if (isBlack) {
//         fill("black");
//       }
//       else {
//         fill("red");
//       }
//       rect(x*cellSize, y*cellSize, cellSize, cellSize);
//       isBlack = !isBlack;
//     }
//     isBlack = !isBlack;
//   }
// }
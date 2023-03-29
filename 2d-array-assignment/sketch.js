// Array Assignment
// Hermann Stirrett
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const ROWS = 8;
const COLS = 8;
let grid;
let cellSize;
let isBlack = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createEmpty2dArray(ROWS, COLS);

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
        circle(x, y, 50);
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

function createEmpty2dArray(ROWS, COLS) {
  let newGrid = [];
  for (let y = 0; y < ROWS; y++) {
    newGrid.push([]);
    for (let x = 0; x < COLS; x++) {
      newGrid[y].push(0);
    }
  }
  return newGrid;
}

function piece() {
  if (ROWS <= 2) {
    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLS; x++) {
        if (grid[y][x] === 0) {
          circle(x, height / 2, 10, 255);
        }
      }
    }
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